import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material';

/**
 * Componente dialogo
 *
 * @example
 * chamarDialogoConfirmacao () {
 *    this.dialogoService.confirmacao(
 *   'Titulo Confirmação ',
 *   'Mensagem de confirmação',
 *   'Sim',
 *   'Não'
 *  ).subscribe(res => this.resultado = res);
 * }
 */
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  /**
   * Define o valor do titulo
   */
  titulo: string;

  /**
   * Define o valor da mensagem
   */
  mensagem: string;

  /**
   * Define o valor e esconder/mostrar botaoOk
   */
  botaoOk: any;

  /**
   * Define o valor e esconder/mostrar botaoSim
   */
  botaoSim: any;

  /**
   * Define o valor e esconder/mostrar botaoNao
   */
  botaoNao: any;

  /**
   * Define se é uma ação irreversível
   */
  perigo: boolean;

  /**
   * Cria uma instancia do DialogoComponent.
   */
  constructor(public dialogRef: MatDialogRef<DialogoComponent>) {}
}
