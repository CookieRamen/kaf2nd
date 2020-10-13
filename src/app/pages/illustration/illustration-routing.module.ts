import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IllustrationComponent} from './illustration.component';

const routes: Routes = [
  {
    path: '',
    component: IllustrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllustrationRoutingModule { }
