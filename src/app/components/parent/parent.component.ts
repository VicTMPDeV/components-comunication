import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public parentName: string = 'SOY EL COMPONENTE PADRE';
  public parentToChildMessage: string = 'SOY TU PADRE';
  public sonMessage!: string;
  public serviceMessage!: string;
  public son2Message!: string;

  constructor(private _comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.serviceMessage = this._comunicationService.messageForParent;
    console.log(this.serviceMessage);
    this._comunicationService.setMensajeHijo('HOLA HIJO DESDE EL SERVICIO');
    this.son2Message = this._comunicationService.getMensajePadre();
  }

  public receiveChildEvent2(event: string): void {
    this.sonMessage = event;
  }


}
