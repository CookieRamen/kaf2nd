import { Component, OnInit } from '@angular/core';
import {MetadataService} from '../service/metadata.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  metadata = {
    title: 'index',
    description: 'ページの説明',
    keywords: '検索用キーワード',
    image: 'ページの画像URL',
    type: 'article',
    url: window.location.href,
    index: true
  };

  constructor(
    private metaService: MetadataService
  ) { }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
  }

}
