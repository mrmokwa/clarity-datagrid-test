import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CepPipe, CgcPipe, TelefonePipe } from './pipes';

const PIPES = [CepPipe, TelefonePipe, CgcPipe];

@NgModule({
  declarations: [PIPES, TelefonePipe],
  exports: [CommonModule, ClarityModule, PIPES],
})
export class SharedModule {}
