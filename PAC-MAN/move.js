handleKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode == 39) {
        isPressRight = true;
    } else if (keyCode == 37) {
        isPressLeft = true;
    } else if (keyCode == 40) {
        isPressDown = true;
    } else if (keyCode == 38) {
        isPressUp = true;
    }
}

handleKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode == 39) {
        isPressRight = false;
    } else if (keyCode == 37) {
        isPressLeft = false;
    } else if (keyCode == 40) {
        isPressDown = false;
    } else if (keyCode == 38) {
        isPressUp = false;
    }
}

/*
enemyMove = function () {
    for (let i = 0; i < enemyList.length; i++) {
        if (enemyList[i].x < player.x) {
            enemyList[i].x += 0.5;
            if (wallTest(enemyList[i])) enemyList[i].x -= 0.5;
        }
        else if (enemyList[i].x > player.x) {
            enemyList[i].x -= 0.5;
            if (wallTest(enemyList[i])) enemyList[i].x += 0.5;
        }
        if (enemyList[i].y < player.y) {
            enemyList[i].y += 0.5;
            if (wallTest(enemyList[i])) enemyList[i].y -= 0.5;
        }
        else if (enemyList[i].y > player.y) {
            enemyList[i].y -= 0.5;
            if (wallTest(enemyList[i])) enemyList[i].y += 0.5;
        }
    }
}
*/

enemyMove = function () {
    for (let i = 0; i < enemyList.length; i++) {
        switch (directionList[i]) {
            case "Up":
                enemyList[i].y -= 1;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].y += 1;
                    directionList[i] = "Down";
                }
                break;
            case "Down":
                enemyList[i].y += 1;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].y -= 1;
                    directionList[i] = "Up";
                }
                break;
            case "Left":
                enemyList[i].x -= 1;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].x += 1;
                    directionList[i] = "Right";
                }
                break;
            case "Right":
                enemyList[i].x += 1;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].x -= 1;
                    directionList[i] = "Left";
                }
                break;
        }
    }
}

playerMove = function () {
    if (isPressRight == true) {
        player.x += 1;
        if (wallTest(player)) player.x -= 1;
    }
    else if (isPressLeft == true) {
        player.x -= 1;
        if (wallTest(player)) player.x += 1;
    }
    if (isPressDown == true) {
        player.y += 1;
        if (wallTest(player)) player.y -= 1;
    }
    else if (isPressUp == true) {
        player.y -= 1;
        if (wallTest(player)) player.y += 1;
    }
}