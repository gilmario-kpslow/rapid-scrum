import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormValidateFunctions } from '../../../core/comuns/form-validate-functions';
import { processForm } from '../../../componentes/util/form-utils';
import { NotificadorService } from '../../../core/comuns/notificador.service';
import { Router } from '@angular/router';
import { ProjetoService } from '../../../core/projeto/projeto.service';

@Component({
  selector: 'app-projeto-criar',
  templateUrl: './projeto-criar.component.html',
  styleUrls: ['./projeto-criar.component.scss']
})
export class ProjetoCriarComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder, private notificadorService: NotificadorService, private service: ProjetoService,
    private router: Router) {
    this.form = fb.group({
      nome: fb.control('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      sigla: fb.control('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      descricao: fb.control('', [Validators.maxLength(2048)])
    })
  }

  salvar() {
    processForm(this.form, () => {
      this.service.salvar(this.form.value).subscribe(entity => {
        this.notificadorService.notificar("Salvo com sucesso")
        this.router.navigate([`/`, 'projeto'])
      })
    })
  }

  ngOnInit() {
  }

}
