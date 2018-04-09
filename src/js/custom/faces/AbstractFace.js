import Events from '../events/Events';
import EventsManager from '../events/EventsManager';
import map from '../utils/map';

class AbstractFace extends THREE.Object3D {

    constructor ( geometry, color = 0x242425, name, side = THREE.FrontSide ) {
        super();

        this.planeGeometry = geometry;
        this.name = name;

        this.onKeyPress = ::this.onKeyPress;
        this.onSpaceHold = ::this.onSpaceHold;
        this.onStart = ::this.onStart;
        this.onHiddenUI = ::this.onHiddenUI;

        this.uniforms = THREE.UniformsUtils.clone(THREE.ShaderLib['phong'].uniforms);
        this.uniforms['uTime'] = { type:'f', value: 0.0 };
        this.uniforms['diffuse'] = { type: 'c', value: new THREE.Color(color) };
        this.uniforms['uStripeOrientation'] = { type: 'v3', value: new THREE.Vector3(0, 0, 0) };
        this.uniforms['uInvert'] = { type: 'f', value: 0.0 };
        this.uniforms['uSquare'] = { type: 'v3', value: new THREE.Vector3(1, 1) };
        this.uniforms['uWidth'] = { type: 'f', value: window.width };
        this.uniforms['uHeight'] = { type: 'f', value: window.height };
        this.uniforms['uLength'] = { type: 'f', value: window.length };
        this.uniforms['uProgress'] = { type: 'f', value: 0.0 };
        this.uniforms['opacity'].value = 1.0;

        this.startDivisions = new THREE.Vector2(9, 13);

        this.orientations = [];
        this.duration = 0.3;
        this.factor = 1;
        this.ease = Expo.easeOut;
        this.debug = false;
        this.started = false;
        this.isSpaceDown = false;

        if ( this.debug ) {
            this.initGui(false);
        }

        this.material = new THREE.ShaderMaterial({
            vertexShader: require('../shaders/bottom.vert.glsl'),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: require('../shaders/progress.frag.glsl'),
            uniforms: this.uniforms,
            lights: false,
            side: side,
            transparent: true,
            fog: true,
        });

        this.mesh = new THREE.Mesh(this.planeGeometry, this.material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.add(this.mesh);

        EventsManager.on(Events.KEYBOARD.KEYPRESS, this.onKeyPress);
        // EventsManager.on(Events.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        EventsManager.on(Events.XP.START, this.onStart);
        EventsManager.on(Events.UI.HIDDEN, this.onHiddenUI);
    }

    initGui ( isOpen ) {
        this.gui = window.gui.addFolder(this.name);
        this.gui.add(this.uniforms['uStripeOrientation'].value, 'x', -1, 1).name('Orientation x');
        this.gui.add(this.uniforms['uStripeOrientation'].value, 'y', -1, 1).name('Orientation y');
        this.gui.add(this.uniforms['uStripeOrientation'].value, 'z', -1, 1).name('Orientation z');
        this.gui.add(this.uniforms['uSquare'].value, 'x', 0, 100).name('Space x');
        this.gui.add(this.uniforms['uSquare'].value, 'y', 0, 100).name('Space y');
        this.gui.add(this.uniforms['uSquare'].value, 'z', 0, 100).name('Space z');
        
        isOpen && this.gui.open();
    }

    update ( time ) {
        this.uniforms['uTime'].value = time;
    }

    setPlainColor ( color ) {
        this.updateDivisions(0, 0);
    }

    setStripes ( orientationName, scalar = 1, duration = 2 ) {
        const orientation = this.orientations[orientationName];
        
        if ( orientation ) {
            const clone = orientation.clone().multiplyScalar(scalar); // rosace

            this.uniforms['uStripeOrientation'].value.x = clone.x;
            this.uniforms['uStripeOrientation'].value.y = clone.y;
            this.uniforms['uStripeOrientation'].value.z = clone.z;
        }
    }

    reverseStripes () {
        // this.factor = -this.factor;
    }

    changeSpeed ( speed = this.speedMin ) {
        this.speed = speed;
    }

    invert () {
        const tl = new TimelineLite();

        if ( this.blackMode ) {
            this.blackMode = false;
            tl.add(this.show());
        }

        const to = this.uniforms['uInvert'].value === 1.0 ? 0. : 1.;
        tl.to(this.uniforms['uInvert'], this.duration, { value: to, ease: this.ease, }, 0);
        
        return tl;
    }

    toggleVisibility () {
        if ( this.uniforms['opacity'].value ) {
            this.hide();
        } else {
            this.show();
        }
    }

    onKeyPress ( data ) {
        switch ( data.key ) {
            // case 'p':
            //     this.setPlainColor(0x000000);
            //     break;

            // case 'h':
            //     this.setStripes('horizontal', 1);
            //     break;

            // case 'v':
            //     this.setStripes('vertical', 1);
            //     break;

            // case 'i':
            //     this.invert();
            //     break;

            // case 'r':
            //     this.reverseStripes();
            //     break;

            // case this.visibilityToggler:
            //     this.toggleVisibility();
            //     break;

            // case this.visibilityHider:
            //     this.hide();
            //     break;

            // case this.visibilityShower:
            //     this.show();
            //     break;
        }
    }

    show () {
        return TweenMax.to(this.uniforms['opacity'], this.duration, { value: 1, ease: this.ease });
    }

    hide () {
        return TweenMax.to(this.uniforms['opacity'], this.duration, { value: 0, ease: this.ease });
    }

    updateDivisions ( x, y, invert = true ) {
        const tl = new TimelineMax();

        tl.to(this.uniforms['uSquare'].value, this.duration, { x: x, y: y, ease: this.ease }, 0);

        // if ( invert ) {
        //     tl.add(this.invert(), 0);
        // }

        return tl;
    }

    setBlackMode () {
        this.blackMode = true;

        return TweenMax.to(this.uniforms['uInvert'], this.duration, { value: 1.0, ease: this.ease, });
    }

    onSpaceHold ( uProgress ) {
        this.uniforms['uProgress'].value = uProgress;
    }

    onEnd () {
        this.uniforms['uTime'].value = 0.0;

        const duration = 2;

        const tl = new TimelineMax({ onComplete: () => {
        }});
        tl.set(this.uniforms['uSquare'].value, { x: 1, y: 1, ease: Expo.easeOut }, 0);
        tl.to(this.uniforms['uInvert'], duration, { value: 0.0, ease: Expo.easeOut }, 0);
        tl.fromTo(this.uniforms['uProgress'], duration, { value: 1.8 }, { value: 0.0, ease: Expo.easeOut }, 0);

        return tl;
    }

    reset () {
        this.uniforms['uTime'].value = 0.0;
        this.uniforms['uProgress'].value = 0.0;
        this.uniforms['opacity'].value = 0.0;
        this.uniforms['uInvert'].value = 0.0;
    }

    onStart () {
        this.show();
    }

    onHiddenUI () {
    }

}

export default AbstractFace;