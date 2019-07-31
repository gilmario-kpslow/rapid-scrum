import { GenericService } from '../generics/generic.service'
import { Usuario } from './usuario'
import { Injector } from '@angular/core'

export class UsuarioService extends GenericService<Usuario> {

  constructor(private injector: Injector) {
    super('usuario', injector, Usuario)
  }
}
