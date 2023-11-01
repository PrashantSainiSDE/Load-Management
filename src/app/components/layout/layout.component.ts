import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <main>
        <div class="main-wrapper">
            <div id="content">
                <app-header></app-header>

                <router-outlet></router-outlet>              
              
                <app-footer></app-footer>
            </div>
        </div>
    </main>
  `,
  styles: [``]
})
export class LayoutComponent {

}
