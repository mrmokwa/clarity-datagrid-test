import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatagridService } from 'src/app/core';
import { Cliente, ClienteDetalhado, ClienteFilter } from '../cliente.model';

type ClientePaged = Retorno<Cliente, ClienteFilter>;

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends DatagridService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(filtros: ClienteFilter) {
    const params = new URLSearchParams(<any>filtros).toString();
    return this.httpClient.get<ClientePaged>(`/api/clientes?${params}`);
  }

  get(id: number) {
    return this.httpClient.get<ClienteDetalhado>(`/api/clientes/${id}`);
  }
}
