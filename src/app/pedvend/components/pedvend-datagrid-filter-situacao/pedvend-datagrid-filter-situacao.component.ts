import { Component, EventEmitter } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { PedVendResumido } from '../../pedvend.model';

@Component({
  selector: 'app-pedvend-datagrid-filter-situacao',
  templateUrl: './pedvend-datagrid-filter-situacao.component.html',
  styleUrls: ['./pedvend-datagrid-filter-situacao.component.css'],
})
export class PedvendDatagridFilterSituacaoComponent
  implements ClrDatagridFilterInterface<PedVendResumido> {
  changes: any = new EventEmitter<any>(false);
  state?: any;

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive(): boolean {
    return true;
  }

  accepts(item: PedVendResumido): boolean {
    console.log('accepts', item);
    return false;
  }

  equals?(other: ClrDatagridFilterInterface<PedVendResumido, any>): boolean {
    console.log('equals', other);
    return false;
  }

  teste(): void {
    this.changes.next(true);
  }
}
