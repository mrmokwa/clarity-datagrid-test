import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { CustomClrDgFilter, Retorno } from './datagrid-filter.model';

@Component({
  selector: 'app-datagrid-filter',
  templateUrl: './datagrid-filter.component.html',
  styleUrls: ['./datagrid-filter.component.css'],
})
export class DatagridFilterComponent
  implements CustomClrDgFilter, OnInit, OnDestroy
{
  @Input()
  property: string;

  @Input()
  type: 'text' | 'number' | 'date' = 'text';

  @ViewChild('input', { read: ElementRef })
  input: ElementRef;

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

  clear() {
    this.search = '';
    this.changes.next();
  }
}
