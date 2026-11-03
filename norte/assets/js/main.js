(function(){
  const MEGA={
    wm:{t:"Wealth Management",x:"Wealth solutions for families and individuals, with a global view.",l:["Home","Who we serve","What we offer","Insights","About us","Contact us"]},
    ib:{t:"Investment Bank",x:"Financial advisory and market access for corporates and institutions.",l:["Norte Investment Bank","Global markets"]},
    qs:{t:"About us",x:"Learn about the group, our governance and our commitment to impact.",l:["Our firm","Investor relations","Media","Sustainability and impact","Cybersecurity","Media contacts"]},
    car:{t:"Careers",x:"Opportunities for students, graduates and experienced professionals.",l:["Overview","About us","Professional careers","Early careers","Apprenticeships","Search jobs"]}
  };
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const panel=$("#megaPanel"), navBtns=$$(".nav>button");
  const toggles=[["#loginBtn","#loginDrop"],["#searchBtn","#searchPanel"]];

  function closeAll(except){
    navBtns.forEach(b=>{ if(b!==except) b.setAttribute("aria-expanded","false") });
    if(!except||!except.dataset.mega) panel.hidden=true;
    toggles.forEach(([b,p])=>{ const btn=$(b); if(btn!==except){ btn.setAttribute("aria-expanded","false"); $(p).hidden=true } });
  }
  navBtns.forEach(b=>b.addEventListener("click",e=>{
    e.stopPropagation();
    const open=b.getAttribute("aria-expanded")==="true";
    closeAll(b);
    if(open){ b.setAttribute("aria-expanded","false"); panel.hidden=true; return }
    const m=MEGA[b.dataset.mega];
    $("#megaTitle").textContent=m.t; $("#megaText").textContent=m.x;
    $("#megaLinks").innerHTML=m.l.map(n=>`<a href="#">${n}</a>`).join("");
    b.setAttribute("aria-expanded","true"); panel.hidden=false;
  }));
  toggles.forEach(([b,p])=>{
    $(b).addEventListener("click",e=>{
      e.stopPropagation();
      const btn=$(b), open=btn.getAttribute("aria-expanded")==="true";
      closeAll(btn);
      btn.setAttribute("aria-expanded",String(!open)); $(p).hidden=open;
      if(!open&&p==="#searchPanel") setTimeout(()=>$("#q").focus(),30);
    });
    $(p).addEventListener("click",e=>e.stopPropagation());
  });
  panel.addEventListener("click",e=>e.stopPropagation());
  document.addEventListener("click",()=>closeAll());
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ closeAll(); closeDrawer() } });

  $("#searchForm").addEventListener("submit",e=>{
    e.preventDefault();
    const v=$("#q").value.trim(), msg=$("#searchMsg");
    msg.hidden=false;
    msg.textContent=v?`Searching for “${v}”: search goes live once the site is connected to content.`:"Type a term to search.";
  });
  $$(".search .chip").forEach(c=>c.addEventListener("click",()=>{ $("#q").value=c.textContent; $("#searchForm").requestSubmit() }));

  $("#noticeBtn").addEventListener("click",function(){
    const o=this.getAttribute("aria-expanded")==="true";
    this.setAttribute("aria-expanded",String(!o)); $("#noticeMore").hidden=o;
    this.textContent=o?"Read full notice":"Show less";
  });

  const drawer=$("#drawer"), burger=$("#burger");
  $("#drawerAcc").innerHTML=Object.entries(MEGA).map(([k,m])=>`
    <div class="acc"><button type="button" aria-expanded="false" aria-controls="acc-${k}">${m.t}<svg class="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3.5 5 6.5 8 3.5"/></svg></button>
    <div class="acc-body" id="acc-${k}" hidden><a href="#"><strong>Overview</strong></a>${m.l.map(n=>`<a href="#">${n}</a>`).join("")}</div></div>`).join("");
  $$(".acc>button").forEach(b=>b.addEventListener("click",()=>{
    const o=b.getAttribute("aria-expanded")==="true"; b.setAttribute("aria-expanded",String(!o)); b.nextElementSibling.hidden=o;
  }));
  function closeDrawer(){ drawer.hidden=true; burger.setAttribute("aria-expanded","false"); document.body.style.overflow="" }
  burger.addEventListener("click",e=>{ e.stopPropagation(); closeAll(); drawer.hidden=false; burger.setAttribute("aria-expanded","true"); document.body.style.overflow="hidden" });
  $("#drawerClose").addEventListener("click",closeDrawer);
  drawer.addEventListener("click",e=>{ if(e.target.closest("a")) closeDrawer() });

  // mapa-múndi pontilhado: continentes reais (Natural Earth 110m), projeção Miller, grade regular de pontos só sobre a terra
  const cv=$("#globe"), ctx=cv.getContext("2d");
  const G={cols:200,rows:101,bits:"AAAAAADA/5///38eAAAAAAAAAAAAAAAAAAAAAAAAsP/P////DwAAAAAAAAAYAAAAAAAAAAAAAPj+9////wAAwA+AAQAAPAAAAAAAAAAAAADw/eH///8BAHwCAAAAAHgAAAAAAAAAAACE5X78////AAD4AAAAAACAAwAAAAAAAAAABgA9/v///wAAcAIAAAAAAAAAAAAAAAAA4AAIH/z///8BACAAAAAAAAADAAAAAAAAADAJYxD4////AAAAAAAADwDAPwAAAAAAAACAP+IfAPz//wAAAAAAwAEA/n8A4AEAAAAAAAaQDwD8//8AAAAAAGAAgP8fAAAAAAAAAPgAcAAA+P//AAAAAAAwAPD/fwCAAAAAAAD8O5YtAPD/fwAAAAAAGCD4////AAAAAAAA3C+G/wD4/z8AAAAAABxw/v///8APAIABAIB/OP8D4P9/AAAAEAAY+AAAAAAAwP/wv4AA/zjcD/D/fwAAAD8AAHj///////8D8P/3P97sjA/AD+D//z8A/v8MAAAAAAAAgAMAAADOC3HhHwD8//8fALgDgAAAAAAAAAAPAAAAAADwwQ8A////DwCwAIAAAAAAAAAAEwAAAAAA/pAPgL/7/wcACwAAAAAAAAAAAAMAAAAAADigH/B/8P8HBg4AAAAAAAAAAADg/////38OPuAPgAMA/P79////////////+P////9/ACzABwAAAH/+//////////////z/////H8ABgAcAAIA//v///////////+/43////x/ABwAGAACAP/7////////////w4Av+//8PwAcAAAAAgH/g//////////9/CIAD+P//H8BvAAAAAII5/P////////9/AASAAuD//z+A/wAAAAAHOP7/////////PwAPQADA////gf8AAAAAAhr//////////x8ABwgAgP///8//AwAAgAYC//////////8PAAcAAAD////P/wcAAMAM////////////fwADAABA/v//z/8HAADAnv////////////8AAQAAAP7/////AwAAAP7///////////9/AAAAAAD6////XwQAAADw////////////fwEAAAAA8P///zceAAAA/v///////////78AAAAAAPj///87GAAAAPj///////////8/AAAAAAD4////fwEAAAD4/z/9+f//////HwAAAAAA+P///28AAAAA+Ocf/Pz//////48AAAAAAPj///8DAAAAgD/MD/D8///////HAQAAAAD4////BwAAAIA/mp/x8f//////QAAAAAAA+P///wAAAACAD+L5//v/////90AAAAAAAPj///8AAAAAwA8g8//x/////0FAAAAAAADw//9/AAAAAIAHEPD/8//////LYAAAAAAA4P//fwAAAAAA8AMA/v//////x3AAAAAAAMD//z8AAAAAAP8DAP7//////wcaAAAAAACA//8fAAAAAID/BwD+//////8HAwAAAAAAgP7/DwAAAADA/x9P////////DwAAAAAAAAD9fwgAAAAAwP/////8/////w8AAAAAAAAA/gcYAAAAAOD//3///f////8HAAAAAAAAAPIHUAAAAADw/////sP/////BwAAAAAAAAD0BwAAAAAA+P////wT+P///wsAAAAAAAAA6AcAAAAAAPj////5f/D///8BAAAAAAAAAMAHYAAAAAD8////+3/g//w/AAAAAAAAAADAh8EAAAAA/P////M/gH/4AwAAAAAAAAAAgO8ADwAAAPz////zH4A/+BMAAAAAAAAAAAD+AAAAAAD8////5w+AD/AHCAAAAAAAAAAA4AcAAAAA/P///+8DAAfgDwAAAAAAAAAAAIAHAAAAAPz/////AAAHwA8QAAAAAAAAAAAABgIAAAD8////HwAAB0APIAAAAAAAAAAAAARfAAAA+P////8DAAYABBAAAAAAAAAAAADY/wEAAPD/////AwAKQAAwAAAAAAAAAAAAwP8DAADg/////wEACIAAIAAAAAAAAAAAAMD/HwAAwIX///8AAACQAQMAAAAAAAAAAADA/z8AAAAA/P//AAAAoIEBAAAAAAAAAAAAwP9/AAAAAPz/fwAAAMDwAQAAAAAAAAAAAOD/PwAAAAD+/x8AAADA8QUAAAAAAAAAAADw//8DAAAA/v8PAAAAgOENBAAAAAAAAAAA4P//HwAAAPz/DwAAAACDzP0gAAAAAAAAAPD//z8AAAD4/wcAAAAAAgTgIwAAAAAAAADg//9/AAAA+P8HAAAAACwA4IMAAAAAAAAAwP//fwAAAPD/BwAAAACAQoAEBAAAAAAAAMD//38AAADw/w8AAAAAAAAACAAAAAAAAACA//8/AAAA8P8PAAAAAAAABAAAAAAAAAAAgP//HwAAAPj/DwAAAAAAAI4AAAAAAAAAAAD//x8AAAD4/w8DAAAAAOCPAQAAAAAAAAAA/v8fAAAA+P/HAQAAAADgvwMAAAAAAAAAAPj/HwAAAPj/wQEAAAAA8P8DAAAAAAAAAAD4/w8AAADw/8ABAAAAAPz/BwAAAAAAAAAA+P8PAAAA8P/hAAAAAAD//w8gAAAAAAAAAPj/AwAAAPD/wQAAAACA//8fAAAAAAAAAAD8/wAAAADg/8AAAAAAgP//PwAAAAAAAAAA/H8AAAAA4H8AAAAAAID//z8AAAAAAAAAAPx/AAAAAOB/AAAAAACA//8/AAAAAAAAAAD8fwAAAADAPwAAAAAAAP//PwAAAAAAAAAA/D8AAAAAgD8AAAAAAAD//z8AAAAAAAAAAPwfAAAAAIAfAAAAAAAAP/gfAAAAAAAAAAD8DwAAAACAAQAAAAAAAAPgHwAAAAAAAAAA/gMAAAAAAAAAAAAAAAAAwA8AAAAAAAAAAP4DAAAAAAAAAAAAAAAAAMAPAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAA/AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAA="};
  const bin=atob(G.bits), isLand=(c,r)=>{const i=r*G.cols+c;return (bin.charCodeAt(i>>3)>>(i&7))&1};
  const st=getComputedStyle(document.documentElement);
  const muted=st.getPropertyValue("--muted").trim(), acc=st.getPropertyValue("--accent").trim(), ink=st.getPropertyValue("--ink").trim(), surf=st.getPropertyValue("--surface").trim();
  const W=cv.width,H=cv.height,D=Math.PI/180,L0=-170*D,L1=170*D,SC=W/(L1-L0),CELL=W/G.cols;
  const my=la=>1.25*Math.log(Math.tan(Math.PI/4+.4*la*D)), yTop=my(82);
  const px=lo=>(lo*D-L0)*SC, py=la=>(yTop-my(la))*SC;
  // cidades: [nome, lon, lat, lado do rótulo]; a primeira é a sede e de onde saem as rotas
  const cities=[["Zurich",8.54,47.37,"r"],["New York",-74,40.7,"l"],["London",-0.13,51.5,"t"],["São Paulo",-46.6,-23.5,"r"],["Singapore",103.8,1.35,"r"]], sp=cities[0];
  function draw(){
    // u = pixels do desenho por pixel de tela: marcadores e textos mantêm tamanho legível em qualquer largura
    const u=W/Math.max(cv.clientWidth,1), labels=cv.clientWidth>=520, mk=labels?1:.62, ml=labels?1:.8;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle=muted;
    for(let r=0;r<G.rows;r++)for(let c=0;c<G.cols;c++){
      if(!isLand(c,r))continue;
      ctx.globalAlpha=.72; ctx.beginPath(); ctx.arc((c+.5)*CELL,(r+.5)*CELL,CELL*.34,0,7); ctx.fill();
    }
    ctx.globalAlpha=1;
    cities.slice(1).forEach(c=>{
      const x1=px(sp[1]),y1=py(sp[2]),x2=px(c[1]),y2=py(c[2]);
      ctx.strokeStyle=acc; ctx.lineWidth=1.6*u*ml; ctx.setLineDash([u*ml,5*u*ml]); ctx.lineCap="round"; ctx.globalAlpha=.9;
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo((x1+x2)/2,Math.min(y1,y2)-Math.abs(x2-x1)*.26-20*u,x2,y2); ctx.stroke();
    });
    ctx.setLineDash([]); ctx.globalAlpha=1;
    ctx.font="600 "+Math.round(13.5*u)+"px 'Geist Mono',ui-monospace,monospace"; ctx.textBaseline="middle";
    cities.forEach((c,i)=>{
      const x=px(c[1]),y=py(c[2]),hub=i===0, r=(hub?6.5:5)*u*mk;
      ctx.fillStyle=acc; ctx.globalAlpha=.2; ctx.beginPath(); ctx.arc(x,y,r*2.6,0,7); ctx.fill();
      ctx.globalAlpha=1; ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fill();
      ctx.strokeStyle=surf; ctx.lineWidth=2*u*mk; ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.stroke();
      if(!labels)return;
      const dx=c[3]==="l"?-13*u:c[3]==="r"?13*u:0, dy=c[3]==="t"?-19*u:0;
      ctx.textAlign=c[3]==="l"?"right":c[3]==="r"?"left":"center";
      ctx.lineJoin="round"; ctx.lineWidth=4.5*u; ctx.strokeStyle=surf; ctx.strokeText(c[0].toUpperCase(),x+dx,y+dy);
      ctx.fillStyle=ink; ctx.fillText(c[0].toUpperCase(),x+dx,y+dy);
    });
  }
  draw();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(draw);   // redesenha quando a fonte mono carregar (rótulos)
  if(window.ResizeObserver)new ResizeObserver(draw).observe(cv);               // e quando a largura muda (celular, rotação, janela)
})();
