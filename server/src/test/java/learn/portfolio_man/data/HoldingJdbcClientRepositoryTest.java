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
}

