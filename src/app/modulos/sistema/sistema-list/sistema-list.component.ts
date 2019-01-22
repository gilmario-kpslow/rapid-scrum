import { Sistema } from './../sistema';
import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../sistema.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  sistemas: Sistema[];
  displayedColumns: string[] = ['select', 'id', 'nome', 'sigla', 'descricao'];
  dataSource = new MatTableDataSource<Sistema>(this.sistemas);
  selection = new SelectionModel<Sistema>(true, []);

  constructor(
    private sistemaService: SistemaService
  ) { }

  ngOnInit() {
    this.sistemaService.findAll().subscribe(sistemas => this.sistemas = sistemas);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
