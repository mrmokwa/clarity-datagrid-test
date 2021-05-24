import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClienteMainComponent } from './pages';
import { ClienteDatagridComponent } from './components';
import { CgcPipe, NaturezaPipe, SituacaoPipe } from './pipes';

@NgModule({
  declarations: [
    ClienteMainComponent,
    ClienteDatagridComponent,
    NaturezaPipe,
    CgcPipe,
    SituacaoPipe,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ClienteMainComponent],
})
export class ClienteModule {}
