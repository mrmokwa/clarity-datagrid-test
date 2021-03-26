import { Component, EventEmitter, Output } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';

interface SituacaoFilter {
  property: string;
  value: string;
}

@Component({
  selector: 'app-pedvend-datagrid-filter-situacao',
  templateUrl: './pedvend-datagrid-filter-situacao.component.html',
  styleUrls: ['./pedvend-datagrid-filter-situacao.component.css'],
})
export class PedvendDatagridFilterSituacaoComponent
  implements ClrDatagridFilterInterface<SituacaoFilter> {
  changes = new EventEmitter<boolean>(false);

  selected = '';

  get state(): SituacaoFilter {
    return { property: 'situacao', value: this.selected };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive = () => true;

  accepts = (item: SituacaoFilter) => item.value !== this.selected;
}
