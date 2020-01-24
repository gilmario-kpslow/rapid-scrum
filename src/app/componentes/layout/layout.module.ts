import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BaseLayoutComponent } from './base-layout/base-layout.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDividerModule } from '@angular/material/divider'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { PainelComponent } from './painel/painel.component'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [BaseLayoutComponent, HeaderComponent, FooterComponent, PainelComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTableModule,
    MatTooltipModule

  ],
  exports: [
    BaseLayoutComponent,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTooltipModule,
    PainelComponent
]
})
export class LayoutModule { }
