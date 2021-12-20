import { Pipe, PipeTransform } from '@angular/core';
import { IItemPedido } from './pedido';

@Pipe({
  name: 'valorTotal'
})
export class ValorTotalPipe implements PipeTransform {

  transform(itens: IItemPedido[]): unknown {
    let valor = 0;
    for (const item of itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

}
