package learn.portfolio_man.domain;

import org.springframework.stereotype.Service;

import at.favre.lib.crypto.bcrypt.BCrypt;
import learn.portfolio_man.data.UserRepository;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.User;

@Service
public class UserService {

    private final int BCRYPT_COST = 12;

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public Result<User> findByEmail(String email) {
        User fetchedUser = userRepository.getUserByEmail(email);
        return singleUserToResult(fetchedUser);
    }

    public Result<User> findById(int userId) {
        User fetchedUser = userRepository.getUserById(userId);
        return singleUserToResult(fetchedUser);
    }


    public Result<User> add(User toAdd) {
        Result<User> result = validate(toAdd);

        if (result.isSuccess()) {

            char[] inputtedPassword = toAdd.getPassword().toCharArray();
            toAdd.setPassword(BCrypt.withDefaults().hashToString(BCRYPT_COST, inputtedPassword));

            User added = userRepository.add(toAdd);
            result.setPayload(added);
        }

        return result;
    }


    private Result<User> singleUserToResult(User user) {

        Result<User> result = new Result<>();

        if (user == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "User not found");
        } else {
            result.setPayload(user);
        }

        return result;

    }

    private Result<User> validate(User toValidate) {
        Result<User> result = new Result<>();

        if (toValidate == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "User is required");
            return result;
        }

        if (toValidate.getEmail() == null || toValidate.getEmail().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Email is required");
        }
        // TODO: when findByEmail implemented, unique email
        
        if (toValidate.getFirstName() == null || toValidate.getFirstName().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "First name is required");
        }

        if (toValidate.getLastName() == null || toValidate.getLastName().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Last name is required");
        }

        return result;
    }
    
}
