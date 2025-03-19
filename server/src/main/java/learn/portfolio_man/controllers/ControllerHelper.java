package learn.portfolio_man.controllers;

import org.springframework.http.ResponseEntity;

import learn.portfolio_man.models.Result;

public class ControllerHelper {

    public static <T> ResponseEntity<Object> errorResultToResponseEntity(Result<T> result) {
        return new ResponseEntity<Object>(result.getMessages(), result.getStatus().getHttpStatus());
    }
}
