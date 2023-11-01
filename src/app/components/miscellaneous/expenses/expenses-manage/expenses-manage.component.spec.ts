import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesManageComponent } from './expenses-manage.component';

describe('ExpensesManageComponent', () => {
  let component: ExpensesManageComponent;
  let fixture: ComponentFixture<ExpensesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
