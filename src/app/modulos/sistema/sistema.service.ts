import { Sistema } from './sistema';
import { Injectable, Injector } from '@angular/core';

import { GenericService } from '../../core/generics/generic.service'

@Injectable()
export class SistemaService extends GenericService<Sistema> {

  constructor(private injector: Injector) {
    super('sistemas', injector, Sistema)
  }

}
