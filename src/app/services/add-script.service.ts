import { Injectable } from '@angular/core';
import * as CONSTANT from 'src/assets/constant/CONSTANT';

@Injectable({
  providedIn: 'root'
})
export class AddScriptService {

  loadJsFile(): void {
    const PATH = CONSTANT.jsFilesPath

    PATH.forEach(element => {
      let node = document.createElement('script');
      node.src = element.trim();
      node.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(node);
    });
    
  }
}
