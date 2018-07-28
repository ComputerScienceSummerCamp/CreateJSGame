function initialize() {

    stage = new createjs.Stage("myCanvas");

    let bg = new createjs.Shape();
    bg.graphics.beginFill("black");
    bg.graphics.drawRect(0, 0, 540, 650); // 長方形を描画
    stage.addChild(bg);

    /*ゲームタイトルの表示*/
    titleText = new Edit("Title\nclick",200,300,"50px sans-serif","white");
    stage.addChild(titleText);

    player = new Character(10,500,10,"white");
    stage.addChild(player);

    boss = new Character(270,150,25,"red");
    stage.addChild(boss);

}