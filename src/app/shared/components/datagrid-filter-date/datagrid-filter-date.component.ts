import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CustomClrDgFilter, Retorno, SelecaoDias } from '..';

@Component({
  selector: 'app-datagrid-filter-date',
  templateUrl: './datagrid-filter-date.component.html',
  styleUrls: ['./datagrid-filter-date.component.css'],
})
export class DatagridFilterDateComponent
  implements CustomClrDgFilter, OnInit, OnDestroy
{
  @Input() dias = SelecaoDias.Todos;
  @Input() property: string;

  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  @Output() diasChange = new EventEmitter<SelecaoDias>();

  changes = new Subject();
  debouncer = new Subject();
  destroy = new Subject();

  get state(): Retorno {
    return { property: this.property, value: this.dias };
  }

  ngOnInit() {
    this.debouncer
      .pipe(takeUntil(this.destroy), debounceTime(500))
      .subscribe(() => this.changes.next());

    this.changes
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.diasChange.emit(this.dias));
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  focus = () => setTimeout(() => this.input.nativeElement.focus(), 0);

  isActive = () => this.dias !== 'TODOS';

  accepts = (item: Retorno) => item.value != this.dias;
}
