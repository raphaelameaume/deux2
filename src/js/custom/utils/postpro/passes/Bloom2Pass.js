import Pass from '../core/Pass';

class Bloom2Pass extends Pass {

  constructor () {
    super('Bloom2Pass', 'bloom2.fs', 'basic.vs', {
        kernel: { value: 0.005, range: [0, 0.01] },
        scale: { value: 1, range: [0, 20] },
        tresh: { value: 1, range: [0, 1] },
    });

    // this.gui = window.postProcessingGui.addGroup({
    //     label: 'Bloom2'
    // });

    // this.gui.addSlider(this.uniforms.kernel, 'value', 'range', {
    //     label: 'kernel',
    //     dp: 3,
    // });

    // this.gui.addSlider(this.uniforms.scale, 'value', 'range', {
    //     label: 'scale'
    // });

    // this.gui.addSlider(this.uniforms.tresh, 'value', 'range', {
    //     label: 'tresh'
    // });
  }

}

export default Bloom2Pass;