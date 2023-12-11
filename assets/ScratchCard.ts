import { _decorator, Component, Node, EventTouch, Mask, RenderTexture, Sprite, SpriteFrame, Graphics, UITransform, v3, Camera } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ScratchCard')
export class ScratchCard extends Component {
    @property(Mask)
    myMask: Mask = null;

    @property(Camera)
    mainCamera: Camera = null;


    @property({
        displayName: "刮卡路径大小",
        min: 20
    })

    size: number = 20;

    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
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
        this._addCircle(point);
    }

    _onTouchEnd(event: EventTouch) {
        var point = event.touch.getLocation() as any;
        point = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(point.x, point.y));
        this._addCircle(point);
    }

    /**绘制函数*/
    aaa: Graphics;
    _addCircle(point) {
        this.aaa = this.myMask.graphics;
        // this.aaa.rect(point.x,point.y,50,40);
        this.aaa.lineWidth=50;

        this.aaa.moveTo(point.x - 25, point.y - 20);
        this.aaa.fill();
    }
}