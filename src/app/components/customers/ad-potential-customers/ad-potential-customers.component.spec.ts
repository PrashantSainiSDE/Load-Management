import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPotentialCustomersComponent } from './ad-potential-customers.component';

describe('AdPotentialCustomersComponent', () => {
  let component: AdPotentialCustomersComponent;
  let fixture: ComponentFixture<AdPotentialCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPotentialCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPotentialCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
