import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public parentName: string = 'SOY EL COMPONENTE PADRE';
  public parentToChildMessage: string = 'SOY TU PADRE';
  public sonMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public receiveChildEvent2(event: string): void {
    this.sonMessage = event;
  }

}
