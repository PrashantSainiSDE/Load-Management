import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCarriersCommentsComponent } from './daily-carriers-comments.component';

describe('DailyCarriersCommentsComponent', () => {
  let component: DailyCarriersCommentsComponent;
  let fixture: ComponentFixture<DailyCarriersCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCarriersCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCarriersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
