import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pedvend-datagrid-filter-entrada',
  templateUrl: './pedvend-datagrid-filter-entrada.component.html',
  styleUrls: ['./pedvend-datagrid-filter-entrada.component.css'],
})
export class PedvendDatagridFilterEntradaComponent
  implements OnInit, OnDestroy, ClrDatagridFilterInterface<DatagridFilter>
{
  changes = new Subject();
  debounce = new Subject();

  dias: number = 90;

  get state(): DatagridFilter {
    return { property: 'diasEntrada', value: this.dias };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  ngOnInit() {
    this.debounce.pipe(debounceTime(500)).subscribe(() => this.changes.next());
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  isActive = () => this.dias !== 0;

  accepts = (novo: DatagridFilter) => novo.value !== this.dias;
}
