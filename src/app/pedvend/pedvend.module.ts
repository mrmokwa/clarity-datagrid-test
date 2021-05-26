import { NgModule } from '@angular/core';

import { PedvendMainComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import {
  PedvendDatagridComponent,
  PedvendDetalhesComponent,
  PedvendItensComponent,
  PedvendDatagridDetailComponent,
  PedvendDatagridFilterSituacaoComponent,
  PedvendDatagridFilterEntradaComponent,
  PedvendDatagridFilterClienteComponent,
} from './components';
import {
  PedvendFinanceiroPipe,
  PedvendComercialPipe,
  PedvendSituacaoPipe,
} from './pipes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PedvendDetalhesComponent,
    PedvendDatagridComponent,
    PedvendMainComponent,
    PedvendItensComponent,
    PedvendDatagridDetailComponent,
    PedvendFinanceiroPipe,
    PedvendComercialPipe,
    PedvendSituacaoPipe,
    PedvendDatagridFilterSituacaoComponent,
    PedvendDatagridFilterEntradaComponent,
    PedvendDatagridFilterClienteComponent,
  ],
  imports: [SharedModule],
  exports: [PedvendMainComponent],
})
export class PedvendModule {}
