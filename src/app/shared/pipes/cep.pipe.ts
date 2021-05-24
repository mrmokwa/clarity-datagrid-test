import { Pipe, PipeTransform } from '@angular/core';

const maskCEP = (value: string) => {
  return new String(value)
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
};

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(cep: string): string {
    return maskCEP(cep);
  }
}
