import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../service/metadata.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
  metadata = {
    title: 'イラスト | 花譜弐周年。',
    description: '花譜弐周年を記念した有志によるイラスト',
    keywords: '花譜,二周年,神椿,Vtuber,YouTube,Twitter,バーチャルシンガー,イラスト,二次創作',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };

  preview;
  data = [
    {
      name: '（檸・ω・檬）',
      twitter: 'Lemon5518',
      img: '12e41160.jpg',
      ratio: 3500 / 2500,
      position: 'center'
    }, {
      name: 'a.k.a ねむすけ。',
      twitter: 'nemu_suke0301',
      img: '12e41660.jpg',
      ratio: 677 / 677,
      position: 'center'
    }, {
      name: '茶糸',
      twitter: 'Persimmon__tea',
      img: 'e5d1431d.jpg',
      ratio: 2048 / 1041,
      position: 'left center'
    }, {
      name: 'komari@ヰ組',
      twitter: 'Kmr_tbk',
      img: '12e4176e.jpg',
      ratio: 2048 / 2048,
      position: 'center'
    }, {
      name: 'MiCan',
      twitter: 'MiCan_kmkm',
      img: '12e41840.jpg',
      ratio: 1228 / 2048,
      position: 'center'
    }, {
      name: 'Noyau',
      twitter: 'fugoufish',
      img: '12e41908.jpg',
      ratio: 1828 / 1332,
      position: 'center'
    }, {
      name: 'noyono',
      twitter: 'noyono8194',
      img: '12e419d0.jpg',
      ratio: 2048 / 1475,
      position: 'left center'
    }, {
      name: 'pua．',
      twitter: 'hanananana02',
      img: '12e41a98.jpg',
      ratio: 2000 / 2000,
      position: 'center'
    }, {
      name: 'さなせ',
      twitter: 'ekakidayo_',
      img: '12e41b60.jpg',
      ratio: 3840 / 2160,
      position: 'center'
    }, {
      name: 'ちゃてる',
      twitter: 'teruteruSketch',
      img: '12e41d72.jpg',
      ratio: 680 / 680,
      position: 'center'
    }, {
      name: '春美',
      twitter: 'harumin2040',
      img: '9a5039c2.jpg',
      ratio: 1080 / 1920,
      position: 'center'
    }, {
      name: '春美',
      twitter: 'harumin2040',
      img: 'ace5fd19.png',
      ratio: 2000 / 1400,
      position: 'center'
    }, {
      name: 'ふる',
      twitter: 'huru_anrg',
      img: '12e41e44.jpg',
      ratio: 2048 / 1479,
      position: 'center'
    }, {
      name: '野良猫ヶ原',
      twitter: 'noranekogahara',
      img: '12e41f02.jpg',
      ratio: 3000 / 4500,
      position: 'center'
    }, {
      name: '刹那綴',
      twitter: 'Setsuna_flash00',
      img: '12e41fc0.jpg',
      ratio: 680 / 680,
      position: 'center'
    }, {
      name: 'わつを',
      twitter: 'watuwo',
      img: '9a5024f0.png',
      ratio: 2480 / 3508,
      position: 'center'
    }, {
      name: '匚白',
      twitter: 'Hakojiro_',
      img: '9a502626.png',
      ratio: 1280 / 1280,
      position: 'center'
    }, {
      name: '菅原 集一',
      twitter: 'syu_sugawara',
      img: '9a50290a.png',
      ratio: 3840 / 2160,
      position: 'center'
    }, {
      name: '神椿中国海賊組全体メンバー',
      twitter: 'xiaole_3349',
      img: '9a5023ec.jpg',
      ratio: 3400 / 4600,
      position: 'center'
    }, {
      name: '神椿中国海賊組全体メンバー',
      twitter: 'xiaole_3349',
      img: '9a502d60.png',
      ratio: 5200 / 3827,
      position: 'center'
    }, {
      name: '神椿中国海賊組全体メンバー',
      twitter: 'xiaole_3349',
      img: '9a502fae.png',
      ratio: 3800 / 2300,
      position: 'left center'
    }, {
      name: '神椿中国海賊組全体メンバー',
      twitter: 'xiaole_3349',
      img: '9a502bc6.png',
      ratio: 5200 / 4000,
      position: 'center'
    }, {
      name: '神椿中国海賊組全体メンバー',
      twitter: 'xiaole_3349',
      img: '9a502c98.png',
      ratio: 4769 / 6319,
      position: 'center'
    }, {
      name: 'Sailiven',
      twitter: 'sailiven',
      img: '9a50318e.png',
      ratio: 2894 / 4093,
      position: 'center'
    }, {
      name: 'aka',
      twitter: 'Jg0YAhpRupPgksc',
      img: '9a503260.png',
      ratio: 800 / 600,
      position: 'center'
    }, {
      name: '芽森（memori）',
      twitter: 'memori0801',
      img: '9a50331e.png',
      ratio: 4893 / 2894,
      position: 'center'
    }, {
      name: 'せん',
      twitter: '1000cork3',
      img: '9a503774.png',
      ratio: 834 / 1194,
      position: 'center'
    }, {
      name: 'チャンプルー',
      twitter: 'Chan_Puru0917',
      img: '9a50383c.png',
      ratio: 3403 / 5016,
      position: 'center'
    }, {
      name: 'オオグソクムシ.gzl',
      twitter: 'oh_gusokumushi',
      img: '9a503904.png',
      ratio: 1920 / 1080,
      position: 'center'
    }, {
      name: '若草',
      twitter: 'wakakusa_16',
      img: '9a503a80.png',
      ratio: 3328 / 3328,
      position: 'center'
    }, {
      name: 'はるさん',
      twitter: 'The_trail780',
      img: '9a503b48.jpg',
      ratio: 576 / 1024,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008714.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008926.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008a20.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008ae8.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008bb0.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008c78.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e008f84.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e009056.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e00910a.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e0091be.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e009286.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e009344.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e0093f8.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e0094b6.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e0096c8.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '9e00977c.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdb8a0.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdbb8e.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdbd5a.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdbe40.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdbf12.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc3cc.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc05c.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc6d8.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc8ea.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc61a.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc138.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc278.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc494.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdc796.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdca2a.png',
      ratio: 4134 / 4134,
      position: 'center'
    }, {
      name: '星麓Cafuné',
      twitter: null,
      img: '63cdcaf2.png',
      ratio: 4134 / 4134,
      position: 'center'
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
