import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
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
