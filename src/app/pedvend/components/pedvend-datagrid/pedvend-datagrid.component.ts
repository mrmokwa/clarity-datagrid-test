import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { PedVend, PedVendResumido } from '../../pedvend.model';
import { PedVendService } from '../../services';

@Component({
  selector: 'app-pedvend-datagrid',
  templateUrl: './pedvend-datagrid.component.html',
  styleUrls: ['./pedvend-datagrid.component.css'],
})
export class PedvendDatagridComponent implements OnInit {
  total: number;
  loading = true;
  pedidos: PedVendResumido[];

  constructor(private pedVendService: PedVendService) {}

  ngOnInit(): void {}

  refresh(state: ClrDatagridStateInterface<PedVend>): void {
    console.log('refresh', state.filters[0]);

    this.loading = true;

    this.pedVendService
      .getAll(0, state.page.current, state.page.size)
      .subscribe((retorno) => {
        this.pedidos = retorno.data;
        this.total = retorno.pagination.numRecords;
        this.loading = false;
      });
  }
}
