/* Solen Markets — shared script
   Gradients are generated once per page load with a small WebGL shader and
   reused as data URIs, so the site ships no image files. */

/* ---------- Shader-generated gradients ---------- */
const FRAG=`precision highp float;
uniform vec2 r;uniform float m;uniform float seed;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
float g(vec2 p,vec2 c,vec2 s,float k){vec2 d=(p-c)*s;return exp(-dot(d,d)*k);}
void main(){
 vec2 uv=gl_FragCoord.xy/r;uv.y=1.-uv.y;
 vec3 c;
 if(m<.5){ /* aurora: pink, blue, white */
  vec2 q=uv+.12*vec2(fbm(uv*1.7+seed),fbm(uv*1.7+seed+4.))-.06;
  c=vec3(.20,.50,.82);
  c=mix(c,vec3(.62,.78,.93),smoothstep(.3,.85,q.x)*(1.-smoothstep(.3,.8,q.y)));
  c=mix(c,vec3(.52,.62,.88),smoothstep(.6,1.,q.y)*.5);
  c=mix(c,vec3(.86,.53,.84),g(q,vec2(.33,.02),vec2(1.,1.7),5.)*.95);
  c=mix(c,vec3(.95,.86,.96),smoothstep(.22,.0,q.x-.12*q.y)*.92);
  c=mix(c,vec3(.68,.62,.88),g(q,vec2(.45,1.05),vec2(1.,2.),6.)*.55);
  c=mix(c,vec3(.97,.98,1.),g(q,vec2(1.02,.58),vec2(1.3,2.6),9.));
  c=mix(c,vec3(.10,.44,.80),g(q,vec2(.55,.62),vec2(1.,1.2),12.)*.7);
 } else if(m<1.5){ /* ember: orange with red edges */
  float w=fbm(vec2(uv.x*3.,uv.y*1.2)+seed)*.08;
  float d=abs(uv.x-.5)*2.+w;
  c=vec3(.96,.47,.05);
  c=mix(c,vec3(.98,.62,.10),smoothstep(.55,.78,d)*(1.-smoothstep(.8,.9,d)));
  c=mix(c,vec3(.93,.10,.16),smoothstep(.82,1.,d));
  c=mix(c,vec3(.88,.04,.38),smoothstep(.95,1.06,d)*.7);
  float t=smoothstep(.16,0.,uv.y)+smoothstep(.86,1.,uv.y)*.4;
  c=mix(c,vec3(.93,.14,.10),t*.75);
  c=mix(c,vec3(.97,.53,.08),g(uv,vec2(.5,.55),vec2(1.6,1.),5.)*.35);
 } else if(m<2.5){ /* dome: yellow over blue */
  vec2 p=uv+.03*vec2(fbm(uv*2.+seed),fbm(uv*2.+seed+9.));
  float t=length((p-vec2(.5,-.25))*vec2(1.,1.08));
  c=vec3(.90,.36,.04);
  c=mix(c,vec3(.97,.62,.08),smoothstep(.35,.62,t));
  c=mix(c,vec3(.95,.74,.20),smoothstep(.62,.80,t));
  c=mix(c,vec3(.80,.78,.72),smoothstep(.80,.92,t));
  c=mix(c,vec3(.36,.76,.93),smoothstep(.90,1.02,t));
  c=mix(c,vec3(.10,.48,.88),smoothstep(1.02,1.18,t));
  c=mix(c,vec3(.02,.06,.22),smoothstep(1.16,1.36,t));
 } else if(m<3.5){ /* flare: orange star over deep blue */
  vec2 p=uv+.10*vec2(fbm(uv*2.4+seed),fbm(uv*2.4+seed+3.))-.05;
  float base=smoothstep(.18,.85,p.x+.15*(fbm(p*3.)-.5)+.12*p.y);
  c=mix(vec3(.55,.88,.99),vec3(.04,.18,.66),base);
  c=mix(c,vec3(.02,.12,.55),smoothstep(.65,1.,p.x)*.6);
  c=mix(c,vec3(.75,.95,1.),g(p,vec2(.62,.0),vec2(1.,2.),5.)*.5);
  vec2 s=p-vec2(.24,.52);
  float a1=exp(-abs(s.x+.55*s.y)*16.)*smoothstep(.62,.0,length(s*vec2(1.,.8)));
  float a2=exp(-abs(s.y-.45*s.x+.05)*20.)*smoothstep(.32,.0,length(s*vec2(.9,1.6)));
  float a3=exp(-abs(s.x-.9*s.y)*22.)*smoothstep(.22,.0,length(s));
  float st=clamp(max(max(a1,a2),a3)*1.15,0.,1.);
  float halo=clamp(max(a1,a2)*2.2,0.,1.);
  c=mix(c,vec3(.80,.96,1.),smoothstep(.0,.6,halo)*.85);
  c=mix(c,vec3(.88,.30,.07),smoothstep(.15,.45,st));
  c=mix(c,vec3(.98,.70,.62),smoothstep(.5,.8,st));
  c=mix(c,vec3(1.,.97,.96),smoothstep(.82,1.,st));
 } else if(m<4.5){ /* dusk: violet to magenta with peach and cyan glows */
  vec2 p=uv+.08*vec2(fbm(uv*2.+seed),fbm(uv*2.+seed+5.))-.04;
  float t=smoothstep(.0,1.,p.x*.75+p.y*.45);
  c=mix(vec3(.24,.14,.74),vec3(.90,.24,.60),t);
  c=mix(c,vec3(.36,.82,.96),g(p,vec2(.05,1.0),vec2(1.,1.6),6.)*.85);
  c=mix(c,vec3(1.,.74,.56),g(p,vec2(.92,.12),vec2(1.,1.4),7.)*.95);
  c=mix(c,vec3(.98,.88,.98),g(p,vec2(.55,.5),vec2(1.4,2.2),16.)*.35);
 } else if(m<5.5){ /* mint: teal to spring green with a pale core */
  vec2 p=uv+.09*vec2(fbm(uv*2.2+seed),fbm(uv*2.2+seed+7.))-.045;
  float t=smoothstep(.1,1.,p.y*.7+p.x*.5);
  c=mix(vec3(.02,.30,.38),vec3(.36,.92,.62),t);
  c=mix(c,vec3(.01,.16,.30),smoothstep(.55,.0,p.y-.2*p.x)*.8);
  c=mix(c,vec3(.86,1.,.90),g(p,vec2(.72,.78),vec2(1.2,1.5),7.)*.9);
  c=mix(c,vec3(.10,.70,.86),g(p,vec2(.2,.55),vec2(1.3,1.1),9.)*.6);
 } else { /* amber: charcoal with a hot amber ridge */
  vec2 p=uv+.11*vec2(fbm(uv*2.6+seed),fbm(uv*2.6+seed+2.))-.055;
  float d=abs(p.y-.55+.28*(p.x-.5)-.07*fbm(p*4.));
  c=vec3(.07,.07,.10);
  c=mix(c,vec3(.22,.14,.16),smoothstep(.45,.1,d));
  c=mix(c,vec3(.86,.34,.08),smoothstep(.22,.06,d));
  c=mix(c,vec3(.99,.72,.20),smoothstep(.10,.015,d));
  c=mix(c,vec3(1.,.96,.84),smoothstep(.035,.0,d));
  c=mix(c,vec3(.05,.05,.08),smoothstep(.5,.95,length(p-vec2(.5,.55))));
 }
 /* monochrome: keep the shapes, drop the hue */
 float lum=dot(c,vec3(.30,.59,.11));
 lum=clamp((lum-.5)*1.26+.5,0.,1.);
 c=vec3(lum);
 c+=(h(gl_FragCoord.xy*.731+seed)-.5)*.055;
 gl_FragColor=vec4(clamp(c,0.,1.),1.);
}`;

const FALLBACK=[
 "radial-gradient(60% 50% at 30% 0%,#cfcfd3,transparent),radial-gradient(40% 40% at 100% 60%,#fafafb,transparent),linear-gradient(110deg,#ededf0 0%,#8d8d93 45%,#c6c6cb 100%)",
 "linear-gradient(90deg,#3f3f45,#5c5c63 8%,#9a9aa1 20%,#8a8a91 35%,#8a8a91 65%,#9a9aa1 80%,#5c5c63 92%,#3f3f45)",
 "radial-gradient(120% 115% at 50% -25%,#e8e8ea 30%,#c2c2c7 62%,#9a9aa0 74%,#6d6d74 84%,#3c3c42 94%,#0e0e10 110%)",
 "linear-gradient(100deg,#d8d8dc 0%,#7b7b82 45%,#232327 100%)",
 "radial-gradient(60% 60% at 90% 10%,#dcdce0,transparent),radial-gradient(60% 60% at 5% 100%,#a8a8af,transparent),linear-gradient(120deg,#2b2b31,#7e7e86)",
 "radial-gradient(55% 55% at 72% 78%,#ececed,transparent),radial-gradient(60% 60% at 20% 55%,#9b9ba2,transparent),linear-gradient(145deg,#2a2a30,#c9c9ce)",
 "radial-gradient(70% 36% at 50% 55%,#e4e4e6,transparent),radial-gradient(90% 50% at 50% 55%,#6a6a71,transparent),linear-gradient(180deg,#111118,#0d0d12)"];

function makeGradients(){
  const out=[];
  try{
    const cv=document.createElement("canvas");cv.width=1200;cv.height=900;
    const gl=cv.getContext("webgl",{preserveDrawingBuffer:true});
    if(!gl)throw 0;
    const sh=(t,src)=>{const o=gl.createShader(t);gl.shaderSource(o,src);gl.compileShader(o);
      if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw gl.getShaderInfoLog(o);return o};
    const pr=gl.createProgram();
    gl.attachShader(pr,sh(gl.VERTEX_SHADER,"attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}"));
    gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FRAG));gl.linkProgram(pr);gl.useProgram(pr);
    const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    const loc=gl.getAttribLocation(pr,"p");gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    gl.uniform2f(gl.getUniformLocation(pr,"r"),cv.width,cv.height);
    for(let i=0;i<7;i++){
      gl.uniform1f(gl.getUniformLocation(pr,"m"),i);
      gl.uniform1f(gl.getUniformLocation(pr,"seed"),1.7+i*3.1);
      gl.drawArrays(gl.TRIANGLES,0,3);
      out.push(`url(${cv.toDataURL("image/jpeg",.9)})`);
    }
    return out;
  }catch(e){return FALLBACK}
}
const G=makeGradients();
window.SOLEN_GRADIENTS=G;
document.querySelectorAll("[data-grad]").forEach(el=>{
  el.style.backgroundImage=G[(+el.dataset.grad||0)%G.length];
});

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Header ---------- */
const head=$("#head"),menuBtn=$("#menuBtn");
if(head&&menuBtn){
  const close=()=>{head.classList.remove("open");menuBtn.setAttribute("aria-expanded","false");menuBtn.textContent="Menu"};
  menuBtn.addEventListener("click",()=>{
    const open=head.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded",open);
    menuBtn.textContent=open?"Close":"Menu";
  });
  head.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
}

/* ---------- Market snapshot ----------
   Sample figures for layout only. They do not come from a live feed. */
const MARKET=[
  {sym:"BTC",name:"Bitcoin",  g:1,price:104820.50,chg: 1.84,vol:"4.21B",seed:11},
  {sym:"ETH",name:"Ether",    g:0,price:  3942.18,chg: 2.37,vol:"2.08B",seed:23},
  {sym:"SOL",name:"Solana",   g:4,price:   214.63,chg:-0.92,vol:"886.4M",seed:37},
  {sym:"XRP",name:"XRP",      g:3,price:     2.418,chg: 0.46,vol:"612.7M",seed:41},
  {sym:"ADA",name:"Cardano",  g:5,price:     0.8124,chg:-1.35,vol:"184.2M",seed:53},
  {sym:"LINK",name:"Chainlink",g:2,price:   24.07,chg: 3.12,vol:"151.9M",seed:67}
];

function series(seed,trend){
  // deterministic pseudo-random walk, so the chart is the same on every load
  let s=seed,out=[],v=50;
  const rnd=()=>{s=(s*9301+49297)%233280;return s/233280};
  for(let i=0;i<32;i++){v+=(rnd()-.5)*11+trend*.55;out.push(v)}
  return out;
}
function sparkline(seed,trend,up){
  const pts=series(seed,trend),w=96,h=28,pad=3;
  const min=Math.min(...pts),max=Math.max(...pts),span=(max-min)||1;
  const d=pts.map((v,i)=>`${(i/(pts.length-1)*w).toFixed(1)},${(h-pad-((v-min)/span)*(h-pad*2)).toFixed(1)}`).join(" ");
  const col=up?"var(--up)":"var(--down)";
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" aria-hidden="true" focusable="false">
    <polyline points="${d}" fill="none" stroke="${col}" stroke-width="1.5"
      stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>`;
}
const money=n=>n>=1000?n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})
  :n.toLocaleString("en-US",{minimumFractionDigits:n<1?4:2,maximumFractionDigits:n<1?4:3});

const mbody=$("#marketBody");
if(mbody){
  mbody.innerHTML=MARKET.map(a=>{
    const up=a.chg>=0;
    return `<tr>
      <td><span class="asset"><span class="mark" data-grad="${a.g}"></span>
        <span class="sym">${a.sym}</span><span class="nm">${a.name}</span></span></td>
      <td class="price">$${money(a.price)}</td>
      <td><span class="chg ${up?"up":"down"}">${up?"+":""}${a.chg.toFixed(2)}%</span></td>
      <td class="vol">$${a.vol}</td>
      <td>${sparkline(a.seed,a.chg,up)}</td>
    </tr>`;
  }).join("");
  mbody.querySelectorAll("[data-grad]").forEach(el=>{
    el.style.backgroundImage=G[(+el.dataset.grad||0)%G.length];
  });
}

/* ---------- Code tabs ---------- */
const tabs=$$("[data-tab]");
if(tabs.length){
  const bar=tabs[0].parentElement;
  const panels=$$("[data-panel]");
  const ind=document.createElement("span");
  ind.className="tab-ind";ind.setAttribute("aria-hidden","true");
  bar.prepend(ind);
  // one wrapper so the height can ease between panels of different length
  const body=document.createElement("div");
  body.className="code-body";
  panels[0].before(body);
  panels.forEach(p=>body.appendChild(p));

  const moveInd=(btn,instant)=>{
    if(instant)ind.style.transition="none";
    ind.style.width=btn.offsetWidth+"px";
    ind.style.transform="translateX("+btn.offsetLeft+"px)";
    if(instant){ind.offsetWidth;ind.style.transition=""}
  };
  const current=()=>panels.find(p=>!p.hidden);
  let busy=null;

  const show=(id,first)=>{
    if(busy)busy.done();
    const next=panels.find(p=>p.dataset.panel===id), prev=current();
    tabs.forEach(t=>{const on=t.dataset.tab===id;t.setAttribute("aria-selected",String(on));t.tabIndex=on?0:-1;if(on)moveInd(t,first)});
    if(first||!prev||prev===next||reduce){
      panels.forEach(p=>{p.hidden=p!==next});return;
    }
    const ease="cubic-bezier(.22,1,.36,1)";
    const h0=body.offsetHeight;
    // old panel leaves the flow and fades out while the new one fades in beneath it
    prev.style.cssText="position:absolute;left:0;right:0;top:0;pointer-events:none";
    next.hidden=false;
    const h1=body.offsetHeight;
    body.style.overflow="hidden";
    const anims=[
      body.animate([{height:h0+"px"},{height:h1+"px"}],{duration:620,easing:ease}),
      prev.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(-6px)",filter:"blur(3px)"}],
        {duration:260,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"}),
      next.animate([{opacity:0,transform:"translateY(12px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],
        {duration:620,delay:110,easing:ease,fill:"backwards"})
    ];
    let over=false;
    const done=()=>{
      if(over)return;over=true;
      anims.forEach(a=>a.cancel());
      prev.hidden=true;prev.style.cssText="";body.style.overflow="";busy=null;
    };
    busy={done};
    Promise.allSettled(anims.map(a=>a.finished)).then(done);
  };

  tabs.forEach((t,i)=>{
    t.addEventListener("click",()=>show(t.dataset.tab));
    t.addEventListener("keydown",e=>{
      if(e.key!=="ArrowRight"&&e.key!=="ArrowLeft")return;
      e.preventDefault();
      const n=tabs[(i+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length];
      n.focus();show(n.dataset.tab);
    });
  });
  addEventListener("resize",()=>{const on=tabs.find(t=>t.getAttribute("aria-selected")==="true");if(on)moveInd(on,true)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{const on=tabs.find(t=>t.getAttribute("aria-selected")==="true");if(on)moveInd(on,true)});
  show(tabs[0].dataset.tab,true);
}

/* ---------- Copy ---------- */
function toast(msg){
  const el=$("#toast");if(!el)return;
  el.textContent=msg;el.classList.add("on");
  clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("on"),1700);
}
$$("[data-copy]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const target=document.querySelector(btn.dataset.copy);
    const text=target?(target.innerText||"").trim():"";
    if(!text)return;
    const done=()=>{
      const old=btn.textContent;btn.textContent="Copied";
      toast("Copied to clipboard");
      setTimeout(()=>{btn.textContent=old},1700);
    };
    try{navigator.clipboard.writeText(text).then(done,()=>selectText(target))}
    catch(e){selectText(target)}
  });
});
function selectText(el){
  if(!el)return;
  const r=document.createRange();r.selectNodeContents(el);
  const s=getSelection();s.removeAllRanges();s.addRange(r);
  toast("Press Cmd/Ctrl+C to copy");
}

/* ---------- Contact form ---------- */
const form=$("#contactForm");
if(form){
  const note=$("#formNote");
  const setNote=(text,state)=>{
    if(!note)return;
    note.textContent=text;
    note.classList.remove("ok","bad");
    if(state)note.classList.add(state);
  };
  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!form.reportValidity()){
      setNote("Please complete the highlighted fields.","bad");
      return;
    }
    setNote("Thanks. This site is a design concept, so nothing was sent. Point the form at your own endpoint to make it live.","ok");
  });
  form.addEventListener("input",()=>{
    if(note&&note.classList.contains("bad"))setNote("We reply within one business day.");
  });
}

/* ---------- Reveal on scroll ---------- */
const targets=$$(".reveal");
if(targets.length&&!reduce&&"IntersectionObserver" in window){
  const vh=innerHeight;
  const io=new IntersectionObserver((entries,obs)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){en.target.classList.add("in");obs.unobserve(en.target)}
    });
  },{rootMargin:"0px 0px -8% 0px"});
  targets.forEach(el=>{
    // anything already on screen reveals immediately, so the first frame is complete
    if(el.getBoundingClientRect().top<vh*1.05){
      requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("in")));
    }else{
      io.observe(el);
    }
  });
}else{
  targets.forEach(el=>el.classList.add("in"));
}

/* ---------- Office globe ---------- */
const globeCanvas=$("#globe");
if(globeCanvas&&globeCanvas.getContext){
  const CITIES=[
    {name:"London",lat:51.5205,lon:-0.0866,tz:"Europe/London",
     addr:"14 Finsbury Square<br>EC2A 1AH, United Kingdom",
     hours:"07:00–19:00 GMT",coord:"51.5205° N, 0.0866° W",
     covers:"Europe, Middle East and Africa",
     map:"https://www.google.com/maps/search/?api=1&query=14+Finsbury+Square,+London+EC2A+1AH"},
    {name:"Singapore",lat:1.2868,lon:103.8515,tz:"Asia/Singapore",
     addr:"9 Battery Road<br>049910, Singapore",
     hours:"08:00–20:00 SGT",coord:"1.2868° N, 103.8515° E",
     covers:"Asia and the Pacific",
     map:"https://www.google.com/maps/search/?api=1&query=9+Battery+Road,+Singapore+049910"},
    {name:"São Paulo",lat:-23.5959,lon:-46.6896,tz:"America/Sao_Paulo",
     addr:"Av. Faria Lima 3477<br>04538-133, Brazil",
     hours:"08:00–20:00 BRT",coord:"23.5959° S, 46.6896° W",
     covers:"North and South America",
     map:"https://www.google.com/maps/search/?api=1&query=Av.+Brigadeiro+Faria+Lima+3477,+S%C3%A3o+Paulo"}
  ];

  const ctx=globeCanvas.getContext("2d");
  const stage=globeCanvas.parentElement;
  const RAD=Math.PI/180;
  let W=0,H=0,cx=0,cy=0,R=0,dpr=1;
  let rot=-CITIES[0].lon*RAD, tilt=CITIES[0].lat*RAD*0.5, spin=null, active=0, hover=-1;
  const hits=[];

  function size(){
    const r=globeCanvas.getBoundingClientRect();
    dpr=Math.min(devicePixelRatio||1,2);
    W=Math.max(1,Math.round(r.width));H=Math.max(1,Math.round(r.height));
    globeCanvas.width=W*dpr;globeCanvas.height=H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    cx=W/2;cy=H/2;R=Math.min(W,H)*0.44;
  }

  function project(lat,lon){
    const a=lat*RAD,b=lon*RAD+rot;
    const x=Math.cos(a)*Math.sin(b);
    const y0=Math.sin(a), z0=Math.cos(a)*Math.cos(b);
    const ct=Math.cos(tilt),st=Math.sin(tilt);
    const y=y0*ct-z0*st, z=y0*st+z0*ct;
    return {x:cx+x*R, y:cy-y*R, z:z};
  }

  /* palette follows the page theme */
  const PALS={
    light:{ink:"18,18,20",body:["#ffffff","#f3f3f5","#dcdce1","#b4b4bc"],gr:.055,
      land0:.1,land1:.48,limb:"18,18,20",limbA:[.05,.22],rim:"rgba(18,18,20,.22)",hi:"rgba(255,255,255,.9)",
      halo:"rgba(255,255,255,.95)",txt:"#121214",txtDim:"rgba(18,18,20,.6)",pin:"#121214",pinDim:"rgba(18,18,20,.55)",
      ring:"rgba(18,18,20,.12)",ringLn:"rgba(18,18,20,.3)",pinEdge:"#fff",arc0:.12,arc1:.3},
    dark:{ink:"240,240,240",body:["#4a4a4a","#383838","#272727","#151515"],gr:.07,
      land0:.14,land1:.66,limb:"0,0,0",limbA:[.12,.5],rim:"rgba(255,255,255,.14)",hi:"rgba(255,255,255,.3)",
      halo:"rgba(10,10,11,.95)",txt:"#f3f3f5",txtDim:"rgba(243,243,245,.62)",pin:"#ffffff",pinDim:"rgba(243,243,245,.6)",
      ring:"rgba(255,255,255,.12)",ringLn:"rgba(255,255,255,.34)",pinEdge:"#0a0a0b",arc0:.16,arc1:.4}
  };
  let PAL=PALS.light;
  const tr=s=>(window.SOLEN_T?window.SOLEN_T(s):s);

  function graticule(){
    const front=new Path2D();
    const add=(pts)=>{
      for(let i=1;i<pts.length;i++){
        const a=pts[i-1],b=pts[i];
        if((a.z+b.z)/2<=0)continue;
        front.moveTo(a.x,a.y);front.lineTo(b.x,b.y);
      }
    };
    for(let lat=-60;lat<=60;lat+=30){
      const pts=[];for(let lon=0;lon<=360;lon+=6)pts.push(project(lat,lon));
      add(pts);
    }
    for(let lon=0;lon<360;lon+=30){
      const pts=[];for(let lat=-90;lat<=90;lat+=6)pts.push(project(lat,lon));
      add(pts);
    }
    ctx.lineWidth=1;
    ctx.strokeStyle="rgba("+PAL.ink+","+PAL.gr+")";ctx.stroke(front);
  }

  /* continents, drawn as a dot matrix from the land mask */
  const LAND=window.SOLEN_LAND||[];
  const BUCKETS=6;
  function land(){
    const paths=[];for(let i=0;i<BUCKETS;i++)paths.push(new Path2D());
    const base=Math.max(1.05,R*0.0088);
    for(let i=0;i<LAND.length;i+=2){
      if(LAND[i+1]<-62)continue;
      const p=project(LAND[i+1],LAND[i]);
      if(p.z<=0.035)continue;
      const r=base*(0.4+0.6*p.z);
      let k=Math.floor(p.z*BUCKETS);if(k>BUCKETS-1)k=BUCKETS-1;
      const t=paths[k];
      t.moveTo(p.x+r,p.y);
      t.arc(p.x,p.y,r,0,6.2832);
    }
    for(let i=0;i<BUCKETS;i++){
      const z=(i+0.5)/BUCKETS;
      ctx.fillStyle="rgba("+PAL.ink+","+(PAL.land0+PAL.land1*z).toFixed(3)+")";
      ctx.fill(paths[i]);
    }
  }

  function arc(a,b){
    const n=56,pts=[];
    const la=a.lat*RAD,lo=a.lon*RAD,lb=b.lat*RAD,ob=b.lon*RAD;
    const v1=[Math.cos(la)*Math.cos(lo),Math.cos(la)*Math.sin(lo),Math.sin(la)];
    const v2=[Math.cos(lb)*Math.cos(ob),Math.cos(lb)*Math.sin(ob),Math.sin(lb)];
    const dot=Math.min(1,Math.max(-1,v1[0]*v2[0]+v1[1]*v2[1]+v1[2]*v2[2]));
    const om=Math.acos(dot), so=Math.sin(om)||1;
    for(let i=0;i<=n;i++){
      const t=i/n, s1=Math.sin((1-t)*om)/so, s2=Math.sin(t*om)/so;
      const x=v1[0]*s1+v2[0]*s2, y=v1[1]*s1+v2[1]*s2, z=v1[2]*s1+v2[2]*s2;
      pts.push(project(Math.asin(z)/RAD, Math.atan2(y,x)/RAD));
    }
    ctx.lineWidth=1.1;
    for(let i=1;i<pts.length;i++){
      const p=pts[i-1],q=pts[i];
      const z=(p.z+q.z)/2;
      if(z<=0.02)continue;
      ctx.strokeStyle="rgba("+PAL.ink+","+(PAL.arc0+PAL.arc1*Math.min(1,z*1.6)).toFixed(3)+")";
      ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
    }
  }

  function draw(){
    PAL=document.documentElement.getAttribute("data-theme")==="dark"?PALS.dark:PALS.light;
    ctx.clearRect(0,0,W,H);

    // body: strong light-to-shade falloff so the sphere reads as round
    const body=ctx.createRadialGradient(cx-R*.38,cy-R*.42,R*.05,cx-R*.18,cy-R*.2,R*1.45);
    body.addColorStop(0,PAL.body[0]);
    body.addColorStop(.38,PAL.body[1]);
    body.addColorStop(.7,PAL.body[2]);
    body.addColorStop(1,PAL.body[3]);
    ctx.fillStyle=body;ctx.beginPath();ctx.arc(cx,cy,R,0,6.2832);ctx.fill();

    graticule();
    land();

    // limb darkening keeps the edge from reading flat
    const limb=ctx.createRadialGradient(cx,cy,R*.62,cx,cy,R);
    limb.addColorStop(0,"rgba("+PAL.limb+",0)");
    limb.addColorStop(.7,"rgba("+PAL.limb+","+PAL.limbA[0]+")");
    limb.addColorStop(1,"rgba("+PAL.limb+","+PAL.limbA[1]+")");
    ctx.fillStyle=limb;ctx.beginPath();ctx.arc(cx,cy,R,0,6.2832);ctx.fill();

    arc(CITIES[0],CITIES[1]);arc(CITIES[1],CITIES[2]);arc(CITIES[2],CITIES[0]);

    // rim, brighter where the light falls
    ctx.lineWidth=1;
    ctx.strokeStyle=PAL.rim;
    ctx.beginPath();ctx.arc(cx,cy,R-.5,0,6.2832);ctx.stroke();
    ctx.strokeStyle=PAL.hi;ctx.lineWidth=1.4;
    ctx.beginPath();ctx.arc(cx,cy,R-1.6,Math.PI*1.08,Math.PI*1.72);ctx.stroke();

    hits.length=0;
    CITIES.forEach((c,i)=>{
      const p=project(c.lat,c.lon);
      hits.push({x:p.x,y:p.y,z:p.z,i:i});
      if(p.z<=0.06)return;
      const on=i===active, hi=on||i===hover;
      const fade=Math.min(1,p.z*3.2);
      const r=(on?5.2:4)*(0.75+0.25*p.z);
      ctx.save();
      ctx.globalAlpha=fade;
      if(on){
        ctx.fillStyle=PAL.ring;
        ctx.beginPath();ctx.arc(p.x,p.y,r+9,0,6.2832);ctx.fill();
        ctx.strokeStyle=PAL.ringLn;ctx.lineWidth=1;
        ctx.beginPath();ctx.arc(p.x,p.y,r+9,0,6.2832);ctx.stroke();
      }
      ctx.shadowColor=PAL.halo;ctx.shadowBlur=6;
      ctx.fillStyle=hi?PAL.pin:PAL.pinDim;
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,6.2832);ctx.fill();
      ctx.shadowBlur=0;
      ctx.strokeStyle=PAL.pinEdge;ctx.lineWidth=1.5;
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,6.2832);ctx.stroke();

      ctx.font=(on?"600 ":"500 ")+"12.5px 'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif";
      ctx.textBaseline="middle";
      ctx.shadowColor=PAL.halo;ctx.shadowBlur=7;
      ctx.fillStyle=hi?PAL.txt:PAL.txtDim;
      const label=tr(c.name);
      ctx.fillText(label,p.x+r+8,p.y+.5);
      ctx.fillText(label,p.x+r+8,p.y+.5);
      ctx.restore();
    });
  }

  function setCity(i,spinTo){
    active=i;
    const c=CITIES[i];
    $("#ccCity").textContent=c.name;
    $("#ccAddr").innerHTML=c.addr;
    $("#ccHours").textContent=c.hours;
    $("#ccCoord").textContent=c.coord;
    $("#ccCovers").textContent=c.covers;
    $("#ccMap").href=c.map;
    clock();
    $$(".city-tabs button").forEach(b=>b.setAttribute("aria-selected",String(+b.dataset.city===i)));
    if(spinTo){
      let target=-c.lon*RAD;
      while(target-rot>Math.PI)target-=2*Math.PI;
      while(target-rot<-Math.PI)target+=2*Math.PI;
      spin={to:target,tiltTo:Math.max(-0.5,Math.min(0.5,c.lat*RAD*0.5))};
      if(reduce){rot=target;tilt=spin.tiltTo;spin=null;draw()}
    }
  }

  function clock(){
    const c=CITIES[active];
    try{
      $("#ccTime").textContent=new Intl.DateTimeFormat("en-GB",
        {timeZone:c.tz,hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date());
    }catch(e){$("#ccTime").textContent="--:--"}
  }

  $$(".city-tabs button").forEach(b=>{
    b.addEventListener("click",()=>setCity(+b.dataset.city,true));
  });

  const pick=e=>{
    const r=globeCanvas.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    let best=-1,bd=22;
    hits.forEach(h=>{
      if(h.z<=0)return;
      const d=Math.hypot(h.x-x,h.y-y);
      if(d<bd){bd=d;best=h.i}
    });
    return best;
  };
  /* drag to spin */
  let drag=null, vr=0, vt=0, idleUntil=0;
  const clampTilt=v=>Math.max(-0.95,Math.min(0.95,v));

  globeCanvas.addEventListener("pointerdown",e=>{
    drag={x:e.clientX,y:e.clientY,moved:0};
    spin=null;vr=0;vt=0;
    globeCanvas.setPointerCapture(e.pointerId);
    globeCanvas.style.cursor="grabbing";
  });
  globeCanvas.addEventListener("pointermove",e=>{
    if(!drag){
      const i=pick(e);
      if(i!==hover){hover=i;globeCanvas.style.cursor=i>=0?"pointer":"grab"}
      return;
    }
    const dx=e.clientX-drag.x, dy=e.clientY-drag.y;
    drag.x=e.clientX;drag.y=e.clientY;drag.moved+=Math.abs(dx)+Math.abs(dy);
    vr=dx*0.0062; vt=dy*0.0045;
    rot+=vr; tilt=clampTilt(tilt+vt);
  });
  const endDrag=e=>{
    if(!drag)return;
    const moved=drag.moved;drag=null;
    globeCanvas.style.cursor="grab";
    idleUntil=Date.now()+2600;
    if(moved<6){vr=0;vt=0;const i=pick(e);if(i>=0)setCity(i,true)}
  };
  globeCanvas.addEventListener("pointerup",endDrag);
  globeCanvas.addEventListener("pointercancel",()=>{drag=null;globeCanvas.style.cursor="grab"});
  globeCanvas.addEventListener("mouseleave",()=>{hover=-1});
  globeCanvas.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"){rot-=0.12;idleUntil=Date.now()+2600}
    else if(e.key==="ArrowRight"){rot+=0.12;idleUntil=Date.now()+2600}
    else if(e.key==="ArrowUp"){tilt=clampTilt(tilt-0.08);idleUntil=Date.now()+2600}
    else if(e.key==="ArrowDown"){tilt=clampTilt(tilt+0.08);idleUntil=Date.now()+2600}
    else return;
    e.preventDefault();
  });

  function frame(){
    if(spin){
      rot+=(spin.to-rot)*0.08;
      tilt+=(spin.tiltTo-tilt)*0.08;
      if(Math.abs(spin.to-rot)<0.004){rot=spin.to;tilt=spin.tiltTo;spin=null}
    }else if(!drag){
      if(Math.abs(vr)>0.0003||Math.abs(vt)>0.0003){
        rot+=vr;tilt=clampTilt(tilt+vt);
        vr*=0.94;vt*=0.9;
      }else if(!reduce&&Date.now()>idleUntil){
        rot+=0.0022;
      }
    }
    draw();
    requestAnimationFrame(frame);
  }

  size();setCity(0,false);draw();
  addEventListener("resize",()=>{size();draw()});
  setInterval(clock,20000);
  requestAnimationFrame(frame);
}

/* hero: a imagem começa em S_INI do grid (65%) e cresce com a rolagem até S_FIM do grid (menor que a largura total).
   O espaço que ela deixa vazio embaixo é recolhido (margin-bottom negativa), então o conteúdo de baixo sobe junto.
   Para ajustar o tamanho, mude S_INI / S_FIM (1 = largura total do grid). */
(()=>{
  const m=document.querySelector(".hx-media");if(!m)return;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mq=matchMedia("(max-width:900px)");
  const S_INI=()=>mq.matches?.7:.65, S_FIM=()=>mq.matches?.9:.8, DIST=440;
  let cur=S_INI(),raf=0;
  const target=()=>{if(reduced)return S_FIM();const p=Math.min(1,Math.max(0,scrollY/DIST));return S_INI()+(S_FIM()-S_INI())*p};
  const apply=()=>{m.style.transform="scale("+cur.toFixed(4)+")";m.style.marginBottom=(-(1-cur)*m.offsetHeight).toFixed(1)+"px"};
  const step=()=>{raf=0;const t=target();cur+=(t-cur)*.14;if(Math.abs(t-cur)<.0005)cur=t;apply();if(cur!==t)raf=requestAnimationFrame(step)};
  const go=()=>{if(!raf)raf=requestAnimationFrame(step)};
  addEventListener("scroll",go,{passive:true});addEventListener("resize",go);
  cur=target();apply();go();
})();
