import { Sistema } from './../sistema';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SistemaService } from '../sistema.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  sistemas: Sistema[];
  displayedColumns: string[] = ['id', 'nome', 'sigla', 'descricao', 'star'];
  dataSource = new MatTableDataSource<Sistema>(this.sistemas);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private sistemaService: SistemaService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.sistemaService.listar().subscribe(sistemas => this.sistemas = sistemas);
  }

}
