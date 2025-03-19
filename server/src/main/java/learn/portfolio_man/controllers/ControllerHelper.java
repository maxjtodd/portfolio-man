package learn.portfolio_man.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import learn.portfolio_man.models.Result;

public class ControllerHelper {

    public static <T> ResponseEntity<Object> errorResultToResponseEntity(Result<T> result) {
        return new ResponseEntity<Object>(result.getMessages(), result.getStatus().getHttpStatus());
    }

    public static ResponseEntity<Object> errorMessageResponse(HttpStatus status, String... errorMessages) {
        List<String> errors = new ArrayList<>();
        for (String error : errorMessages) {
            errors.add(error);
        }
        return new ResponseEntity<>(errors, status);
    }

}
