import Events from '../events/Events';
import EventsManager from '../events/EventsManager';
import map from '../utils/map';

class AbstractFace extends THREE.Object3D {

    constructor ( geometry, color = 0x242425, name, side = THREE.FrontSide ) {
        super();

        this.planeGeometry = geometry;
        this.name = name;

        this.onKeyPress = ::this.onKeyPress;
        this.onKeyDown = ::this.onKeyDown;
        this.onKeyUp = ::this.onKeyUp;
        this.onSpaceHold = ::this.onSpaceHold;
        this.onSpaceUp = ::this.onSpaceUp;
        this.onSpaceDown = ::this.onSpaceDown;
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
        this.uniforms['opacity'].value = 0.0;

        this.startDivisions = new THREE.Vector2(65, 1);

        this.orientations = [];
        this.speed = 0.0;
        this.speedMin = 12.0; // 7.0
        this.speedMax = 12.0;
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
            shading: THREE.FlatShading,
            lights: true,
            wireframe: false,
            side: side,
            transparent: true,
            fog: true,
        });

        this.mesh = new THREE.Mesh(this.planeGeometry, this.material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.add(this.mesh);

        EventsManager.on(Events.KEYBOARD.KEYPRESS, this.onKeyPress);
        EventsManager.on(Events.KEYBOARD.KEYDOWN, this.onKeyDown);
        EventsManager.on(Events.KEYBOARD.KEYUP, this.onKeyUp);
        EventsManager.on(Events.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        EventsManager.on(Events.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        EventsManager.on(Events.KEYBOARD.SPACEUP, this.onSpaceUp);
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

    update () {
        this.uniforms['uTime'].value += this.factor * this.speed * 0.1;
    }

    setPlainColor ( color ) {
        this.updateDivisions(0, 0);
        // this.uniforms['diffuse'].value = new THREE.Color(0xFFFFFF);
    }

    setStripes ( orientationName, scalar = 1, duration = 2 ) {
        const orientation = this.orientations[orientationName];
        
        if ( orientation ) {
            const clone = orientation.clone().multiplyScalar(scalar); // rosace

            this.uniforms['uStripeOrientation'].value.x = clone.x;
            this.uniforms['uStripeOrientation'].value.y = clone.y;
            this.uniforms['uStripeOrientation'].value.z = clone.z;
            // TweenMax.to(this.uniforms['uStripeOrientation'].value, 0.4, { x: clone.x, y: clone.y, z: clone.z, ease: Expo.easeInOut });
        }
    }

    reverseStripes () {
        this.factor = -this.factor;
    }

    changeSpeed ( speed = this.speedMin ) {
        this.speed = speed;
    }

    invert () {
        if ( this.blackMode ) {
            this.blackMode = false;
            this.show();
        }

        const to = this.uniforms['uInvert'].value === 1.0 ? 0. : 1.;

        TweenMax.to(this.uniforms['uInvert'], this.duration, { value: to, ease: this.ease, });
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
        TweenMax.to(this.uniforms['opacity'], this.duration, { value: 1, ease: this.ease });
    }

    hide () {
        TweenMax.to(this.uniforms['opacity'], this.duration, { value: 0, ease: this.ease, onComplete: () => {
            this.uniforms['uProgress'].value = 0;
        }});
    }

    onKeyUp ( data ) {
        
    }

    onKeyDown ( data ) {
        
    }

    onSpaceUp () {
        if ( window.started && this.isSpaceDown ) {
            this.isSpaceDown = false;
            this.reverseStripes();
        }
    }

    onSpaceDown () {
        if ( window.started && !this.isSpaceDown ) {
            this.isSpaceDown = true;
        } else if ( window.started && this.isSpaceDown ) {
            this.isSpaceDown = false;
        }
    }

    updateDivisions ( x, y, invert = true ) {
        TweenMax.to(this.uniforms['uSquare'].value, this.duration, { x: x, y: y, ease: this.ease });

        if ( invert ) {
            Math.random() > 0.5 && this.invert();
        }
    }

    setBlackMode () {
        this.blackMode = true;

        TweenMax.to(this.uniforms['uInvert'], this.duration, { value: 1.0, ease: this.ease, });
    }

    onSpaceHold ( data ) {
        const { progress } = data;

        this.uniforms['uProgress'].value = map(progress, 0, 1, 0, 0.8);
    }

    onEnd () {
        this.changeSpeed(0.0);
        this.uniforms['uTime'].value = 0.0;

        const duration = 2;

        const tl = new TimelineMax({ onComplete: () => {
        }});
        tl.set(this.uniforms['uSquare'].value, { x: 1, y: 1, ease: Expo.easeOut }, 0);
        tl.to(this.uniforms['uInvert'], duration, { value: 0.0, ease: Expo.easeOut }, 0);
        tl.fromTo(this.uniforms['uProgress'], duration, { value: 0.85 }, { value: -0.15, ease: Expo.easeOut }, 0);

        return tl;
    }

    reset () {
        this.uniforms['uTime'].value = 0.0;
        this.uniforms['uProgress'].value = 0.0;
        this.uniforms['opacity'].value = 0.0;
        this.uniforms['uInvert'].value = 0.0;
    }

    onStart () {
        this.changeSpeed();
    }

    onHiddenUI () {
        this.show();

        // this.updateDivisions(3, 1);
        // TweenMax.to(this.uniforms['uProgress'], 2, { value: 1, ease: this.ease });
    }

}

export default AbstractFace;