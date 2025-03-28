package learn.portfolio_man.models;

import java.util.ArrayList;
import java.util.List;

public class Result<T> {

    private T payload;
    private List<String> messages = new ArrayList<>();
    private ResultStatus status = ResultStatus.OK;

    public Result() {
    }

    public Result(ResultStatus status, String... messages) {
        this.payload = null;
        this.status = status;
        List<String> m = new ArrayList<>();
        for (String message : messages) {
            m.add(message);
        }
        this.messages = m;
    }

    public boolean isSuccess() {
        return this.messages.size() <= 0;
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void addMessage(String message) {
        this.messages.add(message);
    }

    public void addMessage(ResultStatus status, String message) {
        this.messages.add(message);
        this.status = status;
    }

    public ResultStatus getStatus() {
        return status;
    }

    public void setStatus(ResultStatus status) {
        this.status = status;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((payload == null) ? 0 : payload.hashCode());
        result = prime * result + ((messages == null) ? 0 : messages.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Result other = (Result) obj;
        if (payload == null) {
            if (other.payload != null) {
                return false;
            }
        } else if (!payload.equals(other.payload)) {
            return false;
        }
        if (messages == null) {
            if (other.messages != null) {
                return false;
            }
        } else if (!messages.equals(other.messages)) {
            return false;
        }
        if (status != other.status) {
            return false;
        }
        return true;
    }

}
