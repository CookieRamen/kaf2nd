import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: string;
  image: string;
  index: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
  }

  setMeta(metaData: Metadata): void {
    this.titleService.setTitle(metaData.title);
    this.metaService.updateTag({name: 'description', content: metaData.description});
    this.metaService.updateTag({name: 'keywords', content: metaData.keywords});
    this.metaService.updateTag({property: 'og:url', content: metaData.url});
    this.metaService.updateTag({property: 'og:type', content: metaData.type});
    this.metaService.updateTag({property: 'og:title', content: metaData.title});
    this.metaService.updateTag({property: 'og:description', content: metaData.description});
    this.metaService.updateTag({property: 'og:image', content: metaData.image});
    if (!metaData.index) {
      this.metaService.updateTag({property: 'robots', content: 'noindex'});
    } else {
      this.metaService.removeTag('property=\'robots\'');
    }
  }
}
