import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoringCompaniesListComponent } from './factoring-companies-list.component';

describe('FactoringCompaniesListComponent', () => {
  let component: FactoringCompaniesListComponent;
  let fixture: ComponentFixture<FactoringCompaniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoringCompaniesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoringCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
