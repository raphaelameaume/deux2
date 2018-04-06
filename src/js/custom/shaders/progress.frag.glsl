#define PHONG
#define M_PI 3.14

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float uTime;
uniform vec3 uStripeOrientation;
uniform float uInvert;
uniform vec3 uSquare;
uniform float uWidth;
uniform float uHeight;
uniform float uLength;
uniform float uProgress;

varying vec2 vUv;

#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <fog_pars_fragment>

void main() {
    vec4 diffuseColor = vec4( diffuse, opacity );
    // ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    // vec3 totalEmissiveRadiance = emissive;

    vec4 color = diffuseColor;

    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;
    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;

    if ( absX > 0. || absY > 0. ) {
       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);
    } else {
        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  
    }

    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);
    
    gl_FragColor = color;

    #include <fog_fragment>
}