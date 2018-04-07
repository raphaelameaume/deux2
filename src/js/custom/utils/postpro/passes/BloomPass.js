import Pass from '../core/Pass';

class BloomPass extends Pass {

  constructor () {
    super('BloomPass', 'bloomtest.fs', 'basic.vs', {
        increment: { value: new THREE.Vector2() }
    });

    // this.gui = window.postProcessingGui.addGroup({
    //     label: 'Bloom'
    // });

    // this.x = { value: 0, range: [0, 1 ]};
    // this.y = { value: 0, range: [0, 1 ]};

    // this.gui.addSlider(this.x, 'value', 'range', {
    //     label: 'x',
    //     onChange: () => {
    //         this.uniforms.increment.value.x = this.x;
    //     }
    // });

    // this.gui.addSlider(this.y, 'value', 'range', {
    //     label: 'y',
    //     onChange: () => {
    //         this.uniforms.increment.value.y = this.y;
    //     }
    // });

  }


}

export default BloomPass;