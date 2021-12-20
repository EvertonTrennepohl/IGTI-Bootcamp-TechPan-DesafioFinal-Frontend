import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPedido } from '../pedido';
import { PedidoService } from '../pedido/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-realizado',
  templateUrl: './pedido-realizado.component.html',
})
export class PedidoRealizadoComponent implements OnInit, OnDestroy {
  
  idPedido?: number;
  pedido?: IPedido;
  interval?: number;

  constructor(private activatedRoute: ActivatedRoute, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idPedido = parseInt(paramMap.get('idPedido') || '0');
      this.carregaPedido();
    });
    this.interval = setInterval(() => {
      this.carregaPedido();
    }, 5000);
  }

  carregaPedido() {
    if (this.idPedido) {
      this.pedidoService.carregaPedido(this.idPedido).subscribe(pedido => {
        this.pedido = pedido;
      });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
