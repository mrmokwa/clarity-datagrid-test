import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

import { CepPipe, CgcPipe, NaturezaPipe, TelefonePipe } from './pipes';
import { DatagridFilterComponent } from './components';

const PIPES = [CepPipe, TelefonePipe, CgcPipe, NaturezaPipe];

const COMPONENTS = [DatagridFilterComponent];

@NgModule({
  imports: [ClarityModule, FormsModule],
  declarations: [PIPES, COMPONENTS],
  exports: [CommonModule, ClarityModule, FormsModule, PIPES, COMPONENTS],
})
export class SharedModule {}
