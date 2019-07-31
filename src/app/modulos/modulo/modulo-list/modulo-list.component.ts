import { Component, OnInit, ViewChild } from '@angular/core'
import { Modulo } from '../modulo'
import { MatTableDataSource, MatPaginator } from '@angular/material'
import { ModuloService } from '../modulo.service'

@Component({
  selector: 'app-modulo-list',
  templateUrl: './modulo-list.component.html',
  styleUrls: ['./modulo-list.component.scss']
})
export class ModuloListComponent implements OnInit {

  modulos: Modulo[]
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'sistema', 'star']
  dataSource = new MatTableDataSource<Modulo>(this.modulos)
  @ViewChild(MatPaginator, null) paginator: MatPaginator

  constructor(
    private moduloService: ModuloService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator
    this.moduloService.listar().subscribe(modulos => this.modulos = modulos)
  }

  remover(id: number) {
    this.moduloService.remover(id).subscribe(() => {
      this.moduloService.listar().subscribe(modulos => this.modulos = modulos)
    })
  }

}

