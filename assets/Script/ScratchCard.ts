import { _decorator, Component, Node, EventTouch, Mask, RenderTexture, Sprite, SpriteFrame, Graphics, UITransform, v3, Camera, math } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ScratchCard')
export class ScratchCard extends Component {
    @property(Mask)
    myMask: Mask = null;
    @property(Node)
    maskBg: Node = null;

    @property(Camera)
    mainCamera: Camera = null;


    @property({
        displayName: "刮卡宽",
        min: 1
    })
    with: number = 20;

    @property({
        displayName: "刮卡高",
        min: 1
    })

    hight: number = 20;


    private hidePointsNum :number;
    private hidePoints = [];
    onLoad() {
        this.initMaskPoints();
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
        point = this.mainCamera.screenToWorld(v3(point.x, point.y))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this._addCircle(point);
    }

    _onTouchMoved(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        
        point = this.mainCamera.screenToWorld(v3(point.x, point.y))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this.calcScratchArea(point);
        this._addCircle(point);
    }

    _onTouchEnd(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this._addCircle(point);
        
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
        this.aaa.fillRect(point.x-this.with*0.5 ,point.y - this.hight * 0.5,this.with,this.hight);

        // this.aaa.lineWidth=50;

        // this.aaa.moveTo(point.x - 25, point.y - 20);
        //this.aaa.fill();
    }
}