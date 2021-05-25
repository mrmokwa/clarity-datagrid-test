import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';

enum SituacaoFilter {
  Ativos = 'A',
  Inativos = 'I',
  Todos = '',
}

type Retorno = { property: string; value: string };

@Component({
  selector: 'app-cliente-datagrid-situacao-filter',
  templateUrl: './cliente-datagrid-situacao-filter.component.html',
  styleUrls: ['./cliente-datagrid-situacao-filter.component.css'],
})
export class ClienteDatagridSituacaoFilterComponent
  implements ClrDatagridFilterInterface<Retorno>, CustomDgFilter
{
  @ViewChild('ativos', { read: ElementRef }) ativos: ElementRef;
  @ViewChild('inativos', { read: ElementRef }) inativos: ElementRef;
  @ViewChild('todos', { read: ElementRef }) todos: ElementRef;

  changes = new Subject();
  value = SituacaoFilter.Todos;

  get state(): Retorno {
    return { property: 'situacao', value: this.value };
  }

  get selectedElement(): ElementRef<any> {
    return this.value === SituacaoFilter.Ativos
      ? this.ativos
      : this.value === SituacaoFilter.Inativos
      ? this.inativos
      : this.todos;
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  isActive = () => this.value !== SituacaoFilter.Todos;

  accepts = (novo: Retorno) => novo.value !== this.value;

  focus = () => setTimeout(() => this.selectedElement.nativeElement.focus(), 0);
}
