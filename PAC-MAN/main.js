//createJSの読み込みが終わってから、init関数をよぶ。
window.addEventListener("load", init);

function init() {
    stage = new createjs.Stage("myCanvas");

    initialize();

    stage.addEventListener("click", handleClick);

    function handleClick() {
        if (scene === 0) {
            gameStart();
        }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    createjs.Ticker.setFPS(100);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        if (scene === 0) {
            stage.update();
        }
        else if (scene === 1) {
            enemyMove(1);
            playerMove(1.5);
            starTest();
            playerOutCheck();
            deadTest();
            stage.update();
        }
    }
}