import { Natureza } from '../shared/shared.models';

export enum Situacao {
  Ativo = 'A',
  Inativo = 'I',
}

export interface Cliente {
  id: number;
  pessoaId: number;
  nome: string;
  abreviado: string;
  natureza: Natureza;
  contato: string;
  cgc: string;
  email: string;
  telefone: string;
  celular: string;
  cidade: string;
  estado: string;
  pais: string;
  situacao: Situacao;
}

export interface ClienteDetalhado extends Cliente {
  observacoes: string;
  bairro: string;
  cep: string;
  complemento: string;
  endereco: string;
  cadastro: Date;
  alteracao: Date;
  ie: string;
}

export interface ClienteFilter extends PaginacaoFiltro {
  situacao?: Situacao;
  nome?: string;
  cgc?: string;
  telefone?: string;
}
