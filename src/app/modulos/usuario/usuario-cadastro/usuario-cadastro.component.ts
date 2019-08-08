import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UsuarioService } from '../../../core/usuario/usuario.service';
import { NotificadorService } from '../../../core/comuns/notificador.service';
import { Usuario } from '../../../core/usuario/usuario';

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
      sobrenome: formBuilder.control('', [Validators.required, Validators.maxLength(40)]),
      email: formBuilder.control('', [Validators.required, Validators.maxLength(255), Validators.email]),
      username: formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),

    })
   }

  ngOnInit() {
  }

  salvar() {
    try {
      this.validar(this.form)
      this.service.salvar(this.form.value).subscribe(entity => this.sucesso(entity))
    } catch (e) {
      this.notificadorService.notificar(e)
    }
  }

  sucesso(entity: Usuario) {
      this.notificadorService.notificar("Salvo com sucesso")
  }

  validar(form: FormGroup): void {
    if (!form.valid) {
      Object.keys(form.controls).forEach(k => form.controls[k].markAsTouched())
      throw new Error("Campos invalidos encontrados")
    }
  }

  validarControle(key: string): boolean {
    return this.form.controls[key].invalid
  }

  getErros(key: string): string {
    const erros = Object.keys(this.form.controls[key].errors)
    return this.getMensagemErro(erros)
  }

  private getMensagemErro(erro: string[]): string {
    let mensagem = ''
     erro.forEach((b ) => {
      switch (b) {
        case 'required': mensagem = `${mensagem} Campo obrigatorio.`
          break
        case 'maxlength': mensagem = `${mensagem} O campo deve conter no maximo x caracteres`
          break
        case 'minlength': mensagem = `${mensagem} O campo deve conter no maximo x caracteres`
          break
        case 'email': mensagem = `${mensagem} Por favor informe um email valido.`
          break
     }
    })
    return mensagem
  }


}
