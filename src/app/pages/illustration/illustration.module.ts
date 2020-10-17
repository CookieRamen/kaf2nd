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
      filter: 'blur(3px)',
      placeholderImageSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
    } as IImageLoaderOptions)
  ]
})
export class IllustrationModule {
}
