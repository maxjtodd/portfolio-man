import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchSuggestionComponent } from './stock-search-suggestion.component';

describe('StockSearchSuggestionComponent', () => {
  let component: StockSearchSuggestionComponent;
  let fixture: ComponentFixture<StockSearchSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSearchSuggestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSearchSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
