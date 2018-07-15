window.addEventListener("load",init);
function init() {
    showChangeNum = function () {
        if (changeNumAvailable) {
            beginTime += 10;
            statText.text += ", change";
            for (var i = 0; i < n; i++) {
                changeNumText[i].alpha = 0;
                if (changeNum[i] != 0) {
                    if (changeNum[i] >= 0) {
                        changeNumText[i].text = "+" + changeNum[i];
                    }
                    else {
                        changeNumText[i].text = changeNum[i];
                    }
                    num[i] += changeNum[i];
                    var firstY = changeNumText[i].y;
                    createjs.Tween.get(changeNumText[i])
                        .wait((beginTime - 10) * 100)
                        .to({alpha: 1, y: firstY - 20}, 500)
                        .wait(300)
                        .to({alpha: 0, y: firstY}, 200);

                }
            }
            changeNumAvailable = false;
        }
    }
}