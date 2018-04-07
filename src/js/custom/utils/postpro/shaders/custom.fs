uniform sampler2D tInput;

uniform float time;

uniform float noiseAmount;
uniform float noiseSpeed;
uniform float vignetteFallof;
uniform float vignetteAmount;
uniform vec2 splitDelta;
uniform vec2 resolution;
uniform float zoomBlurStrength;

varying vec2 vUv;

float random(vec2 n, float offset ){
	//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

float randomBlur(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}

void main() {

	// zoom blur
	vec2 center = vec2(0.5, 0.5);
	vec4 color = vec4(0.0);
	float total = 0.0;
	vec2 toCenter = center-vUv*resolution;
	float offset = randomBlur(vec3(12.9898,78.233,151.7182),0.0);
	for(float t = 0.0; t <= 40.0; t++){
		float percent = (t+offset)/40.0;
		float weight = 4.0*(percent-percent*percent);
		vec4 sample = texture2D(tInput, vUv + toCenter * percent * zoomBlurStrength / resolution);
		sample.rgb*=sample.a;
		color+=sample*weight;
		total+=weight;
	}

	vec4 zoomBlur = color / total;
	zoomBlur.rgb /= zoomBlur.a + 0.00001;

	// color = zoomBlur;

    // rgb split
    vec2 dir = vUv - vec2( .5 );
	float d = .7 * length( dir );
	normalize( dir );
	vec2 value = d * dir * splitDelta;
	vec4 c1 = texture2D( tInput, vUv - value / resolution.x );
	vec4 c2 = texture2D( tInput, vUv );
	vec4 c3 = texture2D( tInput, vUv + value / resolution.y );
	color = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b );



    //vignette
    float dist = distance(vUv, vec2(0.5, 0.5));
    color.rgb *= smoothstep(0.8, vignetteFallof * 0.799, dist * (vignetteAmount + vignetteFallof));

    //noise
    color += vec4( vec3( noiseAmount * random( vUv, .00001 * noiseSpeed * time ) ), 1. );

    gl_FragColor = color;
}