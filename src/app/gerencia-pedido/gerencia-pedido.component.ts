import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPedido } from '../pedido';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-gerencia-pedido',
  templateUrl: './gerencia-pedido.component.html',
  styles: [ ]
})
export class GerenciaPedidoComponent implements OnInit {

  pedido?: IPedido;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public pedidoService: PedidoService) {

   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const idPedido = parseInt(paramMap.get('idPedido') || '0');
      this.pedidoService.carregaPedido(idPedido).subscribe(pedido => {
        this.pedido = pedido;
      });
    });
  }

  atualizaPedido() {
    if (this.pedido) {
      this.pedidoService.atualizaSituacaoPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        this.router.navigate(["/pedidos"]);
      });
    }
  }

}
