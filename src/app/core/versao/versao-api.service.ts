import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { VersaoApi } from './versao-api.model';
export class VersaoApiService {
  url = environment.api
  constructor(private http: HttpClient) {}

  getVersao() {
    return this.http.get<VersaoApi>(`${this.url}/healt`)
  }
}
