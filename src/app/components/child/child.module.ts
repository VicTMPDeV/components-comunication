import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { GrandChildModule } from '../grand-child/grand-child.module';



@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    GrandChildModule
  ],
  exports: [
    ChildComponent
  ]
})
export class ChildModule { }
