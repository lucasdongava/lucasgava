/* Solen Markets — blog page
   Gradients come from script.js, which must load first. */

const GR=(window.SOLEN_GRADIENTS||[]);
const bg=i=>`background-image:${GR[i%(GR.length||1)]}`;

const AUTH={desk:{n:"Solen Desk",g:0}};
const P=[
{slug:"ether-etf-outflows-october",g:5,date:"October 21, 2026",tag:"Markets",authors:["desk"],
 title:"Ether ETFs lose more than $1 billion in October",
 excerpt:"US spot ether funds have given back all of September's inflows, while bitcoin funds held close to flat.",
 body:`
<p>US spot ether ETFs recorded net outflows of $1.08 billion in October as of October 21, according to SoSoValue data cited by Cointelegraph. That is the largest monthly net outflow for the group since November 2025, and it came with eight trading sessions still to go.</p>
<p>The month has undone the one before it. September brought $832 million of net inflows, and October has now erased that. Even so, ether funds are still about $485 million net positive for the year.</p>
<h3>Bitcoin held up better</h3>
<p>Spot bitcoin ETFs took in $527 million on Monday and $23 million on Tuesday. Their October net flow stood at roughly minus $67 million, which is close to flat, and they have drawn about $809 million so far this year.</p>
<h3>Price context</h3>
<p>ETH fell 9.7% in October to about $2,438 at the time of the report, leaving it down nearly 18% for the year according to CoinGecko. BTC traded near $82,954, down 2.2% since October 1 and 5.3% for the year.</p>
<blockquote style="--qbg:${GR[5]}"><span>Our read: Flows follow price as much as they lead it. One month of outflows is a signal to watch, not yet a trend.</span></blockquote>
<h3>What we are watching</h3>
<p>Fund flows are one of the cleaner reads on institutional appetite, because they are reported daily and are hard to dress up. The two questions for the rest of the quarter are whether ether outflows slow once the price stabilises, and whether bitcoin inflows keep pace on the days it rallies.</p>
<h3>Sources</h3>
<p><a href="https://cointelegraph.com/markets/ether-etf-outflows-near-1-1-billion-october" target="_blank" rel="noopener noreferrer">Cointelegraph: Ether ETF outflows continue, pass $1B in October so far</a> (October 21, 2026)</p>`},

{slug:"september-crypto-hacks",g:6,date:"October 1, 2026",tag:"Security",authors:["desk"],
 title:"September was the worst month for crypto hacks this year",
 excerpt:"PeckShield counted $766.5 million stolen across 55 major incidents, with two breaches making up most of it.",
 body:`
<p>Crypto security firms agree that September was the worst month of 2026 for hacks and exploits. PeckShield counted 55 major incidents and $766.5 million in stolen funds. CertiK recorded 97 incidents and estimated $768.4 million. Both said losses rose significantly from August.</p>
<h3>Two incidents did most of the damage</h3>
<p>The Bitget breach accounted for $388 million. The Liquid Network exploit accounted for $320 million, although reports say more than $270 million of that was later returned. By our arithmetic those two events make up roughly 92% of PeckShield's monthly total.</p>
<p>The rest of the list is far smaller: Safe Wallet lost $7.8 million, DCENT lost $6 million and Duelbits lost $5.9 million.</p>
<h3>Why the counts differ</h3>
<p>The gap between 55 and 97 incidents is a methodology difference, not a disagreement about the damage. PeckShield counts major incidents, while CertiK's dashboard logs a wider set of security events. The dollar totals landing within two million of each other is the more useful signal.</p>
<h3>The year so far</h3>
<p>CertiK's dashboard shows 656 security incidents in 2026 with total losses of $2.68 billion.</p>
<blockquote style="--qbg:${GR[6]}"><span>Our read: When two events carry more than nine tenths of a month's losses, the monthly total says more about a few custody failures than about the average protocol.</span></blockquote>
<h3>Sources</h3>
<p><a href="https://cointelegraph.com/news/crypto-hacks-total-766m-in-september-peckshield" target="_blank" rel="noopener noreferrer">Cointelegraph report on September hack totals (PeckShield and CertiK data)</a> (October 1, 2026)</p>`},

{slug:"bitget-breach-recovery",g:4,date:"September 29, 2026",tag:"Security",authors:["desk"],
 title:"Bitget's $388 million breach and the road to recovery",
 excerpt:"The exchange has resumed withdrawals in stages, but its CEO says she is not very optimistic about getting the funds back.",
 body:`
<p>Bitget first reported a $352 million loss from an attack on a Thursday, then revised the figure to about $388 million after a fuller accounting of the transfers. The exchange suspended withdrawals and began resuming them in stages, with Bitcoin on Monday and Ethereum on Tuesday.</p>
<h3>What the CEO said about recovery</h3>
<p>Chief executive Gracy Chen said she is "not very optimistic" about recovering all of the stolen assets. She pointed to the 2025 Bybit hack as a reference: about a year later, only around 3.5% of the stolen funds had been frozen, and that figure did not count as recovery.</p>
<h3>What has been frozen so far</h3>
<p>NEAR Intents said it blocked more than $50 million in linked assets and froze about $500,000. Tether and Circle blacklisted a linked wallet, freezing $318,013 in USDT and USDC. Bitget also launched a bounty that pays 5% of frozen funds and 5% of recovered funds.</p>
<h3>Who was behind it</h3>
<p>Shortly after the attack, Chen said North Korea might be responsible, based on IP addresses that matched VPN use by a North Korean group. She later said a preliminary investigation had ruled out an inside job, though she had earlier not fully excluded one. Both points are early findings, and attribution in cases like this often changes as investigators trace the funds.</p>
<blockquote style="--qbg:${GR[4]}"><span>Our read: Freezing is fast only where an issuer or a bridge can act. Once funds sit in assets nobody controls, the numbers get small quickly.</span></blockquote>
<h3>Sources</h3>
<p><a href="https://cointelegraph.com/news/bitget-ceo-gracy-chen-chances-recovering-funds-security-breach" target="_blank" rel="noopener noreferrer">Cointelegraph report on Bitget's recovery prospects</a> (September 29, 2026)</p>`},

{slug:"sec-cftc-without-congress",g:0,date:"September 25, 2026",tag:"Regulation",authors:["desk"],
 title:"With the CLARITY Act stalled, the SEC and CFTC write their own rules",
 excerpt:"Both agencies have proposals and relief in motion that cover fundraising, market structure and tokenized stocks.",
 body:`
<p>A law firm review of the weeks after the failed Senate vote lists a cluster of agency actions that do not need Congress. None of them is final, but together they sketch the framework US crypto firms may end up operating under.</p>
<h3>The SEC</h3>
<p>On August 18 the SEC released a proposed Regulation Crypto Assets. It includes a two-tier fundraising exemption, up to $20 million for Tier 1 and up to $75 million for Tier 2 over twelve months, plus a separate $5 million, four-year startup exemption and a conditional safe harbor. Comments were due October 20.</p>
<p>On September 17 the agency also issued temporary, conditional exemptive relief for five years for certain venues that trade tokenized NMS stock through permissioned automated market makers.</p>
<h3>The CFTC</h3>
<p>On August 20 Chairman Michael Selig directed staff to explore rules using existing authority, including a new "crypto asset market" designation for designated contract markets. On September 17 a proposed rulemaking, "Regulation Crypto Asset Transactions and Regulation Crypto Asset Markets", was sent to OIRA for review. A binding rule is not expected before late 2027.</p>
<p>The same day, Staff Letter 26-25 extended no-action relief to passive software providers that let users send their own orders to registered intermediaries and designated contract markets. On September 24 the agency updated its crypto FAQ to cover customer funds held in tokenized permitted investments and the use of blockchain for recordkeeping.</p>
<h3>The catch</h3>
<p>Agency interpretations can be revised by a future administration, and a statute cannot. That is why the failed vote still matters for firms making multi-year commitments, even as the agencies keep moving.</p>
<h3>Sources</h3>
<p><a href="https://www.troutman.com/insights/in-the-wake-of-clarity-acts-failure-agencies-move-forward-without-congressional-action-or-certainty/" target="_blank" rel="noopener noreferrer">Troutman Pepper Locke: In the Wake of CLARITY Act's Failure, Agencies Move Forward</a> (September 25, 2026)<br><a href="https://www.fireblocks.com/blog/clarity-act-vote-fails-institutional-impact" target="_blank" rel="noopener noreferrer">Fireblocks: What the Failed CLARITY Act Vote Means for Institutional Digital Asset Operations</a> (September 22, 2026)</p>`},

{slug:"clarity-act-senate-vote",g:1,date:"September 22, 2026",tag:"Regulation",authors:["desk"],
 title:"The CLARITY Act fails a Senate procedural vote, 49 to 50",
 excerpt:"The market structure bill fell 11 votes short of the 60 it needed to start debate, though it stays on the calendar.",
 body:`
<p>On September 15 the Senate rejected cloture on the motion to proceed on the Digital Asset Market Clarity Act, H.R. 3633, by 49 to 50, with one senator not voting. That was 11 votes short of the 60 needed. The House had passed the bill 294 to 134, and the Senate never reached its substance.</p>
<h3>How it got here</h3>
<p>Majority Leader John Thune filed cloture on August 8 after lawmakers failed to reach a deal before the August recess. The sticking points were ethics provisions that would restrict government officials and their families from issuing or profiting from digital assets while in office, and the rules for stablecoin rewards. A bipartisan ethics addendum was being negotiated, and Bloomberg reported it would require the president to divest from certain crypto-related businesses.</p>
<h3>What the bill would have done</h3>
<p>It would set a federal market structure for digital assets, clarify when a crypto asset falls under securities or commodities law, and divide oversight between the SEC and the CFTC.</p>
<h3>Is it dead?</h3>
<p>Accounts differ. Fireblocks reports that every Democrat present voted no, joined by four Republicans, and that Senator Tillis switched to no at the end of the roll call so he could file a motion to reconsider. That keeps the bill on the Senate calendar, and negotiations resumed the same day. Troutman Pepper Locke, by contrast, calls the bill effectively dead for the rest of this Congress.</p>
<blockquote style="--qbg:${GR[1]}"><span>Our read: Whichever reading proves right, firms are being told to plan for a world without a statute and to keep their classification logic easy to change.</span></blockquote>
<h3>Sources</h3>
<p><a href="https://www.fireblocks.com/blog/clarity-act-vote-fails-institutional-impact" target="_blank" rel="noopener noreferrer">Fireblocks: What the Failed CLARITY Act Vote Means for Institutional Digital Asset Operations</a> (September 22, 2026)<br><a href="https://www.troutman.com/insights/in-the-wake-of-clarity-acts-failure-agencies-move-forward-without-congressional-action-or-certainty/" target="_blank" rel="noopener noreferrer">Troutman Pepper Locke: In the Wake of CLARITY Act's Failure, Agencies Move Forward</a> (September 25, 2026)<br><a href="https://cointelegraph.com/news/us-senate-clarity-act-september-vote-thune-cloture" target="_blank" rel="noopener noreferrer">Cointelegraph report on Thune filing cloture</a> (August 8, 2026)</p>`},

{slug:"genius-act-deadline",g:2,date:"July 21, 2026",tag:"Regulation",authors:["desk"],
 title:"US regulators miss the GENIUS Act rulemaking deadline",
 excerpt:"Five agencies were due to finalize stablecoin rules by July 18. They have issued ten proposals instead.",
 body:`
<p>The Treasury Department, Federal Reserve, FDIC, OCC and NCUA were required to issue rules under the GENIUS Act by July 18, 2026, one year after the law was signed. According to a Sumsub report, none had finalized its main implementing regulations by that date. The agencies had instead issued ten notices of proposed rulemaking since the law took effect, and Treasury accounted for four of them.</p>
<h3>What the delay changes</h3>
<p>Missing the deadline does not invalidate the act or postpone it. The law takes effect 18 months after signing, or 120 days after the relevant final rules are published, whichever comes first. The delay means issuers will have less time to prepare once final rules arrive.</p>
<p>Fireblocks advises institutions to treat the January 18, 2027 effective date as binding even if the implementing rules are not finished.</p>
<h3>Why it matters</h3>
<p>The GENIUS Act sets a federal framework for payment stablecoins, including reserve requirements for issuers and obligations to follow anti-money-laundering and sanctions rules. Anyone building on stablecoin rails is waiting on the same fine print.</p>
<p>Individual agencies have moved at different speeds, so check each agency's own releases for the latest status of a given rule.</p>
<h3>Sources</h3>
<p><a href="https://sumsub.com/media/news/genius-act-implementation-falls-behind-as-agencies-miss-deadline/" target="_blank" rel="noopener noreferrer">Sumsub report on the missed GENIUS Act deadline</a> (July 21, 2026)<br><a href="https://www.fireblocks.com/blog/clarity-act-vote-fails-institutional-impact" target="_blank" rel="noopener noreferrer">Fireblocks: What the Failed CLARITY Act Vote Means for Institutional Digital Asset Operations</a> (September 22, 2026)</p>`},

{slug:"brazil-central-bank-vasp-rules",g:3,date:"November 11, 2025",tag:"Regulation",authors:["desk"],
 title:"Brazil brings crypto firms under central bank supervision",
 excerpt:"Three resolutions create a new license category and treat stablecoin transfers as foreign exchange activity.",
 body:`
<p>Brazil's central bank issued Resolutions 519, 520 and 521, which set operating standards and authorization procedures for a new license category, the Sociedades Prestadoras de Serviços de Ativos Virtuais, or SPSAVs. Crypto brokers, custodians and intermediaries now fall under banking-style oversight, including consumer protection, transparency and anti-money-laundering rules.</p>
<h3>Dates</h3>
<p>The rules took effect on February 2, 2026. Mandatory reporting for capital-market and cross-border operations began on May 4, 2026.</p>
<h3>Stablecoins count as foreign exchange</h3>
<p>Under Resolution 521, buying, selling or exchanging fiat-pegged virtual assets, including international transfers and payments made with them, is treated as foreign-exchange activity. Licensed FX institutions and SPSAVs can carry out these operations, subject to documentation and value limits. Transfers with unlicensed foreign counterparts are capped at $100,000 per transfer.</p>
<h3>Self-custody</h3>
<p>Transfers to and from self-custodied wallets are covered when a service provider intermediates them. The provider must identify the wallet owner and verify the origin and destination of the assets, even for domestic transfers. The rules do not explicitly ban self-custody.</p>
<h3>Why the central bank did it</h3>
<p>The bank says the framework aims for greater efficiency and legal certainty, prevents regulatory arbitrage and aligns crypto activity with balance-of-payments statistics. Central bank president Gabriel Galipolo said around 90% of crypto activity in Brazil involves stablecoins, mainly for payments, and flagged money laundering and taxation as open challenges.</p>
<p>The expected effect is higher compliance cost, especially for smaller firms that now need to meet banking-grade standards.</p>
<h3>Sources</h3>
<p><a href="https://cointelegraph.com/news/brazil-central-bank-crypto-rules-stablecoins-foreign-exchange" target="_blank" rel="noopener noreferrer">Cointelegraph report on the Banco Central do Brasil resolutions</a> (November 11, 2025)</p>`}
];

/* ---------- Render ---------- */
const q=s=>document.querySelector(s);
const idx=q("#blogIndex"),post=q("#post"),grid=q("#blogGrid");
const soft=matchMedia("(prefers-reduced-motion: reduce)").matches;

grid.innerHTML=P.map((p,i)=>`
<a class="bcard" href="#${p.slug}" data-i="${i}">
  <div class="thumb grad" style="${bg(p.g)}" data-thumb="${i}"></div>
  <div class="txt">
    <div class="meta">${p.date} &middot; ${p.tag}</div>
    <div><h3>${p.title}</h3><p>${p.excerpt}</p></div>
  </div>
</a>`).join("");

function renderPost(p){
  post.innerHTML=`
  <div class="post-col">
    <div class="topbar r">
      <button class="back" id="back" type="button"><span class="chev">&lsaquo;</span>Back</button>
      <button class="fwd" id="next" type="button">Next<span class="chev">&rsaquo;</span></button>
    </div>
    <h1 class="post-title r">${p.title}</h1>
  </div>
  <div class="post-cover"><div class="img grad" id="cover" style="${bg(p.g)}"></div></div>
  <div class="post-col prose">${p.body}</div>`;
  post.querySelectorAll(".prose > *").forEach(el=>el.classList.add("r"));
  q("#back").onclick=()=>{location.hash=""};
  q("#next").onclick=()=>{location.hash=P[(P.indexOf(p)+1)%P.length].slug};
  post.querySelectorAll("[data-gallery]").forEach(dragScroll);
}

function show(root,delay){
  const els=[...root.querySelectorAll(".r")];
  if(soft)return;
  const vh=innerHeight;
  els.forEach((el,i)=>{
    el.classList.add("reveal");
    el.style.setProperty("--d",(delay+Math.min(i,8)*55)+"ms");
    if(el.getBoundingClientRect().top<vh*1.1){
      requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("in")));
    }else{
      el.classList.add("in");
    }
  });
}

function fly(from,to,r1,r2,ms){
  const f=from.getBoundingClientRect();
  const d=document.createElement("div");
  d.className="fly";
  d.style.backgroundImage=getComputedStyle(from).backgroundImage;
  Object.assign(d.style,{left:f.left+"px",top:f.top+"px",width:f.width+"px",height:f.height+"px",borderRadius:r1+"px"});
  document.body.appendChild(d);
  return d.animate([
    {left:f.left+"px",top:f.top+"px",width:f.width+"px",height:f.height+"px",borderRadius:r1+"px"},
    {left:to.left+"px",top:to.top+"px",width:to.width+"px",height:to.height+"px",borderRadius:r2+"px"}
  ],{duration:ms,easing:"cubic-bezier(.3,.85,.2,1)",fill:"forwards"}).finished.then(()=>d);
}

let current=null;
async function openPost(i,animate){
  const p=P[i];current=i;
  const thumb=grid.querySelector(`[data-thumb="${i}"]`);
  if(animate&&!soft&&!idx.hidden&&thumb){
    const stash=thumb.getBoundingClientRect();
    const image=getComputedStyle(thumb).backgroundImage;
    idx.querySelectorAll(".bcard,.r").forEach(el=>el.classList.add("leave"));
    renderPost(p);
    idx.hidden=true;post.hidden=false;scrollTo(0,0);
    const cover=q("#cover");cover.style.visibility="hidden";
    const to=cover.getBoundingClientRect();
    const ghost=document.createElement("div");
    Object.assign(ghost.style,{position:"fixed",left:stash.left+"px",top:stash.top+"px",
      width:stash.width+"px",height:stash.height+"px",backgroundImage:image,backgroundSize:"cover",visibility:"hidden"});
    document.body.appendChild(ghost);
    show(post,160);
    const d=await fly(ghost,to,14,16,620);
    ghost.remove();cover.style.visibility="";d.remove();
    idx.querySelectorAll(".leave").forEach(el=>el.classList.remove("leave"));
  }else{
    renderPost(p);idx.hidden=true;post.hidden=false;scrollTo(0,0);show(post,0);
  }
  document.title=p.title+" — Solen Markets";
}

async function closePost(animate){
  if(current===null){idx.hidden=false;post.hidden=true;return}
  const i=current;current=null;
  const cover=q("#cover");
  if(animate&&!soft&&cover&&cover.getBoundingClientRect().bottom>0){
    const cr=cover.getBoundingClientRect();
    const ghost=document.createElement("div");
    Object.assign(ghost.style,{position:"fixed",left:cr.left+"px",top:cr.top+"px",width:cr.width+"px",
      height:cr.height+"px",backgroundImage:getComputedStyle(cover).backgroundImage,backgroundSize:"cover",visibility:"hidden"});
    document.body.appendChild(ghost);
    post.querySelectorAll(".r").forEach(el=>el.classList.add("leave"));
    cover.style.visibility="hidden";
    await new Promise(r=>setTimeout(r,120));
    post.hidden=true;idx.hidden=false;scrollTo(0,0);
    const thumb=grid.querySelector(`[data-thumb="${i}"]`);
    thumb.style.visibility="hidden";
    const cards=[...grid.querySelectorAll(".bcard")];
    cards.forEach((c,k)=>{c.classList.add("reveal");c.style.setProperty("--d",(80+k*50)+"ms");
      requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.add("in")))});
    const d=await fly(ghost,thumb.getBoundingClientRect(),16,14,560);
    ghost.remove();thumb.style.visibility="";d.remove();
    setTimeout(()=>cards.forEach(c=>c.classList.remove("reveal","in")),900);
  }else{
    post.hidden=true;idx.hidden=false;
  }
  document.title="Blog — Solen Markets";
}

function route(animate){
  const slug=location.hash.slice(1);
  const i=P.findIndex(p=>p.slug===slug);
  if(i>=0)openPost(i,animate);else closePost(animate);
}
addEventListener("hashchange",()=>route(true));
route(false);

if(!soft&&!idx.hidden){
  grid.querySelectorAll(".bcard").forEach((c,k)=>{
    c.classList.add("reveal");c.style.setProperty("--d",(k*70)+"ms");
    requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.add("in")));
  });
}

/* ---------- Copy link ---------- */
function copyLink(){
  const btn=q("#copyLink"),url=location.href;
  const done=()=>{btn.textContent="Copied";
    if(window.toast)toast("Link copied");
    setTimeout(()=>{btn.textContent="Copy link"},1700)};
  try{navigator.clipboard.writeText(url).then(done,()=>{if(window.toast)toast(url)})}
  catch(e){if(window.toast)toast(url)}
}

/* ---------- Gallery drag ---------- */
function dragScroll(el){
  let down=false,x0=0,s0=0,v=0,lx=0,raf;
  el.addEventListener("pointerdown",e=>{
    if(e.pointerType!=="mouse")return;
    down=true;x0=lx=e.clientX;s0=el.scrollLeft;v=0;
    cancelAnimationFrame(raf);el.classList.add("drag");el.setPointerCapture(e.pointerId);
  });
  el.addEventListener("pointermove",e=>{
    if(!down)return;
    el.scrollLeft=s0-(e.clientX-x0);v=e.clientX-lx;lx=e.clientX;
  });
  const up=()=>{
    if(!down)return;down=false;el.classList.remove("drag");
    const step=()=>{if(Math.abs(v)<.4)return;el.scrollLeft-=v;v*=.93;raf=requestAnimationFrame(step)};
    step();
  };
  el.addEventListener("pointerup",up);el.addEventListener("pointercancel",up);
}
