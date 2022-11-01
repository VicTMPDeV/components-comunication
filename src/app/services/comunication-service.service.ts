import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public messageForParent: string = 'SOY EL MENSAJERO, HOLA PADRE';
  public messageForChild: string = 'SOY EL MENSAJERO, HOLA HIJO';
  public message!: string;
  public messageForFather!: string;

  constructor(){}

  public setMensajeHijo(message: string): void {
    this.message = message;
  }

  public setMensajePadre(message: string): void {
    this.messageForFather = message;
  }

  public getMensajeHijo(): string {
    return this.message;
  }

  public getMensajePadre(): string {
    return this.messageForFather;
  }

}
