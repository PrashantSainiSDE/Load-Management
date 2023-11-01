import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRatingsComponent } from './load-ratings.component';

describe('LoadRatingsComponent', () => {
  let component: LoadRatingsComponent;
  let fixture: ComponentFixture<LoadRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
