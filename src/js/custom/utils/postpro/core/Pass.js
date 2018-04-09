class Pass {

	constructor ( name, fragmentShader, vertexShader, uniforms = {} ){
		this.name = name;
		this.fragmentShader = fragmentShader;
		this.vertexShader = vertexShader;

		this.enabled = true;
		this.uniforms = {
			resolution: { type: 'v2', value: new THREE.Vector2( 1, 1 ) },
			time: { type: 'f', value: 0 },
			tInput: { type: 't', value: new THREE.Texture(), default: true },
			...uniforms,
		};

		this.shader = new THREE.ShaderMaterial({
			vertexShader: require(`../shaders/${this.vertexShader}`),
			fragmentShader: require(`../shaders/${this.fragmentShader}`),
			uniforms: this.uniforms,
			flatShading: true,
			depthWrite: false,
			depthTest: false,
			transparent: true
		});
	}

}

export default Pass;