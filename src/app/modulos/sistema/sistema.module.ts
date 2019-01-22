import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { SistemaCreateComponent } from './sistema-create/sistema-create.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaService } from './sistema.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    SistemaRoutingModule
  ],
  declarations: [SistemaListComponent, SistemaCreateComponent],
  providers: [SistemaService]
})
export class SistemaModule { }
