import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadsComponent } from './list-loads.component';

describe('ListLoadsComponent', () => {
  let component: ListLoadsComponent;
  let fixture: ComponentFixture<ListLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
