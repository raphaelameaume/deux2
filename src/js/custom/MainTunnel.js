import raf from 'raf';
import Channel from './Channel';

import smooth from './smooth';

const glslify = require('glslify');

class App {

	constructor () {
		this.backgroundColor = 0x000000;
		this.percentage = 0;
		this.options = {
			camera: {
				fov: 45,
				aspect: window.innerWidth / window.innerHeight,
				near: 1,
				far: 4000,
				target: new THREE.Vector3(0, 25, 0),
				position: new THREE.Vector3(0, 30, -60),
				offset: new THREE.Vector3(0, 30, -60)
			},
		};
		
		// this.gui = window.gui = new dat.GUI();
		this.textureLoader = window.textureLoader = new THREE.TextureLoader();
			
		this.resize = ::this.resize;
		this.update = ::this.update;
		
		this.init();
		this.bindListeners();
	}

	init () {
		const canvas = document.getElementById('canvas');

		this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(this.backgroundColor);
		// this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		

		WAGNER.vertexShadersPath = 'js/vertex-shaders';
		WAGNER.fragmentShadersPath = 'js/fragment-shaders';

		this.composer = new WAGNER.Composer(this.renderer);
		this.composer.setSize(window.innerWidth, window.innerHeight);

		const bloomWidth = window.isTouch ? 256 : 512;
        const bloomHeight = window.isTouch ? 256 : 512;

		this.bloomPass = new WAGNER.MultiPassBloomPass(bloomWidth, bloomHeight);
		this.bloomPass.params.strength = .68;
        this.bloomPass.params.blurAmount = 2;
        this.bloomPass.params.applyZoomBlur = !0;
        this.bloomPass.params.zoomBlurStrength = 4.0;
        this.bloomPass.params.zoomBlurCenter = new THREE.Vector2( 0.5, 0.5 );

        this.vignettePass = new WAGNER.VignettePass();
        this.vignettePass.params.amount = 0.4;

        // window.gui.add(this.bloomPass.params, 'strength', 0, 1);
        // window.gui.add(this.bloomPass.params, 'blurAmount', 0, 1);
        // window.gui.add(this.bloomPass.params, 'zoomBlurStrength', 0, 1);
        // window.gui.add(this.bloomPass.params.zoomBlurCenter, 'x', 0.0, 1.0);
        // window.gui.add(this.bloomPass.params.zoomBlurCenter, 'y', 0.0, 1.0);
        // window.gui.add(this.vignettePass.params, 'amount', 0, 1);

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 1, 20 );


		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 50);
		this.camera.position.z = 50;
		this.camera.lookAt(new THREE.Vector3());
		this.scene.add(this.camera);

        this.addControls();
        this.addLights();
        this.addElements();

       	this.update();
	}

	bindListeners () {
		window.addEventListener('resize', this.resize);
	}

	addControls () {
		const OrbitControls = require('three-orbit-controls')(THREE);
		this.controls = new OrbitControls(this.camera);
	}

	addLights () {
		this.light = new THREE.AmbientLight(0xFFFFFF);
		this.scene.add(this.light);

		var spotLight = new THREE.SpotLight( 0xffffff );
		spotLight.position.set( 0, 20, -20);

		spotLight.castShadow = true;

		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;

		spotLight.shadow.camera.near = 500;
		spotLight.shadow.camera.far = 4000;
		spotLight.shadow.camera.fov = 30;

		this.scene.add( spotLight );
	}

	addElements () {
		window.points = [
			[68.5,185.5],
		    [270.9,281.9],
		    [345.5,212.8],
		    [532,155.7],
		    [240.3,72.3],
		    [153.4,0.6],
		    [68.5,185.5],
		];

		let zPos = 0;

		//Convert the array of points into vertices
		for (var i = 0; i < window.points.length; i++) {
			var x = window.points[i][0];
			var y = window.points[i][1];
			var z = zPos + 20;
			window.points[i] = new THREE.Vector3(x, y, z);

			zPos = z;
		}

		window.points.push(window.points[0]);

		//Create a path from the points
		this.path = new THREE.CatmullRomCurve3(window.points);

		var geometry = new THREE.TubeGeometry(this.path, 256, 1, 128, true );
		//Basic red material
		var material = new THREE.MeshPhongMaterial({ color: 0xff0000, wireframe: true, side: THREE.BackSide });
		//Create a mesh
		var tube = new THREE.Mesh( geometry, material );
		//Add tube into the scene
		// this.scene.add( tube );

		// var pixels = new THREE.Geometry();
		var pixels = new THREE.BufferGeometry()

		pixels.fromGeometry(geometry);


		// for ( let i = 0; i < geometry.vertices; i++ ) {
		// 	const vertice = geometry.vertices[i];
		// 	const pixel = vertice.clone();

		// 	pixels.vertices.push(pixel);
		// }

		// var pixelMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.2 });

		// this.pointsUniforms = THREE.UniformsUtils.clone(THREE.ShaderLib['points'].uniforms);
		// // console.log(pointsUniforms);
		// this.pointsUniforms['size'] = { type: 'f', value: 2.0 };
		// this.pointsUniforms['time'] = { type: 'f', value: 0.8 };
		// // pointsUniforms['color'] = { type: 'c', value: new THREE.Color(0x888888) };

		// var shaderMaterial = new THREE.ShaderMaterial({
		// 	vertexShader: glslify('./shaders/points.vert.glsl'),
  //           fragmentShader: glslify('./shaders/points.frag.glsl'),
  //           uniforms: this.pointsUniforms,
  //           lights: false
		// });

		// this.pixelPoints = new THREE.Points( pixels, shaderMaterial );

		// this.scene.add(this.pixelPoints);

		this.channels = [];

		// const r = new Channel({ name: 'r', color: 0xB71C1C, position: new THREE.Vector3(0, 0, 0) });
		const r = new Channel({ name: 'r', color: 0x32FFFD, position: new THREE.Vector3(0, 0, 0) });
		this.channels.push(r);

		// const g = new Channel({ name: 'g', color: 0x1B5E20, position: new THREE.Vector3(40, 0, 0) });
		// this.channels.push(g);

		// const b = new Channel({ name: 'b', color: 0x0D47A1, position: new THREE.Vector3(80, 0, 0) });
		// this.channels.push(b);

		// const a = new Channel({ name: 'a', color: 0xFFFFFF, position: new THREE.Vector3(120, 0, 0) });
		// this.channels.push(a);

		for ( let i = 0; i < this.channels.length; i++ ) {
			this.scene.add(this.channels[i]);
		}

		this.test = 25;
	}

	update () {
		for ( let i = 0; i < this.channels.length; i++ ) {
			this.channels[i].update();
		}

		this.test += 50;

		this.percentage += 0.0001;
		//Get the point at the specific percentage
		var p1 = this.path.getPointAt(this.percentage%1);
		//Get another point along the path but further
		var p2 = this.path.getPointAt((this.percentage + 0.01)%1);
		this.camera.position.set(p1.x,p1.y,p1.z);
		//Rotate the camera into the orientation of the second point
		this.camera.lookAt(p2);

		// this.camera.rotation.z += 0.01;

		// this.pixelPoints.material.uniforms['time'].value += 0.001;
		// this.pixelPoints.geometry.verticesNeedUpdate = true;

		


		this.composer.reset();
		this.composer.render(this.scene, this.camera);
		this.composer.pass(this.bloomPass);
		this.composer.toScreen(this.vignettePass);


		// this.box.rotation.x += 0.01;
		// this.box.rotation.y -= 0.01;

		// this.renderer.render(this.scene, this.camera);

		raf(this.update);
	}

	resize () {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( window.innerWidth, window.innerHeight );
	}

}

new App();