import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
export class FuefukiRoutingModule {
}
