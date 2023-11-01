import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCustomersCommentsComponent } from './daily-customers-comments.component';

describe('DailyCustomersCommentsComponent', () => {
  let component: DailyCustomersCommentsComponent;
  let fixture: ComponentFixture<DailyCustomersCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCustomersCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCustomersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
