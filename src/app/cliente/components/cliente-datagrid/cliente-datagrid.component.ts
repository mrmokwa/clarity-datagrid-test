import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CustomClrDgFilter } from 'src/app/shared/components';
import { Cliente, ClienteDetalhado, ClienteFilter } from '../../cliente.model';
import { ClienteService } from '../../services';

type State = ClrDatagridStateInterface<ClienteDetalhado>;

@Component({
  selector: 'app-cliente-datagrid',
  templateUrl: './cliente-datagrid.component.html',
  styleUrls: ['./cliente-datagrid.component.css'],
})
export class ClienteDatagridComponent implements OnInit {
  lista: Cliente[];
  total: number;
  loading = true;
  request = new Subject<State>();

  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.request
      .pipe(
        tap(() => (this.loading = true)),
        map((state) => this.service.filters<ClienteFilter>(state)),
        switchMap((filters) => this.service.getAll(filters))
      )
      .subscribe(({ data, paginacao }) => {
        this.loading = false;
        this.lista = data;
        this.total = paginacao.registros;
      });
  }

  refresh = (state: State) => this.request.next(state);

  focus = (op: boolean, ref: CustomClrDgFilter) => (op ? ref.focus() : null);
}
