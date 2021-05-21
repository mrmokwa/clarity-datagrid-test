import { Cliente } from '../cliente/cliente.model';

export enum AnaliseFinanceira {
  Aprovado = 'A',
  Bloqueado = 'B',
  Rejeitado = 'R',
}

export enum AnaliseComercial {
  Aprovado = 'A',
  Bloqueado = 'B',
  Rejeitado = 'R',
}

export enum Situacao {
  Atendido = 'A',
  Cancelado = 'C',
  Pendente = 'P',
  Transferido = 'T',
}

export interface Pedido {
  id: number;
  pedido: number;
  divisao: string;
  entrega: Date;
  entrada: Date;
  clienteId: number;
  clienteNome: string;
  financeiro: AnaliseFinanceira;
  represId: number;
  represNome: string;
  comercial: AnaliseComercial;
  situacao: Situacao;
}

export interface PedidoItem {
  sequencia: number;
  item: string;
  descricao: string;
  quantidade: number;
  unitario: number;
}

export interface PedidoDetalhado
  extends Omit<Pedido, 'clienteId' | 'clienteNome'> {
  represId: number;
  represNome: string;
  cliente: Cliente;
  itens: PedidoItem[];
}

export interface PedidoFiltro extends PaginacaoFiltro {
  situacao?: Situacao;
  numDiasEntrada?: number;
  clienteNome?: string;
  clienteCgc?: string;
}
