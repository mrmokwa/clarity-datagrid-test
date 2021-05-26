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
} from './components';

import {
  PedvendFinanceiroPipe,
  PedvendComercialPipe,
  PedvendSituacaoPipe,
} from './pipes';

const PAGES = [PedvendMainComponent];

const COMPONENTS = [
  PedvendDatagridComponent,
  PedvendDetalhesComponent,
  PedvendItensComponent,
  PedvendDatagridDetailComponent,
  PedvendDatagridFilterSituacaoComponent,
  PedvendDatagridFilterEntradaComponent,
];

const PIPES = [
  PedvendFinanceiroPipe,
  PedvendComercialPipe,
  PedvendSituacaoPipe,
];

@NgModule({
  declarations: [PAGES, COMPONENTS, PIPES],
  imports: [SharedModule],
  exports: [PAGES],
})
export class PedvendModule {}
