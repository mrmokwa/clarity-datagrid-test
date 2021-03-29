import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { SituacaoOpcoes } from '..';
import { PedVend, PedVendResumido } from '../../pedvend.model';
import { PedVendFiltros, PedVendService } from '../../services';

@Component({
  selector: 'app-pedvend-datagrid',
  templateUrl: './pedvend-datagrid.component.html',
  styleUrls: ['./pedvend-datagrid.component.css'],
})
export class PedvendDatagridComponent {
  total: number;
  loading = true;
  pedidos: PedVendResumido[];

  constructor(private pedVendService: PedVendService) {}

  refresh(state: ClrDatagridStateInterface<PedVend>): void {
    this.loading = true;

    this.pedVendService
      .getAll(
        this.montarFiltro(state.filters),
        state.page.current,
        state.page.size
      )
      .subscribe(
        (retorno) => {
          this.pedidos = retorno.data;
          this.total = retorno.pagination.numRecords;
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }

  montarFiltro(filters: DatagridFilter[]): PedVendFiltros {
    let situacao: SituacaoOpcoes = 'TODOS';

    filters?.forEach((filtro) => {
      switch (filtro.property) {
        case 'situacao':
          situacao = filtro.value;
          break;

        default:
          break;
      }
    });

    return { cliente: 0, situacao };
  }
}
