import Pass from '../core/Pass';
import { merge } from 'nsfw/utils/utils'; 

class NoisePass extends Pass {

	constructor ( opts = {} ) {
		const defaults = {
			amount: 0.1,
			speed: 0.1
		};

		const options = merge(defaults, opts);

		super('NoisePass', 'noise.fs', 'basic.vs', {
			amount: { type: 'f', value: options.amount },
			speed: { type: 'f', value: options.speed },
			time: { type: 'f', value: 0 },
		});
	}

	update () {
		this.uniforms.time.value += 1 / 60;
	}

}

export default NoisePass;