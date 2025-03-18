package learn.portfolio_man.domain;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.UserRepository;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.User;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Result<User> add(User toAdd) {
        Result<User> result = validate(toAdd);

        return result;
    }



    private Result<User> validate(User toValidate) {
        Result<User> result = new Result<>();

        if (toValidate == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "User is required");
            return result;
        }

        // TODO: when findByEmail implemented, unique email

        return result;
    }
    
}
