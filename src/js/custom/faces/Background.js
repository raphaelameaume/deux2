import AbstractFace from './AbstractFace';

class Background extends AbstractFace {

    constructor ( geometry, color ) {
        super(geometry, color, 'background');
    }

}

export default Background;