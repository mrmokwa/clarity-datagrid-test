import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comercial',
})
export class PedvendComercialPipe implements PipeTransform {
  transform(comercial: string): string {
    switch (comercial) {
      case 'A':
        return 'Aprovado';
      case 'R':
        return 'Rejeitado';
      case 'B':
        return 'Bloqueado';
      default:
        return 'Desconhecido';
    }
  }
}
