import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomClrDgFilter } from 'src/app/shared/components';

enum SituacaoFilter {
  Ativos = 'A',
  Inativos = 'I',
  Todos = '',
}

type Retorno = { property: string; value: string };

@Component({
  selector: 'app-cliente-datagrid-filter-situacao',
  templateUrl: './cliente-datagrid-filter-situacao.component.html',
  styleUrls: ['./cliente-datagrid-filter-situacao.component.css'],
})
export class ClienteDatagridFilterSituacaoComponent
  implements CustomClrDgFilter, OnInit, OnDestroy
{
  @ViewChild('ativos', { read: ElementRef }) ativos: ElementRef;
  @ViewChild('inativos', { read: ElementRef }) inativos: ElementRef;
  @ViewChild('todos', { read: ElementRef }) todos: ElementRef;

  changes = new Subject();
  debouncer = new Subject();
  selected = SituacaoFilter.Todos;

  get state(): Retorno {
    return { property: 'situacao', value: this.selected };
  }

  get selectedElement(): ElementRef<any> {
    return this.selected === SituacaoFilter.Ativos
      ? this.ativos
      : this.selected === SituacaoFilter.Inativos
      ? this.inativos
      : this.todos;
  }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe(() => this.changes.next());
  }

  ngOnDestroy() {
    this.debouncer.unsubscribe();
  }

  isActive = () => this.selected !== SituacaoFilter.Todos;

  accepts = (novo: Retorno) => novo.value !== this.selected;

  focus = () => setTimeout(() => this.selectedElement.nativeElement.focus(), 0);
}
