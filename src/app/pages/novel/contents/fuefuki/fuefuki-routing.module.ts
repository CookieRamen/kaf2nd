import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuefukiComponent} from './fuefuki.component';

const routes: Routes = [
  {
    path: '',
    component: FuefukiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuefukiRoutingModule { }
