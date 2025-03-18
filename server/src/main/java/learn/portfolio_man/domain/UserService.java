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

        if (result.isSuccess()) {
            User added = userRepository.add(toAdd);
            result.setPayload(added);
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
