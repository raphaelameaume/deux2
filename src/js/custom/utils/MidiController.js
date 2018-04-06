import WebMidi from 'webmidi';

function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

class MidiController {

	static start ( config ) {
		MidiController.instance = new MidiController(config);
	}

	constructor ( config ) {
		this.config = config;

		this.pads = {};
		this.knobs = {};

		this.onSuccess = ::this.onSuccess;
		this.onError = ::this.onError;
		this.onMessage = ::this.onMessage;

		WebMidi.enable( ( err ) => {
			if ( err ) {
				this.onError(err);
			}

			this.onSuccess();
		});
	}

	requestAccess () {
        if ( navigator.requestMIDIAccess ) {
            navigator.requestMIDIAccess({
                sysex: false
            }).then(this.onSuccess, this.onError);
        } else {
            alert(`You browser doesn't support the MIDI API.`);
        }
	}

	onSuccess () {
		if ( WebMidi.inputs.length > 0 ) {

			this.input = WebMidi.inputs[0];

			this.parseConfig();

			this.input.addListener('noteon', 'all', ( e ) => {
				const keys = Object.keys(this.pads);

				for ( let i = 0; i < keys.length; i++ ) {
					const key = keys[i];
					const subscriptions = this.pads[key];

					for ( let j = 0; j < subscriptions.length; j++ ) {
						const { number, channel, callback } = subscriptions[j];

						if ( e.note.number === number ) {
							callback({ velocity: e.velocity });
						}
					}
				}
			});

			this.input.addListener('pitchbend', 'all', ( e ) => {
			});

			this.input.addListener('controlchange', 'all', ( e ) => {
				const keys = Object.keys(this.knobs);

				for ( let i = 0; i < keys.length; i++ ) {
					const key = keys[i];
					const subscriptions = this.knobs[key];

					for ( let j = 0; j < subscriptions.length; j++ ) {
						const { number, channel, callback } = subscriptions[j];

						if ( e.controller.number === number ) {
							const value = map(e.value, 0, 127, 0, 1);
							callback(value);
						}
					}
				}
			});
		}
	}

	parseConfig () {
		// this.pads = this.config.pads;
		// this.knobs = this.config.knobs;
	}

	onError ( error ) {
		console.error(`MidiController :: error while requesting MIDI access.`);
		throw new Error(error);
	}

	onMessage ( event ) {
		console.log(`MidiController :: onMessage`, event);
	}

	static onPadDown ( id, callback ) {
		const { instance } = MidiController;

		instance.registerPad(id, callback);
	}

	static onKnobChange ( id, callback ) {
		const { instance } = MidiController;

		instance.registerKnob(id, callback);
	}

	registerPad ( id, callback ) {
		if ( !this.pads[id] ) {
			this.pads[id] = [];
		}

		const number = this.findNumberInPads(id);

		if ( number ) {
			if ( typeof callback === 'function' ) {
				this.pads[id].push({ callback, number });
			} else {
				throw new Error(`MidiController :: onPadDown ${id} :: callback is not a function`);
			}
		} else {
			console.error(`Pad ${id} not registered in config`);
		}
	}

	registerKnob ( id, callback ) {
		if ( !this.knobs[id] ) {
			this.knobs[id] = [];
		}

		const number = this.findNumberInKnobs(id);

		if ( number ) {
			if ( typeof callback === 'function' ) {
				this.knobs[id].push({ callback, number });
			} else {
				throw new Error(`MidiController :: onKnobChange ${id} :: callback is not a function`);
			}

		} else {
			console.warn(`MidiController: Knob ${id} not registered in config`);
		}
	}

	findNumberInPads ( id ) {
		const { pads } = this.config;

		for ( let i = 0; i < pads.length; i++ ) {
			if ( pads[i].id === id ) {
				return pads[i].number;
			}
		}

		return false;
	}

	findNumberInKnobs ( id ) {
		const { knobs } = this.config;

		for ( let i = 0; i < knobs.length; i++ ) {
			if ( knobs[i].id === id ) {
				return knobs[i].number;
			}
		}

		return false;
	}


}

export default MidiController;