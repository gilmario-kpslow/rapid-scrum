import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  mobileQuery: MediaQueryList
  open = true
  mode = 'side'
  fixed = false
  mobile: MediaQueryList
  @ViewChild(MatSidenav, null) nav: MatSidenav

  constructor(media: MediaMatcher, private service: LayoutService) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)')
    this.mobileQuery.onchange = ve => this.verifiMedia()
    this.mobile = media.matchMedia('(min-width: 576px)')

  }

  ngOnInit() {
    this.verifiMedia()
  }

  toogleNav() {
    this.nav.toggle()
  }

  private verifiMedia() {
    this.open = this.mobileQuery.matches
    //this.isMobile = this.mobileQuery.matches
    //this.fixed = !this.mobileQuery.matches
    this.mode = !this.mobileQuery.matches ? 'over' : 'side'
  }



}
