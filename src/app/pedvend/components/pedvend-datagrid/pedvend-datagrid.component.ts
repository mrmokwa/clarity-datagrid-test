import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { SelecaoDias } from 'src/app/shared/components';
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
  diasEntrada: SelecaoDias = SelecaoDias.Mes;

  constructor(private service: PedVendService) {}

  refresh(state: ClrDatagridStateInterface<PedidoDetalhado>): void {
    this.loading = true;

    this.service
      .getAll(this.service.filters<PedidoFiltro>(state))
      .subscribe(({ data, paginacao }) => {
        this.pedidos = data;
        this.total = paginacao.registros;
        this.loading = false;
      });
  }
}
