import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ClienteMainComponent } from './pages';
import { NaturezaPipe, SituacaoPipe } from './pipes';
import {
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridSituacaoFilterComponent,
  ClienteDatagridFilterNomeComponent,
} from './components';

const PAGES = [ClienteMainComponent];
const PIPES = [NaturezaPipe, SituacaoPipe];
const COMPONENTS = [
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridSituacaoFilterComponent,
  ClienteDatagridFilterNomeComponent,
];

@NgModule({
  declarations: [PAGES, COMPONENTS, PIPES],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [PAGES],
})
export class ClienteModule {}
