import { useEffect, useRef, useState } from "react";
import "./InternMS.css";

// Images — kept in src/assets and imported like any other module
import checkIcon from "./assets/check-icon.jpeg";
import trackingIcon from "./assets/tracking-icon.jpeg";
import securityIcon from "./assets/security-icon.jpeg";
import matchingIcon from "./assets/matching-icon.jpeg";
import officePhoto from "./assets/office-photo.jpeg";
import dashboardMockup from "./assets/dashboard-mockup.jpeg";

const FEATURES = [
  {
    icon: matchingIcon,
    title: "Automated Matching",
    desc: "Our AI-driven algorithm pairs candidates with their ideal roles based on skills, culture fit, and academic requirements.",
  },
  {
    icon: trackingIcon,
    title: "Real-time Tracking",
    desc: "Monitor progress from application to final evaluation with granular dashboards for all stakeholders.",
  },
  {
    icon: securityIcon,
    title: "Secure Documents",
    desc: "Enterprise-grade encryption for contracts, NDAs, and compliance certifications with automated reminders.",
  },
];

const STATS = [
  { value: "500+", label: "Universities" },
  { value: "10k+", label: "Global Companies" },
  { value: "1M+", label: "Placements" },
];

const STUDENT_POINTS = [
  {
    title: "One-click Applications",
    desc: "Apply to top-tier firms instantly with your verified profile.",
  },
  {
    title: "AI Career Coaching",
    desc: "Personalized insights to help you stand out and land the role.",
  },
  {
    title: "Verified Credentials",
    desc: "A portable digital record of your internship success.",
  },
];

const TABS = ["Students", "Employers", "Universities"];

// Shared inline styles for the footer social icon buttons
const socialIconStyle = {
  width: "38px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  color: "#aab3c5",
  transition: "background 0.2s ease, color 0.2s ease",
};

const handleSocialHover = (e) => {
  e.currentTarget.style.background = "#2f5bea";
  e.currentTarget.style.color = "#ffffff";
};

const handleSocialLeave = (e) => {
  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
  e.currentTarget.style.color = "#aab3c5";
};

/** Wraps children and fades/slides them in the first time they enter the viewport. */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function InternMS() {
  const [activeTab, setActiveTab] = useState("Students");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="internms">
      {/* ---------- Nav ---------- */}
      <header className="nav">
        <div className="nav__inner">
          <span className="nav__logo">InternMS</span>

          {/* <nav className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
            <a href="#features">Features</a>
            <a href="#students">Students</a>
            <a href="#footer">Contact</a>
          </nav> */}

          <div className="nav__actions">
            <button className="btn btn--ghost">Login</button>
            <button className="btn btn--dark">Register</button>
          </div>

          <button
            className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <section className="hero">
        <div className="hero__text">
          <Reveal>
            <span className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h7l-1 8 11-14h-7l0-6z"
                  fill="currentColor"
                />
              </svg>
              Next-Generation Placement OS
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              Seamless Internships.
              <br />
              <span className="hero__accent">Smarter Management.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero__sub">
              Bridging the gap between ambitious talent and global
              opportunities. The definitive operating system for
              universities, students, and world-class employers.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero__cta">
              <button className="btn btn--primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="btn btn--outline">Book a Demo</button>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__art" delay={120}>
          <div className="hero__art-frame">
            <img
              src={dashboardMockup}
              alt="InternMS placement dashboard preview"
              className="hero__art-img"
            />
            <div className="hero__badge">
              <span className="hero__badge-icon">📈</span>
              <div>
                <p className="hero__badge-label">Success Rate</p>
                <p className="hero__badge-value">+24% Increase</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="stats__item-wrap">
            <div className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="features" className="features">
        <Reveal>
          <h2>Engineered for Efficiency</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="features__sub">
            Complex placement workflows simplified into an intuitive,
            high-speed ecosystem designed for scale.{" "}
            <a href="#features" className="link">
              Explore all features →
            </a>
          </p>
        </Reveal>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="feature-card">
                <img src={f.icon} alt="" className="feature-card__icon" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="students" className="students">
       <div className="students__grid">
        <div className="students__text">
          <Reveal>
            <h2>
              For Students:
              <br />
              <span className="hero__accent">Your Career Launchpad.</span>
            </h2>
          </Reveal>

          <ul className="students__list">
            {STUDENT_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <li>
                  <img src={checkIcon} alt="" className="students__check" />
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={280}>
            <div className="tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`tabs__btn ${
                    activeTab === tab ? "tabs__btn--active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="students__art" delay={150}>
          <img
            src={officePhoto}
            alt="Students working in a modern office"
            className="students__img"
          />
        </Reveal>
       </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer id="footer" className="footer">
        <div className="footer__grid">
          <div>
            <span
              className="nav__logo nav__logo--light"
              style={{
                display: "flex",
                alignItems: "flex-start"
              }}
            >
              InternMS
            </span>
            <p>
              The ultimate platform for managing internships, connecting
              talent, and building the future of work.
            </p>

            {/* ---------- Social icons (inline styled) ---------- */}
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <a
                href="#"
                aria-label="Twitter / X"
                style={socialIconStyle}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-6.9L4 22H0.9l8.1-9.3L0 2h7.4l5.1 6.3L18.9 2zm-1.3 18h2L6.5 4H4.4l13.2 16z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                style={socialIconStyle}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM.5 8.75h4.96V23H.5V8.75zM8.5 8.75h4.75v1.95h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.94 3.3 5.94 7.6V23h-4.96v-6.35c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.44 1.65-2.44 3.35V23H8.5V8.75z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                style={socialIconStyle}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Product</h4>
            <a href="#students">For Students</a>
            <a href="#features">For Employers</a>
            <a href="#features">For Universities</a>
            <a href="#footer">Pricing</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#footer">Privacy Policy</a>
            <a href="#footer">Terms of Service</a>
            <a href="#footer">Resources</a>
            <a href="#footer">Contact Us</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 InternMS. All rights reserved.</span>
          <span>Made with ♥ for the future workforce</span>
        </div>
      </footer>
    </div>
  );
}