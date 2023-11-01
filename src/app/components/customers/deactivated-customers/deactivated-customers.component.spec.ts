import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedCustomersComponent } from './deactivated-customers.component';

describe('DeactivatedCustomersComponent', () => {
  let component: DeactivatedCustomersComponent;
  let fixture: ComponentFixture<DeactivatedCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivatedCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivatedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
