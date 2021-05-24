import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatagridService } from 'src/app/core';
import { Pedido, PedidoDetalhado, PedidoFiltro } from '../pedvend.model';

type PedVendPaged = Retorno<Pedido, PedidoFiltro>;

@Injectable({
  providedIn: 'root',
})
export class PedVendService extends DatagridService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(filtros: PedidoFiltro): Observable<PedVendPaged> {
    const params = new URLSearchParams(<any>filtros).toString();
    return this.httpClient.get<PedVendPaged>(`/api/pedidos?${params}`);
  }

  get(id: number): Observable<PedidoDetalhado> {
    return this.httpClient.get<PedidoDetalhado>(`/api/pedidos/${id}`);
  }
}
