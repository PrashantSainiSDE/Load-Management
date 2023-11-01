import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierOnBoardComponent } from './carrier-on-board.component';

describe('CarrierOnBoardComponent', () => {
  let component: CarrierOnBoardComponent;
  let fixture: ComponentFixture<CarrierOnBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierOnBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
