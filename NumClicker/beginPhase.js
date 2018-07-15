window.addEventListener("load",init);
function init(){
    beginPhase=function() {
        if (phase <= phaseMAX) {
            phaseText.text = "Stage: " + phase + "/" + phaseMAX;
            nextNum = 1;
            time = 0;
            beginTime = 1;
            switch (phase) {
                case 1:
                    n=3;
                    initNum();
                    break;
                case 2:
                    n = 4;
                    initNum();
                    break;
                case 3:
                    n = 3;
                    initNum();
                    swapNum();
                    break;
                case 4:
                    n = 4;
                    initNum();
                    swapNum();
                    break;
                case 5:
                    n = 4;
                    initNum();
                    reverseNum();
                    break;
                case 6:
                    n = 5;
                    initNum();
                    swapNum();
                    break;
                case 7:
                    n = 5;
                    initNum();
                    reverseNum();
                    break;
                case 8:
                    n = 5;
                    middleSwapAvailable = true;
                    initNum();
                    break;
                case 9:
                    n = 5;
                    middleSwapAvailable = true;
                    initNum();
                    swapNum();
                    break;
                case 10:
                    n=4;
                    changeNumAvailable=true;
                    initNum();
                    break;
                case 11:
                    n=5;
                    changeNumAvailable=true;
                    initNum();
                    break;
                case 12:
                    n=5;
                    changeNumAvailable=true;
                    middleSwapAvailable=true;
                    initNum();
                case 13:
                    n = 6;
                    middleSwapAvailable = true;
                    initNum();
                    break;
                case 14:
                    n=6;
                    changeNumAvailable=true;
                    initNum();
                    break;
                case 15:
                    n=5;
                    changeNumAvailable=true;
                    middleSwapAvailable=true;
                    initNum();
                    swapNum();
                    break;
                case 16:
                    n=6;
                    changeNumAvailable=true;
                    initNum();
                    reverseNum();
                    break;
                default:
                    phase = phaseMAX + 1;
                    beginPhase();
            }
            showChangeNum();
        }
        else {
            clearText.text = "COMPLETE!!";
            isPlaying = false;
        }
    }
    beginPhase();
}