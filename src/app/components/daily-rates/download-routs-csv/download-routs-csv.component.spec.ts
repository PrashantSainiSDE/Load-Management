import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadRoutsCSVComponent } from './download-routs-csv.component';

describe('DownloadRoutsCSVComponent', () => {
  let component: DownloadRoutsCSVComponent;
  let fixture: ComponentFixture<DownloadRoutsCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadRoutsCSVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadRoutsCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
