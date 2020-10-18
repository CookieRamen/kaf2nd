import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../../service/metadata.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  metadata = {
    title: '小説 | 花譜弐周年。',
    description: '花譜弐周年を記念した有志による小説',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー,二次創作,ノベル,小説',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };

  constructor(
    private metaService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
  }

}
