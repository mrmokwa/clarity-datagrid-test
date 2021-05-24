import { Component, EventEmitter, OnInit } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';

type SituacaoFilter = { property: string; value: string };

type SituacaoOpcoes = 'A' | 'I' | 'TODOS';

@Component({
  selector: 'app-cliente-datagrid-situacao-filter',
  templateUrl: './cliente-datagrid-situacao-filter.component.html',
  styleUrls: ['./cliente-datagrid-situacao-filter.component.css'],
})
export class ClienteDatagridSituacaoFilterComponent
  implements ClrDatagridFilterInterface<SituacaoFilter>
{
  changes = new EventEmitter();

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
