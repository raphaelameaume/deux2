/**
 * Events Manager
 * based on https://github.com/scottcorgan/tiny-emitter/blob/master/index.js
 */

class EventsManager {

    /**
     * Emit event
     * @param  {String} event name
     * @param  {Object} data
     */
    static emit ( event, data = null ) {

        const listeners = EventsManager.eventsList[event];

        if(!listeners) {
            return;
        }

        for( let i = 0, len = listeners.length; i < len; i++ ) listeners[i].fn( data );

    }

    /**
     * On 
     * @param  {String}   event name
     * @param  {Function} callback function
     */
    static on ( event, fn ) {

        // console.log('EventsManager :: ON ::', event);

        if(!EventsManager.eventsList) EventsManager.eventsList = {};

        if(!EventsManager.eventsList[event]) EventsManager.eventsList[event] = []; // improve (._.)

        EventsManager.eventsList[event].push({fn:fn});

    }

    static once( event, fn ) {

        const listener = ( data ) =>{

            EventsManager.off(event, listener);
            fn(data);
        };

        listener._ = fn;
        EventsManager.on( event, listener);
    }


    static off ( event, fn ) {
        
        const listeners = EventsManager.eventsList[event];

        if(!listeners) {
            console.warn('EventsManager :: Off :: Currently no listeners for this event : ', event);
            return;
        }

        if(!fn) {
            console.warn('EventsManager :: Off :: Callback is undefined');
            return;
        }

        const targetEvents = [];

        for( let i = 0, len = listeners.length; i < len; i++ ) {

            const target = listeners[i];

            if(target.fn !== fn && target.fn._ !== fn ) { // (.__.) ??
                targetEvents.push(target);
            }
        }


        if( targetEvents.length > 0 )
            EventsManager.eventsList[event] = targetEvents;
        else 
            delete EventsManager.eventsList[event];

    }
}

export default EventsManager;