package learn.portfolio_man.data;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.Portfolio;
import learn.portfolio_man.models.Stock;
import learn.portfolio_man.models.User;

public class TestHelper {

    public static int NEXT_USER_ID = 4;
    public static int NEXT_PORTFOLIO_ID = 7;
    public static int NEXT_STOCK_ID = 4;
    public static int NEXT_HOLDING_ID = 4;


    public static User generateUser(int userId) {
        String email = String.format("test%d@test.com", userId);
        String firstName = String.format("f%d", userId);
        String lastName = String.format("l%d", userId);
        String password = String.format("password%d", userId);
        return new User(userId, email, firstName, lastName, password);
    }

    public static Portfolio generatePortfolio(int portfolioId) {
        int userId = getUserId(portfolioId);
        String name = String.format("Portfolio %d", portfolioId);
        BigDecimal balance = new BigDecimal("10000.00");
        boolean isPrivate = portfolioId == 1 || portfolioId % 2 == 0;
        return new Portfolio(portfolioId, userId, name, balance, isPrivate);
    }

    public static Stock generateStock(int stockId) {
        String tickerSymbol = String.format("ST%d", stockId);
        String companyName = String.format("Company %d", stockId);
        return new Stock(stockId, tickerSymbol, companyName);
    }

    public static Holding generateHolding(int holdingId) {
        int portfolioId = holdingId == 1 ? 1 : 2;
        BigDecimal amount = BigDecimal.valueOf(1.00);
        Stock stock = generateStock(holdingId);
        return new Holding(holdingId, portfolioId, stock, amount);
    }


    private static int getUserId(int portfolioId) {
        Map<Integer, Integer> fib = new HashMap<>();
        fib.put(1, 1);
        int i = 1;
        int highest = 1;

        while (portfolioId > highest) {
            i++;
            highest = i + fib.get(i - 1);
            fib.put(i, highest);
        }
        return i;
    }

}
