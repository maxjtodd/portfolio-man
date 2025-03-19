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

import learn.portfolio_man.models.User;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class UserJdbcClientRepositoryTest {

    @Autowired
    UserRepository repository;

    @Autowired
    JdbcClient jdbcClient;

    @BeforeEach
    void setup() {
        jdbcClient.sql("call set_known_good_state();").update();
    }

    @Nested
    class GetByEmail {

        @Test
        void shouldFindEmail() {
            User expected = TestHelper.generate_user(1);

            User actual = repository.getUserByEmail(expected.getEmail());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindEmail() {
            User actual = repository.getUserByEmail("non existant email");

            assertNull(actual);
        }

    }

    @Nested
    class GetById {
        
        @Test
        void shouldFindId() {
            User expected = TestHelper.generate_user(1);

            User actual = repository.getUserById(expected.getUserId());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindId() {
            User actual = repository.getUserById(1000);

            assertNull(actual);
        }
    }


    @Test
    void shouldAdd() {
        User toAdd = TestHelper.generate_user(TestHelper.NEXT_USER_ID);
        toAdd.setUserId(0);
        User expected = TestHelper.generate_user(TestHelper.NEXT_USER_ID);

        User actual = repository.add(toAdd);

        assertEquals(expected, actual);
    }


}

