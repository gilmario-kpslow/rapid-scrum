import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { SistemaCreateComponent } from './sistema-create/sistema-create.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaService } from './sistema.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    SistemaRoutingModule
  ],
  declarations: [SistemaListComponent, SistemaCreateComponent],
  providers: [SistemaService]
})
export class SistemaModule { }
