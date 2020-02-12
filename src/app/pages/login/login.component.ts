import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../../core/seguranca/login.service';
import { SegurancaService } from '../../core/seguranca/seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private build: FormBuilder, private loginService: LoginService, private segurancaService: SegurancaService) {
    this.form = this.build.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {

  }

  login(): void {
    this.loginService.logar(this.form.value.username, this.form.value.password).subscribe(u => {
      this.segurancaService.setUsuarioLogado(u)
    })
  }

}
