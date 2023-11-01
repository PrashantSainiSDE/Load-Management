import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedLoadsComponent } from './locked-loads.component';

describe('LockedLoadsComponent', () => {
  let component: LockedLoadsComponent;
  let fixture: ComponentFixture<LockedLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedLoadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockedLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
