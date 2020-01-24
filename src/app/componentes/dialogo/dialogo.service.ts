import { DialogoComponent } from './../dialogo/dialogo.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {

 /**
  * Criar uma instancia do DialogoService.
  */
  constructor(public dialog: MatDialog) {}

  /**
   *  Classe que chama o dialogo confirmação passando os valores dos parâmetros titulo, mensagem, botaoSim e botaoNao
   *
   * Observavel disponível que aguarda as resposta após fechamento do dialogo
   */
  confirmacao(titulo: string, mensagem: string, botaoSim = 'Sim', botaoNao = 'Não', perigo = false): Observable<any> {

    let dialogoRef: MatDialogRef<DialogoComponent>;
    dialogoRef = this.dialog.open(DialogoComponent);
    dialogoRef.componentInstance.titulo = titulo;
    dialogoRef.componentInstance.mensagem = mensagem;
    dialogoRef.componentInstance.botaoSim = botaoSim;
    dialogoRef.componentInstance.botaoNao = botaoNao;
    dialogoRef.componentInstance.perigo = perigo;

    return dialogoRef.afterClosed();
  }

  /**
   *  Classe que chama o dialogo confirmação passando os valores dos parâmetros titulo, mensagem e botaoOk
   *
   * Observavel disponível que aguarda as resposta após fechamento do dialogo
   */
  informacao (titulo: string, mensagem: string, botaoOk = 'Ok'): Observable<any> {

      let dialogoRef: MatDialogRef<DialogoComponent>;
      dialogoRef = this.dialog.open(DialogoComponent);
      dialogoRef.componentInstance.titulo = titulo;
      dialogoRef.componentInstance.mensagem = mensagem;
      dialogoRef.componentInstance.botaoOk = botaoOk;
      return dialogoRef.afterClosed();
  }

  /**
   * Classe que chama o template passando passando componente
   *
   */
  template(component, config: MatDialogConfig = {}): Observable<any> {

    let dialogoRef: MatDialogRef<any>;
    dialogoRef = this.dialog.open(component, config);
    return dialogoRef.afterClosed();
  }

  closeAll() {
    this.dialog.closeAll();
  }
}
