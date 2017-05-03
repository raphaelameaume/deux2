uniform float size;
uniform float scale;
uniform float uTime;
uniform float uHeight;

#pragma glslify: noise = require('glsl-noise/classic/4d');

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#ifdef USE_SIZEATTENUATION
		gl_PointSize = size * ( scale / - mvPosition.z );
	#else
		gl_PointSize = size;
	#endif


	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	float displacement = noise(vec4(vec3(position), uTime * 10.5)) * 0.5;
    // transformed += normal * vec3(20.0, 10., 500.);

    // vec3 newPosition = normal * (noise(vec4(vec3(position), uTime * 0.1)) + 0.) * 15.;
    // vec3 finalPosition = vec3(position.x + normal.x * 10., position.y + normal.y * 10., position.z + normal.z * 10.);

    float translateY = uTime * 100.;
    float potentialY = position.y + translateY;
    float howMany = ceil((translateY - (cameraPosition.z - position.y)) / uHeight);
    float positionY = potentialY <= cameraPosition.z ? potentialY : potentialY - howMany * uHeight;

    // vec3 finalPosition = vec3(position.x, positionY, position.z + normal.z * displacement);
    vec3 finalPosition = vec3(position.x, position.y, position.z);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
	
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}