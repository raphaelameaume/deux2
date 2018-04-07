import Pass from '../core/Pass';

class CustomPass extends Pass {

    constructor ( options ) {
        super('CustomPass', 'custom.fs', 'basic.vs', options);

        console.log(this.uniforms);
    }

    update () {

    }

}

export default CustomPass;