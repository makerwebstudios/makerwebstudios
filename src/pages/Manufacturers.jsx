// Inline SVG icons (replaces lucide-react to reduce bundle size)
const CheckCircle2 = ({ size = 24, className = "", color, style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
const TrendingDown = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
);
const VolumeX = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
);
const Factory = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
);
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Manufacturers = () => {
  return (
    <div id="home" className="fade-in">

      {/* ============================================================ */}
      {/* SECTION 1 -- HERO */}
      {/* ============================================================ */}
      <section className="blueprint-bg hero-premium">
        <div className="container relative z-10">
          <div className="hero-content text-center">
            {/* Authority badge -- social proof above the fold (#4) + telling who it's for (#9) */}
            <div className="hero-authority-badge reveal-anim visible" style={{ animationDelay: "0.05s" }}>
              <span className="auth-dot" />
              Built with 16 years of manufacturing experience
            </div>

            <h1 className="hero-title reveal-anim visible" style={{ animationDelay: "0.1s" }}>
              The Revenue Builder System<br />
              <span className="text-accent">For Texas Manufacturers.</span>
            </h1>
            <p className="hero-subtitle reveal-anim visible" style={{ animationDelay: "0.15s", fontSize: "1.5rem", color: "var(--industrial-orange)", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "1.5rem", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
              Your website should work as hard as your plant does.
            </p>
            <p className="hero-subtext reveal-anim visible" style={{ animationDelay: "0.2s" }}>
              For Texas manufacturers doing $500K&ndash;$10M in annual revenue with outdated websites that don&rsquo;t generate leads. We install the digital infrastructure your competitors already have &mdash; starting with a website that converts and ending with a company worth selling.
            </p>
            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.3s", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "440px", margin: "0 auto", width: "100%" }}>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                Get My Free Website Audit &rarr;
              </a>
              <a
                href="#system"
                className="btn btn-dark btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                See Everything Inside The System
              </a>

              {/* Reassurance under primary CTA (#50) + expectation setting (#59) */}
              <p className="hero-reassurance">
                No sales pitch. No commitment. Just an honest 15-minute audit of what your digital presence is costing you &mdash; delivered within 48 hours.
              </p>
            </div>

            {/* Gradual engagement (#22) -- micro-commitment for visitors not ready to book */}
            <p className="hero-microcommit reveal-anim visible" style={{ animationDelay: "0.35s" }}>
              Not ready to talk yet? <a href="#system">Read how the system works first &rarr;</a>
            </p>

            <div className="hero-badges reveal-anim visible" style={{ animationDelay: "0.4s", marginTop: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 2rem", justifyItems: "center", textAlign: "center", width: "100%", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>Texas Manufacturers</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>ISO &amp; GMP Specialists</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>16 Years on the Shop Floor</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>90-Day Lead Guarantee</div>
            </div>
          </div>
        </div>

        <div className="hero-glow" />
      </section>

      <style>{`
        .hero-premium {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem;
          padding-bottom: 3rem;
          overflow: hidden;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .relative { position: relative; }
        .z-10 { z-index: 10; }

        .badge-premium {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 107, 0, 0.1);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 100px;
          color: var(--industrial-orange);
          font-size: 0.8125rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-authority-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.25rem;
          background: rgba(255, 107, 0, 0.08);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 100px;
          color: var(--industrial-orange);
          font-size: 0.78rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 1.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-authority-badge .auth-dot {
          width: 8px;
          height: 8px;
          background: var(--industrial-orange);
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255, 107, 0, 0.15);
        }

        .hero-reassurance {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.55;
          text-align: center;
          margin: 0.75rem 0 0;
          opacity: 0.85;
          max-width: 440px;
        }

        .hero-microcommit {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 1.5rem;
          opacity: 0.8;
        }

        .hero-microcommit a {
          color: var(--industrial-orange);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 107, 0, 0.3);
          padding-bottom: 1px;
          transition: border-color 0.2s;
        }

        .hero-microcommit a:hover {
          border-bottom-color: var(--industrial-orange);
        }

        .hero-title {
          margin-bottom: 1rem;
          line-height: 1.05;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-dark);
        }

        .hero-subtext {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin: 0 auto 3.5rem;
          line-height: 1.7;
          max-width: 750px;
          font-weight: 500;
        }

        .btn-lg-premium {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(142, 185, 250, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .system-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .value-line-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .value-line-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .value-line-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .system-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .system-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>



      {/* ============================================================ */}
      {/* SECTION 2 -- PHILOSOPHY DIVIDER */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <p style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "900",
            fontFamily: "'Outfit', sans-serif",
            color: "var(--text-dark)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            &ldquo;Your website should work as hard as your plant does.&rdquo;
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 3 -- THE PROBLEM */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              The Reality
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem" }}>
              You built a serious operation. Your website doesn't show it.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", maxWidth: "800px", lineHeight: "1.75" }}>
              Most manufacturers in Texas have websites that were built once and never touched again. No SEO. No lead capture. No credibility signal for buyers doing due diligence. Meanwhile, your competitors &mdash; even the ones with half your capabilities &mdash; are showing up first on Google, presenting their certifications front and center, and converting visitors into quote requests while you're waiting for the phone to ring. That's not a product problem. That's a digital presence problem. And it's fixable.
            </p>
          </div>

        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 3.5 -- FOUNDER STORY (Storytelling #64, Authenticity #65, Repetition #5) */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "850px" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              How We Got Here
            </div>
            <h2 className="section-title" style={{ marginBottom: "2rem", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1" }}>
              I built a $1.5M manufacturing facility from $350K.
            </h2>
          </div>

          <div style={{ fontSize: "1.125rem", lineHeight: "1.85", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Before Maker Web Studios, I ran a manufacturing operation with complete GMP and ISO frameworks built from the ground up in Texas. 17 employees. 70+ documented procedures. Six simultaneous regulatory certifications. We grew from $350,000 to $1.5 million in revenue across four years.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              When I looked at how other Texas manufacturers were finding customers in 2026, I saw the same gap everywhere: serious operations with broken digital presences. ISO-certified facilities with websites that didn&rsquo;t mention ISO. Companies doing real work with no way for buyers to find them online. Procurement managers Googling suppliers and bouncing off PageSpeed scores below 30. No conversion potential through their web presence.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              That&rsquo;s the gap Maker Web Studios fixes &mdash; and it&rsquo;s why I built it the way I did. Not as a generic agency. As the digital infrastructure team I wish I&rsquo;d had when I was on the plant floor.
            </p>
            <p style={{ marginBottom: "0", fontStyle: "italic", color: "var(--text-dark)", fontWeight: "600" }}>
              I&rsquo;m not a developer who learned about manufacturing. I&rsquo;m a manufacturer who learned to build websites. The difference shows up in every conversation.
            </p>
          </div>

          <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "rgba(255, 107, 0, 0.05)", border: "1px solid rgba(255, 107, 0, 0.15)", borderRadius: "var(--border-radius)" }}>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-dark)", fontWeight: "600" }}>
              &mdash; Guillermo Aristi, Founder
              <span style={{ color: "var(--text-muted)", fontWeight: "500", marginLeft: "0.5rem" }}>
                | 16 years manufacturing | GMP &middot; ISO &middot; SQF &middot; QMS &middot; 6S
              </span>
            </p>
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 4 -- THE SYSTEM */}
      {/* ============================================================ */}
      <section id="system" style={{ padding: "8rem 0", background: "var(--bg-color)" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
              The Revenue Builder System
            </div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              One system. Eight deliverables. Built for manufacturers.
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "800px" }}>
              The Revenue Builder System is not a website package. It's a complete growth infrastructure &mdash; installed in your business, starting with your digital presence and scaling to every revenue-generating function you run.
            </p>
          </div>

          <div className="system-cards-grid">
            {[
              {
                num: "01",
                title: "Digital Presence Audit",
                desc: "Every gap costing you leads — found and documented.",
              },
              {
                num: "02",
                title: "Blind Spot Audit",
                desc: "What your competitors are doing that you're not.",
              },
              {
                num: "03",
                title: "Market Analysis & 5-Year Forecast",
                desc: "Your market landscape before you invest in it.",
              },
              {
                num: "04",
                title: "Revenue Growth Playbook",
                desc: "More revenue from your existing operations.",
              },
              {
                num: "05",
                title: "Revenue Builder Playbook",
                desc: "The master execution plan — what to build and in what order.",
              },
              {
                num: "06",
                title: "Lead Flow Playbook",
                desc: "Generate, capture, and convert inbound leads consistently.",
              },
              {
                num: "07",
                title: "Revenue Model Playbook",
                desc: "Your actual numbers modeled into targets you can hit.",
              },
              {
                num: "08",
                title: "Master Plan Roadmap",
                desc: "12 months of execution tied into one sequenced plan.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bento-card reveal-anim visible" style={{ animationDelay: `${0.05 * idx}s`, position: "relative" }}>
                <div style={{ fontSize: "3rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.15, position: "absolute", top: "1.25rem", right: "1.5rem", lineHeight: 1, fontFamily: "'Outfit', sans-serif" }}>{item.num}</div>
                <h3 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p className="card-text" style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 4B -- SEO / GEO / AIO */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              How Buyers Find You in 2026
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem" }}>
              SEO alone isn't enough anymore.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "750px", margin: "0 auto" }}>
              Your buyers search on Google, ask ChatGPT, and check AI Overviews before they ever pick up the phone.
              We build your digital presence to rank across all three.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { abbr: "SEO", color: "var(--industrial-orange)", title: "Search Engine Optimization", desc: "Google and Bing rankings. Keywords, schema, backlinks, service pages. Still 80% of search traffic." },
              { abbr: "GEO", color: "#10b981", title: "Generative Engine Optimization", desc: "Getting cited by ChatGPT, Perplexity, and Claude when buyers ask AI for recommendations in your category." },
              { abbr: "AIO", color: "#6366f1", title: "AI Overview Optimization", desc: "Showing up in Google's AI summary box — which now appears on 88% of informational searches." },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem 2rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: `3px solid ${item.color}`,
                borderRadius: "var(--border-radius)",
              }}>
                <div style={{ fontSize: "1.1rem", fontWeight: "800", color: item.color, fontFamily: "'Outfit', sans-serif", minWidth: "40px", letterSpacing: "0.05em" }}>{item.abbr}</div>
                <div>
                  <div style={{ color: "#fff", fontSize: "1rem", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "0.25rem" }}>{item.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: "1.6" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4C -- SEO/GEO/AIO CLOSER */}
      {/* ============================================================ */}
      <section style={{ padding: "6rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 className="section-title" style={{ color: "var(--text-dark)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: "1.2", fontFamily: "'Outfit', sans-serif", fontWeight: "900", margin: "0 auto", maxWidth: "800px" }}>
            Most agencies optimize for Google alone. We optimize for every system your buyer uses to make a decision.
          </h2>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 5 -- VALUE STACK */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              What It's Worth
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1rem" }}>
              Total Value of The Revenue Builder System
            </h2>
          </div>

          <div className="value-line-items" style={{ marginBottom: "3rem" }}>
            {[
              { label: "Revenue Engine Website Build", value: "$4,500" },
              { label: "Digital Presence Audit", value: "$1,500" },
              { label: "Blind Spot Audit", value: "$1,500" },
              { label: "Market Analysis & 5-Year Forecast", value: "$2,500" },
              { label: "Revenue Growth Playbook", value: "$2,000" },
              { label: "Revenue Builder Playbook", value: "$2,500" },
              { label: "Lead Flow Playbook", value: "$2,000" },
              { label: "Revenue Model Playbook", value: "$2,500" },
              { label: "Master Plan Roadmap", value: "$1,500" },
              { label: "12-Month Revenue Builder Retainer", value: "$18,000" },
            ].map((item, idx) => (
              <div key={idx} className="value-line-item">
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", fontWeight: "500" }}>{item.label}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.05rem", fontWeight: "700", fontFamily: "'Outfit', sans-serif" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0", borderTop: "2px solid var(--industrial-orange)", marginBottom: "3rem" }}>
            <span style={{ color: "white", fontSize: "1.25rem", fontWeight: "700" }}>Total Value</span>
            <span style={{ color: "var(--industrial-orange)", fontSize: "2rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif" }}>$38,500</span>
          </div>

          {/* Investment */}
          <div style={{ textAlign: "center", padding: "3rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", marginBottom: "2rem" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Your Investment
            </p>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "white", lineHeight: "1.2" }}>
              $4,500 <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to build it</span> + $1,500/mo <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to grow it</span>
            </div>
            <p style={{ color: "var(--industrial-orange)", fontSize: "0.95rem", fontWeight: "600", marginTop: "1.5rem", marginBottom: "0" }}>
              Price increases to $6,000 in June 2026 when the Sales Training module launches.
            </p>
          </div>

          {/* CTAs (#18 Benefit Buttons, #50 Reassurances, #59 Expectation Setting) */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "440px", margin: "0 auto", width: "100%" }}>
            <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1.0625rem", width: "100%", textAlign: "center", fontWeight: "800" }}>
              Book a 15-Minute Strategy Call &rarr;
            </a>
            <a href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "1rem 2.5rem", fontSize: "0.95rem", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", width: "100%", textAlign: "center", fontWeight: "600" }}>
              Skip the call &mdash; Lock in $4,500 build now
            </a>

            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.55", textAlign: "center", margin: "0.75rem 0 0", maxWidth: "440px" }}>
              The strategy call is 15 minutes, not 45. We&rsquo;ll talk through your current site, what&rsquo;s missing, and whether the Revenue Builder System is a fit. No pressure either way.
            </p>
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 6 -- GUARANTEE */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
              Our Guarantee
            </div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              We guarantee results. Not just deliverables.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {/* 30-Day Unconditional */}
            <div className="bento-card reveal-anim visible" style={{ borderLeft: "4px solid var(--industrial-orange)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1rem", color: "var(--industrial-orange)", opacity: 0.35, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "900" }}>30</span>
                <span style={{ fontSize: "1rem", fontWeight: "800", letterSpacing: "0.05em", textTransform: "uppercase" }}>Day</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "1rem", fontWeight: "700" }}>Unconditional Redesign Guarantee</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                If you're not completely satisfied with the website within 30 days of launch, we redesign it for free. No questions asked. No fine print.
              </p>
            </div>

            {/* 90-Day Lead Guarantee */}
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1rem", color: "var(--industrial-orange)", opacity: 0.35, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "900" }}>90</span>
                <span style={{ fontSize: "1rem", fontWeight: "800", letterSpacing: "0.05em", textTransform: "uppercase" }}>Day</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "1rem", fontWeight: "700" }}>Lead Guarantee</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                We guarantee at least 1 qualified inbound lead within 90 days of launch. If we don't deliver, we keep working at no charge until you get one.
              </p>
            </div>
          </div>

          <p style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "900",
            fontFamily: "'Outfit', sans-serif",
            color: "var(--text-dark)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            margin: "3rem 0 0",
          }}>
            We only win when you win.
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 6B -- HOW WE WORK */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              How We Work
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1rem" }}>
              A process this thorough is rare. That's the point.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "750px", margin: "0 auto" }}>
              Most agencies hand you a website and disappear. We run a 16-phase delivery system &mdash; the same rigor Fortune 500 companies pay consultants to design, built for manufacturers and industrial businesses in Texas.
            </p>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
            {[
              { num: "250+", label: "Checkpoints cleared before we call it done" },
              { num: "16", label: "Phases from discovery to ongoing retainer" },
              { num: "90-Day", label: "Results guarantee — or we keep working" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1", marginBottom: "0.5rem" }}>{s.num}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontWeight: "500", lineHeight: "1.4" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Phase cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
            {[
              { num: "Phase 0", name: "Discovery & Onboarding", detail: "18 checkpoints" },
              { num: "Phase 1", name: "Audit Suite", detail: "6 audits delivered to client" },
              { num: "Phase 2", name: "Infrastructure", detail: "Domain, Cloudflare, SSL, Git" },
              { num: "Phase 3", name: "Design & Build", detail: "Mobile, cross-browser, client-approved" },
              { num: "Phase 4", name: "Analytics & Tracking", detail: "GA4, GSC, GTM, conversions" },
              { num: "Phase 5", name: "SEO Foundation", detail: "Schema, sitemap, keywords mapped" },
              { num: "Phase 6", name: "Service + City Pages", detail: "Local landing pages per market" },
              { num: "Phase 7", name: "Google Business Profile", detail: "Fully optimized, review system live" },
              { num: "Phase 8", name: "Directory Citations", detail: "12+ directories, NAP verified" },
              { num: "Phase 9", name: "PageSpeed & Technical", detail: "85+ score, Core Web Vitals green" },
              { num: "Phases 10-12", name: "Content & Growth", detail: "90 days of SEO content, GBP posts, backlinks" },
              { num: "Phases 13-16", name: "Reporting & Retainer", detail: "Monthly reports, ongoing optimization" },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "1.25rem 1.5rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--border-radius)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.3)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(255,107,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "0.7rem", fontWeight: "700", color: "var(--industrial-orange)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>{p.num}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#fff", fontFamily: "'Outfit', sans-serif", marginBottom: "0.35rem", lineHeight: "1.3" }}>{p.name}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.4" }}>{p.detail}</div>
              </div>
            ))}
          </div>

          {/* Guarantee callout */}
          <div style={{ borderLeft: "3px solid var(--industrial-orange)", background: "rgba(255,107,0,0.05)", padding: "1.25rem 1.75rem", borderRadius: "0 var(--border-radius) var(--border-radius) 0", marginBottom: "2.5rem" }}>
            <p style={{ margin: 0, fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.7", fontWeight: "400" }}>
              <strong style={{ color: "#fff" }}>90-day guarantee:</strong> If your Google Search Console impressions don&rsquo;t increase by at least 50% within 90 days of launch, we keep working &mdash; at no additional cost &mdash; until they do.
            </p>
          </div>

          {/* Footnote */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", textAlign: "center", margin: 0 }}>
            Every project includes a QA gate at the end of each phase. Work doesn&rsquo;t advance until it passes.
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 6C -- PORTFOLIO TEASER */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "750px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
            Portfolio
          </div>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            Built for Manufacturers.<br />
            <span className="text-accent">By a Manufacturer.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.25rem", lineHeight: "1.75", maxWidth: "700px", marginBottom: "2.5rem" }}>
            Every project started the same way: a great company with a terrible website.
          </p>
          <a
            href="/portfolio"
            className="btn btn-primary btn-lg-premium"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            See Our Work
            <ArrowRight size={18} />
          </a>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 7 -- ABOUT */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Why Maker Web Studios
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem" }}>
              Built by someone who's been on your plant floor.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: "1.75", maxWidth: "800px" }}>
              Maker Web Studios was founded by Guillermo Aristi &mdash; a 16-year manufacturing veteran with GMP, ISO 9001, and SQF certifications who built and exited a regulated manufacturing facility in Texas. This isn't an agency that learned about manufacturing from a Google search. We know what a maquila operation looks like. We've written SOPs, run HPLC analyses, and walked clean rooms. We know the difference between a COA and a batch record &mdash; and why your GMP and ISO certifications matter to a procurement manager doing supplier qualification. We know exactly where to put it on your homepage so they see it in the first 8 seconds. We speak manufacturer. Because we are one.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { num: "16", label: "Years in Manufacturing" },
              { num: "3", label: "New Clients Per Month" },
              { num: "90", label: "Day Lead Guarantee" },
              { num: "100%", label: "Texas Focused" },
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1" }}>{stat.num}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem", fontWeight: "600" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 8 -- SCARCITY / CTA */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "750px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
            Limited Availability
          </div>
          <h2 className="section-title" style={{ color: "var(--text-dark)", textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: "1.1", fontFamily: "'Outfit', sans-serif", fontWeight: "900" }}>
            We only take 3 new Revenue Builder clients per month.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "2rem", lineHeight: "1.75", fontWeight: "500", opacity: 0.9, maxWidth: "650px" }}>
            Not as a marketing tactic &mdash; as a quality commitment. Every client gets our full attention from discovery to launch. Three slots means your project never gets deprioritized. The June 2026 price increase to $6,000 is real. If you&rsquo;re reading this before then, you&rsquo;re looking at the last months of the $4,500 build rate.
          </p>

          {/* Curiosity hook (#49) */}
          <div style={{ padding: "1.25rem 1.75rem", background: "rgba(255, 107, 0, 0.06)", border: "1px solid rgba(255, 107, 0, 0.2)", borderRadius: "var(--border-radius)", marginBottom: "2.5rem", maxWidth: "650px" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-dark)", margin: 0, fontWeight: "600", lineHeight: "1.6" }}>
              There&rsquo;s one thing missing from almost every Texas manufacturer&rsquo;s website that&rsquo;s costing them 30&ndash;40% of their inbound leads. We find it on the audit call. Ask about it.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "440px", width: "100%" }}>
            <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px", width: "100%", textAlign: "center" }}>
              Claim My Free 15-Minute Audit &rarr;
            </a>
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1.25rem", opacity: 0.75, maxWidth: "550px", lineHeight: "1.6" }}>
            No cost. No sales pitch. No commitment. Just a detailed look at what your digital presence is costing you &mdash; delivered within 48 hours.
          </p>
        </div>
      </section>

      {/* Footer Line */}
      <div style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--border-color)", background: "var(--bg-color)" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.6, margin: 0 }}>
          &copy; 2026 Maker Web Studios. The Revenue Builder System is a proprietary framework of Maker Web Studios.
        </p>
      </div>

    </div>
  );
};

export default Manufacturers;
