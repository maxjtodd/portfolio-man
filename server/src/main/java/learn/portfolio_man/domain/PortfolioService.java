package learn.portfolio_man.domain;

import java.util.List;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.PortfolioRepository;
import learn.portfolio_man.data.UserRepository;
import learn.portfolio_man.models.Portfolio;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.User;

@Service
public class PortfolioService {

    private PortfolioRepository portfolioRepository;
    private UserRepository userRepository;

    public PortfolioService(PortfolioRepository portfolioRepository, UserRepository userRepository) {
        this.portfolioRepository = portfolioRepository;
        this.userRepository = userRepository;
    }



    public Result<List<Portfolio>> getUsersPortfolios(int userId) {

        Result<List<Portfolio>> result = new Result<>();
        User fetchedUser = userRepository.getUserById(userId);

        if (fetchedUser == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "User not found");
        } else {
            List<Portfolio> portfolios = portfolioRepository.getUsersPortfolios(userId);
            result.setPayload(portfolios);
        }

        return result;
    }
    
}
