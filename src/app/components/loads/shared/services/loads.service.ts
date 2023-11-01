import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Loads } from '../types/loads.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {

  private http = inject(HttpClient);

  constructor() {}

  listLoads(): Observable<Loads> {
    const url = environment.baseUrl + '/broker/loads'

    return this.http.get<Loads>(url).pipe();
  }

}
