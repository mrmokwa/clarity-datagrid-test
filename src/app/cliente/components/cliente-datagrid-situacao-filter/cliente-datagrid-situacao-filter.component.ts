import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClrDatagridFilter, ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';

type SituacaoFilter = { property: string; value: string };
type SituacaoOpcoes = 'A' | 'I' | 'TODOS';
type ClrFilter = ClrDatagridFilterInterface<SituacaoFilter>;

@Component({
  selector: 'app-cliente-datagrid-situacao-filter',
  templateUrl: './cliente-datagrid-situacao-filter.component.html',
  styleUrls: ['./cliente-datagrid-situacao-filter.component.css'],
})
export class ClienteDatagridSituacaoFilterComponent
  implements ClrFilter, CustomDgFilter
{
  @ViewChild('focus', { read: ElementRef }) input: ElementRef;

  changes = new Subject();
  selected: SituacaoOpcoes = 'TODOS';

  get state(): SituacaoFilter {
    return { property: 'situacao', value: this.selected };
  }

  constructor(filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  focus = () => setTimeout(() => this.input.nativeElement.focus(), 0);

  isActive = () => this.selected !== 'TODOS';

  accepts = (novo: SituacaoFilter) => novo.value !== this.selected;
}
