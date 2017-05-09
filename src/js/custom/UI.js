import Events from './events/Events';
import EventsManager from './events/EventsManager';

class UI {

    constructor () {
        this.$wrapper = document.querySelector('.ui__section--intro');
        this.$logo = this.$wrapper.querySelector('.intro__logo');
        this.$action = this.$wrapper.querySelector('.intro__action');
        this.$actionFill = this.$wrapper.querySelector('.action__fill');
        this.$tuto = document.querySelector('.ui__section--tuto');
        this.$credits = document.querySelector('.ui__section--credits');
        this.$creditItems = document.querySelectorAll('.credits__item');

        this.now = Date.now();
        this.maxTime = 3000;

        this.isCompleted = false;

        this.minFill = 0.01;
        this.maxFill = 1;
        this.fill = this.minFill;

        this.volume = 0;
        this.progress = 0;
        this.resetted = false;
        this.isDown = false;

        this.duration = 4;

        this.onComplete = ::this.onComplete;

        this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
        this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone}, 0);
        this.tl.to(this.$action, this.duration, { css: { opacity: 0 }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$logo, this.duration * 0.25, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
        this.tl.to(this, this.duration * 0.25, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.25);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 1 }, ease: Linear.easeNone }, this.duration * 0.5);
        this.tl.to(this.$tuto, this.duration * 0.5, { css: { scale: 1.5 }, ease: Linear.easeNone }, this.duration * 0.5);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 0 }, ease: Linear.easeNone }, this.duration);
        this.tl.set(this, { progress: 0 }, this.duration);
        this.tl.to(this, this.duration * 0.25, { progress: 0.44, ease: Expo.easeInOut }, this.duration);

        this.onKeyDown = ::this.onKeyDown;
        this.onKeyUp = ::this.onKeyUp;
        this.onSpaceDown = ::this.onSpaceDown;
        this.onSpaceUp = ::this.onSpaceUp;
        this.onEndXP = ::this.onEndXP;

        EventsManager.on(Events.KEYBOARD.KEYDOWN, this.onKeyDown);
        EventsManager.on(Events.KEYBOARD.KEYUP, this.onKeyUp);
        EventsManager.on(Events.KEYBOARD.SPACEUP, this.onSpaceUp);
        EventsManager.on(Events.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        EventsManager.on(Events.XP.END, this.onEndXP);

        this.init();
    }

    init () {
        this.display();
    }

    update () {
        if ( !this.isCompleted ) {
            EventsManager.emit(Events.KEYBOARD.SPACEHOLD, { progress: this.progress, volume: this.volume });
        }
    }

    display () {
        return TweenMax.to(this.$wrapper, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut });
    }

    hide () {
        return TweenMax.to(this.$wrapper, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut });
    }

    onKeyDown ( data ) {

    }

    onKeyUp ( data ) {

    }

    onSpaceUp () {
        if ( !window.started && this.isDown && !this.isCompleted ) {
            this.isDown = false;
            this.tl.timeScale(6);
            this.tl.reverse();
        }
    }

    onSpaceDown () {
        if ( !window.started && !this.isDown ) {
            this.isDown = true;
            this.tl.timeScale(1);
            this.tl.play();
        }
    }

    onComplete () {
        TweenMax.set(this.$creditItems, { css: { scale: 0.8, opacity: 0 }});
        TweenMax.set(this.$credits, { css: { scale: 1, opacity: 1 }})

        if ( !this.isCompleted ) {
            this.isCompleted = true;
            EventsManager.emit(Events.XP.START);
        }
    }

    displayCredits () {
        this.$credits.style.pointerEvents = 'auto';

        const duration = 2;
        const tl = new TimelineMax({ onComplete: () => {
            this.reset();
        }});
        tl.staggerFromTo(Array.from(this.$creditItems), duration, { css: { scale: 0.8, opacity: 0 }}, { css: { scale: 1.0, opacity: 1 }, ease: Expo.easeOut }, duration * 0.1, 0);
    }

    reset () {
        this.resetted = true;
        this.progress = 0;
        this.volume = 0;
        this.isDown = false;
        this.duration = 2;
        this.isCompleted = false;

        this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
        this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone}, 0);
        this.tl.to(this.$credits, this.duration * 0.5, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
        this.tl.to(this, this.duration * 0.5, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.5);
    }

    onEndXP () {
        this.displayCredits();
    }

}

export default UI;