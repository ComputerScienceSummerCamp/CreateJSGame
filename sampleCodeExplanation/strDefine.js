window.addEventListener("load",init);
function init()
{
    prog='' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>shooting</title>\n' +
        '    <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>\n' +
        '    <script>\n' +
        '        window.addEventListener("load", init);\n' +
        '\n' +
        '        function init() {\n' +
        '            let stage = new createjs.Stage("myCanvas");\n' +
        '            let count = 0;\n' +
        '            let enemyList = [];\n' +
        '            let bulletList = [];\n' +
        '            let scene = 0;\n' +
        '\n' +
        '            let bg = new createjs.Shape();\n' +
        '            bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);\n' +
        '            stage.addChild(bg);\n' +
        '\n' +
        '            let player = new createjs.Shape();\n' +
        '            player.graphics.beginFill("white").drawCircle(0, 0, 10);\n' +
        '            stage.addChild(player);\n' +
        '\n' +
        '            let titleText = new createjs.Text("Title", "40px sans-serif", "white");\n' +
        '            titleText.x = 480;\n' +
        '            titleText.y = 50;\n' +
        '            titleText.textAlign = "center";\n' +
        '            stage.addChild(titleText);\n' +
        '\n' +
        '            stage.addEventListener("click", handleClick);\n' +
        '\n' +
        '            createjs.Ticker.setFPS(60);\n' +
        '            createjs.Ticker.addEventListener("tick", handleTick);\n' +
        '\n' +
        '            function handleClick() {\n' +
        '                if (scene === 0) {\n' +
        '                    scene = 1;\n' +
        '                    stage.removeChild(titleText)\n' +
        '                } else {\n' +
        '\n' +
        '                    let bullet = new createjs.Shape();\n' +
        '                    bullet.graphics.beginFill("white").drawCircle(0, 0, 3);\n' +
        '                    bullet.x = player.x;\n' +
        '                    bullet.y = player.y;\n' +
        '\n' +
        '                    bulletList.push(bullet);\n' +
        '                    stage.addChild(bullet);\n' +
        '                }\n' +
        '            }\n' +
        '\n' +
        '            function handleTick() {\n' +
        '                if(scene === 0){\n' +
        '                    stage.update();\n' +
        '                }\n' +
        '\n' +
        '                if(scene === 1) {\n' +
        '\n' +
        '                    player.x = stage.mouseX;\n' +
        '                    player.y = stage.mouseY;\n' +
        '\n' +
        '                    if (count % 100 === 0) {\n' +
        '                        let enemy = new createjs.Shape();\n' +
        '                        enemy.graphics.beginFill("red").drawCircle(0, 0, 10);\n' +
        '\n' +
        '                        enemy.x = 960;\n' +
        '                        enemy.y = 540 * Math.random();\n' +
        '\n' +
        '                        stage.addChild(enemy);\n' +
        '                        enemyList.push(enemy);\n' +
        '                    }\n' +
        '                    count = count + 1;\n' +
        '\n' +
        '                    for (let i = 0; i < enemyList.length; i++) {\n' +
        '                        enemyList[i].x -= 2;\n' +
        '                    }\n' +
        '\n' +
        '                    for (let i = 0; i < bulletList.length; i++) {\n' +
        '                        bulletList[i].x += 10;\n' +
        '                    }\n' +
        '\n' +
        '                    for (let i = 0; i < enemyList.length; i++) {\n' +
        '                        let enemyLocal = enemyList[i].localToLocal(0, 0, player);\n' +
        '                        if (player.hitTest(enemyLocal.x, enemyLocal.y)) {\n' +
        '                            gameOver();\n' +
        '                        }\n' +
        '                    }\n' +
        '\n' +
        '                    for (let i = 0; i < bulletList.length; i++) {\n' +
        '                        for (let j = 0; j < enemyList.length; j++) {\n' +
        '                            let localPoint = bulletList[i].localToLocal(0, 0, enemyList[j]);\n' +
        '                            if (enemyList[j].hitTest(localPoint.x, localPoint.y)) {\n' +
        '                                stage.removeChild(bulletList[i]);\n' +
        '                                bulletList.splice(i, 1);\n' +
        '\n' +
        '                                stage.removeChild(enemyList[j]);\n' +
        '                                enemyList.splice(j, 1);\n' +
        '                            }\n' +
        '                        }\n' +
        '                    }\n' +
        '\n' +
        '                    stage.update()\n' +
        '                }\n' +
        '            }\n' +
        '\n' +
        '//            function title() {\n' +
        '//                let titleText = new createjs.Text("", "24px sans-serif", "white");\n' +
        '//                stage.addChild(titleText);\n' +
        '//            }\n' +
        '//\n' +
        '//            function titleClick() {\n' +
        '//                scene = 1;\n' +
        '//            }\n' +
        '\n' +
        '            function gameOver() {\n' +
        '                alert("ゲームオーバー");\n' +
        '\n' +
        '                createjs.Ticker.removeAllEventListeners();\n' +
        '                stage.removeAllEventListeners();\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '\n' +
        '    </script>\n' +
        '</head>\n' +
        '<body>\n' +
        '<canvas id="myCanvas" width="960" height="540"></canvas>\n' +
        '</body>\n' +
        '</html>';

}