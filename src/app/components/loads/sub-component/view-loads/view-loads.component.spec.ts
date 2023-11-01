import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoadsComponent } from './view-loads.component';

describe('ViewLoadsComponent', () => {
  let component: ViewLoadsComponent;
  let fixture: ComponentFixture<ViewLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
