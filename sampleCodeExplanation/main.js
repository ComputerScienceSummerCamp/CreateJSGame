window.addEventListener("load",init);
function init() {
    stage = new createjs.Stage("myCanvas");

    bg = new createjs.Shape();
    bg.graphics.beginFill("Green");
    bg.alpha = 0.4;
    bg.graphics.drawRect(0, 0, 690, 25);
    stage.addChild(bg);

    str = new createjs.Text(prog, "20px sans-serif", "Black");
    str.x = 5;
    stage.addChild(str);
    stage.update();

    box = new createjs.Container();
    stage.addChild(box);
    boxFrame = new createjs.Shape();
    boxFrame.graphics.beginStroke("DarkRed");
    boxFrame.graphics.drawRect(700, 0, 590, 250);
    box.addChild(boxFrame);
    boxText = new createjs.Text("", "17px sans-serif", "Black");
    boxText.x = 710;
    boxText.y = 5;
    box.addChild(boxText);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        var my;
        var posY;
        if (stage.mouseX < 700) {
            my = Math.floor((stage.mouseY - 10) / 20);
            if (my < 0) {
                my = 0;
            }
            if (my > 128) {
                my = 128;
            }
            posY = my * 20;
            bg.y = posY;
            boxText.text = "L" + ("000"+(my + 1)).slice(-3) + ":\n" + exp[my];
            posY -= 125;
            if (posY < 0) {
                posY = 0;
            }
            if (posY > 2350) {
                posY = 2350;
            }
            box.y = posY;

            stage.update();
        }

    }
}