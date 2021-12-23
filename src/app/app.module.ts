import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule }from '@angular/material/select';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { GerenciaPedidoComponent } from './gerencia-pedido/gerencia-pedido.component';
import { QuantidadeTotalPipe } from './quantidade-total.pipe';
import { ValorTotalPipe } from './valor-total.pipe';
import { ListaItensPedidoComponent } from './lista-itens-pedido/lista-itens-pedido.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoRealizadoComponent } from './pedido-realizado/pedido-realizado.component';
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
    MatSelectModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
