import Pass from '../core/Pass';

class FXAAPass extends Pass {

    constructor () {
        super('FXAAPass', 'fxaa.fs', 'basic.vs', {});
    }

}

export default FXAAPass;