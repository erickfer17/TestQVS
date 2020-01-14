import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Consulta } from '../models/consultahabito';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  res:any;
  wsUrl: string='https://quierovivirsano.org/ws/qvsws.php';
  constructor(public http:HttpClient) { 
    
  }

  alta(consulta:Consulta) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.wsUrl, JSON.stringify(consulta),httpOptions);    
  }
}
