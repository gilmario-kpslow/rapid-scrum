import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs'
import { SegurancaService } from './seguranca.service'
import { AplicacaoService } from '../applicacao/aplicacao.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private segurancaService: SegurancaService, private router: Router, private appService: AplicacaoService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (this.segurancaService.isLogado) {
      this.router.navigate(this.appService.menuConsts.dashboard.rota)
      return false
    }
    return true
  }

}
