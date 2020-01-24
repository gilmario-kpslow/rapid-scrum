import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-indicador-erros',
  templateUrl: './indicador-erros.component.html',
  styleUrls: ['./indicador-erros.component.css']
})
export class IndicadorErrosComponent implements OnInit {

  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

  temErroFoiTocado(): boolean {
    return this.control.invalid && this.control.touched;
  }

  getErros(): string {
    return this.getMensagemErro(Object.keys(this.control.errors));
  }

  private getMensagemErro(erro: string[]): string {
    let mensagem = '';
    erro.forEach((b ) => {
      switch (b) {
        case 'required':
          mensagem = 'Campo obrigatorio!';
          break;
        case 'email':
          mensagem = 'Email inválido!';
          break;
        case 'cpfValidador':
          mensagem = 'CPF inválido!';
          break;
        case 'cnpjValidador':
          mensagem = 'CNPJ inválido!';
          break;
        case 'minlength':
          mensagem = `Informe pelo menos ${this.control.errors.minlength.requiredLength} caracteres!`;
          break;
        case 'maxlength':
            mensagem = `Campo maior que o permitido, maximo ${this.control.errors.maxlength.requiredLength} caracteres!`;
            break;
        default: mensagem = `O campo ${b} está ínvalido! `;
     }
    });
    return mensagem;
  }



}
