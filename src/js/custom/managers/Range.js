import EventsManager from '../events/EventsManager';

class Range {

    constructor ( name, freqs, delta, event ) {
        this.name = name;
        this.freqs = freqs;
        this.delta = delta;
        this.event = event;
        this.level = 0;

        this.time = Date.now();
    }

    update ( level ) {
        const delta = Date.now() - this.time;

        this.level = level;

        if ( delta > this.delta && this.level > 0.5 ) {
            this.time = Date.now();

            EventsManager.emit(this.event);
        }
    }

}

export default Range;