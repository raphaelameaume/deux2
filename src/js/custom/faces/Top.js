import AbstractFace from './AbstractFace';

class Top extends AbstractFace {

    constructor ( geometry, color ) {
        super(geometry, color, 'top', THREE.BackSide);

        this.orientations = {
            horizontal: new THREE.Vector3(0, 1, 0),
            horizontalSkew1: new THREE.Vector3(20, 0, 0),
            vertical: new THREE.Vector3(1, 0, 0),
            verticalSkew1: new THREE.Vector3(1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, 1, 0),
        };

        this.visibilityToggler = '8';
        this.visibilityHider = '3';
        this.visibilityShower = '1';

        this.togglePosition = false;
    }

    updatePosition () {
        this.togglePosition = !this.togglePosition;

        const to = this.togglePosition ? this.position.y * 0.5 : this.position.y * 2;

        TweenMax.to(this.position, this.duration, { y: to, ease: this.ease });
    }

    onStart () {
        super.onStart();

        this.show();
        this.setBlackMode();
        this.updateDivisions(this.startDivisions.x, this.startDivisions.y, false);
    }
}

export default Top;