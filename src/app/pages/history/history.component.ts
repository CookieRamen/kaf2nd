import {Component, OnInit} from '@angular/core';

interface History {
  date: string;
  title: string;
  desc: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  /*
    typeの種類
    Twitter埋め込み: twitter
    YouTube埋め込み: youtube
    テキストのみ: text
    その他: other
  */
  history: History[] = [
    {
      date: '2000/01/01',
      title: 'サンプル',
      desc: '"吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。<br>何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。<br>吾輩はここで始めて人間というものを見た。<br>しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。<br>この書生というのは時々我々を捕えて煮て食うという話である。"',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=JxcKj2dMZM8'
    }, {
      date: '2000/01/01',
      title: 'サンプル',
      desc: '"吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。<br>何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。<br>吾輩はここで始めて人間というものを見た。<br>しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。<br>この書生というのは時々我々を捕えて煮て食うという話である。"',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=JxcKj2dMZM8'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
