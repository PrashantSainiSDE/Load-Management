import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReceivableV2Component } from './account-receivable-v2.component';

describe('AccountReceivableV2Component', () => {
  let component: AccountReceivableV2Component;
  let fixture: ComponentFixture<AccountReceivableV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountReceivableV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountReceivableV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
