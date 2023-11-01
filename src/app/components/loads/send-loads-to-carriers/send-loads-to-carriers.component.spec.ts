import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLoadsToCarriersComponent } from './send-loads-to-carriers.component';

describe('SendLoadsToCarriersComponent', () => {
  let component: SendLoadsToCarriersComponent;
  let fixture: ComponentFixture<SendLoadsToCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendLoadsToCarriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendLoadsToCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
