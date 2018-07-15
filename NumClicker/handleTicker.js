window.addEventListener("load",init);
function init(){
    createjs.Ticker.addEventListener("tick", handleTicker);
    createjs.Ticker.framerate = 10;

    function handleTicker() {
        time++;
        //statText.text=time;
        stage.update();
    }
}