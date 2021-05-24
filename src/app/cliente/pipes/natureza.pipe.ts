import { Pipe, PipeTransform } from '@angular/core';
import { Natureza } from '../cliente.model';

@Pipe({
  name: 'natureza',
})
export class NaturezaPipe implements PipeTransform {
  transform(value: Natureza): string {
    switch (value) {
      case Natureza.Juridica:
        return 'Juridica';
      case Natureza.Fisica:
        return 'Fisica';
      default:
        return 'Estrangeira';
    }
  }
}
