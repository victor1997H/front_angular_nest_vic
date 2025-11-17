import { HttpClient } from '@angular/common/http';  
import { inject, Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl= environment.urlServidor
  private http=inject(HttpClient);

  funlistar(){
    return this.http.get(`${this.baseUrl}/categoria`);
    
  }
}
