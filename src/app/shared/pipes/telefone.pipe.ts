import { Pipe, PipeTransform } from '@angular/core';

const maskPhone = (value: string) => {
  return new String(value)
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(telefone: string): string {
    return maskPhone(telefone);
  }
}
