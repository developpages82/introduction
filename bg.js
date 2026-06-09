/* Subtle monochrome animated gradient background (vanilla WebGL).
   Pale greyscale clouds that drift slowly — kept very light so text stays legible. */
(function(){
  const c=document.getElementById('bg'); if(!c) return;
  let gl; try{ gl=c.getContext('webgl')||c.getContext('experimental-webgl'); }catch(e){}
  if(!gl) return; // CSS fallback colour stays

  const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';
  const fs=[
    'precision highp float;',
    'uniform vec2 uRes; uniform float uTime;',
    'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
    'float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0));vec2 u=f*f*(3.0-2.0*f);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}',
    'float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.0;a*=0.5;}return v;}',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/uRes; uv.x*=uRes.x/uRes.y;',
    '  float t=uTime*0.025;',
    '  vec2 q=vec2(fbm(uv*1.5+vec2(0.0,t)), fbm(uv*1.5+vec2(5.2,-t*0.8)));',
    '  float n=fbm(uv*1.5+q*1.1+vec2(t*0.35,t*0.18));',
    '  float g=0.95+(n-0.5)*0.10;',          // pale: ~0.90 .. 1.00
    '  g=clamp(g,0.90,1.0);',
    '  gl_FragColor=vec4(vec3(g),1.0);',
    '}'
  ].join('\n');

  function sh(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;}
  const prog=gl.createProgram();
  gl.attachShader(prog,sh(gl.VERTEX_SHADER,vs));
  gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,fs));
  gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const buf=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1, 3,-1, -1,3]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(prog,'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);

  const uRes=gl.getUniformLocation(prog,'uRes'), uTime=gl.getUniformLocation(prog,'uTime');
  function resize(){
    const dpr=Math.min(window.devicePixelRatio||1,1.5);
    c.width=Math.max(2,Math.floor(innerWidth*dpr));
    c.height=Math.max(2,Math.floor(innerHeight*dpr));
    gl.viewport(0,0,c.width,c.height);
  }
  addEventListener('resize',resize,{passive:true}); resize();

  const t0=performance.now();
  (function loop(){
    gl.uniform2f(uRes,c.width,c.height);
    gl.uniform1f(uTime,(performance.now()-t0)/1000);
    gl.drawArrays(gl.TRIANGLES,0,3);
    requestAnimationFrame(loop);
  })();
})();
