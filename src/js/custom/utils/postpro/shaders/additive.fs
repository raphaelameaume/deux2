uniform sampler2D tInput;
uniform sampler2D tBlend;
uniform float opacity;
varying vec2 vUv;

void main() {
    vec4 base = texture2D(tInput, vUv);
    vec4 blend = texture2D(tBlend, vUv);

    vec4 color = (1.0 - ((1.0 - base) * (1.0 - blend)));
    
    gl_FragColor = color * opacity + base * ( 1. - opacity );;
}