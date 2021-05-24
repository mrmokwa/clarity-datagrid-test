import { Pipe, PipeTransform } from '@angular/core';

const maskPhone = (value: string) => {
  return new String(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})(\d)/, '$1-$2');
};

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(telefone: string): string {
    return maskPhone(telefone);
  }
}
