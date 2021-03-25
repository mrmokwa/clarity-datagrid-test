import { Component, Input, OnInit } from '@angular/core';
import { PedVendItem } from '../../pedvend.model';

@Component({
  selector: 'app-pedvend-itens',
  templateUrl: './pedvend-itens.component.html',
  styleUrls: ['./pedvend-itens.component.css'],
})
export class PedvendItensComponent implements OnInit {
  @Input() itens: PedVendItem[];

  constructor() {}

  ngOnInit(): void {}
}
