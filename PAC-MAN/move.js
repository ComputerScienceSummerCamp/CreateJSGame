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

enemyMove = function (move) {
    for (let i = 0; i < enemyList.length; i++) {
        switch (directionList[i]) {
            case "Up":
                enemyList[i].y -= move;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].y += move;
                    directionList[i] = "Down";
                }
                break;
            case "Down":
                enemyList[i].y += move;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].y -= move;
                    directionList[i] = "Up";
                }
                break;
            case "Left":
                enemyList[i].x -= move;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].x += move;
                    directionList[i] = "Right";
                }
                break;
            case "Right":
                enemyList[i].x += move;
                if (!enemyOutCheck(enemyList[i])) {
                    enemyList[i].x -= move;
                    directionList[i] = "Left";
                }
                break;
        }
        if (enemyList[i].x % (960/10) == 0 && enemyList[i].y % (540/5) == 0)
            directionList[i] = direction[Math.floor(Math.random() * direction.length)];
    }
}

playerMove = function (move) {
    if (isPressRight == true) {
        player.x += move;
        if (wallTest(player)) player.x -= move;
    }
    else if (isPressLeft == true) {
        player.x -= move;
        if (wallTest(player)) player.x += move;
    }
    if (isPressDown == true) {
        player.y += move;
        if (wallTest(player)) player.y -= move;
    }
    else if (isPressUp == true) {
        player.y -= move;
        if (wallTest(player)) player.y += move;
    }
}