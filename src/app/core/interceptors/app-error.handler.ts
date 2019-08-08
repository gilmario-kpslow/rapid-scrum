import { Injectable, Injector, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificadorService } from '../comuns/notificador.service';
import { SegurancaService } from '../seguranca/seguranca.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(
        private zone: NgZone,
        private injector: Injector) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        const router = this.injector.get(Router);
        const notificador = this.injector.get(NotificadorService)
        const store = this.injector.get(SegurancaService)
        if (errorResponse instanceof HttpErrorResponse) {
            console.log(errorResponse)
            const message = errorResponse.error ? errorResponse.error : undefined
            console.log(message[0])
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 0:
                        notificador.notificar('O Servidor não respondeu. Verifique sua conexao: ' + JSON.parse(message), "Erro");
                        break;
                    case 401:
                        router.navigate(['/login']);
                        store.remove();
                        notificador.notificar('Realize seu login novamente', "Erro");
                        break;
                    case 403:
                        router.navigate(['/naoautorizado']);
                        break;
                    default:
                        notificador.notificar(message[0] || 'Erro interno por favor, tente novamente mais tarde!');
                        break;
                }
            });
        }
        super.handleError(errorResponse);
    }

}
