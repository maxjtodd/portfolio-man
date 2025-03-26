package learn.portfolio_man.data;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.jdbc.core.simple.JdbcClient;

import learn.portfolio_man.models.Portfolio;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class PortfolioJdbcClientRepositoryTest {

    @Autowired
    PortfolioRepository repository;

    @Autowired
    JdbcClient jdbcClient;

    @BeforeEach
    void setup() {
        jdbcClient.sql("call set_known_good_state();").update();
    }

    @Nested
    class GetPortfolioById {
        
        @Test
        void shouldFindPortfolioById() {
            Portfolio expected = TestHelper.generatePortfolio(1);

            Portfolio actual = repository.getPortfolioById(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindPortfolioById() {
            Portfolio actual = repository.getPortfolioById(TestHelper.NEXT_PORTFOLIO_ID);

            assertNull(actual);
        }

    }

    @Nested
    class GetUsersPortfolios {

        @Test
        void shouldGetOneGetUsersPortfolios() {
            List<Portfolio> expected = List.of(TestHelper.generatePortfolio(1));

            List<Portfolio> actual = repository.getUsersPortfolios(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldGetMultipleGetUsersPortfolios() {
            List<Portfolio> expected = List.of(TestHelper.generatePortfolio(2), TestHelper.generatePortfolio(3));

            List<Portfolio> actual = repository.getUsersPortfolios(2);

            assertEquals(expected, actual);
        }

        @Test
        void shouldGetNoneGetUsersPortfolios() {
            List<Portfolio> expected = List.of();

            List<Portfolio> actual = repository.getUsersPortfolios(TestHelper.NEXT_PORTFOLIO_ID);

            assertEquals(expected, actual);
        }

    }

    @Test
    void shouldAdd() {
        Portfolio toAdd = TestHelper.generatePortfolio(1);        
        toAdd.setPortfolioId(0);
        Portfolio expected = TestHelper.generatePortfolio(1);
        expected.setPortfolioId(TestHelper.NEXT_PORTFOLIO_ID);

        Portfolio actual = repository.add(toAdd);

        assertEquals(expected, actual);
    }

    @Test
    void shouldEdit() {
        Portfolio expected = TestHelper.generatePortfolio(1);
        expected.setBalance(new BigDecimal("100.00"));

        Portfolio actual = repository.edit(expected);

        assertEquals(expected, actual);
    }

}

