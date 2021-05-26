import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomClrDgFilter, Retorno } from 'src/app/shared/components';

@Component({
  selector: 'app-pedvend-datagrid-filter-entrada',
  templateUrl: './pedvend-datagrid-filter-entrada.component.html',
  styleUrls: ['./pedvend-datagrid-filter-entrada.component.css'],
})
export class PedvendDatagridFilterEntradaComponent
  implements OnInit, OnDestroy, CustomClrDgFilter
{
  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  changes = new Subject();
  debounce = new Subject();

  dias: number = 90;

  get state(): Retorno {
    return { property: 'diasEntrada', value: this.dias.toString() };
  }

  ngOnInit() {
    this.debounce.pipe(debounceTime(500)).subscribe(() => this.changes.next());
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  isActive = () => this.dias !== 0;

  accepts = (novo: Retorno) => novo.value !== this.dias.toString();

  focus = () => setTimeout(() => this.input.nativeElement.focus(), 0);
}
