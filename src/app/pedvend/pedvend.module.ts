import { NgModule } from '@angular/core';

import { PedvendMainComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import {
  PedvendDatagridComponent,
  PedvendDetalhesComponent,
  PedvendItensComponent,
  PedvendDatagridDetailComponent,
} from './components';
import {
  PedvendFinanceiroPipe,
  PedvendComercialPipe,
  PedvendSituacaoPipe,
} from './pipes';

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
  ],
  imports: [SharedModule],
  exports: [PedvendMainComponent],
})
export class PedvendModule {}
