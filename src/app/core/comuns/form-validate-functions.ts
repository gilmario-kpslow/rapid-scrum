import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Injector } from '@angular/core'
import { fn } from '@angular/compiler/src/output/output_ast';

export class FormValidateFunctions {

  form: FormGroup
  protected fb: FormBuilder
  constructor(private _injector: Injector) {
    this.fb = this._injector.get(FormBuilder)
  }

  validarControle(key: string): boolean {
    return this.getKey(key).invalid
  }

  invalidarControle(key: string): boolean {
    const control = this.getKey(key)
    return control.invalid && control.touched
  }

  getErros(key: string): string {
    const control = this.getKey(key)
    const erros = Object.keys(control.errors)
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

  protected getKey(key: string): FormControl {
    const control = this.form.controls[key]
    if (control) {
      return <FormControl> control
    }
  }
}
