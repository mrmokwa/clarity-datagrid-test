export interface PedVendResumido {
  id: number;
  divisaoId: string;
  divisao: string;
  numero: number;
  entrada: Date;
  clienteId: number;
  cliente: string;
  represId: number;
  repres: string;
  situacao: PedVendSituacao;
}

export interface PedVend extends PedVendResumido {
  entrega: Date;
  condPgto: string;
  tipoFrete: string;
  transpId: number;
  transp: string;
  financeiro: string;
  comercial: string;
  itens: PedVendItem[];
  observacoes: string;
}

export interface PedVendItem {
  sequencia: number;
  codigo: string;
  descricao: string;
  quantidade: number;
  valor: number;
}

export type PedVendSituacao = 'A' | 'C' | 'P' | 'T';
