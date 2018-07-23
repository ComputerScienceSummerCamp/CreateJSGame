# README
## 進捗
* Tankクラスの追加
* 背景と自機の追加
* 主人公中心とした円周上に敵A１０体追加

## Tankクラス
* コンストラクタの引数は以下の通り。
  * 座標(x,y)
  * 色(colorR,colorG,colorB)
  * タンクの向き(d) *実装予定*
  * 弾丸の配列 *できたら実装予定*
  
* `this.graphics.beginFill(createjs.Graphics.getRGB(colorR,colorG,colorB))` にてgetRGBをコンストラクタを作る際に宣言することで色の変更が可能  

## 実装予定
* ステージの枠
* 複数種類の敵
  * A:座標固定、自機座標方向の弾発射
  * 考え中
  
## バグ
* 自機が動かない
* 敵も動かない。
* 誰も弾を撃たない

    
