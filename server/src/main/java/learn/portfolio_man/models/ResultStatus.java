package learn.portfolio_man.models;

import org.springframework.http.HttpStatus;

public enum ResultStatus {

    BAD_REQUEST(HttpStatus.BAD_REQUEST),
    OK(HttpStatus.OK);

    private HttpStatus httpStatus;

    private ResultStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
    
}
