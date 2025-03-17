package learn.portfolio_man.data;

import java.util.List;

import learn.portfolio_man.models.User;

public class UserJdbcClientRepository implements UserRepository {

    @Override
    public User getUserByEmail(String email) {
        throw new UnsupportedOperationException("Unimplemented method 'getUserByEmail'");
    }

    @Override
    public User getUserById(int userId) {
        throw new UnsupportedOperationException("Unimplemented method 'getUserById'");
    }

    @Override
    public List<User> getFriends(int userId) {
        throw new UnsupportedOperationException("Unimplemented method 'getFriends'");
    }

    @Override
    public User add(User toAdd) {
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

    @Override
    public User editUser(User toEdit) {
        throw new UnsupportedOperationException("Unimplemented method 'editUser'");
    }

    @Override
    public boolean deleteUser(User toDelete) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }
    
}
