import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoaderService {

    loadEvent = new EventEmitter();
    contador = 0;
    show() {
        this.contador += 1;
        this.loadEvent.emit(true);
    }

    hide() {
        this.contador -= 1;
        if (this.contador <= 0) {
            this.loadEvent.emit(false);
            this.contador = 0;
        }
    }

}
