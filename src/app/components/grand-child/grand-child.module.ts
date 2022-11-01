import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandChildComponent } from './grand-child.component';



@NgModule({
  declarations: [
    GrandChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GrandChildComponent
  ]
})
export class GrandChildModule { }
