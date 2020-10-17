import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentsComponent} from './contents.component';

const routes: Routes = [
  {
    path: '',
    component: ContentsComponent,
    children: [
      {
        path: '出会い',
        loadChildren: () => import('./deai/deai.module').then(m => m.DeaiModule)
      }, {
        path: '生き解を求めて',
        loadChildren: () => import('./ikikai/ikikai.module').then(m => m.IkikaiModule)
      }, {
        path: 'とある少女の秋',
        loadChildren: () => import('./toaru/toaru.module').then(m => m.ToaruModule)
      }, {
        path: '増えたのはローソクと',
        loadChildren: () => import('./fuetanoha/fuetanoha.module').then(m => m.FuetanohaModule)
      }, {
        path: '笛吹きの預言',
        loadChildren: () => import('./fuefuki/fuefuki.module').then(m => m.FuefukiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule {
}
