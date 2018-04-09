uniform sampler2D tInput;

uniform float time;

uniform float noiseAmount;
uniform float noiseSpeed;
uniform float vignetteFallof;
uniform float vignetteAmount;
uniform vec2 splitDelta;
uniform vec2 resolution;
uniform float zoomBlurStrength;
uniform float brightness;
uniform float contrast;

varying vec2 vUv;

float random(vec2 n, float offset ){
	//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

void main() {
    vec4 color = vec4(0.0);

    // rgb split
    vec2 dir = vUv - vec2( .5 );
	float d = .7 * length( dir );
	normalize( dir );
	vec2 value = d * dir * splitDelta;
	vec4 c1 = texture2D( tInput, vUv - value / resolution.x );
	vec4 c2 = texture2D( tInput, vUv );
	vec4 c3 = texture2D( tInput, vUv + value / resolution.y );
	color = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b );

    //noise
    color += vec4( vec3( noiseAmount * random( vUv, .00001 * noiseSpeed * time ) ), 1. );

    vec3 colorContrasted = color.rgb * contrast;
    vec3 bright = colorContrasted + vec3(brightness);
    color.rgb = bright;
    
    //vignette
    float dist = distance(vUv, vec2(0.5, 0.5));
    color.rgb *= smoothstep(0.8, vignetteFallof * 0.799, dist * (vignetteAmount + vignetteFallof));

    gl_FragColor = color;
}