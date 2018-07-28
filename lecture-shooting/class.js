class Edit extends createjs.Text {
    constructor(text,x,y,px,color) {
        //pxにはフォント名を入れる(文字列)
        super(text,px,color);
        this.x = x;
        this.y = y;

        //stage.addChild(this);
    }
}

class ProductShape extends createjs.Shape {
    constructor(x,y,w,h) {
        super();

        this.setBounds(0,0,w,h);
        this.x = x;
        this.y = y;

    }
}

class Character extends ProductShape {
    constructor(x,y,r,color) {
        super(x,y,r,r);

        this.graphics.beginFill(color);
        this.graphics.drawCircle(0,0,r);
    }

    Move() {
        createjs.Tween.get(this, {loop:true})
            .wait(500)
            .to({x: 100,y:200}, 2000,createjs.Ease.cubicOut)
            .wait(500)
            .to({x: 270,y:200}, 2000,createjs.Ease.cubicOut)
            .wait(500)
            .to({x: 400,y:400}, 2000,createjs.Ease.cubicOut)
            .wait(500)
            .to({x: 270,y:150}, 2000,createjs.Ease.cubicOut);
    }

}

class Shot extends Character {

    Move(v) {
        /*
        switch(v%5) {
            case 0:
                this.x-=2;
                this.y+=1;
                break;
            case 1:
                this.x-=1;
                this.y+=2;
                break;
            case 2:
                this.y+=3;
                break;
            case 3:
                this.x+=1;
                this.y+=2;
                break;
            case 4:
                this.x+=2;
                this.y+=1;
                break;
        }
        */
        let dx = this.x - boss.x;
        let dy = this.y - boss.y;
        // 差分を元に方向を計算
        let radians = Math.atan2(dy, dx);
        // ラジアンを角度に変換
        let degrees = radians * 180 / Math.PI;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let angle=v%One_shot;
            this.x += 3 * Math.cos(angle);// * radians;
            this.y += 3 * Math.sin(angle);// * radians;

            //this.x = boss.x + Math.cos(v) * distance;
    }

    removeJudge(j) {
        if(this.x < 0 || this.x > 540 || this.y < 0 || this.y > 650) {
            stage.removeChild(shot[j]);
            //shot.splice(j,1);

        }


    }

}