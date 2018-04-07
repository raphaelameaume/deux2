import Events from './events/Events';
import EventsManager from './events/EventsManager';
import randomFromArray from './utils/randomFromArray';
import lucky from './utils/lucky';
import map from './utils/map';
import debounce from './utils/debounce';
import MidiController from './utils/MidiController';

class FacesController {

    constructor () {
        this.container = new THREE.Object3D();
        this.faces = {};
        this.divisions = {
            x: this.generateDivisions(5, 43),
            y: this.generateDivisions(5, 43),
            lastX: 0,
            lastY: 0,
        };

        this.allowInvert = true;

        this.time = 0.0;
        this.speed = 0.0;
        this.speedContainer = 0;
        this.factor = 1.0;
        this.isSpaceDown = false;
        this.firstSpaceUp = false;
        this.highkicked = 0;
        this.lowkicked = 0;
        this.direction = 1;
        this.currentBlackMode = 0;
        this.currentScaleMode = 0;

        // on events
        this.onLowKick = ::this.onLowKick;
        this.onMiddleKick = ::this.onMiddleKick;
        this.onHighKick = ::this.onHighKick;
        this.onTremolo = ::this.onTremolo;
        this.onKeyPress = ::this.onKeyPress;
        this.onUIHidden = ::this.onUIHidden;
        this.onSoundEnd = ::this.onSoundEnd;
        this.onSpaceUp = ::this.onSpaceUp;
        this.onSpaceDown = ::this.onSpaceDown;
        this.onStart = ::this.onStart;
        this.onSpaceHold = ::this.onSpaceHold;

        // black modes
        this.blackModeVertical = ::this.blackModeVertical;
        this.blackModeHorizontal = ::this.blackModeHorizontal;
        this.blackModeTunnelTop = ::this.blackModeTunnelTop;
        this.blackModeTunnelBottom = ::this.blackModeTunnelBottom;
        this.blackModeBottom = ::this.blackModeBottom;
        this.blackModeFull = ::this.blackModeFull;

        this.blackModes = [
            this.blackModeVertical,
            this.blackModeHorizontal,
            this.blackModeFull,
        ];

        // reactions
        this.updateDivisions = :: this.updateDivisions;
        this.setBlackMode = ::this.setBlackMode;
        this.changeScale = ::this.changeScale;

        this.reactions = [
            this.updateDivisions,
            this.setBlackMode,
            this.changeScale
        ];

        this.changeScaleX = ::this.changeScaleX;
        this.changeScaleY = ::this.changeScaleY;
        this.changeScaleBoth = ::this.changeScaleBoth;

        // scales
        this.scalings = [
            this.changeScaleY,
            this.changeScaleX,
            this.changeScaleBoth,
        ];

        EventsManager.on(Events.KEYBOARD.KEYPRESS, this.onKeyPress);
        EventsManager.on(Events.SOUNDS.LOWKICK, this.onLowKick);
        EventsManager.on(Events.SOUNDS.MIDDLEKICK, this.onMiddleKick);
        EventsManager.on(Events.SOUNDS.HIGHKICK, this.onHighKick);
        EventsManager.on(Events.SOUNDS.TREMOLO, this.onTremolo);
        EventsManager.on(Events.SOUNDS.END, this.onSoundEnd);
        EventsManager.on(Events.XP.START, this.onStart);

        // this.updateDivisions = debounce(this.updateDivisions, 400);
        // this.changeScale = debounce(this.changeScale, 400);
        // this.setBlackMode = debounce(this.setBlackMode, 400);

        this.updateDivisions();

        MidiController.onPadDown(1, () => {
            this.updateDivisions();
        });

        MidiController.onPadDown(2, () => {
            this.changeScale();
        });

        MidiController.onPadDown(3, () => {
            this.setBlackMode();
        });

        MidiController.onPadDown(4, () => {
            this.speedContainer = -this.speedContainer;
        });

        MidiController.onPadDown(5, () => {
            this.direction = -this.direction;
        });

        MidiController.onPadDown(6, () => {
            Object.keys(this.faces).map( key => {
                this.faces[key].invert();
            });
        });

        MidiController.onKnobChange(1, ( value ) => {
            const direction = this.speedContainer < 0 ? -1 : 1;

            this.speedContainer = value * 2 * direction;
        });

        MidiController.onKnobChange(2, ( value ) => {
            this.speed = value * 12;
        })
    }

    register ( id, face ) {
        this.faces[id] = face;
        this.container.add(face);
    }

    generateDivisions ( min, max, between = 4 ) {
        const divisions = [0];

        for ( let i = min; i <= max; i+= between ) {
            divisions.push(i);
        }

        for ( let i = max; i >= min; i-= between ) {
            divisions.push(i);
        }

        divisions.push(0);

        return divisions;
    }

    updateDivisions () {
        const possibleDivisionX = this.findDivisions(this.divisions.x, this.divisions.lastX, 2);
        const rdmXIndex = Math.floor(Math.random() * possibleDivisionX.length);
        const divisionX = possibleDivisionX[rdmXIndex];

        this.divisions.lastX = this.divisions.x.indexOf(divisionX);

        const possibleDivisionY = this.findDivisions(this.divisions.y, this.divisions.lastY, 2);
        const rdmYIndex = Math.floor(Math.random() * possibleDivisionY.length);
        const divisionY = possibleDivisionY[rdmYIndex];

        this.divisions.lastY = this.divisions.y.indexOf(divisionY);

        const tl = new TimelineMax();

        Object.keys(this.faces).map( key => {
            tl.add(this.faces[key].updateDivisions(divisionX, divisionY, this.allowInvert), 0);
        });
    }

    setStripes () {
        Object.keys(this.faces).map( key => {
            this.faces[key].setStripes('horizontal', 1);
        });
    }

    findDivisions ( all, current, range ) {
        const divisions = all.map( ( division, index) => {
            if ( index > current - range && index < current + range ) {
                return division;
            }

            return false;
        }).filter( ( index) => {
            return index;
        });

        return divisions;
    }

    onKeyPress ( data ) {
        if ( !window.started || window.soundEnded ) {
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
            this.changeScale();
        }

        if ( key === 'x' ) {
            this.speedContainer = !this.speedContainer;
        }
    }

    onLowKick () {
        if ( !window.started ) {
            return;
        }

        const rdm = Math.random();

        if ( rdm > 0.6 || !this.lowkicked ) {
            this.updateDivisions();
        } else if ( rdm > 0.2 ) {
             this.changeScale();
        } else {
            this.updateDivisions();
            this.changeScale();
        }

        this.lowkicked++;
    }

    onHighKick () {
        if ( !window.started ) {
            return;
        }

        this.speedContainer = 1.1;

        if ( this.highkicked % 2 === 0 ) {
            this.factor = -this.factor;
        } 

        this.highkicked++;
        this.allowInvert = false;

        this.divisions = {
            x: this.generateDivisions(3, 9, 2),
            y: this.generateDivisions(1, 13, 2),
            lastX: 0,
            lastY: 2,
        };

        this.blackModes = [
            this.blackModeFull,
        ];

        this.updateDivisions();
        this.setBlackMode();
        this.changeScale();

        // const reaction = randomFromArray(this.reactions);
        // reaction();
    }

    onMiddleKick () {
        // console.log('MIDDLEKICK');
    }

    onTremolo () {
        // console.log('Tremoloooo');
    }

    onSoundEnd ( data ) {
        const { name } = data;

        if ( name === 'xp' ) {
            const tl = new TimelineMax({ onComplete: () => {
                EventsManager.emit(Events.XP.END);
                this.reset();
            }});

            this.speed = 0.0;
            this.speedContainer = 0.0;
            this.time = 0.0;

            Object.keys(this.faces).map( key => {
                tl.add(this.faces[key].onEnd(), 0);
            });
        }
    }

    setBlackMode () {
        this.currentBlackMode++;

        if ( this.currentBlackMode > this.blackModes.length - 1 ) {
            this.currentBlackMode = 0;
        }
 
        const blackMode = this.blackModes[this.currentBlackMode];
        const options = blackMode();

        const tl = new TimelineMax();

        Object.keys(this.faces).map( key => {
            if ( options[key] === 0 ) {
                tl.add(this.faces[key].hide(), 0);
            } else {
                tl.add(this.faces[key].show(), 0);
            }

            tl.add(this.faces[key].setBlackMode(), 0);
        });
    }

    blackModeVertical () {
        return {
            top: 1,
            right: 0,
            bottom: 1,
            left: 0,
        };
    }

    blackModeHorizontal () {
        return {
            top: 0,
            right: 1,
            bottom: 0,
            left: 1,
        };
    }

    blackModeTunnelTop () {
        return {
            top: 1,
            right: 1,
            bottom: 0,
            left: 1,
        };
    }

    blackModeTunnelBottom () {
        return {
            top: 0,
            right: 1,
            bottom: 1,
            left: 1,
        };
    }

    blackModeBottom () {
        return {
            top: 0,
            right: 0,
            bottom: 1,
            left: 0,
        };
    }

    blackModeFull () {
        return {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
        };
    }

    changeScale () {
        this.currentScaleMode++

        if ( this.currentScaleMode > this.scalings.length - 1 ) {
            this.currentScaleMode = 0;
        }

        const scale = this.scalings[this.currentScaleMode];

        scale();
    }

    changeScaleX () {
        const to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

        TweenMax.to(this.container.scale, 0.3, { x: to, ease: Expo.easeOut });
    }

    changeScaleY () {
        const to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

        TweenMax.to(this.container.scale, 0.3, { y: to, ease: Expo.easeOut });
    }

    changeScaleBoth () {
        const to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

        TweenMax.to(this.container.scale, 0.3, { x: to, y: to, ease: Expo.easeOut });
    }

    onUIHidden () {
        this.faces['left'].show();
        this.faces['right'].show();

        this.updateDivisions();
    }

    reset () {
        Object.keys(this.faces).map( key => {
            this.faces[key].reset();
        });

        this.divisions = {
            x: this.generateDivisions(5, 43),
            y: this.generateDivisions(5, 43),
            lastX: 0,
            lastY: 0,
        };

        this.blackModes = [
            this.blackModeVertical,
            this.blackModeHorizontal,
            this.blackModeBottom,
            this.blackModeTunnelTop,
            this.blackModeTunnelBottom,
            this.blackModeFull,
        ];

        this.time = 0.0;
        this.speed = 0.0;
        this.speedContainer = 0.0;
        this.factor = 1.0;
        this.isSpaceDown = false;
        this.firstSpaceUp = false;
        this.highkicked = 0;
        this.allowInvert = true;
    }

    update () {
        this.time += this.factor * this.speed * 0.1 * this.direction;
        this.container.rotation.z += this.factor * this.speedContainer * 0.005;

        this.faces['left'].update(this.time);
        this.faces['right'].update(this.time);
        this.faces['bottom'].update(this.time);
        this.faces['top'].update(this.time);
    }

    onSpaceUp () {
        if ( window.started && this.isSpaceDown && this.firstSpaceUp ) {
            this.isSpaceDown = false;

            this.factor = -this.factor;
        }

        if ( window.started ) {
            this.firstSpaceUp = true;
        }

    }

    onSpaceDown () {
        if ( window.started && !this.isSpaceDown ) {
            this.isSpaceDown = true;
        }
    }

    onSpaceHold ( data ) {
        const { progress } = data;

        const uProgress = map(progress, 0, 1, 0, 1.8);

        Object.keys(this.faces).map( key => {
            this.faces[key].onSpaceHold(uProgress);
        });
    }

    onStart () {
        // this.speed = 12.0;

        TweenMax.to(this, 1, { speed: 12, ease: Expo.easeInOut });
    }
}

export default FacesController;