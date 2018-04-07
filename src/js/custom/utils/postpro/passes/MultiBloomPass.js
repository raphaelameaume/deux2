import Pass from '../core/Pass';

class MultiBloomPass extends Pass {

    constructor ( blendTexture ) {
        super('MultiBloomPass', 'multibloom.fs', 'basic.vs', {});
    }

    update () {

    }

}

export default MultiBloomPass;