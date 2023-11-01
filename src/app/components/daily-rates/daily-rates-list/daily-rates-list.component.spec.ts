import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRatesListComponent } from './daily-rates-list.component';

describe('DailyRatesListComponent', () => {
  let component: DailyRatesListComponent;
  let fixture: ComponentFixture<DailyRatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRatesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
