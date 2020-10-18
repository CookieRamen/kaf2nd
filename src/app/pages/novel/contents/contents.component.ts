import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {MetadataService} from '../../../service/metadata.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  metadata = {
    // tslint:disable-next-line:max-line-length
    title: '小説:' + decodeURI(window.location.href.split('/').filter(e => Boolean(e))[window.location.href.split('/').filter(e => Boolean(e)).length - 1]) + ' | 花譜弐周年。',
    description: '花譜弐周年を記念した有志による小説',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー,二次創作,ノベル,小説',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };

  constructor(
    private el: ElementRef,
    private metaService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
    setTimeout(() => {
      document.getElementsByClassName('textbox')[0].scrollIntoView(true);
    }, 200);
  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event): void {
    if (event.deltaX === 0) {
      event.stopPropagation();
      event.preventDefault();
      document.getElementsByClassName('container')[0].scrollBy(-event.deltaY, 0);
    }
  }

}
