import { Component, Input} from '@angular/core';
import { IItemPedido } from '../pedido';

@Component({
  selector: 'app-lista-itens-pedido',
  templateUrl: './lista-itens-pedido.component.html',
  styles: [':host { display: block; }']
})
export class ListaItensPedidoComponent {

  @Input()
  itens: IItemPedido[] = [];
}
