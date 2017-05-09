import EventsManager from '../events/EventsManager';

class Range {

    constructor ( name, freqs, delta, event, minLevel = 0.5 ) {
        this.name = name;
        this.freqs = freqs;
        this.delta = delta;
        this.event = event;
        this.level = 0;
        this.minLevel = minLevel;

        this.time = Date.now();
    }

    update ( level ) {
        const delta = Date.now() - this.time;

        this.level = level;

        if ( delta > this.delta && this.level > this.minLevel ) {
            this.time = Date.now();

            EventsManager.emit(this.event);
        }


        if ( this.name === 'highKick' ) {
            // console.log(this.level);
        }
    }

}

export default Range;