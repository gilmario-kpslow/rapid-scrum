import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { ModuloService } from '../modulo.service'
import { Modulo } from '../modulo'
import { SistemaService } from '../../sistema/sistema.service'
import { Sistema } from '../../sistema/sistema'
import { error } from '../../../core/util/log_util';

@Component({
  selector: 'app-modulo-create',
  templateUrl: './modulo-create.component.html',
  styleUrls: ['./modulo-create.component.scss']
})
export class ModuloCreateComponent implements OnInit {

  form: FormGroup
  sistemas: Sistema[]

  constructor(
    private formBuilder: FormBuilder,
    private moduloService: ModuloService,
    private sistemaService: SistemaService,
    private router: Router

  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required, Validators.minLength(3)],
      descricao: ['', Validators.required],
      sistema: ['', Validators.required]
    })

    this.sistemaService.listar().subscribe(
      sistemas => this.sistemas = sistemas,
      err => error(err)
    )
  }

  save() {
    const novoModulo: Modulo = this.form.getRawValue() as Modulo
    this.moduloService.salvar(novoModulo).subscribe(
      () => this.router.navigate(['../modulo']),
      err => error(err)
    )
  }

  voltar() {
    this.router.navigate(['../modulo'])
  }

}
