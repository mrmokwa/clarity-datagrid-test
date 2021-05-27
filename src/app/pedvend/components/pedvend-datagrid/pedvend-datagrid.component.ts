import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SelecaoDias } from 'src/app/shared/components';
import { Pedido, PedidoDetalhado, PedidoFiltro } from '../../pedvend.model';
import { PedVendService } from '../../services';

type State = ClrDatagridStateInterface<PedidoDetalhado>;

@Component({
  selector: 'app-pedvend-datagrid',
  templateUrl: './pedvend-datagrid.component.html',
  styleUrls: ['./pedvend-datagrid.component.css'],
})
export class PedvendDatagridComponent implements OnInit {
  pedidos: Pedido[];
  total: number;
  loading = true;
  diasEntrada: SelecaoDias = SelecaoDias.Mes;
  request = new Subject<State>();

  constructor(private service: PedVendService) {}

  ngOnInit() {
    this.request
      .pipe(
        tap(() => (this.loading = true)),
        map((state) => this.service.filters<PedidoFiltro>(state)),
        switchMap((filter) => this.service.getAll(filter))
      )
      .subscribe(({ data, paginacao }) => {
        this.loading = false;
        this.pedidos = data;
        this.total = paginacao.registros;
      });
  }

  refresh = (state: State) => this.request.next(state);
}
