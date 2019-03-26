import { SistemaService } from './../../modulos/sistema/sistema.service'
import { Component, OnInit } from '@angular/core'
import { Sistema } from '../../modulos/sistema/sistema'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sistemas: Sistema[] = [];
  constructor(
    private service: SistemaService
  ) { }

  ngOnInit() {
    this.service.listar().subscribe(lista => this.sistemas = lista);
  }

}
