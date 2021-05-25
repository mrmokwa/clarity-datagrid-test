import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

type Retorno = { property: string; value: string };

@Component({
  selector: 'app-cliente-datagrid-filter-nome',
  templateUrl: './cliente-datagrid-filter-nome.component.html',
  styleUrls: ['./cliente-datagrid-filter-nome.component.css'],
})
export class ClienteDatagridFilterNomeComponent
  implements
    ClrDatagridFilterInterface<Retorno>,
    CustomDgFilter,
    OnInit,
    OnDestroy
{
  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  nome = '';
  changes = new Subject();
  debouncer = new Subject();
  unsubscribe = new Subject();

  get state(): Retorno {
    return { property: 'nome', value: this.nome };
  }

  constructor() {}

  ngOnInit() {
    this.debouncer
      .pipe(takeUntil(this.unsubscribe), debounceTime(500))
      .subscribe(() => this.changes.next());
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  isActive = () => this.nome !== '';

  accepts = (novo: Retorno) => novo.value !== this.nome;

  focus = () => setTimeout(() => this.input.nativeElement.focus(), 0);
}
