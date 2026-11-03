(function(){
  const MEGA={
    wm:{t:"Wealth Management",x:"Wealth solutions for families and individuals, with a global view.",l:["Home","Who we serve","What we offer","Insights","About us","Contact us"]},
    ib:{t:"Investment Bank",x:"Financial advisory and market access for corporates and institutions.",l:["Norte Investment Bank Brazil","Norte IB global"]},
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

  // dot map
  const cv=$("#globe"), ctx=cv.getContext("2d");
  const cities=[[-46.6,-23.5],[8.5,47.4],[-74,40.7],[-0.1,51.5],[103.8,1.35]];
  const land=[[-168,-52,15,72],[-82,-35,-56,12],[-18,52,-35,37],[-10,40,36,71],[40,150,5,75],[95,155,-10,20],[113,154,-39,-11],[-55,-15,60,83]];
  function isLand(lo,la){
    for(const [a,b,c,d] of land){ if(lo>=a&&lo<=b&&la>=c&&la<=d){
      const nx=(lo-a)/(b-a), ny=(la-c)/(d-c);
      const n=Math.sin(lo*0.21)*Math.cos(la*0.27)+Math.sin(lo*0.07+la*0.11);
      if(n>-0.9 && nx>0.04 && nx<0.96 && ny>0.04 && ny<0.96) return true;
    }} return false;
  }
  const st=getComputedStyle(document.documentElement);
  const line=st.getPropertyValue("--line").trim(), muted=st.getPropertyValue("--muted").trim(), acc=st.getPropertyValue("--accent").trim(), mark=st.getPropertyValue("--mark").trim();
  const W=cv.width,H=cv.height, px=lo=>(lo+170)/340*W, py=la=>(80-la)/140*H;
  for(let la=78;la>-58;la-=3.6) for(let lo=-168;lo<170;lo+=3.6){
    const l=isLand(lo,la);
    ctx.fillStyle=l?muted:line; ctx.globalAlpha=l?.55:.6;
    ctx.beginPath(); ctx.arc(px(lo),py(la),l?3.1:1.6,0,7); ctx.fill();
  }
  ctx.globalAlpha=1;
  const sp=cities[0];
  cities.slice(1).forEach(c=>{
    ctx.strokeStyle=acc; ctx.lineWidth=1.6; ctx.setLineDash([4,6]);
    const x1=px(sp[0]),y1=py(sp[1]),x2=px(c[0]),y2=py(c[1]);
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo((x1+x2)/2,Math.min(y1,y2)-90,x2,y2); ctx.stroke();
  });
  ctx.setLineDash([]);
  cities.forEach((c,i)=>{
    const x=px(c[0]),y=py(c[1]);
    ctx.fillStyle=acc; ctx.globalAlpha=.25; ctx.beginPath(); ctx.arc(x,y,16,0,7); ctx.fill();
    ctx.globalAlpha=1; ctx.beginPath(); ctx.arc(x,y,7,0,7); ctx.fill();
  });
})();
