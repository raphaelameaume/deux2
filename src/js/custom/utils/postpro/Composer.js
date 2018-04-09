import CopyPass from './passes/CopyPass';
import Pass from './core/Pass';

function removeNil ( as = [] ) {
    return as.filter(a => a != null);
}

function merge (...args) {
    const filtered = removeNil(args);
    
    if ( filtered.length < 1 ) {
        return {};
    }
    
    if ( filtered.length === 1 ) {
        return args[0];
    }

    return filtered.reduce( ( acc, cur ) => {
        Object.keys(cur).forEach((key) => {
            if ( typeof acc[key] === 'object' && typeof cur[key] === 'object' ) {
                acc[key] = merge(acc[key], cur[key]);
            } else {
                acc[key] = cur[key];
            }
        });
        
        return acc;
    }, {});
}

class Composer {

	constructor ( renderer, opts = {} ) {
		const defaults = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			wrapS: THREE.ClampToEdgeWrapping,
			wrapT: THREE.ClampToEdgeWrapping,
			format: THREE.RGBFormat,
			type: THREE.UnsignedByteType,
			stencilBuffer: true
		};

		const options = merge(defaults, opts);

		this.renderer = renderer;

		this.front = new THREE.WebGLRenderTarget(1, 1, options);
		this.back = this.front.clone();

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera( 1, 1, 1, 1, -10000, 10000);

		this.defaultMaterial = new THREE.MeshBasicMaterial();
		this.quad = new THREE.Mesh(
			new THREE.PlaneBufferGeometry( 1, 1 ),
			this.defaultMaterial
		);
		this.scene.add(this.quad);

		this.copyPass = new CopyPass();

		this.now = Date.now();
	}

	setSize ( w, h ) {
		this.width = w;
		this.height = h;

		this.camera.projectionMatrix.makeOrthographic( w / - 2, w / 2, h / 2, h / - 2, this.camera.near, this.camera.far );
		this.quad.scale.set( w, h, 1 );

		this.front.setSize( w, h );
		this.back.setSize( w, h );
	}

	swapBuffers () {
		this.output = this.write;
		this.input = this.read;

		const temp = this.write;
		this.write = this.read;
		this.read = temp;
	}

	pass ( pass, target ) {
		if ( pass instanceof Pass && pass.enabled ) {
			this.quad.material = pass.shader;
			this.quad.material.uniforms.tInput.value = this.read.texture;
			this.quad.material.uniforms.resolution.value.set(this.width, this.height);

			if ( target ) {
				this.renderer.render(this.scene, this.camera, target, true);
			} else {
				this.renderer.render(this.scene, this.camera, this.write, false);
				this.swapBuffers();
			}
		}
	}

	render ( scene, camera, target ) {
		const dest = target ? target : this.write;

		this.renderer.render(scene, camera, dest, true);
		this.swapBuffers();
	}

	reset () {
		this.read = this.front;
		this.write = this.back;

		this.output = this.write;
		this.input = this.read;
	}

	toScreen ( pass, target ) {
		this.quad.material = pass ? pass.shader : this.copyPass.shader;
		this.quad.material.uniforms.tInput.value = this.read.texture;
		this.quad.material.uniforms.resolution.value.set( this.width, this.height );

		if ( target ) {
			this.renderer.render(this.scene, this.camera, target, true);
		} else {
			this.renderer.render(this.scene, this.camera);
		}
	}

}

export default Composer;