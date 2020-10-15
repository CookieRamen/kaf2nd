import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IllustrationRoutingModule} from './illustration-routing.module';
import {IllustrationComponent} from './illustration.component';
import {IImageLoaderOptions, NgxProgressiveImageLoaderModule} from 'ngx-progressive-image-loader';


@NgModule({
  declarations: [IllustrationComponent],
  imports: [
    CommonModule,
    IllustrationRoutingModule,
    NgxProgressiveImageLoaderModule.forRoot({
      rootMargin: '30px',
      threshold: 0.1,
      filter: 'blur(3px) drop-shadow(0 0 0.75rem crimson)'
    } as IImageLoaderOptions)
  ]
})
export class IllustrationModule {
}
