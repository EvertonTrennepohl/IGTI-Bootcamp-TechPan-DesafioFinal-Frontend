import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { IPedido } from '../pedido';

const urlBase = 'https://app-ngfood.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) {

  }

  itens: { produto: Produto, quantidade: number }[] = [];

  adicionaProduto(produto: Produto) {
    let item = this.itens.find(item => item.produto.descricao === produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  limpaPedido() {
    this.itens = [];
  }

  buscaProdutos() {
    return this.httpClient.get<Produto[]>(urlBase + '/cardapio');
  }

  realizaPedido() {
    return this.httpClient.post<IPedido>(urlBase + '/pedido', {
      itens: this.itens
    });
  }

  carregaPedido(idPedido: number) {
    return this.httpClient.get<IPedido>(urlBase + '/pedido/' + idPedido);
  }

  carregaTodosPedidos() {
    return this.httpClient.get<IPedido[]>(urlBase + '/pedidos/')
  }

  atualizaSituacaoPedido(pedido: IPedido) {
    return this.httpClient.put<IPedido>(urlBase + '/pedido/' + pedido.id, pedido);
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }
}
