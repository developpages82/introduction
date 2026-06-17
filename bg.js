/* Abstract monochrome 3D background (vanilla WebGL, raymarched).
   An infinite lattice of thin lines + scattered blocks, flown through slowly,
   fading to white with distance for depth. Kept pale so text stays legible. */
(function(){
  const c=document.getElementById('bg'); if(!c) return;
  let gl; try{ gl=c.getContext('webgl')||c.getContext('experimental-webgl'); }catch(e){}
  if(!gl) return; // CSS fallback colour stays

  const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';
  const fs=[
    'precision highp float;',
    'uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse;',
    'float hash(vec3 p){p=fract(p*0.3183099+0.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}',
    'float sdBox(vec3 p, vec3 b){vec3 d=abs(p)-b;return length(max(d,0.0))+min(max(d.x,max(d.y,d.z)),0.0);}',
    'float map(vec3 p){',
    '  vec3 g=mod(p,4.0)-2.0;',
    '  vec3 id=floor(p/4.0);',
    '  float tubes=min(length(g.yz),min(length(g.xz),length(g.xy)))-0.07;',
    '  float d=tubes;',
    '  float h=hash(id);',
    '  if(h>0.80){ d=min(d, sdBox(g, vec3(0.55))); }',
    '  return d;',
    '}',
    'vec3 calcNormal(vec3 p){vec2 e=vec2(0.0015,0.0);return normalize(vec3(',
    '  map(p+e.xyy)-map(p-e.xyy), map(p+e.yxy)-map(p-e.yxy), map(p+e.yyx)-map(p-e.yyx)));}',
    'void main(){',
    '  vec2 uv=(gl_FragCoord.xy-0.5*uRes)/uRes.y;',
    '  float t=uTime*0.55;',
    '  vec3 ro=vec3(2.0+uMouse.x*0.7, 1.5+uMouse.y*0.5, t);',
    '  vec3 ta=ro+vec3(sin(t*0.10)*0.35, cos(t*0.07)*0.25, 1.0);',
    '  vec3 fw=normalize(ta-ro);',
    '  vec3 rt=normalize(cross(vec3(0.0,1.0,0.0),fw));',
    '  vec3 up=cross(fw,rt);',
    '  vec3 rd=normalize(uv.x*rt+uv.y*up+1.4*fw);',
    '  float tt=0.0; float hit=0.0;',
    '  for(int i=0;i<88;i++){',
    '    vec3 p=ro+rd*tt;',
    '    float d=map(p);',
    '    if(d<0.0025){hit=1.0;break;}',
    '    tt+=d*0.9;',
    '    if(tt>42.0)break;',
    '  }',
    '  vec3 col=vec3(1.0);',
    '  if(hit>0.5){',
    '    vec3 p=ro+rd*tt;',
    '    vec3 n=calcNormal(p);',
    '    vec3 l=normalize(vec3(0.5,0.8,-0.45));',
    '    float dif=clamp(dot(n,l),0.0,1.0);',
    '    float shade=0.5+0.5*dif;',
    '    float fog=clamp(tt/30.0,0.0,1.0); fog=fog*fog;',
    '    float g=mix(0.72,0.96,shade);',
    '    col=mix(vec3(g), vec3(1.0), fog);',
    '  }',
    '  gl_FragColor=vec4(col,1.0);',
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

  const uRes=gl.getUniformLocation(prog,'uRes'),
        uTime=gl.getUniformLocation(prog,'uTime'),
        uMouse=gl.getUniformLocation(prog,'uMouse');

  function resize(){
    const dpr=Math.min(window.devicePixelRatio||1,1.25);
    c.width=Math.max(2,Math.floor(innerWidth*dpr));
    c.height=Math.max(2,Math.floor(innerHeight*dpr));
    gl.viewport(0,0,c.width,c.height);
  }
  addEventListener('resize',resize,{passive:true}); resize();

  let mx=0,my=0,tx=0,ty=0;
  addEventListener('mousemove',e=>{
    tx=(e.clientX/innerWidth-0.5)*2.0;
    ty=(e.clientY/innerHeight-0.5)*2.0;
  },{passive:true});

  const t0=performance.now();
  (function loop(){
    mx+=(tx-mx)*0.04; my+=(ty-my)*0.04;
    gl.uniform2f(uRes,c.width,c.height);
    gl.uniform1f(uTime,(performance.now()-t0)/1000);
    gl.uniform2f(uMouse,mx,my);
    gl.drawArrays(gl.TRIANGLES,0,3);
    requestAnimationFrame(loop);
  })();
})();
