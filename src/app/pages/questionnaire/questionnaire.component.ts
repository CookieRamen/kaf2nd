import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../service/metadata.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  metadata = {
    title: 'アンケート | 花譜弐周年。',
    description: '花譜弐周年を記念した有志によるアンケート',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー,二次創作,アンケート',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };

  original = [
    {
      name: 'quiz',
      value: 9
    },
    {
      name: 'そして花になる',
      value: 6
    },
    {
      name: '雛鳥',
      value: 5
    },
    {
      name: '過去を喰らう',
      value: 3
    },
    {
      name: '心臓と絡繰',
      value: 3
    },
    {
      name: '不可解',
      value: 3
    },
    {
      name: '忘れてしまえ',
      value: 3
    },
    {
      name: '未確認少女進行形',
      value: 3
    },
    {
      name: 'アンサー',
      value: 2
    },
    {
      name: '景色',
      value: 2
    },
    {
      name: '戸惑いテレパシー',
      value: 2
    },
    {
      name: 'エリカ',
      value: 1
    },
    {
      name: '私論理',
      value: 1
    },
    {
      name: '糸',
      value: 1
    },
    {
      name: '畢生よ',
      value: 1
    },
    {
      name: '夜が降り止む前に',
      value: 1
    },
    {
      name: '夜行バスにて',
      value: 1
    }
  ];

  cover1 = [
    {
      name: '死神',
      value: 7
    },
    {
      name: 'おやすみ泣き声、さよなら歌姫',
      value: 6
    },
    {
      name: 'フロントメモリー',
      value: 6
    },
    {
      name: '命に嫌われている',
      value: 6
    },
    {
      name: '猛独が襲う',
      value: 6
    },
    {
      name: 'ミッドナイト清純異性交遊',
      value: 2
    },
    {
      name: '回る空うさぎ',
      value: 2
    },
    {
      name: '五月雨',
      value: 2
    },
    {
      name: '透明少女',
      value: 2
    },
    {
      name: 'bin',
      value: 1
    },
    {
      name: 'さよならミッドナイト',
      value: 1
    },
    {
      name: 'フラジール',
      value: 1
    },
    {
      name: 'またねがあれば',
      value: 1
    },
    {
      name: '死んでしまったのだろうか',
      value: 1
    },
    {
      name: '神様',
      value: 1
    },
    {
      name: '白ゆき',
      value: 1
    }
  ];

  cover2 = [
    {
      name: '雨き声残響',
      value: 6
    },
    {
      name: 'イヤホンと蝉時雨',
      value: 5
    },
    {
      name: '愛の才能',
      value: 5
    },
    {
      name: 'あなたの夜が明けるまで',
      value: 4
    },
    {
      name: '美しく、闇',
      value: 4
    },
    {
      name: '粉雪',
      value: 4
    },
    {
      name: 'さようなら、花泥棒さん',
      value: 3
    },
    {
      name: '小夜子',
      value: 3
    },
    {
      name: '爆弾',
      value: 3
    },
    {
      name: 'ビームが撃てたらいいのに',
      value: 2
    },
    {
      name: '宙ぶらりん',
      value: 2
    },
    {
      name: '電話をするよ',
      value: 2
    },
    {
      name: '6900000000',
      value: 1
    },
    {
      name: '君が夜の海に還るまで',
      value: 1
    },
    {
      name: '美しい棘',
      value: 1
    },
    {
      name: '嗤うマネキン',
      value: 1
    }
  ];


  constructor(
    private metaService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
  }

}
