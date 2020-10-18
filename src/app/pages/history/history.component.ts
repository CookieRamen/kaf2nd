import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {MetadataService} from '../../service/metadata.service';

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
  metadata = {
    title: '年表 | 花譜弐周年。',
    description: '花譜弐周年を記念した有志による非公式年表',
    keywords: '花譜,二周年,神椿,Vtuber,バーチャルシンガー,年表,活動,YouTube,Twitter',
    image: '/assets/img/icon.png',
    type: 'article',
    url: window.location.href,
    index: true
  };
  youtubeUrl = '';
  youtubePreview;
  /*
    typeの種類
    Twitter埋め込み: twitter
    YouTube埋め込み: youtube
    テキストのみ: text
    その他: other
  */
  histories: History[] = [
    {
      date: '2019/10/18',
      title: '花と椿と君',
      desc: '花と椿と君にてKAMITSUBAKI STUDIO発足が発表。<br>「理芽」、「春猿火」、「ヰ世界情緒」の三人のデビュー',
      type: 'youtube',
      url: 'kXyB94Ly-24'
    }, {
      date: '2019/10/18',
      title: '花譜のLINEスタンプ発表',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1185103774068723713'
    }, {
      date: '2019/10/18',
      title: 'TPNN by KAF、observersブランドを発表',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1185170345910661120'
    }, {
      date: '2019/10/21',
      title: '【歌ってみた】粉雪 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'wbaYN3DHyfY'
    }, {
      date: '2019/10/28',
      title: '花譜展の告知',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1188747576138334208'
    }, {
      date: '2019/10/30',
      title: '【歌ってみた】6900000000 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'gWQBHbfzlxU'
    }, {
      date: '2019/11/5',
      title: 'ロッキングオンジャパンインタビュー',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1191646492940857344'
    }, {
      date: '2019/11/5',
      title: '【歌ってみた】さようなら、花泥棒さん covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'KYbULJesBpA'
    }, {
      date: '2019/11/8',
      title: '花譜クリスマスグッズ',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1192759202009116672'
    }, {
      date: '2019/11/11',
      title: '【歌ってみた】嗤うマネキン covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'lUg_MOA8nZQ'
    }, {
      date: '2019/11/15',
      title: '花譜展告知',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1195265266730426368?s=200'
    }, {
      date: '2019/11/18',
      title: '美しく、闇 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: '0OJS3fy7Jy8'
    }, {
      date: '2019/11/19',
      title: 'KAI-YOUインタビュー',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/KAI_YOU_ed/status/1196714733744734209'
    }, {
      date: '2019/11/22',
      title: '花譜展開催',
      desc: '花譜の展覧会「花譜展」が東京都渋谷区「3.5D by KAMITSUBAKI STUDIO×PARCO」にて開催',
      type: 'youtube',
      url: 'M_nnqzBHIHo'
    }, {
      date: '2019/11/25',
      title: '【歌ってみた】ショパンと氷の白鍵 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'SQLMMDYj6D0'
    }, {
      date: '2019/11/22',
      title: '花譜ホロモデル販売決定',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/holomodels/status/1197735073291747329'
    }, {
      date: '2019/12/1',
      title: '「のとく番」最優秀GoodMusic賞を受賞',
      desc: 'キズナアイの冠番組「のとく番」にてGoodMusic賞 を受賞。後のVMZ出演の布石となる',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1201337440633442305'
    }, {
      date: '2019/12/1',
      title: '未確認少女観測部スタート',
      desc: '',
      type: 'youtube',
      url: 'n2Vcu1hsFiA'
    }, {
      date: '2019/12/3',
      title: '観測γ発表',
      desc: '',
      type: 'youtube',
      url: 'Bu19Bm6MM_0'
    }, {
      date: '2019/12/4',
      title: '【歌ってみた】カフネ covered by 花譜',
      desc: '',
      type: 'youtube',
      url: '2VpGmUQM37A'
    }, {
      date: '2019/12/5',
      title: '「呼吸」販売開始',
      desc: '私のファースト写真集「呼吸-Atmung-」が3.5D店頭で先行販売。',
      type: 'youtube',
      url: 'Mnm9f0I9vBU'
    }, {
      date: '2019/12/9',
      title: '【歌ってみた】ポワソン・ダヴリルについて covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'Kua1ye-H20Y'
    }, {
      date: '2019/12/15',
      title: '花譜展1.5リニューアル',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1206491861684117504'
    }, {
      date: '2019/12/20',
      title: '花達と椿と君。vol.1',
      desc: '音楽から派生させた新プロジェクトNBM　by kamitsubakiを発足。また、2020年3月23日、不可解再の開催を発表',
      type: 'youtube',
      url: 'kXyB94Ly-24'
    }, {
      date: '2019/12/23',
      title: '【歌ってみた】インタビュア covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'aHYhNEmooEM'
    }, {
      date: '2019/12/23',
      title: '観測γ一挙配信',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1209051487298449409'
    }, {
      date: '2019/12/25',
      title: '花譜のLINE着せ替え発売',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1209656959663624192'
    }, {
      date: '2019/12/25',
      title: '観測γ発売',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/PIEDPIPER2045/status/1209820192810749952'
    }, {
      date: '2019/12/26',
      title: 'Vティーク Vol.5発売',
      desc: 'Vtuber雑誌であるVティークvol.5発売。表紙を花譜が担当し、花譜 や運営のインタビューなどが掲載。花譜好きVtuberのコメントが話題になった',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1209989772824825857'
    }, {
      date: '2019/12/27',
      title: 'VMZ出演',
      desc: 'Vtuberの音楽番組VMZの初回ゲストとして花譜が出演',
      type: 'youtube',
      url: 'aP0jjmyFT_k'
    }, {
      date: '2020/1/1',
      title: '花譜 #46「新年」',
      desc: '',
      type: 'youtube',
      url: '5xWeuwETAR0'
    }, {
      date: '2020/1/1',
      title: '花譜謹賀新年福袋発売',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/3_5dd/status/1212559335051522048'
    }, {
      date: '2020/1/3',
      title: '花譜 #47「夜行バスにて（ろくろ Remix）」【オリジナルMV】',
      desc: '',
      type: 'youtube',
      url: 'syKrkrheKvY'
    }, {
      date: '2020/1/8',
      title: '花譜 #49 「私論理」 【オリジナルMV】',
      desc: '',
      type: 'youtube',
      url: 'Z6wEJLnNxMs'
    }, {
      date: '2020/1/10',
      title: '花譜　#50 「拾六」',
      desc: '',
      type: 'youtube',
      url: 'pkEeboJmw9U'
    }, {
      date: '2020/1/20',
      title: '【歌ってみた】雨き声残響 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'OcGhtS13eLs'
    }, {
      date: '2020/1/30',
      title: '【歌ってみた】ストラトステラ covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'p3hDpKzNWhc'
    }, {
      date: '2020/1/30',
      title: 'ロッキングオンジャパンインタビュー',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1222764189883650048'
    }, {
      date: '2020/2/9',
      title: '【歌ってみた】君が夜の海に還るまで covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'HCEIuHUd_fk'
    }, {
      date: '2020/2/12',
      title: '花譜 #51「不可解再御報告篇」',
      desc: '「不可解（再）」について3Dライブビューイング開催の開 催が決定',
      type: 'youtube',
      url: 'UHYtzmIcs4A'
    }, {
      date: '2020/2/19',
      title: '【歌ってみた】イヤホンと蝉時雨 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'CraT4XYROZs'
    }, {
      date: '2020/2/27',
      title: '「不可解（再）」、無観客ライブに',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1232954021582798849'
    }, {
      date: '2020/3/1',
      title: '【歌ってみた】銀河と未満病な二人 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'sS9ZJDxGRXk'
    }, {
      date: '2020/3/20',
      title: '【歌ってみた】あなたの夜が明けるまで covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'acIzTRnqUPA'
    }, {
      date: '2020/3/14',
      title: '花譜 #52「深化」',
      desc: '',
      type: 'youtube',
      url: 'QqCM53KSLzw'
    }, {
      date: '2020/3/16',
      title: '花譜 #53「青雀」',
      desc: '',
      type: 'youtube',
      url: 'Yj3FwdGutdk'
    }, {
      date: '2020/3/18',
      title: '花譜　#54　「糸-Virtual Reality-」',
      desc: '',
      type: 'youtube',
      url: 'Yj3FwdGutdk'
    }, {
      date: '2020/3/20',
      title: 'NTTブランド広告に花譜が出演',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1240835807268589569'
    }, {
      date: '2020/3/21',
      title: '【歌ってみた】あまい covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'fGZQH85vGVQ'
    }, {
      date: '2020/3/21',
      title: 'Anitamaインタビュー',
      desc: '中国のwebメディアAnitamaに花譜・運営のインタビューが掲載',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1241323508887482370'
    }, {
      date: '2020/3/22',
      title: '花譜 #55「不可解再前夜」',
      desc: '',
      type: 'youtube',
      url: 'SlCqwuB1IqQ'
    }, {
      date: '2020/3/23',
      title: '朝日新聞朝刊に広告掲載',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1241847124037263360'
    }, {
      date: '2020/3/23',
      title: '「不可解（再）」',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1242010569785278465'
    }, {
      date: '2020/3/23',
      title: '花譜 #55.5「不可解再御礼」',
      desc: '',
      type: 'youtube',
      url: 'MDWFtgUnY-c'
    }, {
      date: '2020/3/30',
      title: '【歌ってみた】電話をするよ covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'pB83CTLCET8'
    }, {
      date: '2020/4/3',
      title: 'ブラッククローバーEDに花譜「アンサー」',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1245849214233403392'
    }, {
      date: '2020/4/9',
      title: '花譜、神椿のメンバーを紹介',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1248151200186257416'
    }, {
      date: '2020/4/10',
      title: '【歌ってみた】ふめつのこころ covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'I1HZ8glwdRs'
    }, {
      date: '2020/4/19',
      title: '【歌ってみた】宙ぶらりん covered by 花譜',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1255074451017752582'
    }, {
      date: '2020/4/29',
      title: '【歌ってみた】愛の才能 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'Koz-8KthqRo'
    }, {
      date: '2020/5/5',
      title: '不可解再、再放送',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1257667632871817216'
    }, {
      date: '2020/5/11',
      title: '花譜　#57 「危ノーマル」 【オリジナルMV】',
      desc: 'エナジードリンクZONEとのコラボ楽曲。キズナアイ、YOASOBIと共に楽曲を発表した',
      type: 'youtube',
      url: 'bmptCjSFEfg'
    }, {
      date: '2020/5/13',
      title: 'X-girlで初のモデルに挑戦',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1260480873117487104'
    }, {
      date: '2020/5/19',
      title: '【歌ってみた】美しい棘 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'CZWf-jljj7M'
    }, {
      date: '2020/5/30',
      title: '花達と椿と君。vol2',
      desc: '神椿市建設中を発表.アイスクリームライブの開催決定。<br>リアルとバーチャルの境界線のアーティストte\'resaデビュー',
      type: 'youtube',
      url: 'FktIvkDYLNo'
    }, {
      date: '2020/6/8',
      title: '花譜　#56 「戸惑いテレパシー」【オリジナルMV',
      desc: '「HAYABUSA EXPERIENCE by 3.5D × docomo」のテーマソング',
      type: 'youtube',
      url: '3Dr91z1-Iug'
    }, {
      date: '2020/6/10',
      title: 'シングル「戸惑いテレパシー」が販売',
      desc: '柊キライ、Orangestar、羽生まゐごによるリミック スが収録',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1270638499570388992'
    }, {
      date: '2020/6/10',
      title: '「アニメージュ」に花譜・理芽掲載',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kamitsubaki_jp/status/1270626552774967296'
    }, {
      date: '2020/6/14',
      title: 'アイスクリームライブ',
      desc: 'KAF LIVE STREAMING COVER LIVE「アイスクリームライブ」を開催。カバー曲で構成された配信ライブ。',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1272162619592343558'
    }, {
      date: '2020/6/18',
      title: '【歌ってみた】ビームが撃てたらいいのに covered by 花譜',
      desc: '',
      type: 'youtube',
      url: '3Clg1WYwhNk'
    }, {
      date: '2020/6/20',
      title: '【歌ってみた】小夜子 covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'waoAm-x96J0'
    }, {
      date: '2020/7/3',
      title: 'Tik Tokをスタート',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1278976938023870465'
    }, {
      date: '2020/7/8',
      title: '花譜 #58「アンサー」【オリジナルMV】',
      desc: '',
      type: 'youtube',
      url: 'V0Olmwnnpj8'
    }, {
      date: '2020/7/9',
      title: '「景色」で日本沈没2020のグランドエンディングテーマを担当',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1281151747440783360'
    }, {
      date: '2020/7/20',
      title: 'HAYABUSA EXPERIENCE by 3.5D × docomo ONLINE EXHIBITION',
      desc: '花譜とdocomoのコラボ展示会。VRChat、webで開催された',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1285046821337706496'
    }, {
      date: '2020/7/22',
      title: '花譜2nd EP「花と解答」発売',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1285772342707159040'
    }, {
      date: '2020/7/22',
      title: '花譜 #60「景色」【オリジナルMV】',
      desc: '日本沈没2020のグランドエンディングテーマ',
      type: 'youtube',
      url: '46HgoDkRCns'
    }, {
      date: '2020/7/30',
      title: '「花達と椿と君。vol.3',
      desc: '不可解弐Q1、不可解弐Q2の開催を発表。',
      type: 'YouTube埋め込 み',
      url: 'Sy6gDiKW30A'
    }, {
      date: '2020/8/1',
      title: '花譜　#56.1 「戸惑いテレパシー（柊キライRemix）」【オリジナルMV】',
      desc: '',
      type: 'youtube',
      url: 'ZJtV9qvMfwA'
    }, {
      date: '2020/8/2',
      title: '花譜 #56.2 「戸惑いテレパシー（Orangestar Remix）」【オリジナルMV】',
      desc: '',
      type: 'youtube',
      url: 'F5kJZaHrfnI'
    }, {
      date: '2020/8/3',
      title: '花譜　#56.3 「戸惑いテレパシー（羽生まゐご）」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋 め込み',
      url: '2Ku9y-IUuW0'
    }, {
      date: '2020/8/7',
      title: 'Fanplus Musicインタビュー',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1291703320084586497'
    }, {
      date: '2020/8/9',
      title: 'Bilibili World 2020に出演',
      desc: '中国・上海国家会展中心で開催された「Bilibili World 2020」にてライブ披露',
      type: 'other',
      url: 'https://www.bilibili.com/video/BV1qa4y1J7PH'
    }, {
      date: '2020/8/9',
      title: '神椿無電室',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/kamitsubaki_jp/status/1292340169585000448'
    }, {
      date: '2020/8/12',
      title: 'サブスク配信スタート',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1293464474532233216'
    }, {
      date: '2020/8/13',
      title: '花譜 #61 「畢生よ」【オリジナルMV】',
      desc: '山田悠介最新作『俺の残機を投下します』PVテーマソング',
      type: 'youtube',
      url: 'v9uRKXJeYfI'
    }, {
      date: '2020/8/17',
      title: '「愛と花」発売決定',
      desc: 'キズナアイとコラボ楽曲CD',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1295288324928675840'
    }, {
      date: '2020/8/19',
      title: '花譜 #62 「I SCREAM LIVE」【Trailer】',
      desc: '',
      type: 'youtube',
      url: 'JxcKj2dMZM8'
    }, {
      date: '2020/8/19',
      title: '花譜 Cover Live Album「I SCREAM LIVE」発売',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1296009815240486913'
    }, {
      date: '2020/8/26',
      title: 'テレ朝「サンパチスター」の主題歌を担当',
      desc: '芸人×声優の二次元お笑いプロジェクト番組「 サンチパスター」の主題歌を花譜が担当',
      type: 'twitter',
      url: 'https://twitter.com/kaf_info/status/1298561485803646976'
    }, {
      date: '2020/8/28',
      title: '【歌ってみた】ラプンツェル covered by 花譜',
      desc: '',
      type: 'youtube',
      url: 'c3bDrppty1w'
    }, {
      date: '2020/8/31',
      title: 'ZONEにてキズナアイとコラボ',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1300278582887890944'
    }, {
      date: '2020/9/1',
      title: '花譜展２開催を発表',
      desc: '',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1300720488688177152'
    }, {
      date: '2020/9/7',
      title: 'Kizuna AI × 花譜 - ラブしい (Prod. 川谷絵音)【Official Music Video】',
      desc: '『ZONe』IMMERSIVE SONG PROJECT 2.0 参加楽曲',
      type: 'youtube',
      url: 'u4PUwnItinY'
    }, {
      date: '2020/9/11',
      title: '花譜展２開催',
      desc: '9月11日〜10月3日の前半、10月5日〜10月28日の後半という二部構成',
      type: 'twitter',
      url: 'https://twitter.com/virtual_kaf/status/1303977351663869952'
    }
  ];
  history = [];
  loading = true;
  timer;

  constructor(
    public sanitizer: DomSanitizer,
    private metaService: MetadataService,
  ) {
  }

  ngOnInit(): void {
    this.metaService.setMeta(this.metadata);
    // 仮想スクロールでindex代入したら表示分しかカウントしてくれなかったので強引に
    let i = 0;
    this.histories.forEach(history => {
      this.history[i] = history;
      this.history[i].index = i;
      i++;
    });
  }

  // スクロール中にiframeがロードとアンロードを繰り返して重いので
  changeLoading(event): void {
    window[`twttr`].widgets.load();
  }

  sanitize(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
