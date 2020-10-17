import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuetanohaComponent} from './fuetanoha.component';

const routes: Routes = [
  {
    path: '',
    component: FuetanohaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuetanohaRoutingModule { }
