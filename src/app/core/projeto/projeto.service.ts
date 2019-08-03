import { GenericService } from '../generics/generic.service'
import { Injector, Injectable } from '@angular/core'
import { Projeto } from './projeto.model'

@Injectable()
export class ProjetoService extends GenericService<Projeto> {
  constructor(injector: Injector) {
    super('projeto', injector, Projeto)
  }
}
