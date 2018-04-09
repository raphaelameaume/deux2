import Pass from '../core/Pass';

class SSAOPass extends Pass {

    constructor ( depthTexture, cameraNear, cameraFar ) {
        super('SSAOPass', 'ssao.fs', 'basic.vs', {
            radius: { value: 0, range: [0, 64]},
            aoClamp: { value: 0, range: [0, 1]},
            lumInfluence: { value: 0, range: [0, 1]},
            tDepth: { value: depthTexture },
            cameraNear: { value: cameraNear },
            cameraFar: { value: cameraFar },
            onlyAO: { value: true }
        });

        this.gui = window.postProcessingGui.addGroup({
            label: 'SSAO'
        });

        this.gui.addSlider(this.uniforms.radius, 'value', 'range', {
            label: 'radius',
        });

        this.gui.addSlider(this.uniforms.aoClamp, 'value', 'range', {
            label: 'aoClamp',
        });

        this.gui.addSlider(this.uniforms.lumInfluence, 'value', 'range', {
            label: 'lumInfluence',
        });

    // this.gui.addSlider(this.y, 'value', 'range', {
    //     label: 'y',
    //     onChange: () => {
    //         this.uniforms.increment.value.y = this.y;
    //     }
    // });
    }

}

export default SSAOPass;