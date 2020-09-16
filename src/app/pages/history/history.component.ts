import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

interface History {
  date: string;
  title: string;
  desc: string;
  type: string;
  url: string;
}

export class HistoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
