import { Sistema } from './../sistema';
import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  sistemas: Sistema[];
  displayedColumns: string[] = ['id', 'nome', 'sigla', 'descricao'];

  constructor(
    private sistemaService: SistemaService
  ) { }

  ngOnInit() {
    this.sistemaService.findAll().subscribe(sistemas => this.sistemas = sistemas);
  }

}
