import { Component, inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-driver-application',
  templateUrl: './driver-application.component.html',
  styleUrls: ['./driver-application.component.scss']
})
export class DriverApplicationComponent {

  fb = inject(FormBuilder);

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
}
