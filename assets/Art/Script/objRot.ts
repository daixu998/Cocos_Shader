import { _decorator, Component, Node, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('objRot')
export class objRot extends Component {
    [x: string]: any;
    // extends: Component;

    properties: {
        rotationAxis: Vec3,
        rotationSpeed: 10 // 旋转速度
    }

    
    start() {

    }

    update(deltaTime: number) {
        let angle = this.node.rotationSpeed *deltaTime;
        this.rotateAround(this.rotationAxis, v3(0.0, 0.0, 0.0), angle);
    }
}

