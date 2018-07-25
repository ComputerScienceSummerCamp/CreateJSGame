initialize = function () {

    // Background
    let bg = new createjs.Shape();
    bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    // Title Text
    titleText = new createjs.Text("PAC-MAN", "40px sans-serif", "white");
    titleText.x = 480;
    titleText.y = 50;
    titleText.textAlign = "center";
    stage.addChild(titleText);

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
        for (let j = 1; j < 10; j++) {
            let enemy = new createjs.Shape();
            enemy.graphics.beginFill("red").drawCircle(0, 0, 18);
            enemy.x = 960/10 * j;
            enemy.y = 540/5 * i;
            enemyList.push(enemy);
            let direction = ["Up", "Down", "Left", "Right"];
            directionList.push(direction[Math.floor(Math.random() * direction.length)]);
        }
    } 

    // Player
    player = new createjs.Shape();
    player.graphics.beginFill("yellow").drawCircle(0, 0, 10);
}