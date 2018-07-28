//createJSの読み込みが終わってから、init関数をよぶ。
window.addEventListener("load", init);

function init() {
    initialize();

    stage.addEventListener("click", handleClick);

    /*ゲームスタート*/
    function handleClick() {
        if (scene === 0) {
            gameStart();
        }
    }
    //ゲームスタート
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.framerate = 60;


    let shotCount=0;
    function handleTick() {
        if (scene === 0) {
            stage.update();
        }
        else if (scene === 1) {
            if(shotCount === 0) {
                for(j=0;j<10;j++) {
                    shot[i] = new Shot(boss.x,boss.y,5,"green");
                    stage.addChild(shot[i]);
                    i++;
                }
            }
            for (j = 0; j < shot.length; j++) {
                shot[j].Move(j);
            }
            shotCount++;
            if(shotCount === 15) {
                shotCount=0;
            }
            stage.update();
        }
    }
}