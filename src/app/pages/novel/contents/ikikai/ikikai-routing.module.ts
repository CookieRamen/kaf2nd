import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IkikaiComponent} from './ikikai.component';

const routes: Routes = [
  {
    path: '',
    component: IkikaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IkikaiRoutingModule {
}
