import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { FormControlName, FormControl, FormGroup } from '@angular/forms';
import { info } from '../../../core/util/log_util';

@Component({
  selector: 'app-rapid-input-base',
  templateUrl: './rapid-input-base.component.html',
  styleUrls: ['./rapid-input-base.component.scss']
})
export class RapidInputBaseComponent implements OnInit {

  // @ContentChild(FormControl, {static: true}) control: FormControl
  @Input() name: string
  @Input() control: any
  @Input() form: FormGroup
  constructor() { }

  ngOnInit() {
    this.control = this.form.controls[this.name]
    info(this.control)
  }

  validarControle(): boolean {
    return this.control.invalid
  }

  inicializado() {
    info(this.control !== undefined)
    return this.control !== undefined
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
