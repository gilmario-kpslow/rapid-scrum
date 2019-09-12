import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-rapid-input-base',
  templateUrl: './rapid-input-base.component.html',
  styleUrls: ['./rapid-input-base.component.scss']
})
export class RapidInputBaseComponent implements OnInit {

  @ContentChild(FormControlName,{static: false}) control: FormControlName
  constructor() { }

  ngOnInit() {
  }

  validarControle(key: string): boolean {
    return this.control.invalid
  }

  inicializado() {
    return this.control !== undefined
  }

  invalidarControle(key: string): boolean {
    return this.control.invalid && this.control.touched
  }

  getErros(key: string): string {
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
