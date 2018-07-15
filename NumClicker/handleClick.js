window.addEventListener("load",init);
function init() {
    for(var i=0;i<MAX;i++)
    {
        rect[i].addEventListener("click", handleClick);
    }

    function handleClick() {
        var clickRect;
        var mx = stage.mouseX;
        if (isPlaying && time > beginTime) {
            for (clickRect = 0; clickRect < n; clickRect++) {
                if (mx < 110 + clickRect * 100) {
                    break;
                }
            }
            if (clickRect == n) {
                return;
            }
            else {
                if (isClicked[clickRect] == false) {
                    numText[clickRect].text = num[clickRect];
                    numText[clickRect].alpha = 1;
                    isClicked[clickRect] = true;
                    if (num[clickRect] == nextNum) {
                        nextNum++;
                        if (nextNum > n) {
                            phase++;
                            beginPhase();
                        }
                        if (nextNum == Math.floor(n / 2) + 1 && middleSwapAvailable) {
                            middleSwapNum();
                        }
                    }
                    else {
                        clearText.text = "GAME OVER";
                        for (var i = 0; i < n; i++) {
                            numText[i].text = num[i];
                            numText[i].alpha = 1;
                        }
                        isPlaying = false;
                    }
                }
            }
        }
    }
}