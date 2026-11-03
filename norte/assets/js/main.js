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
  const G={cols:150,rows:76,bits:"AAAAAPif//8dAAAAAAAAAAAAAAAAAID9+///AwAIwAAADAAAAAAAAADgf/z/fwBwBwAAAAcAAAAAAACI9e///w8AHAAAAAAGAAAAAADAAvDg//8DAAYAAAAAAAAAAAAAGLE9/P//AAAAAGAA4AcAAAAAAPj8D+D/PwAAAAADwP8BeAEAAMABAADw/w8AAABgAPgfAAAAAABw2XoB+P8BAAAADID//w8AAAAA/Cf+AP9/AAAAAIP5//+DBwAPAOgz/4H/DwAAHgBw/////x/g//78nnnA/wMA4A8A2x8AAACAAwAAx5DFB+D//wMgAQgAAAAAwAEAAADgwQH8/38AGAAAAAAAABAAAAAAHvrgH/4PwgEAAAAAAADA////n+PABzgAvv///////////P///0Mw4AAA4Pf/////////N7///3+AAzAAAPj9////////Pw4X/v8f4AQAAAB+/P///////0WAA/z/D/gDAAAEDP///////wcMEAD+/w/+AAAAg/L///////8ABwGA///f/wAAoAD8//////8fwAAAwP//9z8AAGj+////////PxAAAOD///8PAAD4/////////wcAAAD4//8fAgAA+P////////8FAAAA/P//jwMAgP////////9/AAAAAP///wcAAMD/D9//////DwAAAMD//38BAADw98P7/////wkAAADw//8PAACAD3ng/P///x8AAAAA/P//AAAA4AHNf////7+DAAAAAP7/PwAAAHgA+Z/////HAAAAAID//w8AAADEA+j/////IwYAAADA//8BAAAA/wD4/////+AAAAAA4P8/AAAA4H8E/////z8EAAAAAOD/BwAAAPh///////8fAAAAAADwBwAAAAD////z////BwAAAAAA+oAAAADg///78f///wAAAAAAADwAAAAA/P///YL//18AAAAAAAAPGAAAAP//f//Bf/8BAAAAAQDAIwAAAMD//58/4McvAAAAAAAAwA8IAADw///PB/jgAwEAAAAAAAAPAAAA/P//9wAM8EEAAAAAAAAAAwAAAP///wcAA3QwAAAAAAAAgFAAAMD///8MwAAYAAAAAAAAAMD/AADg////AWBAAgQAAAAAAACA/wAA8P//fwAQIBAAAAAAAAAA4P8AAAD4/w8AABoGAAAAAAAAAPx/AAAA/v8BAADHAQAAAAAAAAD/PwAAgP8/AACAeQAAAAAAAADg/x8AAOD/BwAAwGxgAAAAAAAA+P9/AADw/wAAACAAeAAAAAAAAPz/PwAA+D8AAABwADwAAAAAAAD//wcAAP4PAAAAAAAQAgAAAACA//8BAID/BwAAAAAIAAAAAAAA4P8/AADw/xEAAAAAJwAAAAAAAPD/DwAA/H8GAAAA8BsAAAAAAADw/wMAAP/HAQAAAP4HAAAAAAAA/H8AAID/MAAAAOD/BwIAAAAAAP8fAADgfwwAAAD+/wMAAAAAAMD/AAAA+A8DAACA//8AAAAAAADwPwAAAPwBAAAA4P9/AAAAAAAA/gcAAAB/AAAAAPD/HwAAAAAAgP8BAACADwAAAAD8/wcAAAAAAOA/AAAA4AEAAAAAD/8AAAAAAAD4AwAAAAAAAAAAAIA/AAAAAAAA/gAAAAAAAAAAAACABwAAAAAAgA8AAAAAAAAAAAAAgAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAIAAAAAAAADwAAAAAAAAAAAAAAAAgAAAAAwAEAAAAAAAAAAAAAAAACAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAARwAAAAAAAAAAAAAAAAAAAAAAwAEAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAA"};
  const bin=atob(G.bits), isLand=(c,r)=>{const i=r*G.cols+c;return (bin.charCodeAt(i>>3)>>(i&7))&1};
  const st=getComputedStyle(document.documentElement);
  const muted=st.getPropertyValue("--muted").trim(), acc=st.getPropertyValue("--accent").trim();
  const W=cv.width,H=cv.height,D=Math.PI/180,L0=-170*D,L1=170*D,SC=W/(L1-L0),CELL=W/G.cols;
  const my=la=>1.25*Math.log(Math.tan(Math.PI/4+.4*la*D)), yTop=my(82);
  const px=lo=>(lo*D-L0)*SC, py=la=>(yTop-my(la))*SC;
  ctx.fillStyle=muted;
  for(let r=0;r<G.rows;r++)for(let c=0;c<G.cols;c++){
    if(!isLand(c,r))continue;
    ctx.globalAlpha=.62; ctx.beginPath(); ctx.arc((c+.5)*CELL,(r+.5)*CELL,CELL*.3,0,7); ctx.fill();
  }
  ctx.globalAlpha=1;
  const cities=[[8.5,47.4],[-74,40.7],[-0.1,51.5],[-46.6,-23.5],[103.8,1.35]], sp=cities[0];
  cities.slice(1).forEach(c=>{
    ctx.strokeStyle=acc; ctx.lineWidth=2.2; ctx.setLineDash([5,8]);
    const x1=px(sp[0]),y1=py(sp[1]),x2=px(c[0]),y2=py(c[1]);
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo((x1+x2)/2,Math.min(y1,y2)-Math.abs(x2-x1)*.28-30,x2,y2); ctx.stroke();
  });
  ctx.setLineDash([]);
  cities.forEach(c=>{
    const x=px(c[0]),y=py(c[1]);
    ctx.fillStyle=acc; ctx.globalAlpha=.22; ctx.beginPath(); ctx.arc(x,y,20,0,7); ctx.fill();
    ctx.globalAlpha=1; ctx.beginPath(); ctx.arc(x,y,8.5,0,7); ctx.fill();
    ctx.strokeStyle="#fff"; ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(x,y,8.5,0,7); ctx.stroke();
  });
})();
