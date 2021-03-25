import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacao',
})
export class PedvendSituacaoPipe implements PipeTransform {
  transform(situacao: string): string {
    switch (situacao) {
      case 'A':
        return 'Atendido';
      case 'C':
        return 'Cancelado';
      case 'P':
        return 'Pendente';
      default:
        return 'Transferido';
    }
  }
}
