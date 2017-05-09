import AbstractFace from './AbstractFace';

class Left extends AbstractFace {

    constructor ( geometry, color ) {
        super(geometry, color, 'left');

        this.orientations = {
            horizontal: new THREE.Vector3(1, 0, 0),
            horizontalSkew1: new THREE.Vector3(0, 20, 0),
            vertical: new THREE.Vector3(0, 1, 0),
            verticalSkew1: new THREE.Vector3(-1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, -1, 0),
        };

        this.visibilityToggler = '4';
        this.visibilityHider = '1';
        this.visibilityShower = '3';
    }
}

export default Left;