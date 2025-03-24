package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;

import learn.portfolio_man.data.PortfolioRepository;
import learn.portfolio_man.data.TestHelper;
import learn.portfolio_man.data.UserRepository;
import learn.portfolio_man.models.Portfolio;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class PortfolioServiceTest {

    @Autowired
    PortfolioService service;

    @MockBean
    PortfolioRepository portfolioRepository;

    @MockBean
    UserRepository userRepository;


    @Nested
    class GetPortfolioById {

        @Test
        void shouldFindPortfolioById() {
            Portfolio expectedPortfolio = TestHelper.generatePortfolio(1);
            Result<Portfolio> expected = new Result<>();
            expected.setPayload(expectedPortfolio);
            when(portfolioRepository.getPortfolioById(expectedPortfolio.getPortfolioId())).thenReturn(expectedPortfolio);

            Result<Portfolio> actual = service.getPortfolioById(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindPortfolioById() {
            Result<Portfolio> expected = new Result<>(ResultStatus.NOT_FOUND, "Portfolio not found");
            when(portfolioRepository.getPortfolioById(1)).thenReturn(null);

            Result<Portfolio> actual = service.getPortfolioById(1);

            assertEquals(expected, actual);
        }

    }


    @Nested
    class GetUsersPortfolios {

        @Test
        void shouldFindNone() {
            when(userRepository.getUserById(1)).thenReturn(null);
            Result<List<Portfolio>> expected = new Result<>(ResultStatus.NOT_FOUND, "User not found");

            Result<List<Portfolio>> actual = service.getUsersPortfolios(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldFindOne() {
            when(userRepository.getUserById(1)).thenReturn(TestHelper.generateUser(1));
            when(portfolioRepository.getUsersPortfolios(1)).thenReturn(List.of(TestHelper.generatePortfolio(1)));
            Result<List<Portfolio>> expected = new Result<>();
            expected.setPayload(List.of(TestHelper.generatePortfolio(1)));

            Result<List<Portfolio>> actual = service.getUsersPortfolios(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldFindMultiple() {
            when(userRepository.getUserById(2)).thenReturn(TestHelper.generateUser(2));
            when(portfolioRepository.getUsersPortfolios(2)).thenReturn(List.of(TestHelper.generatePortfolio(2), TestHelper.generatePortfolio(3)));
            Result<List<Portfolio>> expected = new Result<>();
            expected.setPayload(List.of(TestHelper.generatePortfolio(2), TestHelper.generatePortfolio(3)));

            Result<List<Portfolio>> actual = service.getUsersPortfolios(2);

            assertEquals(expected, actual);
        }

    }



    @Nested
    class Add {

        @Test
        void shouldNotAddNull() {
            Result<Portfolio> expected = new Result<>(ResultStatus.BAD_REQUEST, "Portfolio is required");

            Result<Portfolio> actual = service.add(null);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotAddForNonExistantUser() {
            Portfolio toAdd = TestHelper.generatePortfolio(1);
            when(userRepository.getUserById(toAdd.getUserId())).thenReturn(null);
            Result<Portfolio> expected = new Result<>(ResultStatus.BAD_REQUEST, "User does not exist");

            Result<Portfolio> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotAddEmptyName() {
            Portfolio toAdd1 = TestHelper.generatePortfolio(1);
            Portfolio toAdd2 = TestHelper.generatePortfolio(1);
            toAdd1.setName(null);
            toAdd2.setName("");
            when(userRepository.getUserById(toAdd1.getUserId())).thenReturn(TestHelper.generateUser(1));
            Result<Portfolio> expected = new Result<>(ResultStatus.BAD_REQUEST, "Name is required");

            Result<Portfolio> actual1 = service.add(toAdd1);
            Result<Portfolio> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldNotAddNon10kBalance() {
            Portfolio toAdd1 = TestHelper.generatePortfolio(1);
            Portfolio toAdd2 = TestHelper.generatePortfolio(1);
            toAdd1.setBalance(new BigDecimal("100.00"));
            toAdd2.setBalance(new BigDecimal("1000000.00"));
            when(userRepository.getUserById(toAdd1.getUserId())).thenReturn(TestHelper.generateUser(1));
            Result<Portfolio> expected = new Result<>(ResultStatus.BAD_REQUEST, "10,000 is the starting balance for new portfolios");

            Result<Portfolio> actual1 = service.add(toAdd1);
            Result<Portfolio> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldAdd() {
            Portfolio toAdd = TestHelper.generatePortfolio(1);
            toAdd.setPortfolioId(0);
            Portfolio expectedAdded = TestHelper.generatePortfolio(1);
            expectedAdded.setPortfolioId(TestHelper.NEXT_PORTFOLIO_ID);
            when(userRepository.getUserById(toAdd.getUserId())).thenReturn(TestHelper.generateUser(1));
            when(portfolioRepository.add(toAdd)).thenReturn(expectedAdded);
            Result<Portfolio> expected = new Result<>();
            expected.setPayload(expectedAdded);

            Result<Portfolio> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

    }

}

