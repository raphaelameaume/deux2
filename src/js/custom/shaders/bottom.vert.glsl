#define PHONG

varying vec3 vViewPosition;
varying vec2 vUv;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>

void main() {

    #include <uv_vertex>

    vec3 transformed = vec3( position );
    vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

    gl_Position = projectionMatrix * mvPosition;

    vViewPosition = - mvPosition.xyz;
    vUv = uv;

    #include <fog_vertex>
}