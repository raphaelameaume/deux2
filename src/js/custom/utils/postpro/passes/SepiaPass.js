import Pass from '../core/Pass';

class SepiaPass extends Pass {

	constructor ({ amount = 0.05 }) {
		super('SepiaPass', 'sepia.fs', 'basic.vs', {
			amount: { type: 'f', value: amount }
		});
	}

}

export default SepiaPass;