import { Injectable, Injector } from '@angular/core';
import { Modulo } from './modulo';
import { GenericService } from 'src/app/core/generics/generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModuloService extends GenericService<Modulo>{

  constructor(private http: Injector) {
    super('modulos', http, Modulo)
  }


}
