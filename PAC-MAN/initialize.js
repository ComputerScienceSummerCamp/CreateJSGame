initialize = function () {

    // Direction
    direction = ["Up", "Down", "Left", "Right"];

    // Background
    let bg = new createjs.Shape();
    bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    // Title Text
    titleText = new createjs.Text("PAC-MAN", "40px sans-serif", "white");
    titleText.x = 480;
    titleText.y = 50;
    titleText.textAlign = "center";

    // Wall
    for(let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            let wall = new createjs.Shape();
            wall.graphics
                .beginFill(createjs.Graphics.getHSL(Math.random() * 360, Math.random() * 100, 50))
                .drawRect(0, 0, 65, 75);
            wall.x = 960/10 * j + 15;
            wall.y = 540/5 * i + 15;
            wallList.push(wall);
        }
    }

    // Enemy
    for (let i = 1; i < 5; i++) {
        for (let j = 3; j < 8; j++) {
            let enemy = new createjs.Shape();
            enemy.graphics.beginFill("red").drawPolyStar(0, 0, 18, Math.floor(Math.random() * 3)+3, Math.random()*0.7, -90);
            enemy.x = 960/10 * j;
            enemy.y = 540/5 * i;
            enemyList.push(enemy);
            directionList.push(direction[Math.floor(Math.random() * direction.length)]);
        }
    }

    // Star
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 10; j++) {
            let star = new createjs.Shape();
            star.graphics.beginFill("#00ff00").drawPolyStar(0, 0, 10, 5, 0.6, -90);
            star.x = 960/10 * j;
            star.y = 540/5 * i;
            starList.push(star);
        }
    }

    // Player
    player = new createjs.Shape();
    player.graphics.beginFill("yellow").drawCircle(0, 0, 10);

    for (let i = 0; i < starList.length; i++) stage.addChild(starList[i]);
    stage.addChild(player);
    for (let i = 0; i < enemyList.length; i++) stage.addChild(enemyList[i]);
    for (let i = 0; i < wallList.length; i++) stage.addChild(wallList[i]);
    stage.addChild(titleText);
}