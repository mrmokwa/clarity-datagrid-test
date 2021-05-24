import { Component, OnDestroy, OnInit } from '@angular/core';
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
  debounce = new Subject();

  clienteNome = '';

  get state(): DatagridFilter {
    return { property: 'clienteNome', value: this.clienteNome };
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

  isActive = () => this.clienteNome !== '';

  accepts = (novo: DatagridFilter) => novo.value !== this.clienteNome;
}
