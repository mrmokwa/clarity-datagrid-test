import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Pedido, PedidoDetalhado, PedidoFiltro } from '../../pedvend.model';
import { PedVendService } from '../../services';

@Component({
  selector: 'app-pedvend-datagrid',
  templateUrl: './pedvend-datagrid.component.html',
  styleUrls: ['./pedvend-datagrid.component.css'],
})
export class PedvendDatagridComponent {
  pedidos: Pedido[];
  total: number;
  loading = true;

  constructor(private pedVendService: PedVendService) {}

  refresh(state: ClrDatagridStateInterface<PedidoDetalhado>): void {
    this.loading = true;

    const filter = state.filters
      .map(({ property, value }) => ({ [property]: value }))
      .reduce((obj: any, val: any) => Object.assign(obj, val));

    const params: PedidoFiltro = Object.assign(filter, {
      pageNumber: state.page.current,
      pageSize: state.page.size,
    });

    this.pedVendService.getAll(params).subscribe(({ data, paginacao }) => {
      this.pedidos = data;
      this.total = paginacao.registros;
      this.loading = false;
    });
  }
}
