import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  }, {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule)
  }, {
    path: 'illustration',
    loadChildren: () => import('./pages/illustration/illustration.module').then(m => m.IllustrationModule)
  }, {
    path: '**',
    loadChildren: () => import('./pages/error/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
