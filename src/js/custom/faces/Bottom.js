import AbstractFace from './AbstractFace';

class Bottom extends AbstractFace {

    constructor ( geometry, color ) {
        super(geometry, color, 'bottom');

        this.orientations = {
            horizontal: new THREE.Vector3(0, 1, 0),
            horizontalSkew1: new THREE.Vector3(-1, 0, 0),
            vertical: new THREE.Vector3(-3, 0, 0),
            verticalSkew1: new THREE.Vector3(1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, -1, 0),
        };

        this.uniforms['opacity'].value = 1.0;

        this.visibilityToggler = '2';
        this.visibilityHider = '3';
        this.visibilityShower = '1';

        this.togglePosition = false;
    }

    updatePosition () {

        // this.scale.y = 2;

        // this.togglePosition = !this.togglePosition;

        // const to = this.togglePosition ? this.position.y * 0.5 : this.position.y * 2;

        // TweenMax.to(this.position, this.duration, { y: to, ease: this.ease });
    }

    onStart () {
        super.onStart();

        this.setBlackMode();
        this.updateDivisions(this.startDivisions.x, this.startDivisions.y, false);
    }

    reset () {
        super.reset();

        this.uniforms['opacity'].value = 1.0;
    }

}

export default Bottom;