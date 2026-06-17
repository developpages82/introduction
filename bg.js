/* Abstract monochrome 3D background (vanilla WebGL, raymarched).
   Randomly sized & placed floating blocks in 3D space, fading to white with
   distance for depth. The camera moves up/down with page scroll (no forward
   travel). Kept pale so text stays legible. */
(function(){
  const c=document.getElementById('bg'); if(!c) return;
  let gl; try{ gl=c.getContext('webgl')||c.getContext('experimental-webgl'); }catch(e){}
  if(!gl) return; // CSS fallback colour stays

  const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';
  const fs=[
    'precision highp float;',
    'uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uScroll;',
    'const float CELL=6.0;',
    'float hash(vec3 p){p=fract(p*0.3183099+0.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}',
    'float sdBox(vec3 p, vec3 b){vec3 d=abs(p)-b;return length(max(d,0.0))+min(max(d.x,max(d.y,d.z)),0.0);}',
    'float sdSeg(vec3 p, vec3 a, vec3 b, float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-ba*h)-r;}',
    'float present(vec3 cell){return step(0.5, hash(cell+vec3(8.0)));}',  // ~half the cells have a cube
    'vec3 cpos(vec3 cell){vec3 off=(vec3(hash(cell+vec3(1.7)),hash(cell+vec3(9.2)),hash(cell+vec3(4.3)))-0.5)*CELL*0.45;return CELL*cell+off;}',
    'float csize(vec3 cell){return mix(0.05,0.28,hash(cell+vec3(2.1)));}',  // sphere radius (small)
    'float map(vec3 p){',
    '  vec3 base=floor(p/CELL+0.5);',
    '  float d=1e5;',
    '  for(int x=-1;x<=1;x++){',
    '  for(int y=-1;y<=1;y++){',
    '  for(int z=-1;z<=1;z++){',
    '    vec3 cell=base+vec3(float(x),float(y),float(z));',
    '    if(present(cell)<0.5) continue;',
    '    vec3 c=cpos(cell);',
    '    d=min(d, length(p-c)-csize(cell));',                          // sphere
    '    vec3 nx=cell+vec3(1.0,0.0,0.0); if(present(nx)>0.5) d=min(d, sdSeg(p,c,cpos(nx),0.03));', // synapse links
    '    vec3 ny=cell+vec3(0.0,1.0,0.0); if(present(ny)>0.5) d=min(d, sdSeg(p,c,cpos(ny),0.03));',
    '    vec3 nz=cell+vec3(0.0,0.0,1.0); if(present(nz)>0.5) d=min(d, sdSeg(p,c,cpos(nz),0.03));',
    '  }}}',
    '  return d;',
    '}',
    'vec3 calcNormal(vec3 p){vec2 e=vec2(0.002,0.0);return normalize(vec3(',
    '  map(p+e.xyy)-map(p-e.xyy), map(p+e.yxy)-map(p-e.yxy), map(p+e.yyx)-map(p-e.yyx)));}',
    'void main(){',
    '  vec2 uv=(gl_FragCoord.xy-0.5*uRes)/uRes.y;',
    '  float cy=2.0 - uScroll*0.006 + sin(uTime*0.2)*0.25 + uMouse.y*0.5;',  // scroll-driven up/down
    '  vec3 ro=vec3(uMouse.x*0.7, cy, 0.0);',
    '  vec3 rd=normalize(vec3(uv,1.5));',                                     // fixed forward view (+z)
    '  float tt=0.5; float hit=0.0;',
    '  for(int i=0;i<90;i++){',
    '    vec3 p=ro+rd*tt;',
    '    float d=map(p);',
    '    if(d<0.003){hit=1.0;break;}',
    '    tt+=d;',
    '    if(tt>60.0)break;',
    '  }',
    '  vec3 col=vec3(1.0);',
    '  if(hit>0.5){',
    '    float fog=clamp(tt/40.0,0.0,1.0); fog=fog*fog;',
    '    float ink=mix(0.58,0.95,fog);',                 // flat silhouette grey, fading to white with distance
    '    col=vec3(ink);',
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
        uMouse=gl.getUniformLocation(prog,'uMouse'),
        uScroll=gl.getUniformLocation(prog,'uScroll');

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

  let sc=0; // smoothed scroll
  function curScroll(){return window.scrollY||document.documentElement.scrollTop||0;}

  const t0=performance.now();
  (function loop(){
    mx+=(tx-mx)*0.04; my+=(ty-my)*0.04;
    sc+=(curScroll()-sc)*0.08;
    gl.uniform2f(uRes,c.width,c.height);
    gl.uniform1f(uTime,(performance.now()-t0)/1000);
    gl.uniform2f(uMouse,mx,my);
    gl.uniform1f(uScroll,sc);
    gl.drawArrays(gl.TRIANGLES,0,3);
    requestAnimationFrame(loop);
  })();
})();
