window.addEventListener("load",init);
function init(){
    stage = new createjs.Stage("myCanvas");

    MAX = 7;

    for (var i = 0; i < MAX; i++) {
        rect[i] = new createjs.Shape();
        rect[i].graphics.beginFill("Yellow");
        rect[i].alpha = 0.5;
        rect[i].graphics.drawRect(30 + i * 100, 200, 80, 80);
        stage.addChild(rect[i]);

        numText[i] = new createjs.Text("", "60px sans-serif", "Black");
        numText[i].x = 55 + i * 100;
        numText[i].y = 210;
        stage.addChild(numText[i]);
        changeNumText[i] = new createjs.Text("", "25px sans-serif", "Black");
        changeNumText[i].x = 80 + i * 100;
        changeNumText[i].y = 260;
        stage.addChild(changeNumText[i]);
    }

    phaseText = new createjs.Text("", "40px sans-serif", "Black");
    phaseText.x = 400;
    stage.addChild(phaseText);
    clearText = new createjs.Text("", "80px sans-serif", "Red");
    clearText.x = 100;
    clearText.y = 300;
    stage.addChild(clearText);
    statText = new createjs.Text("", "30px sans-serif", "Black");
    statText.x = 400;
    statText.y = 50;
    stage.addChild(statText);

    phaseMAX = 16;


}