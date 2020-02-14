import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../layout.service'
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { smaecer, topToDown, slideInAnimation } from '../../../core/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [
    slideInAnimation
  ]

})
export class BaseLayoutComponent implements OnInit {

  mobileQuery: MediaQueryList
  open = true
  mode = 'side'
  fixed = false
  mobile: MediaQueryList
  animation: string
  @ViewChild(MatSidenav, null) nav: MatSidenav

  constructor(media: MediaMatcher, private service: LayoutService, private router: Router) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)')
    this.mobileQuery.onchange = ve => this.verifiMedia()
    this.mobile = media.matchMedia('(min-width: 576px)')

  }

  ngOnInit() {
    this.verifiMedia()

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.animation = event.url
      }
    })
  }

  toogleNav() {
    this.nav.toggle()
  }

  private verifiMedia() {
    this.open = this.mobileQuery.matches
    this.mode = !this.mobileQuery.matches ? 'over' : 'side'
  }

  prepareRoute(outlet: RouterOutlet) {
    return this.animation
  }



}
