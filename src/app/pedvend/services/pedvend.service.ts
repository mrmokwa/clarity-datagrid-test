import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedVend, PedVendResumido, PedVendSituacao } from '../pedvend.model';

export const TDS_URL =
  'http://localhost:8080/painel-de-vendas/rest/painel-de-vendas-service';

type PedVendPaged = Retorno<PedVendResumido>;

export interface PedVendFiltros {
  cliente: number;
  dias: number;
  situacao: PedVendSituacao | 'TODOS';
}

@Injectable({
  providedIn: 'root',
})
export class PedVendService {
  constructor(private httpClient: HttpClient) {}

  getAll(
    filtros: PedVendFiltros,
    pageNumber: number,
    pageSize: number
  ): Observable<PedVendPaged> {
    return this.httpClient.get<PedVendPaged>(
      `${TDS_URL}/pedidos-venda?cliente=${filtros.cliente}&dias=${filtros.dias}&situacao=${filtros.situacao}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  get(id: number): Observable<PedVend> {
    return this.httpClient.get<PedVend>(`${TDS_URL}/pedidos-venda/${id}`);
  }
}
