import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  form: FormGroup
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nome: formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      sobrenome: formBuilder.control('')
    })
   }

  ngOnInit() {
  }

}
