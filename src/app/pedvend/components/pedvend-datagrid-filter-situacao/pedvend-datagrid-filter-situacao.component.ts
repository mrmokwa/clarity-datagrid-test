import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClrDatagridFilter } from '@clr/angular';
import { Subject } from 'rxjs';
import { CustomClrDgFilter } from 'src/app/shared/components';
import { Situacao } from '../../pedvend.model';

export type SituacaoOpcoes = Situacao | 'TODOS';

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
  implements CustomClrDgFilter
{
  @ViewChild('atendido', { read: ElementRef }) atendido: ElementRef;
  @ViewChild('cancelado', { read: ElementRef }) cancelado: ElementRef;
  @ViewChild('pendente', { read: ElementRef }) pendente: ElementRef;
  @ViewChild('transferido', { read: ElementRef }) transferido: ElementRef;
  @ViewChild('todos', { read: ElementRef }) todos: ElementRef;

  changes = new Subject();

  selected: SituacaoOpcoes = 'TODOS';

  get state(): SituacaoFilter {
    return { property: 'situacao', value: this.selected };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  focus = () =>
    setTimeout(() => {
      const element =
        this.selected === Situacao.Atendido
          ? this.atendido
          : this.selected === Situacao.Cancelado
          ? this.cancelado
          : this.selected === Situacao.Pendente
          ? this.pendente
          : this.selected === Situacao.Transferido
          ? this.transferido
          : this.todos;

      element.nativeElement.focus();
    }, 0);

  isActive = () => this.selected !== 'TODOS';

  accepts = (novo: SituacaoFilter) => novo.value !== this.selected;
}
