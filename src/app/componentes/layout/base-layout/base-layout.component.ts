import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList
  @ViewChild(MatSidenav, null) nav: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private service: LayoutService) {
    //this.mobileQuery = media.matchMedia('(max-width: 600px)')
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    // this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnInit() {
  }

  _mobileQueryListener(): void {
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener)
  }

  toogleNav() {
    this.nav.toggle()
    // this.service.toogle()

  }



}
