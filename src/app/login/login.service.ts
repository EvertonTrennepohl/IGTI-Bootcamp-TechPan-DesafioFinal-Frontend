import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICliente } from '../ICliente';

const apiUrl = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class LoginService {
    
    constructor(private http: HttpClient) { }

    logar(cliente: ICliente) {
        console.log(`${apiUrl}/login`);
        return this.http.post<ICliente>(`${apiUrl}/login`, cliente);
    }
}