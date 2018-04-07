import Pass from '../core/Pass';

class BoxBlurPass extends Pass {

    constructor () {
        super('BoxBlurPass', 'box-blur.fs', 'basic.vs', {
            delta: { type: 'v2', value: new THREE.Vector2(0, 0),
            samples: { type: 'f', value: 30, range: [ 0, 100 ] } }
        });

        // this.gui = window.postProcessingGui.addGroup({
        //     label: 'BoxBlur'
        // });
        
        // this.x = { value: 0, range: [0, 1 ]};
        // this.y = { value: 0, range: [0, 1 ]};

        // this.gui.addSlider(this.x, 'value', 'range', {
        //     label: 'x',
        //     onChange: () => {
        //         this.uniforms.delta.value.x = this.x.value;

        //         console.log(this.uniforms.delta.value);
        //     }
        // });

        // this.gui.addSlider(this.y, 'value', 'range', {
        //     label: 'y',
        //     onChange: () => {
        //         this.uniforms.delta.value.y = this.y.value;

        //         console.log(this.uniforms.delta.value);
        //     }
        // });

        // console.log(this.uniforms);

        // this.gui.addSlider(this.uniforms.samples, 'value', 'range', {
        //     label: 'samples',
        // });
    }

}

export default BoxBlurPass;