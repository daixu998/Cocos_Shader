import { _decorator, Camera, Canvas, Color, Component, Material, Node, Size, Sprite, tween, UITransform, view,screen, Button, Skeleton, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Transition')
export class Transition extends Component {
    // @property({type:Camera})
    // mainCamera:Camera
    @property(Sprite)
    sp:Sprite
    @property(sp.Skeleton)
    spineTab: sp.Skeleton;
    @property({type:Material})
    mat:Material
    // @property({type:Canvas})
    // canvas:Canvas
    // @property({type:Button})
    // btn:Button
    start() {
        // this.mainCamera = this.node.getComponent(Camera);
        this.sp = this.node.getComponent(Sprite);
        this.spineTab = this.node.getComponent(sp.Skeleton);
        // this.getComponent(UITransform).contentSize=screen.windowSize
        
        
    }

    update(deltaTime: number) {

    }

    changeMat(){
        let start = {num:255};
        let end = {num:0};
        const sp = this.sp;
        const color = new Color(255,255,255);
        sp.color = color;
        const mat = this.mat;
        sp.material = mat;
        tween(start).delay(0.0016).to(2.5,end, {
            onUpdate(target:any, ratio: number) {
                color.r = target.num;
                sp.color = color;
            },
        }).start();
    }

    changeSkeletonMat(){
        let start = {num:255};
        let end = {num:0};
        const sk =  this.spineTab;
        const color = new Color(255,255,255);
        sk.color = color;
        // const mat = this.mat;
        sk.customMaterial =this.mat;
        tween(start).delay(0.0016).to(2.5,end, {
            onUpdate(target:any, ratio: number) {
                color.r = target.num;
                sk.color = color;
            },
        }).start();
    }
}

