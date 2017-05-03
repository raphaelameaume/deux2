uniform sampler2D tInput;
uniform int amount;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    
    vec4 color;
    
    if (amount == 1) {

        color = texture2D(tInput, vUv);

    } else if (amount == 2) {

        if (vPosition.x > 0.0) {
            color = texture2D(tInput, vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 0.5));
        } else {
            color = texture2D(tInput, vec2(vUv.x * 2.0, vUv.y * 2.0 - 0.5));
        }

    } else {

        if (vPosition.x > 0.0) {
            if (vPosition.y > 0.0) {
                color = texture2D(tInput, vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 1.0));
            } else {
                color = texture2D(tInput, vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.0));
            }
        } else {
            if (vPosition.y > 0.0) {
                color = texture2D(tInput, vec2(vUv.x * 2.0, vUv.y * 2.0 - 1.0));
            } else {
                color = texture2D(tInput, vec2(vUv.x * 2.0, vUv.y * 2.0));
            }
        }
        
    }
    
    gl_FragColor = color;

}