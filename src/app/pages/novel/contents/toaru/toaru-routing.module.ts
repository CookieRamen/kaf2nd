import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToaruComponent} from './toaru.component';

const routes: Routes = [
  {
    path: '',
    component: ToaruComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToaruRoutingModule {
}
