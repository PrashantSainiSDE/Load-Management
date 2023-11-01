import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCheckCallComponent } from './log-check-call.component';

describe('LogCheckCallComponent', () => {
  let component: LogCheckCallComponent;
  let fixture: ComponentFixture<LogCheckCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCheckCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogCheckCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
