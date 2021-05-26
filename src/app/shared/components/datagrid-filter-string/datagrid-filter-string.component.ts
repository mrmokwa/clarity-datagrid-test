import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

type Retorno = { property: string; value: string };

@Component({
  selector: 'app-datagrid-filter-string',
  templateUrl: './datagrid-filter-string.component.html',
  styleUrls: ['./datagrid-filter-string.component.css'],
})
export class DatagridFilterStringComponent
  implements
    ClrDatagridFilterInterface<Retorno>,
    CustomDgFilter,
    OnInit,
    OnDestroy
{
  @Input() property: string;

  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  search = '';
  changes = new Subject();
  debouncer = new Subject();
  unsubscribe = new Subject();

  get state(): Retorno {
    return { property: this.property, value: this.search };
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
