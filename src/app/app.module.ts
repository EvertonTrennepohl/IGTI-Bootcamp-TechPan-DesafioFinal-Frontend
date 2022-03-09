import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule }from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { GerenciaPedidoComponent } from './gerencia-pedido/gerencia-pedido.component';
import { QuantidadeTotalPipe } from './quantidade-total.pipe';
import { ValorTotalPipe } from './valor-total.pipe';
import { ListaItensPedidoComponent } from './lista-itens-pedido/lista-itens-pedido.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoRealizadoComponent } from './pedido-realizado/pedido-realizado.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './helpers/auth.interceptor'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    PedidoComponent,
    GerenciaPedidoComponent,
    QuantidadeTotalPipe,
    ValorTotalPipe,
    ListaItensPedidoComponent,
    ListaPedidosComponent,
    PedidoRealizadoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
