import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';
import { TokenStorageService } from '../authentication/token-storage.service';

@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
 })

export class LoginComponent {

  loginForm = new FormGroup({});
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', Validators.required);
  hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    this.loginForm.addControl('email', this.email);
    this.loginForm.addControl('senha', this.senha);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
   }

  logar(): void {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.Authorization);
        console.info(data.Authorization);
        console.log('isLoggedIn' + this.isLoggedIn);
        //this.tokenStorage.saveCliente(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(["/cardapio"]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(err.error.message)
      }
    );
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
        return 'Campo obrigatório!';
    }
    return this.email.hasError('email') ? "e-mail inválido!" : '';
  }

  getErrorMessageSenha() {
    return this.senha.hasError('required') ? 'Campo obrigatório!' : '';
  }
}