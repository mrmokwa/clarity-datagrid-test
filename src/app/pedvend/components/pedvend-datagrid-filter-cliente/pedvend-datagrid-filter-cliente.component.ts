import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pedvend-datagrid-filter-cliente',
  templateUrl: './pedvend-datagrid-filter-cliente.component.html',
  styleUrls: ['./pedvend-datagrid-filter-cliente.component.css'],
})
export class PedvendDatagridFilterClienteComponent
  implements ClrDatagridFilterInterface<DatagridFilter>, OnInit, OnDestroy
{
  changes = new Subject();
  update = new Subject();

  clienteNome = '';

  get state(): DatagridFilter {
    return { property: 'clienteNome', value: this.clienteNome };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  ngOnInit() {
    this.update
      .pipe(debounceTime(500))
      .subscribe(() => this.changes.next(true));
  }

  ngOnDestroy() {
    this.update.unsubscribe();
  }

  isActive = () => this.clienteNome !== '';

  accepts = (novo: DatagridFilter) => novo.value !== this.clienteNome;
}
