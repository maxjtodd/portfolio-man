package learn.portfolio_man.data;

import java.util.List;

import learn.portfolio_man.models.User;;

public interface UserRepository {

    public User getUserByEmail(String email);
    public User getUserById(int userId);
    public List<User> getFriends(int userId);
    
    public User add(User toAdd);

    public User editUser(User toEdit);

    public boolean deleteUser(User toDelete);
}
