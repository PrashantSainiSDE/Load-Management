import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBoardListComponent } from './load-board-list.component';

describe('LoadBoardListComponent', () => {
  let component: LoadBoardListComponent;
  let fixture: ComponentFixture<LoadBoardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadBoardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
