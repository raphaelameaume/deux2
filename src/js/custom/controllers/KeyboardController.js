import Events from '../events/Events';
import EventsManager from '../events/EventsManager';

class KeyboardController {

    constructor () {
        this.onKeyUp = ::this.onKeyUp;
        this.onKeyPress = ::this.onKeyPress;
        this.onKeyDown = ::this.onKeyDown;

        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('keypress', this.onKeyPress);
        window.addEventListener('keydown', this.onKeyDown);
    }

    onKeyUp ( event ) {
        const { key } = event;

        EventsManager.emit(Events.KEYBOARD.KEYUP, { key });

        if ( key === ' ' ) {
            EventsManager.emit(Events.KEYBOARD.SPACEUP);
        } 
    }

    onKeyDown ( event ) {
        const { key } = event;

        EventsManager.emit(Events.KEYBOARD.KEYDOWN, { key });

        if ( key === ' ' ) {
            EventsManager.emit(Events.KEYBOARD.SPACEDOWN);
        } 
    }

    onKeyPress ( event ) {
        const { key } = event;

        EventsManager.emit(Events.KEYBOARD.KEYPRESS, { key });
    }

}

export default KeyboardController;