import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ClienteMainComponent } from './pages';
import { NaturezaPipe, SituacaoPipe } from './pipes';
import {
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridSituacaoFilterComponent,
} from './components';
import { FormsModule } from '@angular/forms';

const PAGES = [ClienteMainComponent];
const PIPES = [NaturezaPipe, SituacaoPipe];
const COMPONENTS = [
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
  ClienteDatagridSituacaoFilterComponent,
];

@NgModule({
  declarations: [PAGES, COMPONENTS, PIPES],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [PAGES],
})
export class ClienteModule {}
