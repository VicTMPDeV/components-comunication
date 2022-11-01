import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  @Input() public grandFatherMessage!: string;

  @Output() public emitSonMessage: EventEmitter<string> = new EventEmitter<string>();
  
  public sonMessage: string = 'HOLA PAPA!';

  constructor() { }

  ngOnInit(): void {
    this.emitSonMessage.emit(this.sonMessage);
  }

}
