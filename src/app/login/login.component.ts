import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';

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

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm.addControl('email', this.email);
    this.loginForm.addControl('senha', this.senha);
   }

  logar(): void {
    this.loginService.logar(this.loginForm.value).subscribe(cliente => {
      console.log(cliente);
    })
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