import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../service/metadata.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  metadata = {
    title: '参加者一覧 | 花譜弐周年。',
    description: '花譜弐周年を記念した有志による小説',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー,二次創作,ノベル,小説,イラスト,歌ってみた,デザイン',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };

  illustrations = [{
    name: '（檸・ω・檬）',
    twitter: 'Lemon5518',
    type: 1
  }, {
    name: 'a.k.a ねむすけ。',
    twitter: 'nemu_suke0301',
    type: 1
  }, {
    name: '茶糸',
    twitter: 'Persimmon__tea',
    type: 1
  }, {
    name: 'komari@ヰ組',
    twitter: 'Kmr_tbk',
    type: 1
  }, {
    name: 'MiCan',
    twitter: 'MiCan_kmkm',
    type: 1
  }, {
    name: 'Noyau',
    twitter: 'fugoufish',
    type: 1
  }, {
    name: 'noyono',
    twitter: 'noyono8194',
    type: 1
  }, {
    name: 'pua．',
    twitter: 'hanananana02',
    type: 1
  }, {
    name: 'さなせ',
    twitter: 'ekakidayo_',
    type: 1
  }, {
    name: 'ちゃてる',
    twitter: 'teruteruSketch',
    type: 1
  }, {
    name: '春美',
    twitter: 'harumin2040',
    type: 1
  }, {
    name: 'ふる',
    twitter: 'huru_anrg',
    type: 1
  }, {
    name: '野良猫ヶ原',
    twitter: 'noranekogahara',
    type: 1
  }, {
    name: '刹那綴',
    twitter: 'Setsuna_flash00',
    type: 1
  }, {
    name: 'わつを',
    twitter: 'watuwo',
    type: 1
  }, {
    name: '匚白',
    twitter: 'Hakojiro_',
    type: 1
  }, {
    name: '菅原 集一',
    twitter: 'syu_sugawara',
    type: 1
  }, {
    name: '神椿中国海賊組全体メンバー',
    twitter: 'xiaole_3349',
    type: 1
  }, {
    name: 'Sailiven',
    twitter: 'sailiven',
    type: 1
  }, {
    name: 'aka',
    twitter: 'Jg0YAhpRupPgksc',
    type: 1
  }, {
    name: '芽森（memori）',
    twitter: 'memori0801',
    type: 1
  }, {
    name: 'せん',
    twitter: '1000cork3',
    type: 1
  }, {
    name: 'チャンプルー',
    twitter: 'Chan_Puru0917',
    type: 1
  }, {
    name: 'オオグソクムシ.gzl',
    twitter: 'oh_gusokumushi',
    type: 1
  }, {
    name: '若草',
    twitter: 'wakakusa_16',
    type: 1
  }, {
    name: 'はるさん',
    twitter: 'The_trail780',
    type: 1
  }, {
    name: '星麓Cafuné',
    twitter: null,
    type: 1
  }, {
    name: 'アカネ',
    twitter: 'AKANE_ratami_',
    type: 1
  }, {
    name: 'おかゆ',
    twitter: 'luck_OKY',
    type: 1
  }
  ];

  novels = [{
    name: 'まなまな',
    twitter: '1111_manamana',
    type: 2
  }, {
    name: '鼓膜売り',
    twitter: 'Komaku_dealer',
    type: 2
  }, {
    name: 'じゃすみん',
    twitter: 'Jasminiums',
    type: 2
  }, {
    name: 'タタミベリ',
    twitter: 'tatamiberi',
    type: 2
  }, {
    name: '詩然河勝',
    twitter: 'XboEqFldvBpK74E',
    type: 2
  }];

  singing = [{
    name: 'つも',
    twitter: 'kafu_0225',
    type: 3
  }, {
    name: 'よりおじ',
    twitter: 'yorimoi_hayare',
    type: 3
  }, {
    name: 'Kirin',
    twitter: 'kirinhsu',
    type: 3
  }];

  comments = [{
    name: 'あがさまる',
    twitter: 'agasa_observer',
    type: 4
  }, {
    name: 'ばちゃ',
    twitter: 'bachabacha_',
    type: 4
  }, {
    name: 'Cj.BC_SD',
    twitter: 'Cj_bc_sd',
    type: 4
  }, {
    name: 'KAFNO',
    twitter: 'KAFNO',
    type: 4
  }, {
    name: 'かぶと',
    twitter: 'K4BUT0__',
    type: 4
  }, {
    name: 'Algaid',
    twitter: 'shionend',
    type: 4
  }, {
    name: 'まなまな',
    twitter: '1111_manamana',
    type: 4
  }, {
    name: 'トム',
    twitter: 'rugar0714',
    type: 4
  }, {
    name: 'つも',
    twitter: 'kafu_0225',
    type: 4
  }, {
    name: '鼓膜売り',
    twitter: 'Komaku_dealer',
    type: 4
  }, {
    name: '菅原 集一',
    twitter: 'syu_sugawara',
    type: 4
  }, {
    name: 'シルヴァリオン',
    twitter: 'shilvarion',
    type: 4
  }, {
    name: 'タタミベリ',
    twitter: 'tatamiberi',
    type: 4
  }, {
    name: 'キリン',
    twitter: 'kirinhsu',
    type: 4
  }, {
    name: 'よりおじ',
    twitter: 'yorimoi_hayare',
    type: 4
  }];

  constructor(
    private metaService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
  }

}
