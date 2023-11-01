import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchReceivableComponent } from './branch-receivable.component';

describe('BranchReceivableComponent', () => {
  let component: BranchReceivableComponent;
  let fixture: ComponentFixture<BranchReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchReceivableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
