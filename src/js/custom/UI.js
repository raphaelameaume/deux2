import Events from './events/Events';
import EventsManager from './events/EventsManager';

class UI {

    constructor () {
        this.$wrapper = document.querySelector('.ui__section--intro');
        this.$logo = this.$wrapper.querySelector('.intro__logo');
        this.$action = this.$wrapper.querySelector('.intro__action');
        this.$actionLabel = this.$action.querySelector('.action__label');
        this.$actionFill = this.$wrapper.querySelector('.action__fill');
        this.$tuto = document.querySelector('.ui__section--tuto');
        this.$credits = document.querySelector('.ui__section--credits');
        this.$creditItems = document.querySelectorAll('.credits__item');
        this.$progressFill = document.querySelector('.ui__progress__fill');
        this.$help = document.querySelector('.ui__help');
        this.$background = document.querySelector('.ui__background');

        this.now = Date.now();
        this.maxTime = 3000;
        this.helpIsOpen = false;

        this.isCompleted = false;

        this.minFill = 0.01;
        this.maxFill = 1;
        this.fill = this.minFill;

        this.volume = 0;
        this.progress = 0;
        this.resetted = false;
        this.isDown = false;

        this.duration = 5;

        this.onComplete = ::this.onComplete;

        this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
        this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone  }, 0);
        this.tl.to(this.$progressFill, this.duration, { css: { transform: `scaleX(1)` }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$action, this.duration, { css: { opacity: 0 }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$logo, this.duration * 0.25, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
        this.tl.to(this, this.duration * 0.25, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.25);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 1 }, ease: Linear.easeNone }, this.duration * 0.4);
        this.tl.to(this.$tuto, this.duration * 0.75, { css: { scale: 1.5 }, ease: Linear.easeNone }, this.duration * 0.25);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 0 }, ease: Linear.easeNone }, this.duration * 0.75);
        this.tl.set(this, { progress: 0 });
        // this.tl.to(this, this.duration * 0.25, { progress: 0.44, ease: Expo.easeOut }, this.duration * 0.98);
        

        this.onKeyDown = ::this.onKeyDown;
        this.onKeyUp = ::this.onKeyUp;
        this.onSpaceDown = ::this.onSpaceDown;
        this.onSpaceUp = ::this.onSpaceUp;
        this.onEndXP = ::this.onEndXP;
        this.onClickHelp = ::this.onClickHelp;

        EventsManager.on(Events.KEYBOARD.KEYDOWN, this.onKeyDown);
        EventsManager.on(Events.KEYBOARD.KEYUP, this.onKeyUp);
        EventsManager.on(Events.KEYBOARD.SPACEUP, this.onSpaceUp);
        EventsManager.on(Events.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        EventsManager.on(Events.XP.END, this.onEndXP);

        this.tlHelpShow = new TimelineMax({ paused: true, onComplete: () => {
            this.helpIsOpen = true;
        }});
        this.tlHelpShow.to(this.$tuto, 0.5, { css: { opacity: 1, scale: 1 }, ease: Expo.easeOut }, 0);
        this.tlHelpShow.to(this.$background, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut }, 0);

        this.tlHelpHide = new TimelineMax({ paused: true, onComplete: () => {
            this.helpIsOpen = false;
        }});
        this.tlHelpHide.to(this.$tuto, 0.5, { css: { opacity: 0, scale: 0.9 }, ease: Expo.easeOut }, 0);
        this.tlHelpHide.to(this.$background, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut }, 0);

        this.$help.addEventListener('click', this.onClickHelp);

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
            this.tl.timeScale(4);
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
        if ( !this.isCompleted ) {
            TweenMax.set(this, { progress: 0 }, this.duration);
            TweenMax.set(this.$creditItems, { css: { scale: 0.8, opacity: 0 }});
            TweenMax.set(this.$credits, { css: { scale: 1, opacity: 1 }});
            TweenMax.set(this.$progressFill, { css: { transform: `scaleX(0)`}});
            TweenMax.to(this.$help, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut });

            this.isCompleted = true;
            EventsManager.emit(Events.XP.START);
        }
    }

    displayCredits () {
        this.$credits.style.pointerEvents = 'auto';
        this.$actionLabel.innerHTML = 'Hold spacebar to restart';

        this.isDown = false;

        this.tl.kill();
        this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
        this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone}, 0);
        this.tl.to(this.$action, this.duration, { css: { opacity: 0 }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$progressFill, this.duration, { css: { transform: `scaleX(1)` }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$credits, this.duration, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
        this.tl.to(this, this.duration * 0.5, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.5);

        if ( this.helpIsOpen ) {
            this.tlHelpHide.restart();   
        }

        const duration = 2;
        const tl = new TimelineMax({ onComplete: () => {
            this.reset();
        }});
        tl.staggerFromTo(Array.from(this.$creditItems), duration, { css: { scale: 0.8, opacity: 0 }}, { css: { scale: 1.0, opacity: 1 }, ease: Expo.easeOut }, duration * 0.05, 0);
        tl.to(this.$help, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut }, 0);
        tl.to(this.$action, this.duration, { css: { opacity: 1 }, ease: Expo.easeOut });
    }

    reset () {
        this.resetted = true;
        this.progress = 0;
        this.volume = 0;
        this.isDown = false;
        this.isCompleted = false;
        this.duration = 2;
    }

    onEndXP () {
        this.displayCredits();
    }

    onClickHelp ( event ) {
        event.preventDefault();

        if ( !window.started ) {
            return;
        }

        if ( !this.helpIsOpen ) {
            this.$help.innerHTML = 'X';

            this.tlHelpShow.restart();
        } else {
            this.$help.innerHTML = '?';

            this.tlHelpHide.restart();
        }
    }

}

export default UI;