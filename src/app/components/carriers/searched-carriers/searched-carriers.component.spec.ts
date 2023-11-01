import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCarriersComponent } from './searched-carriers.component';

describe('SearchedCarriersComponent', () => {
  let component: SearchedCarriersComponent;
  let fixture: ComponentFixture<SearchedCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedCarriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
