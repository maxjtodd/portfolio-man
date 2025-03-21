package learn.portfolio_man.data;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.jdbc.core.simple.JdbcClient;

import learn.portfolio_man.models.Stock;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class StockJdbcClientRepositoryTest {

    @Autowired
    StockRepository repository;

    @Autowired
    JdbcClient jdbcClient;

    @BeforeEach
    void setup() {
        jdbcClient.sql("call set_known_good_state();").update();
    }

    @Nested
    class GetById {

        @Test
        void shouldGetById() {
            Stock expected = TestHelper.generateStock(1);

            Stock actual = repository.getById(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotGetById() {
            Stock actual = repository.getById(TestHelper.NEXT_STOCK_ID);

            assertNull(actual);
        }

    }

    @Nested
    class GetByTicker {

        @Test
        void shouldGetByTicker() {
            Stock expected = TestHelper.generateStock(1);

            Stock actual = repository.getByTicker(expected.getTickerSymbol());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotGetByTicker() {
            Stock actual = repository.getByTicker(TestHelper.generateStock(TestHelper.NEXT_STOCK_ID).getTickerSymbol());

            assertNull(actual);
        }

    }


}

