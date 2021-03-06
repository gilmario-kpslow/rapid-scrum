import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../../core/seguranca/login.service'
import { SegurancaService } from '../../core/seguranca/seguranca.service'
import { processForm } from '../../componentes/util/form-utils'
import { AplicacaoService } from '../../core/applicacao/aplicacao.service'
import { NotificadorService } from '../../core/comuns/notificador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private build: FormBuilder, private loginService: LoginService, private segurancaService: SegurancaService,
    private appService: AplicacaoService, private notificador: NotificadorService, private router: Router) {
    this.form = this.build.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {

  }

  login(): void {
    processForm(this.form, () => {
      this.loginService.logar(this.form.value.username, this.form.value.password).subscribe(u => {
        this.segurancaService.setUsuarioLogado(u)
        this.appService.mountMenu()
        this.router.navigate(['/'])
      })
    })
  }

  lamentavel() {
    this.notificador.notificar("Te vira", "Lamentavel")
  }

}
