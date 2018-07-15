window.addEventListener("load",init);
function init(){
    swapNum=function(){
        beginTime += 10;
        statText.text += ", swap";
        var index1 = Math.floor(Math.random() * n);
        var index2 = (index1 + Math.floor(Math.random() * (n - 1)) + 1) % n;
        var temp = num[index1];
        num[index1] = num[index2];
        num[index2] = temp;
        if (changeNumAvailable) {
            temp = changeNum[index1];
            changeNum[index1] = changeNum[index2];
            changeNum[index2] = temp;
        }
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
    }

}