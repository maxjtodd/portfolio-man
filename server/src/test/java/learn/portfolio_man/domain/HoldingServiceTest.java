package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;

import learn.portfolio_man.data.HoldingRepository;
import learn.portfolio_man.data.PortfolioRepository;
import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.data.TestHelper;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class HoldingServiceTest {

    @Autowired
    HoldingService service;

    @MockBean
    HoldingRepository holdingRepository;

    @MockBean
    PortfolioRepository portfolioRepository;

    @MockBean
    StockRepository stockRepository;

    @Nested
    class Buy {

        @Test
        void shouldNotBuyNull() {
            Holding toBuy = null;
            Result<Holding> expected = new Result<>(ResultStatus.BAD_REQUEST, "Holding required");

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotBuyPortolioNotFound() {
            Holding toBuy = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy);
            when(portfolioRepository.getPortfolioById(toBuy.getPortfolioId())).thenReturn(null);
            Result<Holding> expected = new Result<>(ResultStatus.NOT_FOUND, "Portfolio not found");

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotBuyNullStock() {
            Holding toBuy = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy);
            toBuy.setStock(null);
            Result<Holding> expected = new Result<>(ResultStatus.BAD_REQUEST, "Stock required");

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotBuyNonExistantStock() {
            Holding toBuy = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy);
            when(stockRepository.getById(toBuy.getStock().getStockId())).thenReturn(null);
            Result<Holding> expected = new Result<>(ResultStatus.NOT_FOUND, "Stock not found");

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotBuyBadAmount() {
            Holding toBuy1 = TestHelper.generateHolding(1);
            Holding toBuy2 = TestHelper.generateHolding(1);
            Holding toBuy3 = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy1);
            toBuy1.setAmount(null);
            toBuy2.setAmount(new BigDecimal(0));
            toBuy3.setAmount(new BigDecimal(-1));

            Result<Holding> expected = new Result<>(ResultStatus.BAD_REQUEST, "Amount required");

            Result<Holding> actual1 = service.buy(toBuy1); 
            Result<Holding> actual2 = service.buy(toBuy1); 
            Result<Holding> actual3 = service.buy(toBuy1); 

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
            assertEquals(expected, actual3);
        }



        void shouldBuyWithAddToDb() {
            Holding toBuy = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy);
            when(holdingRepository.getByTicker(toBuy.getStock().getTickerSymbol(), toBuy.getPortfolioId()))
                .thenReturn(null);
            Result<Holding> expected = new Result<>();
            expected.setPayload(toBuy);

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }


        void shouldBuyWithEditAmountToDb() {
            Holding existing = TestHelper.generateHolding(1);
            Holding expectedHolding = TestHelper.generateHolding(1);
            expectedHolding.setAmount(new BigDecimal(2));
            Holding toBuy = TestHelper.generateHolding(1);
            setGoodRepositoryStubs(toBuy);
            when(holdingRepository.getByTicker(toBuy.getStock().getTickerSymbol(), toBuy.getPortfolioId()))
                .thenReturn(existing);
            Result<Holding> expected = new Result<>();
            expected.setPayload(expectedHolding);

            Result<Holding> actual = service.buy(toBuy); 

            assertEquals(expected, actual);
        }

    }





    private void setGoodRepositoryStubs(Holding holding) {
        // find good portfolio
        when(portfolioRepository.getPortfolioById(holding.getPortfolioId()))
            .thenReturn(TestHelper.generatePortfolio(holding.getPortfolioId()));
        // find good stock
        when(stockRepository.getById(holding.getStock().getStockId()))
            .thenReturn(TestHelper.generateStock(holding.getStock().getStockId()));
    }

}

