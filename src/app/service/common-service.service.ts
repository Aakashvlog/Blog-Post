import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http : HttpClient) { }
  baseURL = '/api/v1';

  getData(url:string): Observable<any> {
    return this.http.get<any>(this.baseURL + url);
  }

  postData(url:string, body:any): Observable<any> {
    return this.http.post<any>(this.baseURL + url, body);
  }

  putData(url:string, body:any): Observable<any> {
    return this.http.post<any>(this.baseURL + url, body);
  }

}
