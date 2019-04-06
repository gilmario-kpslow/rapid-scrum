import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRoutingModule } from './modulo-routing.module';
import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { ModuloCreateComponent } from './modulo-create/modulo-create.component';
import { ModuloService } from './modulo.service';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [ModuloListComponent, ModuloCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    ModuloRoutingModule
  ],
  providers: [ModuloService]
})
export class ModuloModule {}
