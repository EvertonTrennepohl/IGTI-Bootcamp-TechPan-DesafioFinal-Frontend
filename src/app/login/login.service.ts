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
        this.http.post<any>(`${apiUrl}/login`, cliente).subscribe(
          data => {
            window.sessionStorage.removeItem('Authorization');
            window.sessionStorage.setItem('Autorization', data.accessToken);
          }  
        );
    }

    /*this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      
      export class AuthService {
  constructor(private http: HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
      */


}