window.addEventListener("load",init);
function init() {
    middleSwapNum = function () {
        time = 0;
        beginTime = 10;
        statText.text += ", middle_swap";
        var index1, index2;
        var i;
        for (i = 0; i < n; i++) {
            if (isClicked[i] == false) {
                index1 = i;
                break;
            }
        }
        for (i++; i < n; i++) {
            if (isClicked[i] == false) {
                index2 = i;
                break;
            }
        }
        var temp = num[index1];
        num[index1] = num[index2];
        num[index2] = temp;
        createjs.Tween.get(rect[index1])
            .wait((beginTime - 10) * 100)
            .to({y: -40}, 250)
            .to({x: (index2 - index1) * 100}, 500, createjs.Ease.cubicInOut)
            .to({y: 0}, 250)
            .to({x: 0}, 1);
        createjs.Tween.get(rect[index2])
            .wait((beginTime - 10) * 100)
            .to({y: 40}, 250)
            .to({x: (index1 - index2) * 100}, 500, createjs.Ease.cubicInOut)
            .to({y: 0}, 250)
            .to({x: 0}, 1);
        middleSwapAvailable = false;
    }
}