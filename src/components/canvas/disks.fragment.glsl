#define PI 3.141592653589793238

varying vec2 vUv;
uniform float uMultiplier;
uniform float uAlpha;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTime;

void main() {
  vec2 multivUv = mod(vUv * uMultiplier, 1.0);
  float angle = atan(multivUv.x - 0.5) / (PI * 2.0) + 0.5;
  float radius = 0.25 + sin(angle * 100.0) * 0.02;

  float strength = 1.0 - step(0.01, abs(distance(mod(multivUv + sin(uTime), 1.0), vec2(0.5)) - radius));

  vec3 mixColor = mix(uColorA, uColorB, mod(multivUv.y + uTime, 1.0));

  gl_FragColor.rgba = vec4(mixColor, min(strength, uAlpha));
}