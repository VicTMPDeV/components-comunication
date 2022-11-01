import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentMessage!: string;
  @Output() public emitSonMessage2: EventEmitter<string> = new EventEmitter<string>();
  public sonMessage2: string = 'HOLA PAPA! TE SALUDA TAMBIÉN TU NIETO';
  public childName: string = 'SOY EL COMPONENTE HIJO';
  public sonMessage!: string;
  public serviceMessage!: string;
  
  constructor(public comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.emitSonMessage2.emit(this.sonMessage2);
    this.serviceMessage = this.comunicationService.getMensajeHijo();
    this.comunicationService.setMensajePadre('HOLA PARE MIO!!!');
  }

  public receiveChildEvent(event: string): void {
    this.sonMessage = event;
  }

}
