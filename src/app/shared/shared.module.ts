import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

import { CepPipe, CgcPipe, TelefonePipe } from './pipes';
import { DatagridFilterStringComponent } from './components';

const PIPES = [CepPipe, TelefonePipe, CgcPipe];

const COMPONENTS = [DatagridFilterStringComponent];

@NgModule({
  imports: [ClarityModule, FormsModule],
  declarations: [PIPES, COMPONENTS],
  exports: [CommonModule, ClarityModule, FormsModule, PIPES, COMPONENTS],
})
export class SharedModule {}
