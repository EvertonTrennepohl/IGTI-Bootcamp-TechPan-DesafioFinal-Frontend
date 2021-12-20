import { Produto } from "./produto";

export interface IPedido {
    id: number;
    dataHora: string;
    situacao: string;
    itens:  IItemPedido[];
}
export interface IItemPedido {
    produto: Produto,
    quantidade: number
  }