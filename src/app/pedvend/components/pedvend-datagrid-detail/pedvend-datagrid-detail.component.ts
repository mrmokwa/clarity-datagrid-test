import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PedVend } from '../../pedvend.model';
import { PedVendService } from '../../services';

@Component({
  selector: 'app-pedvend-datagrid-detail',
  templateUrl: './pedvend-datagrid-detail.component.html',
  styleUrls: ['./pedvend-datagrid-detail.component.css'],
})
export class PedvendDatagridDetailComponent implements OnInit {
  @Input() id: number;

  pedvend$: Observable<PedVend>;

  constructor(private service: PedVendService) {}

  ngOnInit(): void {
    this.pedvend$ = this.service.get(this.id);
  }
}
