import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  siblingData: any = {
    name: 'HERMANO',
    age: 15
  }; 

  @Input() public parentMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
