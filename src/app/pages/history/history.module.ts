import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history.component';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    VirtualScrollerModule
  ]
})
export class HistoryModule {
}
