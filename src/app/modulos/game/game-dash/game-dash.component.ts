import { Component, OnInit } from '@angular/core';
import { info, error } from '../../../core/util/log_util';

@Component({
  selector: 'app-game-dash',
  templateUrl: './game-dash.component.html',
  styleUrls: ['./game-dash.component.scss']
})
export class GameDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const socket = new WebSocket("ws://localhost:8080/game");
    socket.binaryType = "arraybuffer"
    socket.onopen = (e) => {
      info(e);
      info("open");
    }

    socket.onmessage = (e) => {
      info(e);
    }

    socket.onerror = (er) => {
      error(er);
    }
  }

}
