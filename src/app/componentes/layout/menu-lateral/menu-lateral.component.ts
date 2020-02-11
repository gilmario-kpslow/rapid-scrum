import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  menu: MenuItem[]
  constructor() { }

  ngOnInit() {
  }

}
