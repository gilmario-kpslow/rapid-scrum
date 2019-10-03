import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormValidateFunctions } from '../../../core/comuns/form-validate-functions';

@Component({
  selector: 'app-projeto-criar',
  templateUrl: './projeto-criar.component.html',
  styleUrls: ['./projeto-criar.component.scss']
})
export class ProjetoCriarComponent extends FormValidateFunctions implements OnInit {

  form: FormGroup
  constructor(injector: Injector) {
    super(injector)
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      sigla: this.fb.control('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      descricao: this.fb.control('', [Validators.maxLength(2048)])
    })
  }

  ngOnInit() {
  }

}
