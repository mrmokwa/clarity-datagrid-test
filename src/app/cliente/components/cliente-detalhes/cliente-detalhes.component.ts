import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDetalhado } from '../../cliente.model';
import { ClienteService } from '../../services';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css'],
})
export class ClienteDetalhesComponent implements OnInit {
  @Input() id: number;

  cliente$: Observable<ClienteDetalhado>;

  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.cliente$ = this.service.get(this.id);
  }
}
