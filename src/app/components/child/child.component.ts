import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
    this.emitSonMessage2.emit(this.sonMessage2);
  }

  public receiveChildEvent(event: string): void {
    this.sonMessage = event;
  }

}
