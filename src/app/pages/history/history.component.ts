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
      date: '2000/1/1',
      title: 'サンプル',
      desc: '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。<br>何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。<br>吾輩はここで始めて人間というものを見た。<br>しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。<br>この書生というのは時々我々を捕えて煮て食うという話である。',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=JxcKj2dMZM8'
    }, {
      date: '2019/10/18',
      title: '花と椿と君',
      desc: '花と椿と君にてKAMITSUBAKI STUDIO発足が発表。<br>「理芽」、「春猿火」、「ヰ世界情緒」の三人のデビュー',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=kXyB94Ly-24'
    }, {
      date: '2019/10/18',
      title: '花譜のLINEスタンプ発表',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1185103774068723713?s=20'
    }, {
      date: '2019/10/18',
      title: 'TPNN by KAF、observersブランドを発表',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1185170345910661120?s=20'
    }, {
      date: '2019/10/21',
      title: '【歌ってみた】粉雪 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=wbaYN3DHyfY'
    }, {
      date: '2019/10/28',
      title: '花譜展の告知',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1188747576138334208?s=20'
    }, {
      date: '2019/10/30',
      title: '【歌ってみた】6900000000 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=gWQBHbfzlxU'
    }, {
      date: '2019/11/5',
      title: 'ロッキングオンジャパンインタビュー',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1191646492940857344?s=20'
    }, {
      date: '2019/11/5',
      title: '【歌ってみた】さようなら、花泥棒さん covered by 花譜',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://www.youtube.com/watch?v=KYbULJesBpA&feature=youtu.be'
    }, {
      date: '2019/11/8',
      title: '花譜クリスマスグッズ',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1192759202009116672?s=20'
    }, {
      date: '2019/11/11',
      title: '【歌ってみた】嗤うマネキン covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=lUg_MOA8nZQ&feature=youtu.be'
    }, {
      date: '2019/11/15',
      title: '花譜展告知',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1195265266730426368?s=200'
    }, {
      date: '2019/11/18',
      title: '美しく、闇 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=0OJS3fy7Jy8&feature=youtu.be'
    }, {
      date: '2019/11/19',
      title: 'KAI-YOUインタビュー',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/KAI_YOU_ed/status/1196714733744734209?s=20'
    }, {
      date: '2019/11/22',
      title: '花譜展開催',
      desc: '花譜の展覧会「花譜展」が東京都渋谷区「3.5D by KAMITSUBAKI STUDIO×PARCO」にて開催',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=M_nnqzBHIHo&feature=youtu.be'
    }, {
      date: '2019/11/25',
      title: '【歌ってみた】ショパンと氷の白鍵 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=SQLMMDYj6D0&feature=youtu.be'
    }, {
      date: '2019/11/22',
      title: '花譜ホロモデル販売決定',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://twitter.com/holomodels/status/1197735073291747329?s=20'
    }, {
      date: '2019/12/1',
      title: '「のとく番」最優秀GoodMusic賞を受賞',
      desc: 'キズナアイの冠番組「のとく番」にてGoodMusic賞 を受賞。後のVMZ出演の布石となる',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1201337440633442305?s=20'
    }, {
      date: '2019/12/1',
      title: '未確認少女観測部スタート',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=n2Vcu1hsFiA&feature=youtu.be'
    }, {
      date: '2019/12/3',
      title: '観測γ発表',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Bu19Bm6MM_0&feature=youtu.be'
    }, {
      date: '2019/12/4',
      title: '【歌ってみた】カフネ covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=2VpGmUQM37A&feature=youtu.be'
    }, {
      date: '2019/12/5',
      title: '「呼吸」販売開始',
      desc: '私のファースト写真集「呼吸-Atmung-」が3.5D店頭で先行販売。',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Mnm9f0I9vBU&feature=youtu.be'
    }, {
      date: '2019/12/9',
      title: '【歌ってみた】ポワソン・ダヴリルについて covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Kua1ye-H20Y&feature=youtu.be'
    }, {
      date: '2019/12/15',
      title: '花譜展1.5リニューアル',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1206491861684117504?s=20'
    }, {
      date: '2019/12/20',
      title: '花達と椿と君。vol.1',
      desc: '音楽から派生させた新プロジェクトNBM　by kamitsubakiを発足。また、2020年3月23日、不可解再の開催を発表',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=kXyB94Ly-244'
    }, {
      date: '2019/12/23',
      title: '【歌ってみた】インタビュア covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=aHYhNEmooEM&feature=youtu.be'
    }, {
      date: '2019/12/23',
      title: '観測γ一挙配信',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1209051487298449409?s=20'
    }, {
      date: '2019/12/25',
      title: '花譜のLINE着せ替え発売',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1209656959663624192?s=20'
    }, {
      date: '2019/12/25',
      title: '観測γ発売',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/PIEDPIPER2045/status/1209820192810749952?s=20'
    }, {
      date: '2019/12/26',
      title: 'Vティーク Vol.5発売',
      desc: 'Vtuber雑誌であるVティークvol.5発売。表紙を花譜が担当し、花譜 や運営のインタビューなどが掲載。花譜好きVtuberのコメントが話題になった',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1209989772824825857?s=20'
    }, {
      date: '2019/12/27',
      title: 'VMZ出演',
      desc: 'Vtuberの音楽番組VMZの初回ゲストとして花譜が出演',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=aP0jjmyFT_k&feature=youtu.be'
    }, {
      date: '2020/1/1',
      title: '花譜 #46「新年」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=5xWeuwETAR0&feature=youtu.be'
    }, {
      date: '2020/1/1',
      title: '花譜謹賀新年福袋発売',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/3_5dd/status/1212559335051522048?s=20'
    }, {
      date: '2020/1/3',
      title: '花譜 #47「夜行バスにて（ろくろ Remix）」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=syKrkrheKvY&feature=youtu.be'
    }, {
      date: '2020/1/8',
      title: '花譜 #49 「私論理」 【オリジナルMV】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Z6wEJLnNxMs&feature=emb_title'
    }, {
      date: '2020/1/10',
      title: '花譜　#50 「拾六」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=pkEeboJmw9U&feature=youtu.be'
    }, {
      date: '2020/1/20',
      title: '【歌ってみた】雨き声残響 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=OcGhtS13eLs&feature=youtu.be'
    }, {
      date: '2020/1/30',
      title: '【歌ってみた】ストラトステラ covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=p3hDpKzNWhc&feature=youtu.be'
    }, {
      date: '2020/1/30',
      title: 'ロッキングオンジャパンインタビュー',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1222764189883650048?s=20'
    }, {
      date: '2020/2/9',
      title: '【歌ってみた】君が夜の海に還るまで covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=HCEIuHUd_fk&feature=youtu.be'
    }, {
      date: '2020/2/12',
      title: '花譜 #51「不可解再御報告篇」',
      desc: '「不可解（再）」について3Dライブビューイング開催の開 催が決定',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=UHYtzmIcs4A&feature=youtu.be'
    }, {
      date: '2020/2/19',
      title: '【歌ってみた】イヤホンと蝉時雨 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=CraT4XYROZs&feature=youtu.be'
    }, {
      date: '2020/2/27',
      title: '「不可解（再）」、無観客ライブに',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1232954021582798849?s=20'
    }, {
      date: '2020/3/1',
      title: '【歌ってみた】銀河と未満病な二人 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=sS9ZJDxGRXk&feature=youtu.be'
    }, {
      date: '2020/3/20',
      title: '【歌ってみた】あなたの夜が明けるまで covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=acIzTRnqUPA&feature=youtu.be'
    }, {
      date: '2020/3/14',
      title: '花譜 #52「深化」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=QqCM53KSLzw&feature=youtu.be'
    }, {
      date: '2020/3/16',
      title: '花譜 #53「青雀」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Yj3FwdGutdk&feature=youtu.be'
    }, {
      date: '2020/3/18',
      title: '花譜　#54　「糸-Virtual Reality-」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Yj3FwdGutdk&feature=youtu.be'
    }, {
      date: '2020/3/20',
      title: 'NTTブランド広告に花譜が出演',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1240835807268589569?s=20'
    }, {
      date: '2020/3/21',
      title: '【歌ってみた】あまい covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=fGZQH85vGVQ&feature=youtu.be'
    }, {
      date: '2020/3/21',
      title: 'Anitamaインタビュー',
      desc: '中国のwebメディアAnitamaに花譜・運営のインタビューが掲載',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1241323508887482370?s=20'
    }, {
      date: '2020/3/22',
      title: '花譜 #55「不可解再前夜」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=SlCqwuB1IqQ&feature=youtu.be'
    }, {
      date: '2020/3/23',
      title: '朝日新聞朝刊に広告掲載',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1241847124037263360?s=20'
    }, {
      date: '2020/3/23',
      title: '「不可解（再）」',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1242010569785278465?s=20'
    }, {
      date: '2020/3/23',
      title: '花譜 #55.5「不可解再御礼」',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=MDWFtgUnY-c&feature=youtu.be'
    }, {
      date: '2020/3/30',
      title: '【歌ってみた】電話をするよ covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=pB83CTLCET8&feature=youtu.be'
    }, {
      date: '2020/4/3',
      title: 'ブラッククローバーEDに花譜「アンサー」',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1245849214233403392?s=20'
    }, {
      date: '2020/4/9',
      title: '花譜、神椿のメンバーを紹介',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1248151200186257416?s=20'
    }, {
      date: '2020/4/10',
      title: '【歌ってみた】ふめつのこころ covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=I1HZ8glwdRs&feature=youtu.be'
    }, {
      date: '2020/4/19',
      title: '【歌ってみた】宙ぶらりん covered by 花譜',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1255074451017752582?s=20'
    }, {
      date: '2020/4/29',
      title: '【歌ってみた】愛の才能 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=Koz-8KthqRo&feature=youtu.be'
    }, {
      date: '2020/5/5',
      title: '不可解再、再放送',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1257667632871817216?s=20'
    }, {
      date: '2020/5/11',
      title: '花譜　#57 「危ノーマル」 【オリジナルMV】',
      desc: 'エナジードリンクZONEとのコラボ楽曲。キズナアイ、YOASOBIと共に楽曲を発表した',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=bmptCjSFEfg&feature=youtu.be'
    }, {
      date: '2020/5/13',
      title: 'X-girlで初のモデルに挑戦',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1260480873117487104?s=20'
    }, {
      date: '2020/5/19',
      title: '【歌ってみた】美しい棘 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=CZWf-jljj7M&feature=youtu.be'
    }, {
      date: '2020/5/30',
      title: '花達と椿と君。vol2',
      desc: '神椿市建設中を発表.アイスクリームライブの開催決定。<br>リアルとバーチャルの境界線のアーティストte\'resaデビュー',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=FktIvkDYLNo'
    }, {
      date: '2020/6/8',
      title: '花譜　#56 「戸惑いテレパシー」【オリジナルMV',
      desc: '「HAYABUSA EXPERIENCE by 3.5D × docomo」のテーマソング',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=3Dr91z1-Iug&feature=youtu.be'
    }, {
      date: '2020/6/10',
      title: 'シングル「戸惑いテレパシー」が販売',
      desc: '柊キライ、Orangestar、羽生まゐごによるリミック スが収録',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1270638499570388992?s=20'
    }, {
      date: '2020/6/10',
      title: '「アニメージュ」に花譜・理芽掲載',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://twitter.com/kamitsubaki_jp/status/1270626552774967296?s=20'
    }, {
      date: '2020/6/14',
      title: 'アイスクリームライブ',
      desc: 'KAF LIVE STREAMING COVER LIVE「アイスクリームライブ」を開催。カバー曲で構成された配信ライブ。',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1272162619592343558?s=20'
    }, {
      date: '2020/6/18',
      title: '【歌ってみた】ビームが撃てたらいいのに covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=3Clg1WYwhNk&feature=youtu.be'
    }, {
      date: '2020/6/20',
      title: '【歌ってみた】小夜子 covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=waoAm-x96J0&feature=youtu.be'
    }, {
      date: '2020/7/3',
      title: 'Tik Tokをスタート',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1278976938023870465?s=20'
    }, {
      date: '2020/7/8',
      title: '花譜 #58「アンサー」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=V0Olmwnnpj8&feature=youtu.be'
    }, {
      date: '2020/7/9',
      title: '「景色」で日本沈没2020のグランドエンディングテーマを担当',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1281151747440783360?s=20'
    }, {
      date: '2020/7/20',
      title: 'HAYABUSA EXPERIENCE by 3.5D × docomo ONLINE EXHIBITION',
      desc: '花譜とdocomoのコラボ展示会。VRChat、webで開催された',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1285046821337706496?s=20'
    }, {
      date: '2020/7/22',
      title: '花譜2nd EP「花と解答」発売',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1285772342707159040?s=20'
    }, {
      date: '2020/7/22',
      title: '花譜 #60「景色」【オリジナルMV】',
      desc: '日本沈没2020のグランドエンディングテーマ',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=46HgoDkRCns&feature=youtu.be'
    }, {
      date: '2020/7/30',
      title: '「花達と椿と君。vol.3',
      desc: '不可解弐Q1、不可解弐Q2の開催を発表。',
      type: 'YouTube埋め込 み',
      url: 'https://www.youtube.com/watch?v=Sy6gDiKW30A'
    }, {
      date: '2020/8/1',
      title: '花譜　#56.1 「戸惑いテレパシー（柊キライRemix）」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=ZJtV9qvMfwA&feature=emb_title'
    }, {
      date: '2020/8/2',
      title: '花譜 #56.2 「戸惑いテレパシー（Orangestar Remix）」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=F5kJZaHrfnI&feature=youtu.be'
    }, {
      date: '2020/8/3',
      title: '花譜　#56.3 「戸惑いテレパシー（羽生まゐご）」【オリジナルMV】',
      desc: '',
      type: 'YouTube埋 め込み',
      url: 'https://www.youtube.com/watch?v=2Ku9y-IUuW0&feature=youtu.be'
    }, {
      date: '2020/8/7',
      title: 'Fanplus Musicインタビュー',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1291703320084586497?s=20'
    }, {
      date: '2020/8/9',
      title: 'Bilibili World 2020に出演',
      desc: '中国・上海国家会展中心で開催された「Bilibili World 2020」にてライブ披露',
      type: 'その他',
      url: 'https://www.bilibili.com/video/BV1qa4y1J7PH'
    }, {
      date: '2020/8/9',
      title: '神椿無電室',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kamitsubaki_jp/status/1292340169585000448?s=20'
    }, {
      date: '2020/8/12',
      title: 'サブスク配信スタート',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1293464474532233216?s=20'
    }, {
      date: '2020/8/13',
      title: '花譜 #61 「畢生よ」【オリジナルMV】',
      desc: '山田悠介最新作『俺の残機を投下します』PVテーマソング',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=v9uRKXJeYfI&feature=youtu.be'
    }, {
      date: '2020/8/17',
      title: '「愛と花」発売決定',
      desc: 'キズナアイとコラボ楽曲CD',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1295288324928675840?s=20'
    }, {
      date: '2020/8/19',
      title: '花譜 #62 「I SCREAM LIVE」【Trailer】',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=JxcKj2dMZM8&feature=youtu.be'
    }, {
      date: '2020/8/19',
      title: '花譜 Cover Live Album「I SCREAM LIVE」発売',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1296009815240486913?s=20'
    }, {
      date: '2020/8/26',
      title: 'テレ朝「サンパチスター」の主題歌を担当',
      desc: '芸人×声優の二次元お笑いプロジェクト番組「 サンチパスター」の主題歌を花譜が担当',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/kaf_info/status/1298561485803646976?s=20'
    }, {
      date: '2020/8/28',
      title: '【歌ってみた】ラプンツェル covered by 花譜',
      desc: '',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=c3bDrppty1w'
    }, {
      date: '2020/8/31',
      title: 'ZONEにてキズナアイとコラボ',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1300278582887890944?s=20'
    }, {
      date: '2020/9/1',
      title: '花譜展２開催を発表',
      desc: '',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1300720488688177152?s=20'
    }, {
      date: '2020/9/7',
      title: 'Kizuna AI × 花譜 - ラブしい (Prod. 川谷絵音)【Official Music Video】',
      desc: '『ZONe』IMMERSIVE SONG PROJECT 2.0 参加楽曲',
      type: 'YouTube埋め込み',
      url: 'https://www.youtube.com/watch?v=u4PUwnItinY&feature=youtu.be'
    }, {
      date: '2020/9/11',
      title: '花譜展２開催',
      desc: '9月11日〜10月3日の前半、10月5日〜10月28日の後半という二部構成',
      type: 'Twitter埋め込み',
      url: 'https://twitter.com/virtual_kaf/status/1303977351663869952?s=20'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
