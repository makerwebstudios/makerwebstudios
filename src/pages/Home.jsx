import { useEffect } from "react";

// Fresh homepage — "Operator's Studio" layout in MWS brand (navy + industrial orange).
// Self-contained: the <style> below only applies while the homepage is mounted.

const CSS = `
  :root{
    --oat:#F6F7F9; --oat-2:#EDF0F3; --paper:#F1F3F5;
    --ink:#0F172A; --ink-soft:#475569; --muted:#64748B;
    --clay:#FF6B00; --clay-d:#E65A00; --pine:#0F172A; --pine-2:#020617;
    --line:rgba(15,23,42,.13); --line-soft:rgba(15,23,42,.07);
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;}
  body{background:var(--oat);color:var(--ink);font-family:'Inter',system-ui,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
  .wrap{max-width:1180px;margin:0 auto;padding:0 32px;}
  .disp{font-family:'Archivo','Inter',sans-serif;font-weight:800;letter-spacing:-.02em;line-height:.98;}
  .mono{font-family:'JetBrains Mono',monospace;font-weight:500;text-transform:uppercase;letter-spacing:.12em;}
  a{color:inherit;text-decoration:none;}
  .accent{color:var(--clay);}

  /* eyebrow label */
  .ey{font-family:'JetBrains Mono',monospace;font-weight:500;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--clay);display:flex;align-items:center;gap:12px;}
  .ey::before{content:"";width:26px;height:1px;background:var(--clay);}

  /* nav */
  nav{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--oat) 88%, transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--line-soft);}
  .nav{display:flex;align-items:center;justify-content:space-between;height:68px;}
  .brand{font-family:'Archivo',sans-serif;font-weight:800;font-size:20px;letter-spacing:-.01em;display:flex;align-items:center;gap:9px;}
  .brand .logo{height:32px;width:32px;border-radius:6px;display:block;flex-shrink:0;}
  .nav-links{display:flex;gap:30px;font-size:14px;font-weight:500;color:var(--ink-soft);}
  .nav-links a:hover{color:var(--ink);}
  .mwbtn{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:14px;padding:11px 20px;border-radius:8px;transition:.18s;cursor:pointer;border:1px solid transparent;}
  .mwbtn-primary{background:var(--clay);color:#fff;}
  .mwbtn-primary:hover{background:var(--clay-d);}
  .mwbtn-ghost{border-color:var(--line);color:var(--ink);}
  .mwbtn-ghost:hover{border-color:var(--ink);}
  @media(max-width:760px){.nav-links{display:none;}}

  /* hero */
  .hero{padding:78px 0 64px;position:relative;}
  .hero-grid{display:grid;grid-template-columns:1.3fr .95fr;gap:56px;align-items:center;}
  .hero h1{font-size:clamp(44px,6.4vw,84px);margin:20px 0 0;}
  .hero h1 .l2{color:var(--clay);}
  .hero .sub{font-size:clamp(17px,1.6vw,20px);color:var(--ink-soft);max-width:30ch;margin:26px 0 0;line-height:1.55;}
  .hero-cta{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap;}
  .hero-cta .mwbtn{padding:14px 24px;font-size:15px;}
  .cred{margin-top:26px;font-size:13px;color:var(--muted);display:flex;align-items:center;gap:10px;}
  .cred .dot{width:6px;height:6px;border-radius:50%;background:var(--pine);}
  /* spec card */
  .spec{background:var(--pine);color:var(--oat);border-radius:16px;padding:30px 30px 26px;box-shadow:0 24px 60px -20px rgba(2,6,23,.55);}
  .spec .sh{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(255,255,255,.14);padding-bottom:14px;margin-bottom:16px;}
  .spec .sh .t{font-family:'Archivo',sans-serif;font-weight:800;font-size:19px;}
  .spec .sh .p{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.1em;color:#FF8C33;}
  .spec ul{list-style:none;display:flex;flex-direction:column;gap:11px;}
  .spec li{display:flex;gap:11px;font-size:14px;color:#CBD5E1;line-height:1.4;}
  .spec li b{color:#fff;font-weight:600;}
  .spec .tick{color:var(--clay);flex-shrink:0;font-weight:700;}
  .spec .price{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,.14);display:flex;align-items:baseline;justify-content:space-between;}
  .spec .price .big{font-family:'Archivo',sans-serif;font-weight:800;font-size:30px;color:#fff;}
  .spec .price .mo{font-size:13px;color:#FF8C33;}
  @media(max-width:860px){.hero-grid{grid-template-columns:1fr;gap:40px;}.spec{max-width:440px;}}

  /* section base */
  section{padding:92px 0;}
  .sec-head{max-width:760px;}
  .sec-head h2{font-size:clamp(30px,4vw,50px);margin:18px 0 0;}
  .lead{font-size:19px;color:var(--ink-soft);line-height:1.6;margin-top:18px;max-width:60ch;}

  /* problem &mdash; two col */
  .two{display:grid;grid-template-columns:1fr 1fr;gap:56px;margin-top:44px;align-items:start;}
  .two .big{font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(24px,2.6vw,34px);line-height:1.15;letter-spacing:-.01em;}
  .two .body{color:var(--ink-soft);font-size:16px;line-height:1.7;}
  .two .body p{margin-bottom:14px;}
  @media(max-width:760px){.two{grid-template-columns:1fr;gap:24px;}}

  /* foundation list */
  .build{background:var(--pine);color:var(--oat);}
  .build .ey{color:#FF8C33;}.build .ey::before{background:#FF8C33;}
  .build h2{color:#fff;}
  .build .lead{color:#94A3B8;}
  .flist{display:grid;grid-template-columns:1fr 1fr;gap:0 56px;margin-top:44px;}
  .fitem{display:grid;grid-template-columns:auto 1fr;gap:18px;padding:20px 0;border-top:1px solid rgba(255,255,255,.13);align-items:baseline;}
  .fitem .n{font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--clay);letter-spacing:.05em;}
  .fitem .t{font-family:'Archivo',sans-serif;font-weight:700;font-size:17px;color:#fff;}
  .fitem .d{font-size:13.5px;color:#94A3B8;margin-top:3px;line-height:1.45;}
  @media(max-width:760px){.flist{grid-template-columns:1fr;}}

  /* doorways */
  .doors{display:flex;flex-direction:column;margin-top:40px;border-top:1px solid var(--line);}
  .door{display:grid;grid-template-columns:.5fr 1fr;gap:32px;padding:28px 0;border-bottom:1px solid var(--line);align-items:baseline;transition:.2s;}
  .door:hover{padding-left:10px;}
  .door .k{font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(20px,2vw,26px);}
  .door .k .num{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--clay);display:block;margin-bottom:6px;letter-spacing:.1em;}
  .door .v{font-size:16px;color:var(--ink-soft);line-height:1.6;}
  @media(max-width:640px){.door{grid-template-columns:1fr;gap:8px;}}

  /* pricing */
  .price-sec{background:var(--paper);}
  .pgrid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:44px;}
  .pcard{border:1px solid var(--line);border-radius:14px;padding:28px 26px;background:var(--oat);display:flex;flex-direction:column;}
  .pcard.feat{background:var(--ink);color:var(--oat);border-color:var(--ink);}
  .pcard .name{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--clay);}
  .pcard.feat .name{color:#FF8C33;}
  .pcard .amt{font-family:'Archivo',sans-serif;font-weight:800;font-size:38px;margin:12px 0 2px;}
  .pcard .per{font-size:13px;color:var(--muted);}
  .pcard.feat .per{color:#94A3B8;}
  .pcard .desc{font-size:14px;color:var(--ink-soft);line-height:1.6;margin:16px 0 22px;flex:1;}
  .pcard.feat .desc{color:#94A3B8;}
  .pcard .mwbtn{width:100%;justify-content:center;}
  .pcard.feat .mwbtn-primary{background:var(--clay);color:#fff;}
  @media(max-width:820px){.pgrid{grid-template-columns:1fr;}}

  /* proof */
  .proof-list{margin-top:40px;border-top:1px solid var(--line);}
  .prow{display:grid;grid-template-columns:1.2fr 1fr auto;gap:24px;padding:22px 0;border-bottom:1px solid var(--line);align-items:baseline;}
  .prow .cn{font-family:'Archivo',sans-serif;font-weight:700;font-size:19px;}
  .prow .cd{font-size:14px;color:var(--ink-soft);}
  .prow .tag{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--pine);border:1px solid var(--line);border-radius:100px;padding:5px 12px;white-space:nowrap;}
  @media(max-width:640px){.prow{grid-template-columns:1fr;gap:6px;}.prow .tag{justify-self:start;}}

  /* operator */
  .op{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center;}
  .op .card{background:var(--oat-2);border:1px solid var(--line);border-radius:16px;padding:30px;}
  .op .card .q{font-family:'Archivo',sans-serif;font-weight:700;font-size:22px;line-height:1.25;letter-spacing:-.01em;}
  .op .card .attr{margin-top:18px;font-size:13px;color:var(--muted);font-family:'JetBrains Mono',monospace;letter-spacing:.05em;}
  .op .stats{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:26px;}
  .op .stat .num{font-family:'Archivo',sans-serif;font-weight:800;font-size:34px;color:var(--clay);}
  .op .stat .lbl{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-family:'JetBrains Mono',monospace;margin-top:4px;}
  @media(max-width:760px){.op{grid-template-columns:1fr;gap:34px;}}

  /* CTA */
  .cta{background:var(--ink);color:var(--oat);text-align:center;}
  .cta h2{font-size:clamp(34px,5.4vw,68px);max-width:16ch;margin:20px auto 0;}
  .cta .sub{color:#94A3B8;font-size:17px;margin:22px auto 0;max-width:52ch;}
  .cta .row{display:flex;gap:14px;justify-content:center;margin-top:34px;flex-wrap:wrap;}
  .cta .mwbtn-primary{background:var(--clay);color:#fff;padding:16px 30px;font-size:16px;}
  .cta .mwbtn-ghost{border-color:rgba(255,255,255,.3);color:var(--oat);padding:16px 30px;font-size:16px;}
  .cta .ey{justify-content:center;color:#FF8C33;}.cta .ey::before{background:#FF8C33;}
  .cta .fine{margin-top:22px;font-size:13px;color:var(--muted);}

  footer{padding:44px 0;border-top:1px solid var(--line-soft);}
  .foot{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--muted);flex-wrap:wrap;gap:12px;}
  .preview-flag{position:fixed;bottom:16px;left:16px;z-index:99;background:var(--clay);color:#fff;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:8px 14px;border-radius:100px;box-shadow:0 8px 24px rgba(198,71,42,.4);}
`;

const Home = () => {
  useEffect(() => {
    // smooth-scroll anchor links within the page
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <nav>
  <div className="wrap nav">
    <div className="brand"><img className="logo" src="/logos/Maker Logo - 300 x 300 px - Official.png" alt="Maker Web Studios logo" />Maker Web Studios</div>
    <div className="nav-links"><a href="#build">The Build</a><a href="#pricing">Pricing</a><a href="#work">Work</a><a href="#operator">Who</a></div>
    <a href="https://calendly.com/hello-makerwebstudios/30min" className="mwbtn mwbtn-primary">Free Audit</a>
  </div>
</nav>


<header className="hero">
  <div className="wrap hero-grid">
    <div>
      <div className="ey">Maker Web Studios &middot; Est. Texas</div>
      <h1 className="disp">Your brand should work<br /><span className="l2">as hard as you do.</span></h1>
      <p className="sub">One system for your brand, your website, and your Google presence &mdash; installed by an operator, not an agency.</p>
      <div className="hero-cta">
        <a href="https://buy.stripe.com/6oUbJ3dnzd6U7BW7ydejK04" className="mwbtn mwbtn-primary">Start your Foundation &mdash; $2,500 &rarr;</a>
        <a href="https://calendly.com/hello-makerwebstudios/30min" className="mwbtn mwbtn-ghost">Book a free audit</a>
      </div>
      <div className="cred"><span className="dot"></span>16 years running a real business &middot; GMP &middot; ISO 9001 &middot; SQF &middot; Bilingual EN/ES</div>
    </div>

    <aside className="spec">
      <div className="sh"><span className="t">The Foundation</span><span className="p">ONE BUILD</span></div>
      <ul>
        <li><span className="tick">+</span><span><b>Brand &amp; message</b> built from your <i>why</i></span></li>
        <li><span className="tick">+</span><span><b>Modern site</b> &mdash; fast, responsive, bilingual-ready</span></li>
        <li><span className="tick">+</span><span><b>Full Google stack</b> &mdash; Profile, GA4, GTM, Search Console</span></li>
        <li><span className="tick">+</span><span><b>30-day report</b> &mdash; proof it's working</span></li>
      </ul>
      <div className="price"><span className="big">$2,500</span><span className="mo">+ $500/mo to keep it working</span></div>
    </aside>
  </div>
</header>


<section>
  <div className="wrap">
    <div className="ey">01 &mdash; The reality</div>
    <div className="two">
      <div className="big">You built something real. Your online presence doesn't show it.</div>
      <div className="body">
        <p>Most presences grew by accident &mdash; a website built once and never touched, a half-filled Google profile, an Instagram that says one thing and a site that says another.</p>
        <p>No cohesion. No lead capture. No clear reason to choose you. Meanwhile competitors with half your quality show up first, look polished, and win the click.</p>
        <p>That's not a product problem. It's a presence problem &mdash; <span className="accent">and it's fixable.</span></p>
      </div>
    </div>
  </div>
</section>


<section className="build" id="build">
  <div className="wrap">
    <div className="ey">02 &mdash; The Foundation</div>
    <div className="sec-head"><h2 className="disp">One build. Everything, consolidated.</h2>
      <p className="lead">Not a website package &mdash; your whole online presence installed as one system, built from your <i>why</i>, then made visible and measurable wherever customers find you.</p>
    </div>
    <div className="flist">
      <div className="fitem"><span className="n">01</span><div><div className="t">Your Why &amp; Positioning</div><div className="d">Who you're for and the one message that makes it obvious.</div></div></div>
      <div className="fitem"><span className="n">02</span><div><div className="t">Cohesive Brand &amp; Identity</div><div className="d">One look, voice, and message across every channel.</div></div></div>
      <div className="fitem"><span className="n">03</span><div><div className="t">Modern, Fast Website</div><div className="d">Responsive, clear, bilingual-ready &mdash; built to get found.</div></div></div>
      <div className="fitem"><span className="n">04</span><div><div className="t">On-Page &amp; Technical SEO</div><div className="d">Schema, sitemap, structure so search can read you.</div></div></div>
      <div className="fitem"><span className="n">05</span><div><div className="t">Google Business Profile</div><div className="d">Claimed and optimized &mdash; photos, posts, reviews, Q&amp;A.</div></div></div>
      <div className="fitem"><span className="n">06</span><div><div className="t">Analytics &amp; Tag Manager</div><div className="d">GA4 + GTM wired so every visit and action is tracked.</div></div></div>
      <div className="fitem"><span className="n">07</span><div><div className="t">Search Console + UTM</div><div className="d">Verified, submitted, attributable across channels.</div></div></div>
      <div className="fitem"><span className="n">08</span><div><div className="t">30-Day Performance Report</div><div className="d">Before-and-after proof the system is working.</div></div></div>
    </div>
  </div>
</section>


<section>
  <div className="wrap">
    <div className="ey">03 &mdash; Wherever you are</div>
    <div className="sec-head"><h2 className="disp">Three ways in. One system underneath.</h2></div>
    <div className="doors">
      <div className="door"><div className="k"><span className="num">New</span>Brand-new brand</div><div className="v">Launching something? We build it to look established, professional, and findable from day one &mdash; so you skip the "we look small" phase entirely.</div></div>
      <div className="door"><div className="k"><span className="num">Refresh</span>Dated or scattered</div><div className="v">Old site, mismatched profiles, message all over? We consolidate it into one refreshed, cohesive presence that finally matches your work.</div></div>
      <div className="door"><div className="k"><span className="num">Optimize</span>Already winning</div><div className="v">Doing well but leaking demand? We tune every channel so the reputation you've earned actually converts &mdash; and defends your lead.</div></div>
    </div>
  </div>
</section>


<section className="price-sec" id="pricing">
  <div className="wrap">
    <div className="ey">04 &mdash; The investment</div>
    <div className="sec-head"><h2 className="disp">Priced to get the yes. Built to earn the stay.</h2></div>
    <div className="pgrid">
      <div className="pcard feat">
        <div className="name">Foundation &middot; one-time</div>
        <div className="amt">$2,500</div><div className="per">one build &middot; replaces ~$6,000 of separate work</div>
        <div className="desc">Brand, website, and the full Google stack &mdash; consolidated into one system with a 30-day proof report.</div>
        <a href="https://buy.stripe.com/6oUbJ3dnzd6U7BW7ydejK04" className="mwbtn mwbtn-primary">Start Foundation &rarr;</a>
      </div>
      <div className="pcard">
        <div className="name">Care Plan &middot; monthly</div>
        <div className="amt">$500<span style={{fontSize:'16px',color:'var(--muted)'}}>/mo</span></div><div className="per">the standard attach</div>
        <div className="desc">Hosting, security, backups, Google Business upkeep, and a monthly performance report that keeps it live and working.</div>
        <a href="https://buy.stripe.com/5kQfZjcjv4Ao9K4aKpejK05" className="mwbtn mwbtn-ghost">Add Care Plan</a>
      </div>
      <div className="pcard">
        <div className="name">GrowthEngine &middot; monthly</div>
        <div className="amt">$1.2&ndash;1.8k<span style={{fontSize:'16px',color:'var(--muted)'}}>/mo</span></div><div className="per">grow harder</div>
        <div className="desc">Full SEO, 2&ndash;4 posts/mo, backlinks, service + city pages, and lead-gen infrastructure on top of your Foundation.</div>
        <a href="https://calendly.com/hello-makerwebstudios/30min" className="mwbtn mwbtn-ghost">Talk it through</a>
      </div>
    </div>
    <p style={{marginTop:'24px',fontSize:'13px',color:'var(--muted)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'.04em'}}>&#8627; 90-DAY GUARANTEE &mdash; GOOGLE IMPRESSIONS UP 50%+, OR WE KEEP WORKING FREE.</p>
  </div>
</section>


<section id="work">
  <div className="wrap">
    <div className="ey">05 &mdash; The work</div>
    <div className="sec-head"><h2 className="disp">Restaurants, trades, manufacturers, studios.</h2>
      <p className="lead">Every project started the same way: a great business with an online presence that undersold it.</p></div>
    <div className="proof-list">
      <div className="prow"><span className="cn">GW's BBQ</span><span className="cd">Rebuilt the digital front door + ordering flow; real orders week one.</span><span className="tag">Winning &middot; leak fixed</span></div>
      <div className="prow"><span className="cn">Valley Modern Plumbing</span><span className="cd">Repositioned a commodity trade site into a premium local brand.</span><span className="tag">Dated &rarr; premium</span></div>
      <div className="prow"><span className="cn">ABBA Manufacturing</span><span className="cd">Full digital presence + lead infrastructure for an ISO-certified maker.</span><span className="tag">Manufacturer</span></div>
      <div className="prow"><span className="cn">RGV Tech Institute</span><span className="cd">Cohesive, professional, bilingual EN/ES site for the Valley market.</span><span className="tag">New &middot; bilingual</span></div>
    </div>
  </div>
</section>


<section id="operator" style={{background:'var(--oat-2)'}}>
  <div className="wrap op">
    <div>
      <div className="ey">06 &mdash; Who's behind it</div>
      <h2 className="disp" style={{fontSize:'clamp(28px,3.4vw,42px)',marginTop:'18px'}}>An operator who brands &mdash; not a coder who guessed.</h2>
      <div className="stats">
        <div className="stat"><div className="num">16</div><div className="lbl">Years operating</div></div>
        <div className="stat"><div className="num">$350K&rarr;$1.5M</div><div className="lbl">Built &amp; exited</div></div>
        <div className="stat"><div className="num">90-day</div><div className="lbl">Confidence guarantee</div></div>
        <div className="stat"><div className="num">EN/ES</div><div className="lbl">Bilingual builds</div></div>
      </div>
    </div>
    <div className="card">
      <div className="q">"I'm not a designer who read about business. I'm an operator who learned to build brands and websites &mdash; margins, SKUs, supply chain, and all. The difference shows up in every conversation."</div>
      <div className="attr">&mdash; Guillermo Aristi, Founder &middot; GMP &middot; ISO &middot; SQF &middot; 6S</div>
    </div>
  </div>
</section>


<section className="cta">
  <div className="wrap">
    <div className="ey">Limited &mdash; 3 new clients / month</div>
    <h2 className="disp">Let's build the presence your work deserves.</h2>
    <p className="sub">Start with a free 15-minute audit &mdash; we'll show you exactly where your online presence is leaking, delivered within 48 hours.</p>
    <div className="row">
      <a href="https://buy.stripe.com/6oUbJ3dnzd6U7BW7ydejK04" className="mwbtn mwbtn-primary">Start your Foundation &mdash; $2,500 &rarr;</a>
      <a href="https://calendly.com/hello-makerwebstudios/30min" className="mwbtn mwbtn-ghost">Claim my free audit</a>
    </div>
    <p className="fine">No cost &middot; no pitch &middot; no commitment.</p>
  </div>
</section>

<footer>
  <div className="wrap foot">
    <div className="brand" style={{fontSize:'16px'}}><img className="logo" src="/logos/Maker Logo - 300 x 300 px - Official.png" alt="Maker Web Studios logo" />Maker Web Studios</div>
    <div>© 2026 &middot; Built by an operator &middot; Mission, TX</div>
  </div>
</footer>
    </>
  );
};

export default Home;
