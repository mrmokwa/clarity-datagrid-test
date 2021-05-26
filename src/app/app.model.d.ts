interface Paginacao {
  offset: number;
  orderBy: string;
  orderDesc: string;
  pageNumber: number;
  pageSize: number;
  registros: number;
  totalPages: number;
}

interface PaginacaoFiltro {
  pageSize?: number;
  pageNumber?: number;
  orderBy?: string;
  orderDesc?: boolean;
}

interface Retorno<T, F> {
  paginacao: Paginacao;
  data: T[];
  filtros: F;
}
