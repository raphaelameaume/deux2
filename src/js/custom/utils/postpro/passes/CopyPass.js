import Pass from '../core/Pass';

class CopyPass extends Pass {

	constructor () {
		super('CopyPass', 'copy.fs', 'basic.vs');
	}

}

export default CopyPass;