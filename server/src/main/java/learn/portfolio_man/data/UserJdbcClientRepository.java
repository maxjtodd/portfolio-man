package learn.portfolio_man.data;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import learn.portfolio_man.models.User;

@Repository
public class UserJdbcClientRepository implements UserRepository {

    private JdbcClient jdbcClient;

    public UserJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public User getUserByEmail(String email) {
        // TODO: login
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
        final String sql = """
        INSERT INTO user (email, first_name, last_name, `password`) VALUES
            (:email, :firstName, :lastName, :password);
        """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowsAffected = jdbcClient.sql(sql)
            .param("email", toAdd.getEmail())
            .param("firstName", toAdd.getFirstName())
            .param("lastName", toAdd.getLastName())
            .param("password", toAdd.getPassword())
            .update(keyHolder);

        if (rowsAffected != 1) {
            return null;
        }

        toAdd.setUserId(keyHolder.getKey().intValue());
        return toAdd;
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
