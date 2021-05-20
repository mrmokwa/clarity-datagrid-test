import { Component, Input, OnInit } from '@angular/core';
import { PedidoItem } from '../../pedvend.model';

@Component({
  selector: 'app-pedvend-itens',
  templateUrl: './pedvend-itens.component.html',
  styleUrls: ['./pedvend-itens.component.css'],
})
export class PedvendItensComponent implements OnInit {
  @Input() itens: PedidoItem[];

  constructor() {}

  ngOnInit(): void {}
}
