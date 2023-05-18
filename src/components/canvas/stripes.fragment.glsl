varying vec2 vUv;
uniform float uMultiplier;
uniform float uAlpha;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTime;

void main() {
  vec2 multivUv = mod(vUv * uMultiplier, 1.0);
  float strength = step(0.5, mod(multivUv.y + uTime, 1.0));
  vec3 mixColor = mix(uColorA, uColorB, step(0.5, multivUv.y));
  gl_FragColor.rgba = vec4(mixColor, min(strength, uAlpha));
}