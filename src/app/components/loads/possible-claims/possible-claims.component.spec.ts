import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleClaimsComponent } from './possible-claims.component';

describe('PossibleClaimsComponent', () => {
  let component: PossibleClaimsComponent;
  let fixture: ComponentFixture<PossibleClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PossibleClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
