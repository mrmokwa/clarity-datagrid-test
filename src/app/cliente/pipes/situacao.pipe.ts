import { Pipe, PipeTransform } from '@angular/core';
import { Situacao } from '../cliente.model';

@Pipe({
  name: 'situacao',
})
export class SituacaoPipe implements PipeTransform {
  transform(situacao: Situacao): unknown {
    switch (situacao) {
      case Situacao.Ativo:
        return 'Ativo';
      default:
        return 'Inativo';
    }
  }
}
