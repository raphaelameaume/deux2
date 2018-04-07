varying vec2 vUv;
uniform sampler2D tInput;
uniform vec2 direction;
uniform vec2 resolution;

void main() {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3846153846) * direction;
    vec2 off2 = vec2(3.2307692308) * direction;
    color += texture2D(tInput, vUv) * 0.2270270270;
    color += texture2D(tInput, vUv + (off1 / resolution)) * 0.3162162162;
    color += texture2D(tInput, vUv - (off1 / resolution)) * 0.3162162162;
    color += texture2D(tInput, vUv + (off2 / resolution)) * 0.0702702703;
    color += texture2D(tInput, vUv - (off2 / resolution)) * 0.0702702703;
    
    gl_FragColor = color;
}