import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { SegurancaService } from '../seguranca/seguranca.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private store: SegurancaService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const logado = this.store.tokenIsValido()
        if (!logado) {
            this.router.navigate(['/login'])
        }
        console.log(typeof logado)
        return logado
  }
}
