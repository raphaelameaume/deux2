import createPlayer from 'web-audio-player';
import createAnalyser from 'web-audio-analyser';
import average from 'analyser-frequency-average';
import Range from './Range';
import Events from '../events/Events';
import EventsManager from '../events/EventsManager';

const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = AudioContext ? new AudioContext() : null;

class SoundManager {

    constructor () {
        this.bass = 0;
        this.midBass = 0;
        this.voice = 0;
        this.drum = 0;
        this.pause = false;
        this.isSpaceDown = false;
        this.started = false;

        this.assets = '/assets/sounds';
        this.sources = {
            intro: 'intro.mp3',
            // xp: 'debug.mp3',
            xp: 'xp.mp3',
        };

        this.start = ::this.start;
        this.onSpaceHold = ::this.onSpaceHold;
        this.onSpaceUp = ::this.onSpaceUp;
        this.onSpaceDown = ::this.onSpaceDown;
        this.onStart = ::this.onStart;

        this.initSound();
        // this.initGui();

        const lowKick = new Range('lowKick', [110, 130], 600, Events.SOUNDS.LOWKICK);

        this.ranges = [lowKick];

        EventsManager.on(Events.SOUNDS.START, this.start);
        EventsManager.on(Events.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        EventsManager.on(Events.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        EventsManager.on(Events.KEYBOARD.SPACEUP, this.onSpaceUp);
        EventsManager.on(Events.XP.START, this.onStart);
    }

    initGui () {
        this.soundGui = window.gui.addFolder('Sound');
        
        let pause = this.soundGui.add(this, 'pause');
        pause.onChange(() => {
            if (this.pause) this.player.pause();
            else this.player.play();
        });
    }

    initSound () {
        this.players = {};

        Object.keys(this.sources).map( ( key ) => {
            this.players[key] = {
                audio: null,
                analyser: null,
                node: null,
            };

            const audio = new Audio();
            audio.volume = 0;
            audio.crossOrigin = 'Anonymous';
            audio.addEventListener('loadeddata', () => {
                const audioContext = AudioContext ? new AudioContext() : null;
                const analyser = createAnalyser(audio, audioContext, { audible: true, stereo: false });
                
                this.players[key].analyser = analyser;
                this.players[key].node = analyser.analyser;
                this.players[key].loaded = true;

                EventsManager.emit(Events.SOUNDS.CANPLAY, { name: key });
            });
            audio.addEventListener('ended', () => {
                EventsManager.emit(Events.SOUNDS.END, { name: key });
            });
            audio.src = `${this.assets}/${this.sources[key]}`;

            this.players[key].audio = audio;
        });
    }

    start () {
        const player = this.players['xp'];

        if ( player.loaded ) {
            player.audio.play();
        }
    }

    update () {
        if ( this.players['xp'].loaded ) {
            const { analyser, node } = this.players['xp'];

            const freqs = analyser.frequencies();

            for ( let i = 0; i < this.ranges.length; i++ ) {
                const range = this.ranges[i];
                const level = average(node, freqs, range.freqs[0], range.freqs[1]);

                range.update(level);
            }
        }
    }

    onSpaceHold ( data ) {
        const { progress } = data;
        const { audio } = this.players['intro'];

        audio.volume = Math.max(0, Math.min(progress * 0.5, 1));
    }

    onSpaceDown () {
        if ( !this.isSpaceDown ) {
            this.isSpaceDown = true;

            if ( !window.started ) {
                const { audio } = this.players['intro'];

                audio.play();
            }
        }
    }

    onSpaceUp () {
        if ( this.isSpaceDown ) {
            this.isSpaceDown = false;
        }
    }

    onStart () {
        const { audio: intro } = this.players['intro'];
        const { audio: xp } = this.players['xp'];

        xp.volume = 1;
        xp.play();

        const tl = new TimelineMax();
        tl.to(intro, 0.5, { volume: 0, ease: Expo.easeOut, onComplete: () => {
            intro.pause();
        }});
    }

}

export default SoundManager;