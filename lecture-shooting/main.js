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

     boss.Move();

    let shotCount=0;
    function handleTick() {
        if (scene === 0) {
            stage.update();
        }
        else if (scene === 1) {
            if(shotCount === 0) {
                for(j=0;j<One_shot;j++) {
                    shot[i] = new Shot(boss.x,boss.y,5,"green");
                    stage.addChild(shot[i]);
                    i++;
                }
            }

            for (j = 0; j < shot.length; j++) {
                shot[j].Move(j);
                shot[j].removeJudge(j);
            }

            //createjs.Tween.get(boss,{loop:true})
                //.to({x:100},1500)
                //.to({x: 270},1500);
                //.to({x: 400},1500)
                //.to({x: 270},1500);


            shotCount++;
            if(shotCount === 15) {
                shotCount=0;
            }
            stage.update();
        }
    }
}