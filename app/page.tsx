import Image from "next/image";

export default function Home() {
  const skills = {
    "AI & Machine Learning": [
      "Python", "Machine Learning", "Deep Learning", "NLP",
      "TensorFlow", "scikit-learn", "Computer Vision",
      "Predictive Analytics", "LLMs", "AI Research",
    ],
    "Data Engineering & Analytics": [
      "SQL", "Apache Spark", "ETL Pipelines",
      "BigQuery", "Power BI", "Data Modeling", "PostgreSQL",
      "Pandas", "NumPy", "Data Visualization",
    ],
    "Web & Cloud": [
      "React", "Next.js", "HTML", "CSS", "JavaScript",
      "Node.js", "Git", "GitHub", "Vercel", "Docker",
    ],
    "Startup & Leadership": [
      "Startup Building", "Product Strategy", "Pitch Decks",
      "Team Leadership", "Business Development", "GovTech",
      "Innovation", "Ecosystem Building",
    ],
  };

  const projects = [
    {
      title: "REFOUNDED",
      description:
        "Building a globally recognized ecosystem for entrepreneurship and innovation. Won 'Most Innovative Idea' at Kotak BizLabs Season 2 associated with T-Hub Hyderabad. Empowering founders and creators to build, scale, and disrupt.",
      tags: ["Startup", "T-Hub", "Kotak BizLabs", "Innovation", "Ecosystem"],
      icon: "🚀",
      featured: true,
    },
    {
      title: "Sports Sync AI",
      description:
        "Production-grade GovTech digital ecosystem for state-level sports infrastructure featuring high-throughput ETL data pipelines, sovereign identity verification via DigiLocker API, and predictive ML diagnostics for grassroots talent discovery.",
      tags: ["GovTech", "ETL", "DigiLocker API", "ML", "React"],
      icon: "⚡",
      featured: true,
    },
    {
      title: "Hybrid ML Model for Botnet Detection",
      description:
        "Hybrid machine learning model combining Random Forest and LSTM to detect botnet attacks in IoT environments with high accuracy.",
      tags: ["Python", "ML", "IoT", "Cybersecurity", "LSTM"],
      icon: "🛡️",
      featured: false,
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Intelligent resume parser that provides actionable feedback using NLP techniques and AI models.",
      tags: ["Python", "NLP", "AI", "Streamlit"],
      icon: "📄",
      featured: false,
    },
    {
      title: "Student Performance Predictor",
      description:
        "Data-driven predictor for student academic outcomes using regression models to help educators identify at-risk students.",
      tags: ["Python", "Pandas", "Regression", "Data Analysis"],
      icon: "📊",
      featured: false,
    },
    {
      title: "Fake News Detection System",
      description:
        "NLP-powered classifier identifying misinformation using transformer-based models and ensemble learning.",
      tags: ["NLP", "Python", "Transformers", "Classification"],
      icon: "🔍",
      featured: false,
    },
  ];

  const achievements = [
    {
      title: "Founder & CEO — REFOUNDED",
      desc: "Founded REFOUNDED — building a globally recognized ecosystem for entrepreneurship and innovation. Won 'Most Innovative Idea' at Kotak BizLabs Season 2 Community Building Bootcamp, associated with T-Hub Hyderabad.",
      year: "2025",
    },
    {
      title: "1st Place — IIT Hyderabad Data Science Hackathon 2025",
      desc: "Won first place among hundreds of participants, presenting an innovative ML solution for real-world data challenges.",
      year: "2025",
    },
    {
      title: "IBM Certified AI Specialist",
      desc: "Earned IBM's professional AI certification, demonstrating expertise in artificial intelligence concepts and enterprise-grade applications.",
      year: "2024",
    },
    {
      title: "BE — Computer Science & Engineering",
      desc: "Pursuing BE in CSE at Visvesvaraya College of Engineering and Technology, Hyderabad with focus on AI Engineering and Research.",
      year: "2022–Present",
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── NAVBAR ────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(247,242,238,0.88)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(58,46,43,0.07)",
        boxShadow: "0 2px 20px rgba(58,46,43,0.05)",
      }}>
        <span style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700, fontSize: "1.05rem",
          letterSpacing: "0.04em",
          color: "var(--text-primary)",
        }}>
          Ram Chaitanya
        </span>
        <div style={{ display: "flex", gap: "1.8rem", flexWrap: "wrap" }}>
          {["About", "Skills", "Projects", "Gallery", "Achievements", "REFOUNDED", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────── */}
      <section id="about" style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center",
        padding: "9rem 2rem 5rem",
        position: "relative",
      }}>
        {/* decorative orbs */}
        <div className="animate-float" style={{
          position: "absolute", top: "18%", left: "8%",
          width: "320px", height: "320px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,142,129,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="animate-float-2" style={{
          position: "absolute", bottom: "15%", right: "8%",
          width: "260px", height: "260px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(82,60,54,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Profile photo */}
        <div className="animate-fade-up" style={{
          width: "160px", height: "160px", borderRadius: "50%",
          overflow: "hidden", marginBottom: "2rem",
          border: "4px solid transparent",
          backgroundImage: `linear-gradient(var(--bg-primary), var(--bg-primary)),
                            linear-gradient(135deg, var(--accent-dark), var(--accent-light))`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 12px 48px rgba(82,60,54,0.18), 0 2px 12px rgba(82,60,54,0.1)",
        }}>
          <Image
            src="/images/profile.jpg"
            alt="Ram Chaitanya Goud — Founder & CEO at REFOUNDED"
            width={160} height={160}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </div>

        {/* Badges */}
        <div className="animate-fade-up animate-delay-1" style={{
          display: "flex", flexWrap: "wrap", gap: "0.6rem",
          justifyContent: "center", marginBottom: "1.8rem",
        }}>
          <span className="badge badge-bronze">🚀 Founder & CEO · REFOUNDED</span>
          <span className="badge badge-copper">🏅 Most Innovative Idea · Kotak BizLabs × T-Hub</span>
          <span className="badge badge-warm">🏆 1st Place · IIT Hyderabad Hackathon 2025</span>
        </div>

        {/* Name */}
        <div className="animate-fade-up animate-delay-1" style={{
          fontFamily: "var(--font-sans)", fontSize: "0.78rem",
          fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent-mid)",
          marginBottom: "0.7rem",
        }}>
          My Portfolio
        </div>
        <h1 className="animate-fade-up animate-delay-1" style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
          fontWeight: 800, lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
        }}>
          Ram Chaitanya Goud
        </h1>
        <h2 className="animate-fade-up animate-delay-2" style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
          fontWeight: 600, fontStyle: "italic",
          color: "var(--accent-mid)", marginBottom: "0.5rem",
        }}>
          Founder & CEO @ Refounded
        </h2>
        <h3 className="animate-fade-up animate-delay-2" style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
          fontWeight: 500, color: "var(--text-secondary)",
          letterSpacing: "0.01em", marginBottom: "1.8rem",
        }}>
          AI Engineer &amp; Researcher · Building a Globally Recognized Ecosystem for Entrepreneurship &amp; Innovation
        </h3>

        <p className="animate-fade-up animate-delay-3" style={{
          maxWidth: "620px", fontSize: "1rem",
          lineHeight: 1.85, color: "var(--text-secondary)",
          marginBottom: "2.5rem",
        }}>
          Founder &amp; CEO of{" "}
          <strong style={{ color: "var(--accent-dark)", fontWeight: 700 }}>REFOUNDED</strong> — awarded{" "}
          <em style={{ color: "var(--accent-mid)" }}>"Most Innovative Idea"</em> at Kotak BizLabs × T-Hub Hyderabad.
          IBM Certified AI Specialist and 1st Place winner at IIT Hyderabad Data Science Hackathon 2025.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up animate-delay-3" style={{
          display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center",
        }}>
          <a href="#refounded" className="btn-primary">
            <span>🚀 Grow with REFOUNDED</span>
          </a>
          <a href="#projects" className="btn-outline">View My Work →</a>
          <a href="mailto:chaitanyagoud116@gmail.com" className="btn-outline">📧 Get In Touch</a>
        </div>

        {/* Social links */}
        <div className="animate-fade-up animate-delay-4" style={{
          display: "flex", gap: "0.8rem", marginTop: "2.5rem",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          {[
            { label: "GitHub", href: "https://github.com/chaitanyagoud116", icon: "⌨️" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/theramchaitanyagoud/", icon: "💼" },
            { label: "Email", href: "mailto:chaitanyagoud116@gmail.com", icon: "✉️" },
            { label: "+91 9948559727", href: "tel:+919948559727", icon: "📞" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "8px 16px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-medium)",
                borderRadius: "50px",
                color: "var(--text-secondary)",
                textDecoration: "none", fontSize: "0.83rem", fontWeight: 600,
                fontFamily: "var(--font-sans)",
                transition: "all 0.2s",
                boxShadow: "var(--shadow-sm)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-dark)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FDFAF8";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-dark)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-medium)";
              }}
            >
              <span>{s.icon}</span>{s.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
          {[
            { value: "🚀", label: "Founder & CEO" },
            { value: "1st", label: "IIT Hackathon Rank" },
            { value: "IBM", label: "AI Certification" },
            { value: "6+", label: "Projects Built" },
            { value: "🏅", label: "Kotak BizLabs Winner" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="gradient-text" style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem", fontWeight: 800, marginBottom: "6px",
              }}>
                {stat.value}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--font-sans)", letterSpacing: "0.03em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-soft" style={{ maxWidth: "1000px", margin: "0 auto 5rem" }} />

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", maxWidth: "860px", margin: "0 auto" }}>
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
        <div className="card" style={{ padding: "2.5rem" }}>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.4rem" }}>
            I&apos;m <strong style={{ color: "var(--text-primary)" }}>Ram Chaitanya Goud Bibipet</strong> — Founder &amp; CEO
            of <strong style={{ color: "var(--accent-dark)" }}>REFOUNDED</strong>, an AI Engineer &amp; Researcher based in Hyderabad,
            building a globally recognized ecosystem for entrepreneurship and innovation.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.4rem" }}>
            At REFOUNDED, I led our team to win the <em style={{ color: "var(--accent-mid)" }}>&quot;Most Innovative Idea&quot;</em> award
            at the Kotak BizLabs Season 2 Community Building Bootcamp Startup Pitching Competition at{" "}
            <strong style={{ color: "var(--text-primary)" }}>T-Hub Hyderabad</strong> — India&apos;s largest innovation hub.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem" }}>
            With a 1st place win at the <strong style={{ color: "var(--text-primary)" }}>IIT Hyderabad Data Science Hackathon 2025</strong> and
            IBM AI Certification, I specialize in production-grade data pipelines, AI/ML research, and building full-stack
            intelligent applications that solve real-world problems.
          </p>
        </div>
      </section>

      <hr className="hr-soft" style={{ maxWidth: "1000px", margin: "4rem auto" }} />

      {/* ── SKILLS ────────────────────────────────────── */}
      <section id="skills" style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="section-label">Expertise</div>
        <h2 className="section-title">Skills &amp; Tech Stack</h2>
        <div className="section-divider" />
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "2.2rem" }}>
            <h3 style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--accent-mid)", marginBottom: "0.9rem",
            }}>
              {category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {items.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr className="hr-soft" style={{ maxWidth: "1000px", margin: "2rem auto 5rem" }} />

      {/* ── PROJECTS ──────────────────────────────────── */}
      <section id="projects" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-label">My Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project) => (
            <div key={project.title} className={project.featured ? "card-featured" : "card"} style={{ padding: "2rem" }}>
              {project.featured && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "3px 10px",
                  background: "rgba(82,60,54,0.08)",
                  border: "1px solid rgba(82,60,54,0.18)",
                  borderRadius: "50px",
                  fontSize: "0.68rem", fontWeight: 700,
                  color: "var(--accent-dark)",
                  marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                }}>
                  ✦ Featured
                </div>
              )}
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{project.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem", fontWeight: 700,
                marginBottom: "0.6rem", color: "var(--text-primary)",
              }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.2rem" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-soft" style={{ maxWidth: "1100px", margin: "3rem auto 5rem" }} />

      {/* ── GALLERY ───────────────────────────────────── */}
      <section id="gallery" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-label">Moments</div>
        <h2 className="section-title">Gallery</h2>
        <div className="section-divider" />

        {/* ── Category 1: Kotak BizLabs ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              padding: "6px 18px",
              background: "linear-gradient(135deg, var(--accent-dark), var(--accent-light))",
              borderRadius: "50px",
              fontFamily: "var(--font-sans)", fontSize: "0.78rem",
              fontWeight: 700, letterSpacing: "0.08em",
              color: "#FDFAF8", textTransform: "uppercase",
            }}>
              🏅 Kotak BizLabs × T-Hub
            </div>
            <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          </div>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.88rem" }}>
            Where REFOUNDED won &quot;Most Innovative Idea&quot; at the Startup Pitching Competition.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {[
              { src: "/images/award-ceremony.jpg", caption: "Receiving the 'Most Innovative Idea' trophy at T-Hub Hyderabad" },
              { src: "/images/kotak-demoday.jpg", caption: "Kotak BizLabs Season 2 Demo Day — with the winning trophy" },
              { src: "/images/kotak-trophy.jpg", caption: "Most Innovative Idea — Kotak BizLabs × T-Hub Startup Pitching Competition" },
            ].map((photo) => (
              <div key={photo.src} className="gallery-card">
                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                  <Image src={photo.src} alt={photo.caption} fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div style={{ padding: "1rem 1.2rem" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category 2: Amazon Hyderabad ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              padding: "6px 18px",
              background: "linear-gradient(135deg, #FF9900, #FF6B00)",
              borderRadius: "50px",
              fontFamily: "var(--font-sans)", fontSize: "0.78rem",
              fontWeight: 700, letterSpacing: "0.08em",
              color: "#fff", textTransform: "uppercase",
            }}>
              📦 Amazon Hyderabad
            </div>
            <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          </div>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.88rem" }}>
            Inside Amazon&apos;s Hyderabad campus — innovation, culture, and global scale.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.2rem" }}>
            {[
              { src: "/images/amazon-session.jpg", caption: "AI Innovation session — 'Our innovative spirit and pace'" },
              { src: "/images/amazon-building.jpg", caption: "Amazon Hyderabad office building" },
              { src: "/images/amazon-poweron.jpg", caption: "Amazon office lobby — 'Power On'" },
              { src: "/images/amazon-worldmap.jpg", caption: "Global world map art installation inside Amazon HQ" },
              { src: "/images/amazon-customer-centric.jpg", caption: "'Building Earth's Most Customer-Centric Company' — Amazon's mission wall" },
            ].map((photo) => (
              <div key={photo.src} className="gallery-card">
                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                  <Image src={photo.src} alt={photo.caption} fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div style={{ padding: "1rem 1.2rem" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category 3: AMD Slingshot at ANU ── */}
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              padding: "6px 18px",
              background: "linear-gradient(135deg, #CC0000, #FF4444)",
              borderRadius: "50px",
              fontFamily: "var(--font-sans)", fontSize: "0.78rem",
              fontWeight: 700, letterSpacing: "0.08em",
              color: "#fff", textTransform: "uppercase",
            }}>
              ⚡ AMD Slingshot Event at ANU
            </div>
            <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          </div>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.88rem" }}>
            AMD Ryzen AI × Slingshot Campus Days — Hands-on AI Bootcamp &amp; Prompt-a-thon at Acharya Nagarjuna University.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.2rem" }}>
            {[
              { src: "/images/amd-banner.jpg", caption: "At the AMD Slingshot banner — 'Built for the Bold to Build with AI'" },
              { src: "/images/amd-wristbands.jpg", caption: "AMD Slingshot participant wristbands — team spirit!" },
              { src: "/images/amd-schedule.jpg", caption: "AMD Slingshot Campus Days — Day 1 Schedule & AI Bootcamp" },
              { src: "/images/amd-auditorium.jpg", caption: "AMD Slingshot session inside the auditorium at ANU" },
              { src: "/images/amd-signage.jpg", caption: "AMD Ryzen AI Slingshot — Built for the Bold" },
            ].map((photo) => (
              <div key={photo.src} className="gallery-card">
                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                  <Image src={photo.src} alt={photo.caption} fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div style={{ padding: "1rem 1.2rem" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-soft" style={{ maxWidth: "1100px", margin: "3rem auto 5rem" }} />

      {/* ── ACHIEVEMENTS ──────────────────────────────── */}
      <section id="achievements" style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div className="section-label">Journey</div>
        <h2 className="section-title">Achievements</h2>
        <div className="section-divider" />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {achievements.map((item) => (
            <div key={item.title} className="timeline-item">
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem", fontWeight: 700,
                color: "var(--accent-mid)", marginBottom: "4px", letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}>
                {item.year}
              </div>
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem", fontWeight: 700,
                marginBottom: "6px", color: "var(--text-primary)",
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-soft" style={{ maxWidth: "800px", margin: "3rem auto 5rem" }} />

      {/* ── GROW WITH REFOUNDED ───────────────────────── */}
      <section id="refounded" style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div className="refounded-section" style={{ padding: "4rem 3rem" }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(247,242,238,0.65)", marginBottom: "0.8rem",
            }}>
              Join the Movement
            </div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800, color: "#FDFAF8",
              marginBottom: "1rem", letterSpacing: "-0.01em",
            }}>
              Grow with REFOUNDED
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "rgba(247,242,238,0.8)",
              lineHeight: 1.85, maxWidth: "500px", margin: "0 auto 0.8rem",
              fontFamily: "var(--font-sans)",
            }}>
              Building a globally recognized ecosystem for entrepreneurship &amp; innovation.
              Join us on the journey to empower founders, creators, and visionaries.
            </p>
            <p style={{
              fontSize: "0.85rem", color: "rgba(247,242,238,0.55)",
              marginBottom: "2.5rem", fontFamily: "var(--font-sans)",
            }}>
              🏅 Winner — Most Innovative Idea · Kotak BizLabs × T-Hub Hyderabad
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:+919948559727" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 32px",
                background: "#FDFAF8",
                color: "var(--accent-dark)",
                fontFamily: "var(--font-sans)", fontWeight: 700,
                fontSize: "0.95rem", letterSpacing: "0.02em",
                borderRadius: "50px", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s",
              }}>
                📞 Contact Us — 9948559727
              </a>
              <a href="mailto:chaitanyagoud116@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 28px",
                background: "transparent",
                color: "#FDFAF8",
                fontFamily: "var(--font-sans)", fontWeight: 600,
                fontSize: "0.95rem",
                borderRadius: "50px", textDecoration: "none",
                border: "1.5px solid rgba(247,242,238,0.35)",
                transition: "all 0.3s",
              }}>
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" style={{ padding: "4rem 2rem 7rem", maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <div className="section-divider" style={{ margin: "0 auto 2.5rem" }} />
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
          Open to opportunities in AI Engineering, Startup Collaborations, and Building the Future.
          Let&apos;s create something extraordinary together!
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "1rem", marginBottom: "2rem", textAlign: "left" }}>
          {[
            { label: "Email", value: "chaitanyagoud116@gmail.com", href: "mailto:chaitanyagoud116@gmail.com", icon: "📧" },
            { label: "Phone", value: "+91 9948559727", href: "tel:+919948559727", icon: "📞" },
            { label: "LinkedIn", value: "theramchaitanyagoud", href: "https://www.linkedin.com/in/theramchaitanyagoud/", icon: "💼" },
            { label: "GitHub", value: "chaitanyagoud116", href: "https://github.com/chaitanyagoud116", icon: "⌨️" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span>{item.icon}</span>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}>
                  {item.label}
                </span>
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>
                {item.value}
              </div>
            </a>
          ))}
        </div>
        <a href="mailto:chaitanyagoud116@gmail.com" className="btn-primary" style={{ padding: "14px 36px", fontSize: "0.95rem" }}>
          <span>✉️ Send Me a Message</span>
        </a>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
        <div style={{
          fontFamily: "var(--font-serif)", fontWeight: 700,
          fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.4rem",
        }}>
          Ram Chaitanya Goud Bibipet
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
          © 2026 · Founder &amp; CEO @ REFOUNDED · Built with Next.js
        </div>
      </footer>
    </div>
  );
}
