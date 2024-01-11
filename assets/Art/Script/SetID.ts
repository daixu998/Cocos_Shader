import { _decorator, Component, Material, MeshRenderer, Node, renderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SetID')
export class SetID extends Component {
    @property({
        displayName: "ID",
        min: 0
    })
    with: number = 0;

    start() {
        
        const mat = new Material();
        mat.initialize({
        // 通过 effect 名指定材质使用的着色器资源
        effectName: 'builtin-standard-uvmove',
        defines: {
        AOTU_UV: true
        }
        });
        mat.setProperty('xxx', 6);
        mat.setProperty('yyy', 9);
        mat.setProperty('uvstep', this.with);
        
        let renderer = this.getComponent(MeshRenderer);
        // let material = renderer.getMaterial(0);
        // material.setProperty('uvstep', this.with);
        renderer.setMaterial(mat,0);
        //   this.node.getComponent(renderer.MaterialInstance).  
    }

    // update(deltaTime: number) {
        
    // }   
}

