import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

@Injectable({
  providedIn: 'root',
})
export class DatagridService {
  constructor() {}

  filters<T>(state: ClrDatagridStateInterface<unknown>) {
    console.log(state);

    const filter = state.filters
      ? state.filters
          .map(({ property, value }) => ({ [property]: value }))
          .reduce((obj: any, val: any) => Object.assign(obj, val))
      : {};

    const paginacao: PaginacaoFiltro = {
      pageNumber: state.page.current,
      pageSize: state.page.size,
    };

    if (state.sort?.by) {
      paginacao.orderBy = state.sort.by.toString();
    }

    if (state.sort?.reverse) {
      paginacao.orderDesc = state.sort.reverse;
    }

    return Object.assign(filter, paginacao) as T;
  }
}
