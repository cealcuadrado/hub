import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsComponent } from './apps.component';


@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule
  ]
})
export class AppsModule { }
