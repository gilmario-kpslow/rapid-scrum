import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Sistema } from 'src/app/modulos/sistema/sistema';

const RAPIDSCRUM_API = 'http://localhost:8080';

@Injectable()
export class SistemaService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Sistema[]>(`${RAPIDSCRUM_API}/sistemas`);
  }

  save(novoSistema: Sistema) {
    return this.http.post(`${RAPIDSCRUM_API}/sistemas`, novoSistema);
  }

}
