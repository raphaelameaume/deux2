import Pass from '../core/Pass';

class RadialBlurPass extends Pass {

  constructor () {
    super('RadialBlurPass', 'radial-blur.fs', 'basic.vs', {
        lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
        exposure: { value: 0.18, range:[0,1] },
        decay: { value: 0.95, range:[0,1] },
        density: { value: 0.8, range:[0,1] },
        weight: { value: 0.4, range:[0,1] },
        samples: { value: 50, range:[0,100] },
    });

    // this.gui = window.postProcessingGui.addGroup({
    //     label: 'RadialBlur'
    // });

    // this.gui.addSlider(this.uniforms.exposure, 'value', 'range', {
    //     label: 'exposure'
    // });
    // this.gui.addSlider(this.uniforms.decay, 'value', 'range', {
    //     label: 'decay'
    // });
    // this.gui.addSlider(this.uniforms.density, 'value', 'range', {
    //     label: 'density'
    // });
    // this.gui.addSlider(this.uniforms.weight, 'value', 'range', {
    //     label: 'weight'
    // });
    // this.gui.addSlider(this.uniforms.samples, 'value', 'range', {
    //     label: 'samples'
    // });
  }

}

export default RadialBlurPass;