import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsTableRowComponent } from './holdings-table-row.component';

describe('HoldingsTableRowComponent', () => {
  let component: HoldingsTableRowComponent;
  let fixture: ComponentFixture<HoldingsTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldingsTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldingsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
