import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NovelRoutingModule} from './novel-routing.module';
import {NovelComponent} from './novel.component';
import {DeaiComponent} from './contents/deai/deai.component';


@NgModule({
  declarations: [NovelComponent, DeaiComponent],
  imports: [
    CommonModule,
    NovelRoutingModule
  ]
})
export class NovelModule {
}
