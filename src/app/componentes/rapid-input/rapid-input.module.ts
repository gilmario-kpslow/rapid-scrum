import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RapidInputBaseComponent } from './rapid-input-base/rapid-input-base.component'
import { MatInputModule } from '@angular/material'
import { MatIconModule } from '@angular/material/icon'
import { RapidInputValidateComponent } from './rapid-input-validate/rapid-input-validate.component'



@NgModule({
  declarations: [RapidInputBaseComponent, RapidInputValidateComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    RapidInputBaseComponent,
    RapidInputValidateComponent
  ]
})
export class RapidInputModule { }
