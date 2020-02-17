import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UsuarioService } from '../../../core/usuario/usuario.service';
import { NotificadorService } from '../../../core/comuns/notificador.service';
import { Usuario } from '../../../core/usuario/usuario';
import { processForm } from '../../../componentes/util/form-utils';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  form: FormGroup
  constructor(formBuilder: FormBuilder, private notificadorService: NotificadorService, private service: UsuarioService) {
    this.form = formBuilder.group({
      nome: formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      nomeCompleto: formBuilder.control('', [Validators.required, Validators.maxLength(40)]),
      email: formBuilder.control('', [Validators.required, Validators.maxLength(255), Validators.email]),
      username: formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    })
   }

  ngOnInit() {
  }

  salvar() {
    processForm(this.form, () => {
      this.service.salvar(this.form.value).subscribe(entity => this.sucesso(entity))
    })
  }

  sucesso(entity: Usuario) {
      this.notificadorService.notificar("Salvo com sucesso")
  }

}
