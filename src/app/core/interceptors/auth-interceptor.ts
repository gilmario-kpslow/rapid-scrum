import { Injectable, Injector } from "@angular/core"
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SegurancaService } from '../seguranca/seguranca.service'

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const store =  this.injector.get(SegurancaService)
        console.log(store)
        if (store.isLogado) {
            const requestAuth = req.clone({ setHeaders: { 'Authorization': store.getToken() } })
            return next.handle(requestAuth)
        }
        return next.handle(req)
    }

}
