import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeaiComponent} from './contents/deai/deai.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  }, {
    path: 'contents',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovelRoutingModule { }
