import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { GerenciaPedidoComponent } from "./gerencia-pedido/gerencia-pedido.component";
import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { PedidoRealizadoComponent } from "./pedido-realizado/pedido-realizado.component";

const routes: Routes = [
  { path: "cardapio", component: CardapioComponent },
  { path: "pedido", component: PedidoComponent },
  { path: "pedido/:idPedido", component: PedidoRealizadoComponent },
  { path: "pedidos", component: ListaPedidosComponent },
  { path: "pedidos/:idPedido/editar", component: GerenciaPedidoComponent },
  { path: "", redirectTo: "cardapio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
