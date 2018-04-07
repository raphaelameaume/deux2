import Pass from '../core/Pass';

class AdditivePass extends Pass {

    constructor ( blendTexture ) {
        super('AdditivePass', 'additive.fs', 'basic.vs', {
            tBlend: { value: blendTexture },
            opacity: { value: 1. }
        });
    }

}

export default AdditivePass;