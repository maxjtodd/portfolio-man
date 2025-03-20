package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

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
            when(userRepository.getUserById(1)).thenReturn(TestHelper.generate_user(1));
            when(portfolioRepository.getUsersPortfolios(1)).thenReturn(List.of(TestHelper.generatePortfolio(1)));
            Result<List<Portfolio>> expected = new Result<>();
            expected.setPayload(List.of(TestHelper.generatePortfolio(1)));

            Result<List<Portfolio>> actual = service.getUsersPortfolios(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldFindMultiple() {
            when(userRepository.getUserById(2)).thenReturn(TestHelper.generate_user(2));
            when(portfolioRepository.getUsersPortfolios(2)).thenReturn(List.of(TestHelper.generatePortfolio(2), TestHelper.generatePortfolio(3)));
            Result<List<Portfolio>> expected = new Result<>();
            expected.setPayload(List.of(TestHelper.generatePortfolio(2), TestHelper.generatePortfolio(3)));

            Result<List<Portfolio>> actual = service.getUsersPortfolios(2);

            assertEquals(expected, actual);
        }

    }

}

