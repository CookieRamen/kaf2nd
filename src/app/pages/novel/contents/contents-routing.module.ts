import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeaiComponent} from './deai/deai.component';
import {ContentsComponent} from './contents.component';

const routes: Routes = [
  {
    path: '',
    component: ContentsComponent,
    children: [
      {
        path: 'deai',
        component: DeaiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
