import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListComponent } from './portfolio-list.component';

describe('PortfolioListComponent', () => {
  let component: PortfolioListComponent;
  let fixture: ComponentFixture<PortfolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
