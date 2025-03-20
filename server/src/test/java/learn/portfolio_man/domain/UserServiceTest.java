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
    class FindByEmail {

        @Test
        void shouldFindEmail() {
            User user = TestHelper.generateUser(1);
            when(userRepository.getUserByEmail(user.getEmail())).thenReturn(user);
            Result<User> expected = new Result<>();
            expected.setPayload(user);

            Result<User> actual = service.findByEmail(user.getEmail());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindEmail() {
            User user = TestHelper.generateUser(1);
            Result<User> expected = new Result<>(ResultStatus.NOT_FOUND, "User not found");

            Result<User> actual = service.findByEmail(user.getEmail());

            assertEquals(expected, actual);
        }
    }

    @Nested
    class FindById {

        @Test
        void shouldFindId() {
            User user = TestHelper.generateUser(1);
            when(userRepository.getUserById(user.getUserId())).thenReturn(user);
            Result<User> expected = new Result<>();
            expected.setPayload(user);

            Result<User> actual = service.findById(user.getUserId());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotFindId() {
            User user = TestHelper.generateUser(1);
            Result<User> expected = new Result<>(ResultStatus.NOT_FOUND, "User not found");

            Result<User> actual = service.findById(user.getUserId());

            assertEquals(expected, actual);
        }
    }

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
            User toAdd1 = TestHelper.generateUser(1);
            toAdd1.setEmail(null);
            User toAdd2 = TestHelper.generateUser(1);
            toAdd2.setEmail("");
            Result<User> expected = new Result<>(ResultStatus.BAD_REQUEST, "Email is required");

            Result<User> actual1 = service.add(toAdd1);
            Result<User> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldNotAddInvalidFirstName() {
            User toAdd1 = TestHelper.generateUser(1);
            toAdd1.setFirstName(null);
            User toAdd2 = TestHelper.generateUser(1);
            toAdd2.setFirstName("");
            Result<User> expected = new Result<>(ResultStatus.BAD_REQUEST, "First name is required");

            Result<User> actual1 = service.add(toAdd1);
            Result<User> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldNotAddInvalidLastName() {
            User toAdd1 = TestHelper.generateUser(1);
            toAdd1.setLastName(null);
            User toAdd2 = TestHelper.generateUser(1);
            toAdd2.setLastName("");
            Result<User> expected = new Result<>(ResultStatus.BAD_REQUEST, "Last name is required");

            Result<User> actual1 = service.add(toAdd1);
            Result<User> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }


        @Test
        void shouldAdd() {
            Result<User> expected = new Result<>();
            expected.setPayload(TestHelper.generateUser(1));
            User toAdd = TestHelper.generateUser(1);
            toAdd.setUserId(0);
            when(userRepository.add(toAdd)).thenReturn(TestHelper.generateUser(1));

            Result<User> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

    }
}

