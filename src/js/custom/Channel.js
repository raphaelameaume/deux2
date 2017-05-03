const glslify = require('glslify');
import smooth from './smooth';

class Channel extends THREE.Object3D {

	constructor ({ name, color, position }) {
		super();

		this.position.copy(position);

		this.name = name;
		this.color = color;

		this.radius = 4;
		this.height = 80.0;
		this.radiusSegments = 100;
		this.heightSegments = Math.floor(this.height / 5);
		this.time = 0.0;
		this.speed = 0.002;
		this.rotationSens = 1;
		this.rotationSpeed = 0.01;

		//Create a path from the points
		this.path = new THREE.CatmullRomCurve3(window.points);

		this.cylinderGeometry = new THREE.TubeGeometry(this.path, 256, 1, this.radiusSegments, true );
		this.squareGeometry = new THREE.TubeGeometry(this.path, 256, 1, 400, true );
		this.triangleGeometry = new THREE.TubeGeometry(this.path, 256, 1, 20, true );

		// this.cylinderGeometry = new THREE.CylinderGeometry(
		// 	this.radius,
		// 	this.radius,
		// 	this.height,
		// 	this.radiusSegments,
		// 	this.heightSegments,
		// );

		// this.squareGeometry = new THREE.CylinderGeometry(
		// 	this.radius,
		// 	this.radius,
		// 	this.height,
		// 	400,
		// 	this.heightSegments,
		// );

		// this.triangleGeometry = new THREE.CylinderGeometry(
		// 	this.radius,
		// 	this.radius,
		// 	this.height,
		// 	4,
		// 	this.heightSegments,
		// );

		this.geometry = new THREE.BufferGeometry().fromGeometry(this.cylinderGeometry);

		this.uniforms = THREE.UniformsUtils.clone(THREE.ShaderLib['points'].uniforms);
		// console.log(pointsUniforms);
		this.uniforms['diffuse'] = { type: 'c', value: new THREE.Color(this.color) };
		this.uniforms['size'] = { type: 'f', value: 2.2 };
		this.uniforms['uTime'] = { type: 'f', value: 0.0 };
		this.uniforms['uHeight'] = { type: 'f', value: this.height };
		this.uniforms['opacity'] = { type: 'f', value: 0.8 };

		this.material = new THREE.ShaderMaterial({
			vertexShader: glslify('./shaders/points.vert.glsl'),
            fragmentShader: glslify('./shaders/points.frag.glsl'),
            uniforms: this.uniforms,
            transparent: true,
            lights: false
		});

		this.mesh = new THREE.Points(this.cylinderGeometry, this.material);
		this.add(this.mesh);

		this.square = new THREE.Points(this.squareGeometry, this.material);
		this.square.visible = false;
		this.add(this.square);

		this.triangle = new THREE.Points(this.triangleGeometry, this.material);
		this.triangle.visible = false;
		this.add(this.triangle);

		// this.rotation.x = Math.PI * 0.5;

		window.addEventListener('keydown', ( event ) => {
			if ( event.key === 'a' ) {
				this.mesh.visible = false;
				this.triangle.visible = false;
				this.square.visible = true;

				this.rotationSpeed = 0.05;
				this.rotationSens = -this.rotationSens;
			}

			if ( event.key === 'z' ) {
				this.mesh.visible = true;
				this.triangle.visible = false;
				this.square.visible = false;

				this.rotationSpeed = 0.07;
				this.rotationSens = -this.rotationSens;
			}

			if ( event.key === 'e' ) {
				this.mesh.visible = false;
				this.triangle.visible = true;
				this.square.visible = false;

				this.rotationSpeed = 0.02;
				this.rotationSens = -this.rotationSens;
			}
		});

		window.mouseX = 0;
		window.mouseY = 0;

		window.addEventListener('mousemove', ( event ) => {
			window.mouseX = event.clientX;
			window.mouseY = event.clientY;
		});
	}

	update () {
		this.time += this.speed;

		const smoothX = smooth('mouseX', window.mouseX, 0.1, false);
		const smoothY = smooth('mouseY', window.mouseY, 0.001, true);

		// this.rotation.z += 0.01;
		// this.mesh.rotation.z += this.rotationSpeed * this.rotationSens;
		// this.square.rotation.z += this.rotationSpeed * this.rotationSens;
		// this.triangle.rotation.z += this.rotationSpeed * this.rotationSens;
		// this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z =  Math.sin(this.time * 20) * 0.8 + 1;
		// this.square.scale.x = this.square.scale.y = this.square.scale.z = Math.sin(this.time * 20) * 0.8 + 1;
		// this.triangle.scale.x = this.triangle.scale.y = this.triangle.scale.z = Math.sin(this.time * 20) * 0.8 + 1;
		// console.log(`Channel ${this.name} :: update`);

		// this.mesh.material.uniforms['uTime'].value = this.time;
	}

}

export default Channel;