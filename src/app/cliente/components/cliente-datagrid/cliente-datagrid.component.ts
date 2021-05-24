import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Cliente, ClienteDetalhado, ClienteFilter } from '../../cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-datagrid',
  templateUrl: './cliente-datagrid.component.html',
  styleUrls: ['./cliente-datagrid.component.css'],
})
export class ClienteDatagridComponent {
  lista: Cliente[];
  total: number;
  loading = true;

  constructor(private service: ClienteService) {}

  refresh(state: ClrDatagridStateInterface<ClienteDetalhado>): void {
    this.loading = true;

    this.service
      .getAll(this.service.filters<ClienteFilter>(state))
      .subscribe(({ data, paginacao }) => {
        this.lista = data;
        this.total = paginacao.registros;
        this.loading = false;
      });
  }
}
