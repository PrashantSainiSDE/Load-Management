import { AfterViewInit, Component, ElementRef, Renderer2, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AddScriptService } from 'src/app/services/add-script.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  router = inject(Router);
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  addScriptService = inject(AddScriptService);
  authService = inject(AuthService);
  
  addLoad!: HTMLElement;
  addTruck!: HTMLElement;
  addDriver!: HTMLElement;
  addTrailer!: HTMLElement;
  addFacility!: HTMLElement;
  addCustomer!: HTMLElement;
    
  ngAfterViewInit(): void {
    
    this.addScriptService.loadJsFile();
    // Add Script Tag Dynamically In index.HTML File
    this.router.events.subscribe( (event: any) => {
      if(event instanceof NavigationStart) {
        this.addScriptService.loadJsFile();
      }
    });
    
    // Reference Of HTML Element with ID 
    this.addLoad = this.el.nativeElement.querySelector('#addLoad');
    this.addTruck = this.el.nativeElement.querySelector('#addTruck');
    this.addDriver = this.el.nativeElement.querySelector('#addDriver');
    this.addTrailer = this.el.nativeElement.querySelector('#addTrailer');
    this.addFacility = this.el.nativeElement.querySelector('#addFacility');
    this.addCustomer = this.el.nativeElement.querySelector('#addCustomer');
  }
  
  

  


  // Open Modal
  openModal(modal: object){
    this.renderer.addClass(modal, 'show');
    this.renderer.setStyle(modal, 'display', 'block');
  }


  // Open Modal
  closeModal(modal: object){
    this.renderer.removeClass(modal, 'show');
    this.renderer.setStyle(modal, 'display', 'none');
  }


  logout() {
    this.authService.logout();
  }

}
