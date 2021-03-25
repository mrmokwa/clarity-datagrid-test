import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'financeiro',
})
export class PedvendFinanceiroPipe implements PipeTransform {
  transform(financeiro: string): string {
    switch (financeiro) {
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
