import { Component, OnInit } from '@angular/core';
import { IPedido } from '../pedido';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styles: [':host { display: block }']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: IPedido[] = [];

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.carregaTodosPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

}
