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
}

class Shot extends Character {

    Move(v) {
        this.y+=1;
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
        let distance = Math.sqrt(dx * dx + dy * dy);
        let angle=270;

        this.x = boss.x + Math.cos(v) * distance;
    }

}