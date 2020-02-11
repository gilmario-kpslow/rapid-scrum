import { PipeTransform } from '@angular/core';

export class Coluna {
  nome: string;
  campo: string;
  ordenar?: boolean;
  pipe?: PipeTransform;
  parametros?: string[];
}
