package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;

import learn.portfolio_man.data.TestHelper;
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

        @Test
        void shouldNotAddInvalidEmail() {
            User toAdd1 = TestHelper.generate_user(1);
            toAdd1.setEmail(null);
            User toAdd2 = TestHelper.generate_user(1);
            toAdd2.setEmail("");
            Result<User> expected = new Result<>(ResultStatus.BAD_REQUEST, "Email is required");

            Result<User> actual1 = service.add(toAdd1);
            Result<User> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }


        @Test
        void shouldAdd() {
            Result<User> expected = new Result<>();
            expected.setPayload(TestHelper.generate_user(1));
            User toAdd = TestHelper.generate_user(1);
            toAdd.setUserId(0);
            when(userRepository.add(toAdd)).thenReturn(TestHelper.generate_user(1));

            Result<User> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

    }
}

