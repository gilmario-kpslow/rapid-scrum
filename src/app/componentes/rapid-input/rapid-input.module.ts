import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapidInputBaseComponent } from './rapid-input-base/rapid-input-base.component';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [RapidInputBaseComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    RapidInputBaseComponent
  ]
})
export class RapidInputModule { }
