package learn.portfolio_man.domain;

import java.math.BigDecimal;
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


    public Result<Portfolio> getPortfolioById(int portfolioId) {
        Result<Portfolio> result = new Result<>();

        Portfolio fetchedPortfolio = portfolioRepository.getPortfolioById(portfolioId);

        if (fetchedPortfolio == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Portfolio not found");
        } else {
            result.setPayload(fetchedPortfolio);
        }

        return result;
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

    public Result<Portfolio> add(Portfolio toAdd) {
        Result<Portfolio> result = validate(toAdd);

        if (toAdd.getBalance() == null) {
            toAdd.setBalance(new BigDecimal("10000.00"));
        }

        if (toAdd.getBalance().compareTo(new BigDecimal("10000.00")) != 0) {
            result.addMessage(ResultStatus.BAD_REQUEST, "10,000 is the starting balance for new portfolios");
        }

        if (result.isSuccess()) {
            Portfolio added = portfolioRepository.add(toAdd);
            result.setPayload(added);
        }

        return result;
    }

    public Result<Portfolio> edit(Portfolio toEdit) {
        if (toEdit.getBalance() == null || toEdit.getBalance().compareTo(new BigDecimal(0)) < 0) {
            return new Result<>(ResultStatus.BAD_REQUEST, "Bad balance");
        }

        Result<Portfolio> result = validate(toEdit);

        if (result.isSuccess()) {
            Portfolio edited = portfolioRepository.edit(toEdit);
            result.setPayload(edited);
        }

        return result;
    }

    private Result<Portfolio> validate(Portfolio toValidate) {

        Result<Portfolio> result = new Result<>();

        if (toValidate == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Portfolio is required");
            return result;
        }

        User fetchedUser = userRepository.getUserById(toValidate.getUserId());
        if (fetchedUser == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "User does not exist");
        }

        if (toValidate.getName() == null || toValidate.getName().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Name is required");
        }



        return result;
    }
    
}
