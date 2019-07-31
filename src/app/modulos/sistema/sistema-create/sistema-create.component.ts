import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { SistemaService } from '../sistema.service';
import { Sistema } from './../sistema';

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrls: ['./sistema-create.component.scss']
})
export class SistemaCreateComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private sistemaService: SistemaService,
    private router: Router,
    ) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sigla: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  save() {
    const novoSistema: Sistema = this.form.getRawValue() as Sistema;
    this.sistemaService.save(novoSistema).subscribe(
      () => this.router.navigate(['../sistema']),
      err => console.log(err)
    );
  }

  voltar() {
    this.router.navigate(['../sistema']);
  }

}
