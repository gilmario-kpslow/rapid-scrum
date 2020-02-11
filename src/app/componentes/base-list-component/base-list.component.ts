import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sort, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Coluna } from 'src/app/core/generics/coluna.model';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html'
})
export class BaseListComponent implements OnInit {
  @Output() excluirEvent = new EventEmitter();
  @Output() editarEvent = new EventEmitter();
  @Output() limparEvent = new EventEmitter();
  @Output() consultaEvent = new EventEmitter();
  @Input() colunas: Coluna[];
  @Input() titulo: string;
  @Input() enableActions = true;
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  colunasExibidas: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit() {
    this.colunasExibidas = [];
    this.colunas.forEach(c => this.colunasExibidas.push(c.campo));
    this.colunasExibidas.push('#');

  }

  public setData(data: any[]) {
    this.dataSource.data = data;
    this.dataSource.connect();
  }

  efetuarConsulta() {
    this.consultaEvent.emit();
  }

  processaColuna(domain: any, coluna: Coluna) {
    const colunas = coluna.campo.split(`\.`);
    if (domain && colunas.length > 0) {
      const valor = this.trataColuna(domain, colunas, 0);
      return coluna.pipe ? coluna.pipe.transform(valor, coluna.parametros) : valor;
    }
    return '';
  }

  private trataColuna(domain: any, colunas: string[], i: number) {
    const valor = domain[colunas[i]];
    return (valor && colunas.length > i + 1) ? this.trataColuna(valor, colunas, i + 1) : valor;
  }

  limpar() {
    this.limparEvent.emit();
  }

  editar(model: any) {
    this.editarEvent.emit(model);
  }

  excluir(model: any) {
    this.excluirEvent.emit(model);
  }
}
