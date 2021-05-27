import { Pipe, PipeTransform } from '@angular/core';
import { SelecaoDias } from '../components';

@Pipe({
  name: 'selecaoDias',
})
export class SelecaoDiasPipe implements PipeTransform {
  transform(value: SelecaoDias): string {
    switch (value) {
      case SelecaoDias.Hoje:
        return 'Hoje';

      case SelecaoDias.Semana:
        return 'Semana';

      case SelecaoDias.Mes:
        return 'Mês';

      case SelecaoDias.Ano:
        return 'Ano';

      default:
        return 'Todos';
    }
  }
}
