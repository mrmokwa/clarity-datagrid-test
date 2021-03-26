import { NgModule } from '@angular/core';

import { PedvendMainComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import {
  PedvendDatagridComponent,
  PedvendDetalhesComponent,
  PedvendItensComponent,
  PedvendDatagridDetailComponent,
  PedvendDatagridFilterSituacaoComponent,
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
  ],
  imports: [SharedModule, FormsModule],
  exports: [PedvendMainComponent],
})
export class PedvendModule {}
