import { Component, Input } from '@angular/core';
import { PedidoDetalhado } from '../../pedvend.model';

@Component({
  selector: 'app-pedvend-detalhes',
  templateUrl: './pedvend-detalhes.component.html',
  styleUrls: ['./pedvend-detalhes.component.css'],
})
export class PedvendDetalhesComponent {
  @Input() pedvend: PedidoDetalhado;

  constructor() {}
}
