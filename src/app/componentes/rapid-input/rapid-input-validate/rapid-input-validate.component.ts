import { Component, OnInit, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-rapid-input-validate',
  templateUrl: './rapid-input-validate.component.html',
  styleUrls: ['./rapid-input-validate.component.scss']
})
export class RapidInputValidateComponent implements OnInit {

  @Input() control: FormControl
  constructor() { }

  ngOnInit() {
  }
  validarControle(): boolean {
    return this.control.invalid
  }

  invalidarControle(): boolean {
    return this.control.invalid && this.control.touched
  }

  getErros(): string {
    const erros = Object.keys(this.control.errors)
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
