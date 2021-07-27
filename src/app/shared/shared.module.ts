
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from './components/lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [
    LoremIpsumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoremIpsumComponent
  ]
})
export class SharedModule { }
