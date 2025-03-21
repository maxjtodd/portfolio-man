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
    class GetById {

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
    class GetByTicker {

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

    @Nested
    class Add {
        
        @Test
        void shouldNotAddNull() {
            Stock toAdd = null;
            Result<Stock> expected = new Result<>(ResultStatus.BAD_REQUEST, "Stock is required");

            Result<Stock> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotAddEmptyTicker() {
            Stock toAdd1 = TestHelper.generateStock(1);
            toAdd1.setStockId(0);
            toAdd1.setTickerSymbol(null);
            Stock toAdd2 = TestHelper.generateStock(1);
            toAdd2.setStockId(0);
            toAdd2.setTickerSymbol(null);

            Result<Stock> expected = new Result<>(ResultStatus.BAD_REQUEST, "Ticker is required");

            Result<Stock> actual1 = service.add(toAdd1);
            Result<Stock> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldNotAddDuplicate() {
            Stock toAdd = TestHelper.generateStock(1);
            when(stockRepository.getByTicker(toAdd.getTickerSymbol())).thenReturn(toAdd);
            Result<Stock> expected = new Result<>(ResultStatus.BAD_REQUEST, "Stock already exists");

            Result<Stock> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

        @Test
        void shouldNotAddEmptyCompanyName() {
            Stock toAdd1 = TestHelper.generateStock(1);
            toAdd1.setStockId(0);
            toAdd1.setTickerSymbol(null);
            Stock toAdd2 = TestHelper.generateStock(1);
            toAdd2.setStockId(0);
            toAdd2.setTickerSymbol(null);

            Result<Stock> expected = new Result<>(ResultStatus.BAD_REQUEST, "Ticker is required");

            Result<Stock> actual1 = service.add(toAdd1);
            Result<Stock> actual2 = service.add(toAdd2);

            assertEquals(expected, actual1);
            assertEquals(expected, actual2);
        }

        @Test
        void shouldAdd() {
            Stock toAdd = TestHelper.generateStock(1);
            toAdd.setStockId(0);
            Stock expectedStock = TestHelper.generateStock(1);
            when(stockRepository.getByTicker(toAdd.getTickerSymbol())).thenReturn(null);
            when(stockRepository.add(toAdd)).thenReturn(expectedStock);
            Result<Stock> expected = new Result<>();
            expected.setPayload(expectedStock);

            Result<Stock> actual = service.add(toAdd);

            assertEquals(expected, actual);
        }

    }

}

