GyazzA(C) - Gyazzええかっこしい
=========================

Gyazzがかっこつけたスライドになるブックマークレット

## つかいかた

`
javascript:(function(){var a;a=document.createElement("script"),a.setAttribute("src","http://gyazzac.nekobato.net/gyazzac.min.js"),document.getElementsByTagName("head")[0].appendChild(a)}).call(this);
`

をブックマークに登録

gyazzページで使う→スライドになる！

## 操作方法

進む: Enter, 右キー, ▶  
戻る: BackSpace, 左キー, ◀  
ページ一覧: 〓  
オートプレイ: [ ▷ ]  
全画面化: [ □ ]

##  A(C)固有の装飾

#### ページの背景画像を設定
ページタイトルの行に"bg"リンクを追加  
`
[[http://example.com/ex.jpg bg]]
`
#### ページを表示した時の効果音を設定 (TBD)
ページタイトルの行に"sound"リンクを追加  
`
ex: [[http://example.com/ex.mp3 sound]]
`
### スライド装飾 (TBD)
ページの一行目をインデントさせると、スライド全体の装飾設定を行えます

#### スライド全体のBGMを追加
gyazzページの一行目をインデントさせて隠す＆"bgm"リンクを追加
`
 [[http://example.com/bgm.mp3 bgm]]
`
## テーマ

TBD
