import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../../service/metadata.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  metadata = {
    title: '404 Not Found. | 花譜弐周年。',
    description: 'ページが見つかりませんでした',
    keywords: '',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: false
  };


  constructor(
    private metaService: MetadataService,
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
  }

}
