interface Paginacao {
  pageSize: number;
  pageNumber: number;
  numRecords: number;
}

interface Retorno<T> {
  pagination: Paginacao;
  data: T[];
}

interface DatagridFilter {
  property: string;
  value: any;
}
