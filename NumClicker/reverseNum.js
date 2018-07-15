window.addEventListener("load",init);
function init() {
    reverseNum = function () {
        var temp;
        beginTime += 10;
        statText.text += ", reverse";
        for (var i = 0; i < Math.floor(n / 2); i++) {
            temp = num[i];
            num[i] = num[n - 1 - i];
            num[n - 1 - i] = temp;
            if (changeNumAvailable) {
                temp = changeNum[i];
                changeNum[i] = changeNum[n - 1 - i];
                changeNum[n - 1 - i] = temp;
            }
            createjs.Tween.get(rect[i])
                .wait((beginTime - 10) * 100)
                .to({y: -40 * (n / 2 - i)}, 250)
                .to({x: ((n - 1 - i) - i) * 100}, 500, createjs.Ease.cubicInOut)
                .to({y: 0}, 250)
                .to({x: 0}, 0);
            createjs.Tween.get(rect[n - 1 - i])
                .wait((beginTime - 10) * 100)
                .to({y: 40 * (n / 2 - i)}, 250)
                .to({x: (i - (n - 1 - i)) * 100}, 500, createjs.Ease.cubicInOut)
                .to({y: 0}, 250)
                .to({x: 0}, 0);
        }
    }
}