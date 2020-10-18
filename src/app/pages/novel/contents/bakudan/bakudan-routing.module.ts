import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BakudanComponent} from './bakudan.component';

const routes: Routes = [
  {
    path: '',
    component: BakudanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakudanRoutingModule {
}
