import { Injector, Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material"

@Injectable({providedIn: 'root'})
export class NotificadorService {

    constructor(private snacbar: MatSnackBar) {
    }

    notificar(mensagem: string, titulo?: string) {
        this.snacbar.open(mensagem, titulo)
    }
}
