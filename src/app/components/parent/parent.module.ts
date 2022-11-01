import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent.component';
import { ChildModule } from '../child/child.module';
import { SiblingModule } from '../sibling/sibling.module';


@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ChildModule,
    SiblingModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule { }
