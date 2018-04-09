varying vec2 vUv;
uniform sampler2D tInput;
uniform vec2 increment;

void main() {
      vec4 color = vec4(0.0);

      color += texture2D(tInput, (vUv - increment * 4.0)) * 0.051;
      color += texture2D(tInput, (vUv - increment * 3.0)) * 0.0918;
      color += texture2D(tInput, (vUv - increment * 2.0)) * 0.12245;
      color += texture2D(tInput, (vUv - increment * 1.0)) * 0.1531;
      color += texture2D(tInput, (vUv + increment * 0.0)) * 0.1633;
      color += texture2D(tInput, (vUv + increment * 1.0)) * 0.1531;
      color += texture2D(tInput, (vUv + increment * 2.0)) * 0.12245;
      color += texture2D(tInput, (vUv + increment * 3.0)) * 0.0918;
      color += texture2D(tInput, (vUv + increment * 4.0)) * 0.051;

      gl_FragColor = color;
}