import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllustrationRoutingModule } from './illustration-routing.module';
import { IllustrationComponent } from './illustration.component';


@NgModule({
  declarations: [IllustrationComponent],
  imports: [
    CommonModule,
    IllustrationRoutingModule
  ]
})
export class IllustrationModule { }
