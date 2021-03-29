import { Component, EventEmitter } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { PedVendSituacao } from '../../pedvend.model';

export type SituacaoFilter = PedVendSituacao | 'TODOS';

@Component({
  selector: 'app-pedvend-datagrid-filter-situacao',
  templateUrl: './pedvend-datagrid-filter-situacao.component.html',
  styleUrls: ['./pedvend-datagrid-filter-situacao.component.css'],
})
export class PedvendDatagridFilterSituacaoComponent
  implements ClrDatagridFilterInterface<SituacaoFilter> {
  changes = new EventEmitter<boolean>(false);

  selected: SituacaoFilter = 'TODOS';

  get state(): SituacaoFilter {
    return this.selected;
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive = () => true;

  accepts = (novo: SituacaoFilter) => novo !== this.selected;
}
