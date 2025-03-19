package learn.portfolio_man.data;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import learn.portfolio_man.models.User;

public class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rsl) throws SQLException {
        User user = new User();
        user.setUserId(rs.getInt("user_id"));
        user.setEmail(rs.getString("email"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setPassword(rs.getString("password"));
        return user;
    }
    
}
