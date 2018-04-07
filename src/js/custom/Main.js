import raf from 'raf';
import Background from './faces/Background';
import Top from './faces/Top';
import Left from './faces/Left';
import Right from './faces/Right';
import Bottom from './faces/Bottom';

import smooth from './smooth';
import FacesController from './FacesController';
import MouseManager from './MouseManager';
import SoundManager from './managers/SoundManager';
import KeyboardController from './controllers/KeyboardController';
import EventsManager from './events/EventsManager';
import Events from './events/Events';
import UI from './ui';
import MPKMini from './config/MPKMini';
import MidiController from './utils/MidiController';
import Composer from './utils/postpro/Composer';
import CustomPass from './utils/postpro/passes/CustomPass';
import FXAAPass from './utils/postpro/passes/FXAAPass';

class App {

	constructor () {
        window.started = false;
        window.uiHidden = false;
        window.soundEnded = false;

		this.backgroundColor = 0x000000;
		
        MouseManager.start();
        MidiController.start(MPKMini);

        this.facesController = new FacesController();

        this.keyboardController = new KeyboardController();
			
		this.resize = ::this.resize;
		this.update = ::this.update;
        this.onStart = ::this.onStart;
        this.onUIHidden = ::this.onUIHidden;
        this.onSoundEnd = ::this.onSoundEnd;
        this.reset = ::this.reset;
		
		this.init();
		this.bindListeners();
	}

	init () {
		const canvas = document.getElementById('canvas');

		this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(this.backgroundColor);
		// this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
		this.renderer.shadowMap.enabled = false;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		
		WAGNER.vertexShadersPath = 'js/vertex-shaders';
		WAGNER.fragmentShadersPath = 'js/fragment-shaders';

		this.composer = new Composer(this.renderer);
		this.composer.setSize(window.innerWidth, window.innerHeight);

		const bloomWidth = window.isTouch ? 256 : 512;
        const bloomHeight = window.isTouch ? 256 : 512;

		this.bloomPass = new WAGNER.MultiPassBloomPass(bloomWidth, bloomHeight);
		this.bloomPass.params.strength = 50.0;
        this.bloomPass.params.blurAmount = 5.;
        this.bloomPass.params.applyZoomBlur = true;
        this.bloomPass.params.zoomBlurStrength = 3.0;
        this.bloomPass.params.zoomBlurCenter = new THREE.Vector2( 0.5, 0.5 );

        this.rgbPass = new WAGNER.RGBSplitPass();
        this.rgbPass.params.delta = new THREE.Vector2(20, 20);

        this.noisePass = new WAGNER.NoisePass();
        this.noisePass.params.amount = 0.25;
        this.noisePass.params.speed = 0.2;

        this.vignettePass = new WAGNER.VignettePass();
        this.vignettePass.params.amount = 0.7;
        
        // this.fxaaPass = new WAGNER.FXAAPass();

        this.customPass = new CustomPass({
            strength: 50,
            blurAmount: 5,
            applyZoomBlur: true,
            zoomBlurStrength: { value: 3 },
            zoomBlurCenter: new THREE.Vector2(0.5, 0.5),

            splitDelta: { value: new THREE.Vector2(20, 20) },

            noiseAmount: { value: 0.25 },
            noiseSpeed: { value: 0.2 },

            vignetteAmount: { value: 0.7 },
            vignetteFallof: { value: 0.1 },
        });

        this.fxaaPass = new FXAAPass();

		this.width = window.width = 60;
		this.height = window.height = 60;
		this.length = window.length = 600;

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 0.8, this.length * .98 );

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 0;
        this.camera.lookAt(new THREE.Vector3());
        this.scene.add(this.camera);


        this.addControls();
        this.addLights();
        this.addElements();

       	this.update();
	}

	bindListeners () {
		window.addEventListener('resize', this.resize);

        EventsManager.on(Events.XP.START, this.onStart);
        EventsManager.on(Events.UI.HIDDEN, this.onUIHidden);
        EventsManager.on(Events.SOUNDS.END, this.onSoundEnd);
        EventsManager.on(Events.XP.END, this.reset);

        EventsManager.emit(Events.XP.START);
	}

    reset () {
        window.started = false;
        window.uiHidden = false;
        window.soundEnded = false;
    }

    onStart () {
        window.started = true;
        window.uiHidden = true;
    }

    onUIHidden () {
        
    }

    onSoundEnd ( data ) {
        const { name } = data;

        if ( name === 'xp' ) {
            window.soundEnded = true;
        }
    }

	addControls () {
		const OrbitControls = require('three-orbit-controls')(THREE);
		// this.controls = new OrbitControls(this.camera);
	}

	addLights () {
        console.log('no lights');
		// this.light = new THREE.AmbientLight(0xFFFFFF);
		// this.scene.add(this.light);

  		// const pointLight3 = new THREE.PointLight( 0xffffff, 7.1, 0);
  		// pointLight3.position.x = 0
  		// pointLight3.position.y = 4;
  		// pointLight3.position.z = 60;

  		// this.scene.add(pointLight3);
	}

	addElements () {
		this.divisator = 2;

        this.geometry = new THREE.PlaneGeometry(this.length, this.width, 32, 32);
        this.otherGeometry = new THREE.PlaneGeometry(this.width, this.length, 32, 32);

		this.leftRightGeometry = new THREE.PlaneGeometry(this.length, this.height, Math.floor(this.length / this.divisator), Math.floor(this.height / this.divisator) );
		this.topBottomGeometry = new THREE.PlaneGeometry(this.width, this.length, Math.floor(this.width / this.divisator) , Math.floor(this.length / this.divisator));
		this.backgroundGeometry = new THREE.PlaneGeometry(this.width, this.height, Math.floor(this.width / this.divisator * 2), Math.floor(this.height / this.divisator * 2) );

		this.left = new Left(this.geometry, 0x000000);
		this.left.rotation.y = Math.PI * 0.5;
		this.left.position.x = -this.width * 0.5;
        this.facesController.register('left', this.left)

		this.right = new Right(this.geometry, 0x000000);
		this.right.rotation.y = Math.PI * 0.5;
		this.right.position.x = this.width * 0.5;
        this.facesController.register('right', this.right)

		this.bottom = new Bottom(this.geometry, 0x000000);
		this.bottom.rotation.x = -Math.PI * 0.5;
        this.bottom.rotation.z = Math.PI * 0.5;
		this.bottom.position.y = -this.height * 0.5;
        this.facesController.register('bottom', this.bottom)

		this.top = new Top(this.geometry, 0x000000);
		this.top.rotation.x = -Math.PI * 0.5;
        this.top.rotation.z = Math.PI * 0.5;
		this.top.position.y = this.height * 0.5;
        this.facesController.register('top', this.top);
        console.log();

		// this.background = new Background(this.backgroundGeometry, 0x000000);
		// this.background.position.z = -this.length * 0.5;
  //       this.facesController.register('background', this.background);

		this.facesController.container.position.z = -this.length * 0.5;

		this.scene.add(this.facesController.container);
	}

    rotate () {
        const sens = Math.random() > 0.5 ? -1 : 1;
        const delay = Math.random() * 3 + 1;
    }

	update () {
        this.facesController.update();

        this.customPass.update();

		this.composer.reset();
		this.composer.render(this.scene, this.camera);
        // this.composer.pass(this.bloomPass);
        // this.composer.pass(this.rgbPass);
        // this.composer.pass(this.noisePass);
        // this.composer.pass(this.vignettePass);
        // this.composer.toScreen(this.fxaaPass);
        this.composer.pass(this.customPass);
        this.composer.toScreen(this.fxaaPass);

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