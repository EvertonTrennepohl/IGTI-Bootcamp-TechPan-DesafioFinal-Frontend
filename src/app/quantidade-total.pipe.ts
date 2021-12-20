import { Pipe, PipeTransform } from '@angular/core';
import { IItemPedido } from './pedido';

@Pipe({
  name: 'quantidadeTotal'
})
export class QuantidadeTotalPipe implements PipeTransform {

  transform(itens: IItemPedido[]): number {
    let quantidade = 0;
    for (const item of itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }

}
