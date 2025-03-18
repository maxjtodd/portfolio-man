package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;

import learn.portfolio_man.data.UserRepository;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.User;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class UserServiceTest {

    @Autowired
    UserService service;

    @MockBean
    UserRepository userRepository;

    @Nested
    class Add {

        @Test
        void shouldNotAddNull() {
            Result<User> expected = new Result<>(ResultStatus.BAD_REQUEST, "User is required");

            Result<User> actual = service.add(null);

            assertEquals(expected, actual);
        }

    }
}

