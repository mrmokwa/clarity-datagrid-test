export interface PedVendResumido {
  id: number;
  divisao: string;
  numero: number;
  entrada: Date;
  clientId: number;
  cliente: string;
  represId: number;
  repres: string;
  situacao: string;
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
