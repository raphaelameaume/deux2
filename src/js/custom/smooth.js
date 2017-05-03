var queue = {};

/*
** allow any number variable to be smoothed
* @param {string} id - a unique name for your smoothing
* @param {number} value - the value you want to be smoothed
* @param {number} coeff (optional) - the smoothing coefficient, the smaller, the slower. Default: 0.1
* @param {boolean} log (optional) - either the smoothed value is log in the console. Default: false
* @param {number} init (optional) - the starting value of the smoothing. Default: 0
* @return {number} the smoothed value
**/

function smooth ( id, value, coeff = 0.1, log = false, init = 0 ) {
	if ( queue[id] !== undefined ) {
		queue[id] += ( value - queue[id] ) * coeff;

		if ( log ) {
			console.log(`%cSmooth ${id} :: ${queue[id]}`, 'color: blue;');
		}
	} else {
		if ( typeof id !== 'string' || id === '' ) {
			throw new Error('Smooth :: id should be a non-empty string');
		}

		queue[id] = init;
	}

	return queue[id];
};

export default smooth;