import { _decorator, Component, RenderTexture, CameraComponent, ModelComponent } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass('RenderCameraToModel')
@menu('RenderTexture/RenderCameraToModel')
export class RenderCameraToModel extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(ModelComponent)
    model: ModelComponent = null;

    start () {
        // Your initialization goes here.
        const renderTex = new RenderTexture();
        renderTex.reset({
            width: 256,
            height: 256,
        });
        const cameraComp = this.getComponent(CameraComponent);
        cameraComp.targetTexture = renderTex;
        const pass = this.model.material.passes[0];
        const binding = pass.getBinding('mainTexture');
        pass.bindTexture(binding, renderTex.getGFXTexture());
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
