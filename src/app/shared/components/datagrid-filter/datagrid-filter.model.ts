import { ClrDatagridFilterInterface } from '@clr/angular';

export interface Retorno {
  property: string;
  value: string;
}

export interface CustomClrDgFilter
  extends Omit<ClrDatagridFilterInterface<Retorno>, 'equals'> {
  focus: () => void;
}
