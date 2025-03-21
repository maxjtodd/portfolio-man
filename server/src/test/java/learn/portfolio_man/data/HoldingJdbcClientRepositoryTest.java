package learn.portfolio_man.data;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.jdbc.core.simple.JdbcClient;

import learn.portfolio_man.models.Holding;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class HoldingJdbcClientRepositoryTest {

    @Autowired
    HoldingRepository repository;

    @Autowired
    JdbcClient jdbcClient;

    @BeforeEach
    void setup() {
        jdbcClient.sql("call set_known_good_state();").update();
    }

    @Nested
    class TestGetById {

        @Test
        void shouldFindById() {
            Holding expected = TestHelper.generateHolding(1);

            Holding actual = repository.getById(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindById() {
            Holding actual = repository.getById(TestHelper.NEXT_HOLDING_ID);

            assertNull(actual);
        }

    }

    @Nested
    class TestGetByTicker {

        @Test
        void shouldFindByTicker() {
            Holding expected = TestHelper.generateHolding(1);

            Holding actual = repository.getByTicker(expected.getStock().getTickerSymbol(), expected.getPortfolioId());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindByTicker() {
            Holding tmp = TestHelper.generateHolding(1);

            Holding actual = repository.getByTicker(tmp.getStock().getTickerSymbol(), 2);

            assertNull(actual);
        }

    }

    @Nested
    class TestGetByPortfolioId {

        @Test
        void shouldFindOne() {
            List<Holding> expected = List.of(TestHelper.generateHolding(1));

            List<Holding> actual = repository.getAllHoldingsInPortfolio(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldFindMultiple() {
            List<Holding> expected = List.of(TestHelper.generateHolding(2), TestHelper.generateHolding(3));

            List<Holding> actual = repository.getAllHoldingsInPortfolio(2);

            assertEquals(expected, actual);
        }

    }

    @Test
    void shouldAdd() {
        Holding toAdd = TestHelper.generateHolding(TestHelper.NEXT_HOLDING_ID);
        toAdd.setStock(TestHelper.generateStock(TestHelper.NEXT_STOCK_ID - 1));
        toAdd.setHoldingId(0);
        Holding expected = TestHelper.generateHolding(TestHelper.NEXT_HOLDING_ID);
        expected.setStock(TestHelper.generateStock(TestHelper.NEXT_STOCK_ID - 1));

        Holding actual = repository.add(toAdd);

        assertEquals(expected, actual);
    }

}

