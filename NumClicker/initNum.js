window.addEventListener("load",init);
function init() {
    initNum = function () {
        var i, j;
        beginTime += n * 5;
        statText.text = "n=" + n;
        for (i = 0; i < MAX; i++) {
            rect[i].alpha = 0;
            numText[i].alpha = 0;
            numText[i].text = "";
            isClicked[i] = false;
            changeNum[i] = 0;
        }
        for (i = 0; i < n; i++) {
            while (true) {
                num[i] = Math.floor(Math.random() * n) + 1;
                for (j = 0; j < i; j++) {
                    if (num[i] == num[j]) {
                        break;
                    }
                }
                if (i == j) {
                    break;
                }
            }
        }
        if (changeNumAvailable) {
            var changeIndex;
            for (i = 0; i < Math.floor(n / 2); i++) {
                while (true) {
                    changeIndex = Math.floor(Math.random() * n);
                    if (changeNum[changeIndex] == 0) break;
                }
                while (true) {
                    changeNum[changeIndex] = Math.floor(Math.random() * n) - Math.floor(n / 2);
                    if (changeNum[changeIndex] != 0) {
                        break;
                    }
                }
                num[changeIndex] -= changeNum[changeIndex];
            }
        }
        for (i = 0; i < n; i++) {
            numText[i].text = num[i];
            num[i]+=changeNum[i];
            createjs.Tween.get(rect[i])
                .wait(i * 500)
                .to({alpha: 1}, 500);
            createjs.Tween.get(numText[i])
                .wait(i * 500)
                .to({alpha: 1}, 1)
                .wait(500)
                .to({alpha: 0}, 1);
        }
    }
}