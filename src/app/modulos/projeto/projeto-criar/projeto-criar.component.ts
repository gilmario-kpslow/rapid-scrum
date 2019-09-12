import { Component, OnInit } from '@angular/core'
import { Projeto } from 'src/app/core/projeto/projeto.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto-criar',
  templateUrl: './projeto-criar.component.html',
  styleUrls: ['./projeto-criar.component.scss']
})
export class ProjetoCriarComponent implements OnInit {

  form: FormGroup
  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      nome: builder.control('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      sigla: builder.control('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      descricao: builder.control('', [Validators.maxLength(2048)])
    })
  }

  ngOnInit() {
  }

}
