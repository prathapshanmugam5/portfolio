import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  post(req:any):Observable<any>{
  return this.http.post<any>(`https://datacode.onrender.com/customdata/getdata`,req);
  }
}
