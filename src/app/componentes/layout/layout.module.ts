import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconesModule } from '../icones/icones.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [BaseLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    IconesModule,
    MatListModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTableModule
  ],
  exports: [BaseLayoutComponent, MatCardModule, MatButtonModule, MatIcon]
})
export class LayoutModule { }
