import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { LoginService } from '../../core/seguranca/login.service';
import { SegurancaService } from '../../core/seguranca/seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group: FormGroup

  constructor(private build: FormBuilder, private loginService: LoginService, private segurancaService: SegurancaService) {
    this.group = this.build.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {

  }

  login(): void {
    this.loginService.logar(this.group.value.username, this.group.value.password).subscribe(u => {
      this.segurancaService.setUsuarioLogado(u)
    })
  }

}
