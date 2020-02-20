import { Injectable, Injector, NgZone, ErrorHandler } from '@angular/core'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { NotificadorService } from '../comuns/notificador.service'
import { SegurancaService } from '../seguranca/seguranca.service'

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(
        private zone: NgZone,
        private injector: Injector) {
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        const router = this.injector.get(Router)
        const notificador = this.injector.get(NotificadorService)
        const store = this.injector.get(SegurancaService)
        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error ? errorResponse.error : undefined
            this.zone.run(() => {
              switch (errorResponse.status) {
                  case 0:
                      notificador.notificar('O Servidor não respondeu. Verifique sua conexao.')
                      break
                  case 400:
                    notificador.notificar(message.mensagem)
                      break
                  case 401:
                    notificador.notificar('Sessao expirada!')
                    store.remove()
                      router.navigate(['/login'])
                      break
                  case 403:
                    notificador.notificar('Acesso nao autorizado')
                      router.navigate(['/naoautorizado'])
                      break
                  case 406:
                    if (message) {
                      notificador.notificar(message.mensagem)
                    } else {
                      notificador.notificar('Erro interno por favor, tente novamente mais tarde!')
                    }
                      break
                  default:
                    notificador.notificar('Erro interno por favor, tente novamente mais tarde!')
                    break
              }
          })
      }
      super.handleError(errorResponse)
    }

}
