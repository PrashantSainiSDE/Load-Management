import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagManagementComponent } from './tag-management/tag-management.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    TagManagementComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class TagsModule { }
