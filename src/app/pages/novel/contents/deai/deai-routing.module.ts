import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeaiComponent} from './deai.component';

const routes: Routes = [
  {
    path: '',
    component: DeaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeaiRoutingModule { }
