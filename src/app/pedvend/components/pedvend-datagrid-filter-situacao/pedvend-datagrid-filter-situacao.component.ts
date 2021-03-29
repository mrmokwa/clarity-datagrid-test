import { Component, EventEmitter } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { PedVendSituacao } from '../../pedvend.model';

export type SituacaoOpcoes = PedVendSituacao | 'TODOS';

type SituacaoFilter = {
  property: string;
  value: SituacaoOpcoes;
};

@Component({
  selector: 'app-pedvend-datagrid-filter-situacao',
  templateUrl: './pedvend-datagrid-filter-situacao.component.html',
  styleUrls: ['./pedvend-datagrid-filter-situacao.component.css'],
})
export class PedvendDatagridFilterSituacaoComponent
  implements ClrDatagridFilterInterface<SituacaoFilter> {
  changes = new EventEmitter<boolean>(false);

  selected: SituacaoOpcoes = 'TODOS';

  get state(): SituacaoFilter {
    return { property: 'situacao', value: this.selected };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive = () => this.selected !== 'TODOS';

  accepts = (novo: SituacaoFilter) => novo.value !== this.selected;
}
