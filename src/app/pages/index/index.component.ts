import {Component, OnDestroy, OnInit} from '@angular/core';
import {MetadataService} from '../../service/metadata.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  metadata = {
    title: '花譜弐周年。',
    description: '花譜弐周年を記念した有志による非公式サイト',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー',
    image: '/assets/img/icon.png',
    type: 'website',
    url: window.location.href,
    index: true
  };

  constructor(
    private metaService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
    document.body.className = 'top';
  }

  ngOnDestroy(): void {
    document.body.removeAttribute('class');
  }

}
