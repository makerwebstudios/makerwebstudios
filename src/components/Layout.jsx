import { useState, useEffect } from "react";
import CookieBanner from "./CookieBanner";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <header className={`glass-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo(0, 0);
              }
            }}
            className="brand-logo"
          >
            <img
              src="/logos/Maker Logo - 300 x 300 px - Official.png"
              alt="Maker Web Studio"
              className="navbar-logo"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </a>

          <nav className="desktop-nav">
            <a href="tel:5126359629" className="nav-phone-text" style={{ color: "var(--text-dark)", fontSize: "0.875rem", fontWeight: "600", textDecoration: "none", marginRight: "1rem", whiteSpace: "nowrap" }}>
              (512) 635-9629
            </a>
            <div className="nav-button-group">
              <a
                href="https://buy.stripe.com/6oUbJ3dnzd6U7BW7ydejK04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-dark"
              >
                Start Foundation &mdash; $2,500
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Free Audit
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="dark-section footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">MAKER WEB STUDIO</h3>
              <p className="footer-tagline">
                Your whole online presence, consolidated.
                <br />
                Built by an operator, not a template.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/#system">What's Inside</a>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/mfg">For Manufacturers</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                <a href="tel:5126359629" style={{ color: "var(--industrial-orange)", textDecoration: "none" }}>(512) 635-9629</a>
                <br />
                <a href="mailto:hello@makerwebstudios.com" style={{ color: "var(--industrial-orange)", textDecoration: "none" }}>hello@makerwebstudios.com</a>
                <br />
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Mission, TX</span>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Maker Web Studios. The Revenue Builder System is a proprietary framework of Maker Web Studios. &nbsp;|&nbsp; <a href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy Policy</a></div>
            <a
              href="https://www.linkedin.com/company/makerwebstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <CookieBanner />

      {/* Mobile Bottom Bar -- phone + email, visible only on mobile */}
      <div className="mobile-bottom-bar">
        <a href="tel:5126359629" className="bottom-bar-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call</span>
        </a>
        <a href="mailto:hello@makerwebstudios.com" className="bottom-bar-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Email</span>
        </a>
        <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="bottom-bar-btn bottom-bar-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>Book Call</span>
        </a>
      </div>
    </div>
  );
};

export default Layout;
