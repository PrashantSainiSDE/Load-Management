import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarrierPaybleComponent } from './list-carrier-payble.component';

describe('ListCarrierPaybleComponent', () => {
  let component: ListCarrierPaybleComponent;
  let fixture: ComponentFixture<ListCarrierPaybleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarrierPaybleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarrierPaybleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
