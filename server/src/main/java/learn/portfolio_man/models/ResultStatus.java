package learn.portfolio_man.models;

import org.springframework.http.HttpStatus;

public enum ResultStatus {

    BAD_REQUEST(HttpStatus.BAD_REQUEST),
    OK(HttpStatus.OK),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),
    NOT_FOUND(HttpStatus.NOT_FOUND);

    private HttpStatus httpStatus;

    private ResultStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
    
}
