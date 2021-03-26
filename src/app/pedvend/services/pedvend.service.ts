import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedVend, PedVendResumido } from '../pedvend.model';

const TDS_URL =
  'http://localhost:8080/painel-de-vendas/rest/painel-de-vendas-service';

declare type PedVendPag = Retorno<PedVendResumido>;

@Injectable({
  providedIn: 'root',
})
export class PedVendService {
  constructor(private httpClient: HttpClient) {}

  getAll(cliente = 0, pageNumber = 1, pageSize = 10): Observable<PedVendPag> {
    return this.httpClient.get<PedVendPag>(
      `${TDS_URL}/pedidos-venda?cliente=${cliente}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  get(id: number): Observable<PedVend> {
    return this.httpClient.get<PedVend>(`${TDS_URL}/pedidos-venda/${id}`);
  }
}

export interface Paginacao {
  pageSize: number;
  pageNumber: number;
  numRecords: number;
}

export interface Retorno<T> {
  pagination: Paginacao;
  data: T[];
}
