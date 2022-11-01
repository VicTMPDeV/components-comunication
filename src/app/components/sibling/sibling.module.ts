import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiblingComponent } from './sibling.component';



@NgModule({
  declarations: [
    SiblingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiblingComponent
  ]
})
export class SiblingModule { }
