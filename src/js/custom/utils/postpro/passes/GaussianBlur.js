import Pass from '../core/Pass';

class GaussianBlur extends Pass {

    constructor () {
        super('GaussianBlur', 'gaussian.fs', 'basic.vs', {
            direction: { type: 'v2', value: new THREE.Vector2(1, 1) }
        });

        // this.gui = window.postProcessingGui.addGroup({
        //     label: 'Gaussian'
        // });
        
        // this.x = { value: 1, range: [-20, 20 ]};
        // this.y = { value: 1, range: [-20, 20 ]};

        // this.gui.addSlider(this.x, 'value', 'range', {
        //     label: 'x',
        //     onChange: () => {
        //         this.uniforms.direction.value.x = this.x.value;
        //     }
        // });

        // this.gui.addSlider(this.y, 'value', 'range', {
        //     label: 'y',
        //     onChange: () => {
        //         this.uniforms.direction.value.y = this.y.value;
        //     }
        // });
    }

}

export default GaussianBlur;