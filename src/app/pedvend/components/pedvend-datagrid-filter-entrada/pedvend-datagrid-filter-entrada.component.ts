import { Component, EventEmitter } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';

@Component({
  selector: 'app-pedvend-datagrid-filter-entrada',
  templateUrl: './pedvend-datagrid-filter-entrada.component.html',
  styleUrls: ['./pedvend-datagrid-filter-entrada.component.css'],
})
export class PedvendDatagridFilterEntradaComponent
  implements ClrDatagridFilterInterface<DatagridFilter> {
  changes = new EventEmitter<boolean>(false);

  dias: number = 90;

  get state(): DatagridFilter {
    return { property: 'dias', value: this.dias };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive = () => this.dias !== 0;

  accepts = (novo: DatagridFilter) => novo.value !== this.dias;
}
