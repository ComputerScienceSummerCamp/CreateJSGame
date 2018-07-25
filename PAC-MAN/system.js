gameStart = function () {
    scene = 1;
    stage.removeChild(titleText);
    stage.addChild(player);
    for (let i = 0; i < enemyList.length; i++) stage.addChild(enemyList[i]);
    for (let i = 0; i < wallList.length; i++) stage.addChild(wallList[i]);
}

gameOver = function() {
    createjs.Ticker.removeAllEventListeners();
    stage.removeAllEventListeners();
    titleText.text = "Game Over";
    stage.addChild(titleText);
    stage.update();
}

deadTest = function() {
    for (let i = 0; i < enemyList.length; i++) {
        let enemy = enemyList[i];
        let enemyLocal = player.localToLocal(0, 0, enemy);
        if (enemy.hitTest(enemyLocal.x, enemyLocal.y)) gameOver();
    }
}

wallTest = function (target) {
    for (let i = 0; i < wallList.length; i++) {
        let wall = wallList[i];
        let point = target.localToLocal(0, 0, wall);
        if (wall.hitTest(point.x, point.y)) return true;
    }
}

playerOutCheck = function () {
    if (player.x < 0) { player.x = 0; }
    if (player.x > stage.canvas.width) { player.x = stage.canvas.width; }
    if (player.y < 0) { player.y = 0; }
    if (player.y > stage.canvas.height) { player.y = stage.canvas.height; }
}

enemyOutCheck = function (enemy) {
    if (enemy.x < 0 || enemy.x > stage.canvas.width || enemy.y < 0 || enemy.y > stage.canvas.height) return false;
    return true;
}