import { _decorator, Component, Node, EventTouch, Mask, RenderTexture, Sprite, SpriteFrame, Graphics, UITransform, v3, Camera, Color } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ScratchCard_Line')
export class ScratchCard extends Component {
    @property(Mask)
    myMask: Mask = null;

    @property(Camera)
    mainCamera: Camera = null;
    @property(Node)
    maskBg: Node = null;

    // const temp_vec2 = new Vec2();
    @property({
        displayName: "刮卡路径宽度",
        min: 0
    })


    public with: number = 3;
    @property({
        displayName: "刮卡路径高度",
        min: 0
    })
    public hight: number =3;

    private hidePointsNum :number;
    private hidePoints = [];
    //注册鼠标事件
    
    onLoad() {
        this.initMaskPoints();
        this.aaa = this.myMask.graphics;
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }
    initMaskPoints()
    {
        let rows =Math.floor( this.maskBg.height/(20*2));
        let cols = Math.floor( this.maskBg.width / (10*2));
        rows = Math.ceil(rows/2);
        cols = Math.ceil(cols/2);


        this.hidePoints = [];
        for (let i = -rows; i <= rows; i++) {
            for (let j = -cols; j <= cols; j++) {
                this.hidePoints.push({"x":j,"y":i});
                // this.aaa.rect(j ,i,2,2);
            }
            
        }
        this.hidePointsNum = this.hidePoints.length;
        console.log(this.hidePoints);
        console.log(this.hidePointsNum);
    }


    /**鼠标事件 */
    _onTouchBegin(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        point = this.mainCamera.screenToWorld(v3(point.x, point.y,0))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this.aaa = this.myMask.graphics;

        // this.aaa.rect(point.x,point.y,this.with,this.hight);
        // this.aaa.circle   (point.x,point.y,3);
        // this.aaa.rect(point.x - this.with*0.5,point.y - this.hight * 0.5,this.with , this.hight);
        
        this.aaa.circle(point.x ,point.y,this.with*0.2);
        this.aaa.moveTo(point.x,point.y);


        this.aaa.lineWidth = this.with;
        this.aaa.lineJoin = 1;
        this.aaa.lineCap = 1;
        // this.aaa.strokeColor.set(255,25,0,255);
        // this.aaa.fillColor.set(0,255,0,255);



    }

    _onTouchMoved(event: EventTouch) {
        var point = event.touch.getLocation() as any;

        point = this.mainCamera.screenToWorld(v3(point.x, point.y,0))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        

        this.aaa = this.myMask.graphics;
        this.aaa.lineWidth =this.with ;
        this.aaa.strokeColor = Color.WHITE;
        this.aaa.lineTo(point.x,point.y);
        // this.aaa.rect(point.x - this.with * 0.5,point.y - this.hight * 0.5,this.with,this.hight);
        this.calcScratchArea(point);

        this.aaa.stroke();

    }

    _onTouchEnd(event: EventTouch) {

        var point = event.touch.getLocation() as any;
        // point = this.mainCamera.screenToWorld(v3(point.x, point.y,0))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        
        // this._addCircle(point);
        this.calcScratchArea(point);

        if (this.hidePoints.length/this.hidePointsNum <0.8) {
            this.myMask.node.active = false;
        }

    }

    calcScratchArea(pos)
    {
        let x = Math.floor(pos.x / (20*2));
        let y = Math.floor(pos.y / (10*2));
        for (let i = 0; i < this.hidePoints.length; i++) {
            if (x === this.hidePoints[i].x&& y === this.hidePoints[i].y) {
                console.log( this.hidePoints[i]);
                this.hidePoints.splice(i,1);
                console.log( this.hidePoints.length);
                break;
            }
                
        }

    }

    /**绘制函数*/
    aaa: Graphics;
    _addCircle(point) {
        this.aaa = this.myMask.graphics;
        this.aaa.rect(point.x,point.y,10,10);

        // this.aaa.lineWidth=50;
        // this.aaa.moveTo(point.x - 25, point.y - 20);
        this.aaa.fill();
    }
}