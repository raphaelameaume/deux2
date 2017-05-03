import Events from './events/Events';
import EventsManager from './events/EventsManager';
import randomFromArray from './utils/randomFromArray';

class FacesController {

    constructor () {
        this.container = new THREE.Object3D();
        this.faces = {};
        this.divisions = {
            x: this.generateDivisions(1, 125),
            y: this.generateDivisions(1, 25),
            lastX: 0,
            lastY: 0,
        };

        // on events
        this.onLowKick = ::this.onLowKick;
        this.onKeyPress = ::this.onKeyPress;
        this.onUIHidden = ::this.onUIHidden;
        this.onSoundEnd = ::this.onSoundEnd;

        // black modes
        this.blackModeVertical = ::this.blackModeVertical;
        this.blackModeHorizontal = ::this.blackModeHorizontal;
        this.blackModeTunnelTop = ::this.blackModeTunnelTop;
        this.blackModeTunnelBottom = ::this.blackModeTunnelBottom;
        this.blackModeBottom = ::this.blackModeBottom;

        this.blackModes = [
            this.blackModeVertical,
            this.blackModeHorizontal,
            this.blackModeTunnelTop,
            this.blackModeTunnelBottom,
            this.blackModeBottom,
        ];

        // reactions
        this.updateDivisions = :: this.updateDivisions;
        this.setBlackMode = ::this.setBlackMode;

        this.reactions = [
            this.updateDivisions,
            this.setBlackMode
        ];

        EventsManager.on(Events.KEYBOARD.KEYPRESS, this.onKeyPress);
        EventsManager.on(Events.SOUNDS.LOWKICK, this.onLowKick);
        EventsManager.on(Events.SOUNDS.END, this.onSoundEnd);
        EventsManager.on(Events.UI.HIDDEN, this.onUIHidden);
    }

    register ( id, face ) {
        this.faces[id] = face;
        this.container.add(face);
    }

    generateDivisions ( min, max ) {
        const divisions = [0];

        for ( let i = min; i <= max; i+=4 ) {
            divisions.push(i);
        }

        for ( let i = max; i >= min; i-= 4 ) {
            divisions.push(i);
        }

        divisions.push(0);

        return divisions;
    }

    updateDivisions () {
        const possibleDivisionX = this.findDivisions(this.divisions.x, this.divisions.lastX, 12);
        const rdmXIndex = Math.floor(Math.random() * possibleDivisionX.length);
        const divisionX = possibleDivisionX[rdmXIndex];

        this.divisions.lastX = this.divisions.x.indexOf(divisionX);

        const possibleDivisionY = this.findDivisions(this.divisions.y, this.divisions.lastY, 4);
        const rdmYIndex = Math.floor(Math.random() * possibleDivisionY.length);
        const divisionY = possibleDivisionY[rdmYIndex];

        this.divisions.lastY = this.divisions.y.indexOf(divisionY);

        Object.keys(this.faces).map( key => {
            this.faces[key].updateDivisions(divisionX, divisionY);
        });
    }

    setStripes () {
        Object.keys(this.faces).map( key => {
            this.faces[key].setStripes('horizontal', 1);
        });
    }

    findDivisions ( all, current, range ) {
        const divisions = all.map( ( division, index) => {
            if ( index > current - 4 && index < current + 4 ) {
                return division;
            }

            return false;
        }).filter( ( index) => {
            return index;
        });

        return divisions;
    }

    onKeyPress ( data ) {
        if ( !window.uiHidden || window.soundEnded ) {
            return;
        }

        const { key } = data;
        
        if ( key === 'd' ) {
            this.updateDivisions();
        }

        if ( key === 'e' ) {
            this.setBlackMode();
        }

        if ( key === 'u') {
            this.updateDivisions();
        }

        if ( key === 'x' ) {
            this.setBlackMode();
        }
    }

    onLowKick () {
        if ( !window.uiHidden ) {
            return;
        }

        const reaction = randomFromArray(this.reactions);
        reaction();
    }

    onSoundEnd ( data ) {
        const { name } = data;

        if ( name === 'xp' ) {
            const tl = new TimelineMax({ onComplete: () => {
                EventsManager.emit(Events.XP.END);
                this.reset();
            }});


            Object.keys(this.faces).map( key => {
                tl.add(this.faces[key].onEnd(), 0);
            });
        }
    }

    setBlackMode () {
        Object.keys(this.faces).map( key => {
            this.faces[key].setBlackMode();
        });
        
        const blackMode = randomFromArray(this.blackModes);
        blackMode();
    }

    blackModeVertical () {
        this.faces['left'].hide();
        this.faces['right'].hide();
        this.faces['top'].show();
        this.faces['bottom'].show();
    }

    blackModeHorizontal () {
        this.faces['left'].show();
        this.faces['right'].show();
        this.faces['top'].hide();
        this.faces['bottom'].hide();
    }

    blackModeTunnelTop () {
        this.faces['left'].show();
        this.faces['right'].show();
        this.faces['top'].show();
        this.faces['bottom'].hide();
    }

    blackModeTunnelBottom () {
        this.faces['left'].show();
        this.faces['right'].show();
        this.faces['top'].hide();
        this.faces['bottom'].show();
    }

    blackModeBottom () {
        this.faces['left'].hide();
        this.faces['right'].hide();
        this.faces['top'].hide();
        this.faces['bottom'].show();
    }

    changeScale () {
        const rdm = Math.random();

        // const face = this.faces['bottom'];

        // const to = face.uniforms['uSquare'].value.y * 2;

        // TweenMax.to(face.scale, 0.3, { y: 2, ease: this.ease });
        // TweenMax.to(this.faces['left'].uniforms['uSquare'].value, 0.3, { y: to, ease: this.ease });
        // TweenMax.to(this.faces['right'].uniforms['uSquare'].value, 0.3, { y: to, ease: this.ease });

        // const toPos = this.faces['left'].position.x * 2;
        // TweenMax.to(this.faces['left'].position, 0.3, { x: toPos, ease: this.ease });

        // const toPosRight = this.faces['right'].position.x * 2;
        // TweenMax.to(this.faces['right'].position, 0.3, { x: toPosRight, ease: this.ease });

        // const scale = Math.floor(Math.random() * 5) / 10 + 0.5;

        // TweenMax.to(this.container.scale, 0.3, { x: scale, y: scale, ease: Expo.easeOut });

        // if ( rdm < 0.33 ) {
        //     this.faces['left'].updatePosition();
        //     this.faces['right'].updatePosition();
        // } else if ( rdm < 0.66 ) {
        //     this.faces['top'].updatePosition();
        //     this.faces['bottom'].updatePosition();
        // } else {
        //     this.faces['top'].updatePosition();
        //     this.faces['bottom'].updatePosition();
        //     this.faces['left'].updatePosition();
        //     this.faces['right'].updatePosition();
        // }
    }

    onUIHidden () {
        console.log('onUIHidden');

        this.faces['left'].show();
        this.faces['right'].show();

        this.updateDivisions();
    }

    reset () {
        Object.keys(this.faces).map( key => {
            this.faces[key].reset();
        });

        this.divisions.lastX = 0;
        this.divisions.lastY = 0;
    }
}

export default FacesController;