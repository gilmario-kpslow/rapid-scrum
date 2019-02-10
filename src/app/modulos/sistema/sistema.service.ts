import { Sistema } from './sistema';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from '../../core/generics/generic.service';

@Injectable()
export class SistemaService extends GenericService<Sistema> {

  constructor(private http: HttpClient) {
    super('sistemas', http, Sistema);
  }

}
