package learn.portfolio_man.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;

import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.data.TestHelper;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.Stock;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class StockServiceTest {

    @Autowired
    StockService service;

    @MockBean
    StockRepository stockRepository;

    @Nested
    class TestGetById {

        @Test
        void shouldGetByID() {
            Stock expectedStock = TestHelper.generateStock(1);
            Result<Stock> expected = new Result<>();
            expected.setPayload(expectedStock);
            when(stockRepository.getById(1)).thenReturn(expectedStock);

            Result<Stock> actual = service.getById(1);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotGetByID() {
            Result<Stock> expected = new Result<>(ResultStatus.NOT_FOUND, "Stock not found");
            when(stockRepository.getById(1)).thenReturn(null);

            Result<Stock> actual = service.getById(1);

            assertEquals(expected, actual);
        }

    }


    @Nested
    class TestGetByTicker {

        @Test
        void shouldGetByTicker() {
            Stock expectedStock = TestHelper.generateStock(1);
            Result<Stock> expected = new Result<>();
            expected.setPayload(expectedStock);
            when(stockRepository.getByTicker(expectedStock.getTickerSymbol())).thenReturn(expectedStock);

            Result<Stock> actual = service.getByTicker(expectedStock.getTickerSymbol());

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotGetByTicker() {
            Result<Stock> expected = new Result<>(ResultStatus.NOT_FOUND, "Stock not found");
            when(stockRepository.getByTicker(TestHelper.generateStock(1).getTickerSymbol())).thenReturn(null);

            Result<Stock> actual = service.getByTicker(TestHelper.generateStock(1).getTickerSymbol());

            assertEquals(expected, actual);
        }

    }
}

