import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICliente } from '../ICliente';

const apiUrl = environment.apiUrl;
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(cliente: ICliente): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${apiUrl}/login`, cliente, { observe: 'response'});
  }

  register(cliente: ICliente): Observable<any> {
    return this.http.post(`${apiUrl}/registro`, cliente);
  }
}
