import { _decorator, Component, Node, EventTouch, Mask, RenderTexture, Sprite, SpriteFrame, Graphics, UITransform, v3, Camera, Color } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ScratchCard')
export class ScratchCard extends Component {
    @property(Mask)
    myMask: Mask = null;

    @property(Camera)
    mainCamera: Camera = null;

    // const temp_vec2 = new Vec2();
    @property({
        displayName: "刮卡路径宽度",
        min: 2
    })


    public with: number = 3;
    public hight: number =3;

    onLoad() {
        this.aaa = this.myMask.graphics;
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }
    /**鼠标事件 */
    _onTouchBegin(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        point = this.mainCamera.screenToWorld(v3(point.x, point.y,0))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this.aaa = this.myMask.graphics;
        this.aaa.moveTo(point.x,point.y);
        this.aaa.stroke();
    }

    _onTouchMoved(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        point = this.mainCamera.screenToWorld(v3(point.x, point.y,0))
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        

        this.aaa = this.myMask.graphics;
        this.aaa.lineWidth =this.with ;
        this.aaa.strokeColor = Color.WHITE;
        this.aaa.lineTo(point.x,point.y);

        this.aaa.stroke();

    }

    _onTouchEnd(event: EventTouch) {
        // var point = event.touch.getLocation() as any;
        // point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        // this._addCircle(point);

        


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