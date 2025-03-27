package learn.portfolio_man.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import at.favre.lib.crypto.bcrypt.BCrypt;
import io.jsonwebtoken.Jwts;
import learn.portfolio_man.domain.UserService;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private SecretSigningKey secretSigningKey;

    public UserController(UserService userService, SecretSigningKey secretSigningKey) {
        this.userService = userService;
        this.secretSigningKey = secretSigningKey;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getUserById(@PathVariable int userId) {
        Result<User> result = userService.findById(userId);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        } else {
            result.getPayload().setPassword(null);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@RequestBody User user) {

        Result<User> result = userService.add(user);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        Map<String, String> jwt = createJwt(result.getPayload());
        return new ResponseEntity<>(jwt, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<Object> login(@RequestBody User user) {

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // User not found
        Result<User> result = userService.findByEmail(user.getEmail());
        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        // Bad password
        char[] inputtedPassword = user.getPassword().toCharArray();
        char[] actualPassword = result.getPayload().getPassword().toCharArray();
        if (!BCrypt.verifyer().verify(inputtedPassword, actualPassword).verified) {
            return ControllerHelper.errorMessageResponse(HttpStatus.UNAUTHORIZED, "Username and password mismatch");
        }

        // Good login
        return new ResponseEntity<>(createJwt(result.getPayload()), HttpStatus.OK);
    }

    public Map<String, String> createJwt(User user) {
        String jwt = Jwts.builder()
                .claim("userId", user.getUserId())
                .claim("email", user.getEmail())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .signWith(secretSigningKey.getKey())
                .compact();
        Map<String, String> output = new HashMap<>();
        output.put("jwt", jwt);
        return output;
    }

}
