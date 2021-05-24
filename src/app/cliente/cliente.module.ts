import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {
  ClienteDatagridComponent,
  ClienteDetalhesComponent,
} from './components';
import { CgcPipe, NaturezaPipe, SituacaoPipe } from './pipes';
import { ClienteMainComponent } from './pages';

@NgModule({
  declarations: [
    ClienteMainComponent,
    ClienteDatagridComponent,
    NaturezaPipe,
    CgcPipe,
    SituacaoPipe,
    ClienteDetalhesComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ClienteMainComponent],
})
export class ClienteModule {}
