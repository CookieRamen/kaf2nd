import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BakudanRoutingModule} from './bakudan-routing.module';
import {BakudanComponent} from './bakudan.component';


@NgModule({
  declarations: [BakudanComponent],
  imports: [
    CommonModule,
    BakudanRoutingModule
  ]
})
export class BakudanModule {
}
