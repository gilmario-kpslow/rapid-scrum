import { Component, OnInit } from '@angular/core';

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
      console.log(e);
      console.log("open");
    }

    socket.onmessage = (e) => {
      console.log(e);
    }

    socket.onerror = (er) => {
      console.log(er);
    }
  }

}
