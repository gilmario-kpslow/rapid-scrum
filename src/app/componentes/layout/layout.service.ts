import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class LayoutService {

  showMenu = new EventEmitter()
  toogleEvent = new EventEmitter()
  constructor() { }

  toogle() {
    this.toogleEvent.emit()
  }
}
