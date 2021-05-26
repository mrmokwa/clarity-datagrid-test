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
  selector: 'app-cliente-datagrid-filter-documento',
  templateUrl: './cliente-datagrid-filter-documento.component.html',
  styleUrls: ['./cliente-datagrid-filter-documento.component.css'],
})
export class ClienteDatagridFilterDocumentoComponent
  implements
    ClrDatagridFilterInterface<Retorno>,
    CustomDgFilter,
    OnInit,
    OnDestroy
{
  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  search = '';
  changes = new Subject();
  debouncer = new Subject();
  unsubscribe = new Subject();

  get state(): Retorno {
    return { property: 'cgc', value: this.search };
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

  isActive = () => this.search !== '';

  accepts = (novo: Retorno) => novo.value !== this.search;

  focus = () => setTimeout(() => this.input.nativeElement.focus(), 0);
}
