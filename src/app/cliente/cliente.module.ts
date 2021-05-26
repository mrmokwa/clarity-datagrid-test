import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ClienteMainComponent } from './pages';
import { SituacaoPipe } from './pipes';
import {
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridFilterSituacaoComponent,
} from './components';

const PAGES = [ClienteMainComponent];
const PIPES = [SituacaoPipe];
const COMPONENTS = [
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridFilterSituacaoComponent,
];

@NgModule({
  declarations: [PAGES, COMPONENTS, PIPES],
  imports: [CommonModule, SharedModule],
  exports: [PAGES],
})
export class ClienteModule {}
