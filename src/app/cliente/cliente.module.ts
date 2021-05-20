import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClienteMainComponent } from './pages';
import { ClienteDatagridComponent } from './components';

@NgModule({
  declarations: [ClienteMainComponent, ClienteDatagridComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClienteMainComponent],
})
export class ClienteModule {}
