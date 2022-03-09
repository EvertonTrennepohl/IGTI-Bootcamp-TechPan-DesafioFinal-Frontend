import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const CLIENTE_KEY = 'auth_cliente';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    let tokenKey = sessionStorage.getItem(TOKEN_KEY) as string;
    return tokenKey;
  }

 /* public saveCliente(cliente): void {
    window.sessionStorage.removeItem(CLIENTE_KEY);
    window.sessionStorage.setItem(CLIENTE_KEY, JSON.stringify(cliente));
  }*/

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(CLIENTE_KEY) as string);
  }
}
