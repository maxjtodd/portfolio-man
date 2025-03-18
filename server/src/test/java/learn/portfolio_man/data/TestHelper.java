package learn.portfolio_man.data;

import learn.portfolio_man.models.User;

public class TestHelper {

    public static int NEXT_USER_ID = 4;

    public static User generate_user(int userId) {
        String email = String.format("test%d@test.com", userId);
        String firstName = String.format("f%d", userId);
        String lastName = String.format("l%d", userId);
        String password = String.format("password%d", userId);
        return new User(userId, email, firstName, lastName, password);
    }

}
