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

        this.now = Date.now();
        this.maxTime = 3000;

        this.isCompleted = false;

        this.minFill = 0.01;
        this.maxFill = 1;
        this.fill = this.minFill;

        this.maxScale = 1.5;
        this.minScale = 1;
        this.scale = this.minScale;
        this.opacity = 1;
        this.progress = 0;
        this.resetted = false;
        this.isDown = false;

        this.onComplete = ::this.onComplete;

        this.tl = new TimelineMax({ paused: true });
        this.tl.to(this, 1.5, {
            opacity: -1,
            progress: 1,
            scale: this.maxScale,
            fill: this.maxFill,
            ease: Linear.easeNone,
            onComplete: this.onComplete
        });

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
            EventsManager.emit(Events.KEYBOARD.SPACEHOLD, { progress: this.progress });
        }

        if ( !this.isCompleted ) {
            if ( !this.resetted ) {
                this.$actionFill.style.transform = this.$actionFill.style.WebkitTransform = `skewX(-20deg) scaleX(${this.fill})`;
                this.$logo.style.transform = this.$logo.style.WebkitTransform = `scale(${this.scale})`;
                this.$logo.style.opacity = this.opacity;
                this.$action.style.opacity = this.opacity;
            } else {
                // scale credits
                this.$credits.style.transform = this.$credits.style.WebkitTransform = `scale(${this.scale})`;
                this.$credits.style.opacity = this.opacity;
            }
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
            this.tl.timeScale(3);
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
        this.isCompleted = true;

        if ( this.resetted ) {
            EventsManager.emit(Events.UI.HIDDEN);
        }

        this.$actionFill.style.transformOrigin = '100%';

        EventsManager.emit(Events.XP.START);

        if ( !this.resetted ) {
            this.displayTutorial();
        }
    }

    displayTutorial () {
        const duration = 4;

        const tl = new TimelineMax({ onComplete: () => {
            EventsManager.emit(Events.UI.HIDDEN);
        }});
        tl.fromTo(this.$tuto, 0.3, { css: { scale: 0.8 }}, { css: { scale: this.maxScale }, ease: Linear.easeNone }, 0);
        tl.to(this.$tuto, duration * 0.5, { css: { opacity: 1 }, ease: Linear.easeNone }, 0);
        tl.to(this.$tuto, duration * 0.5, { css: { opacity: 0 }, ease: Linear.easeNone }, duration * 0.5);
    }

    displayCredits () {
        this.$credits.style.pointerEvents = 'auto';

        const duration = 2;
        const tl = new TimelineMax({ onComplete: () => {
            this.reset();
        }});
        tl.fromTo(this.$credits, duration, { css: { scale: 0.9 }}, { css: { scale: 1.0 }, ease: Expo.easeOut }, 0);
        tl.to(this.$credits, duration, { css: { opacity: 1 }, ease: Expo.easeOut }, 0);
    }

    reset () {
        this.progress = 0;
        this.resetted = true;
        this.isCompleted = false;

        this.maxScale = 1.5;
        this.minScale = 1;
        this.scale = this.minScale;
        this.opacity = 1;
        this.progress = 0;
        this.isDown = false;

        this.tl = new TimelineMax({ paused: true });
        this.tl.to(this, 1.5, {
            opacity: -1,
            progress: 1,
            scale: this.maxScale,
            fill: this.maxFill,
            ease: Linear.easeNone,
            onComplete: this.onComplete
        });
    }

    onEndXP () {
        this.displayCredits();
    }

}

export default UI;