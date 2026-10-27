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
      highlight: true,
    },
    {
      title: "Sports Sync AI",
      description:
        "Architected and solo-built a production-grade GovTech digital ecosystem for state-level sports infrastructure featuring high-throughput ETL data pipelines, sovereign identity verification via DigiLocker API, and predictive ML diagnostics for grassroots talent discovery.",
      tags: ["GovTech", "ETL", "DigiLocker API", "ML", "React"],
      icon: "⚡",
      highlight: true,
    },
    {
      title: "Hybrid ML Model for Botnet Detection in IoT",
      description:
        "Developed a hybrid machine learning model combining Random Forest and LSTM to detect botnet attacks in IoT environments with high accuracy, addressing modern cybersecurity threats.",
      tags: ["Python", "Machine Learning", "IoT", "Cybersecurity", "LSTM"],
      icon: "🛡️",
      highlight: false,
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Intelligent resume parser and analyzer that provides actionable feedback and improvement suggestions using NLP techniques and AI models.",
      tags: ["Python", "NLP", "AI", "Streamlit"],
      icon: "📄",
      highlight: false,
    },
    {
      title: "Student Performance Predictor",
      description:
        "Data-driven predictor that forecasts student academic outcomes using regression models, helping educators identify at-risk students early.",
      tags: ["Python", "Pandas", "Regression", "Data Analysis"],
      icon: "📊",
      highlight: false,
    },
    {
      title: "Fake News Detection System",
      description:
        "NLP-powered classifier that accurately identifies misinformation and fake news articles using transformer-based models and ensemble learning.",
      tags: ["NLP", "Python", "Transformers", "Classification"],
      icon: "🔍",
      highlight: false,
    },
  ];

  const achievements = [
    {
      title: "🚀 Founder & CEO — REFOUNDED",
      desc: "Founded REFOUNDED — building a globally recognized ecosystem for entrepreneurship and innovation. Won 'Most Innovative Idea' at Kotak BizLabs Season 2 Community Building Bootcamp Startup Pitching Competition, associated with T-Hub Hyderabad.",
      year: "2025",
    },
    {
      title: "🏆 1st Place — IIT Hyderabad Data Science Hackathon 2025",
      desc: "Won first place among hundreds of participants, presenting an innovative ML solution for real-world data challenges at one of India's premier tech institutions.",
      year: "2025",
    },
    {
      title: "🎓 IBM Certified AI Specialist",
      desc: "Earned IBM's professional AI certification, demonstrating expertise in artificial intelligence concepts and enterprise-grade applications.",
      year: "2024",
    },
    {
      title: "🎓 BE — Computer Science & Engineering",
      desc: "Pursuing BE in CSE at Visvesvaraya College of Engineering and Technology, Hyderabad with focus on AI Engineering and Research.",
      year: "2022–Present",
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* ─── NAVBAR ─────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(5, 8, 22, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RAM CHAITANYA
        </span>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["About", "Skills", "Projects", "Gallery", "Achievements", "REFOUNDED", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── HERO ───────────────────────────────────────── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "8rem 2rem 4rem",
          position: "relative",
        }}
      >
        {/* Floating orb decorations */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          className="animate-float"
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          className="animate-float"
        />

        {/* Profile Photo */}
        <div
          className="animate-fade-up"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: "1.5rem",
            border: "3px solid transparent",
            backgroundImage: "linear-gradient(var(--bg-primary), var(--bg-primary)), linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "0 0 50px rgba(59,130,246,0.3)",
            position: "relative",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Ram Chaitanya Goud - Founder & CEO at Refounded"
            width={160}
            height={160}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </div>

        {/* Badges */}
        <div
          className="animate-fade-up"
          style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", marginBottom: "1.5rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: "rgba(236,72,153,0.12)",
              border: "1px solid rgba(236,72,153,0.3)",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#f472b6",
              letterSpacing: "0.04em",
            }}
          >
            🚀 Founder & CEO · REFOUNDED
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: "rgba(6,182,212,0.12)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#22d3ee",
              letterSpacing: "0.04em",
            }}
          >
            🏅 Most Innovative Idea · Kotak BizLabs × T-Hub
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#60a5fa",
              letterSpacing: "0.04em",
            }}
          >
            🏆 1st Place · IIT Hyderabad Hackathon 2025
          </span>
        </div>

        <h1
          className="animate-fade-up-delay-1"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "0.5rem" }}
        >
          Ram Chaitanya Goud
        </h1>
        <h2
          className="animate-fade-up-delay-1"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 600, marginBottom: "0.4rem", color: "#f472b6" }}
        >
          Founder & CEO @ Refounded
        </h2>
        <h3
          className="animate-fade-up-delay-1 gradient-text"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", fontWeight: 600, marginBottom: "1.5rem" }}
        >
          AI Engineer & Researcher · Building a Globally Recognized Ecosystem for Entrepreneurship & Innovation
        </h3>
        <p
          className="animate-fade-up-delay-2"
          style={{
            maxWidth: "650px",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#94a3b8",
            marginBottom: "2.5rem",
          }}
        >
          Founder & CEO of <strong style={{ color: "#f472b6" }}>REFOUNDED</strong> — a startup building a globally
          recognized ecosystem for entrepreneurship and innovation. Awarded <strong style={{ color: "#22d3ee" }}>Most
          Innovative Idea</strong> at Kotak BizLabs × T-Hub Hyderabad. IBM Certified AI Specialist and 1st Place
          winner at IIT Hyderabad Data Science Hackathon 2025.
        </p>

        <div
          className="animate-fade-up-delay-3"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="#refounded"
            className="btn-glow"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            🚀 Grow with REFOUNDED
          </a>
          <a
            href="#projects"
            className="btn-outline"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            View My Work →
          </a>
          <a
            href="mailto:chaitanyagoud116@gmail.com"
            className="btn-outline"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            📧 Get In Touch
          </a>
        </div>

        {/* Social icons */}
        <div
          className="animate-fade-up-delay-3"
          style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          {[
            { label: "GitHub", href: "https://github.com/chaitanyagoud116", icon: "⌨️" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/theramchaitanyagoud/", icon: "💼" },
            { label: "Email", href: "mailto:chaitanyagoud116@gmail.com", icon: "✉️" },
            { label: "Phone", href: "tel:+919948559727", icon: "📞" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50px",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────── */}
      <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { value: "🚀", label: "Founder & CEO" },
            { value: "1st", label: "IIT Hackathon Rank" },
            { value: "IBM", label: "AI Certification" },
            { value: "6+", label: "Projects Built" },
            { value: "🏅", label: "Kotak BizLabs Winner" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div
                className="gradient-text"
                style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "4px" }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <div className="section-heading">
          <span className="gradient-text">About Me</span>
        </div>
        <div className="section-divider" />
        <div className="glass" style={{ padding: "2rem" }}>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            I&apos;m <strong style={{ color: "#f1f5f9" }}>Ram Chaitanya Goud Bibipet</strong> — Founder & CEO
            of <strong style={{ color: "#f472b6" }}>REFOUNDED</strong>, an AI Engineer & Researcher based in Hyderabad.
            I&apos;m building a globally recognized ecosystem for entrepreneurship and innovation.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            At REFOUNDED, I led our team to win the <strong style={{ color: "#f1f5f9" }}>&quot;Most Innovative
            Idea&quot;</strong> award at the Kotak BizLabs Season 2 Community Building Bootcamp Startup Pitching
            Competition at <strong style={{ color: "#22d3ee" }}>T-Hub Hyderabad</strong> — India&apos;s largest
            innovation hub.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem" }}>
            With a 1st place win at the <strong style={{ color: "#f1f5f9" }}>IIT Hyderabad Data Science Hackathon
            2025</strong> and IBM AI Certification, I specialize in production-grade data pipelines, AI/ML research,
            and building full-stack intelligent applications that solve real-world problems.
          </p>
        </div>
      </section>

      {/* ─── SKILLS ─────────────────────────────────────── */}
      <section id="skills" style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="section-heading">
          <span className="gradient-text">Skills & Tech Stack</span>
        </div>
        <div className="section-divider" />
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#64748b",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ─── PROJECTS ───────────────────────────────────── */}
      <section id="projects" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-heading">
          <span className="gradient-text">Featured Projects</span>
        </div>
        <div className="section-divider" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
              style={project.highlight ? { border: "1px solid rgba(59,130,246,0.25)" } : {}}
            >
              {project.highlight && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 10px",
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    borderRadius: "50px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#60a5fa",
                    marginBottom: "1rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  ⭐ Featured
                </div>
              )}
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{project.icon}</div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                  color: "#f1f5f9",
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1rem" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHOTO GALLERY ──────────────────────────────── */}
      <section id="gallery" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-heading">
          <span className="gradient-text">Gallery</span>
        </div>
        <div className="section-divider" />
        <p style={{ color: "#94a3b8", marginBottom: "2rem", fontSize: "1rem" }}>
          Moments from the Kotak BizLabs × T-Hub Startup Pitching Competition — where REFOUNDED
          won &quot;Most Innovative Idea&quot;
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            { src: "/images/award-ceremony.jpg", caption: "Receiving the 'Most Innovative Idea' trophy at T-Hub Hyderabad", alt: "Ram Chaitanya receiving award at T-Hub" },
            { src: "/images/kotak-demoday.jpg", caption: "Kotak BizLabs Season 2 Demo Day — with the winning trophy", alt: "Ram Chaitanya at Kotak BizLabs Demo Day" },
            { src: "/images/kotak-trophy.jpg", caption: "Most Innovative Idea — Kotak BizLabs × T-Hub Startup Pitching Competition", alt: "Kotak BizLabs Most Innovative Idea Trophy" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="glass"
              style={{
                overflow: "hidden",
                borderRadius: "16px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.6 }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ───────────────────────────────── */}
      <section
        id="achievements"
        style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        <div className="section-heading">
          <span className="gradient-text">Achievements & Journey</span>
        </div>
        <div className="section-divider" />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {achievements.map((item) => (
            <div key={item.title} className="timeline-item">
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#3b82f6",
                  marginBottom: "4px",
                  letterSpacing: "0.05em",
                }}
              >
                {item.year}
              </div>
              <h3
                style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "6px", color: "#f1f5f9" }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GROW WITH REFOUNDED ────────────────────────── */}
      <section
        id="refounded"
        style={{
          padding: "5rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.08), rgba(59,130,246,0.08))",
            border: "1px solid rgba(236,72,153,0.2)",
            borderRadius: "24px",
            padding: "3.5rem 2.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              marginBottom: "0.5rem",
              color: "#f1f5f9",
            }}
          >
            Grow with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REFOUNDED
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: "550px",
              margin: "0 auto 1rem",
            }}
          >
            Building a globally recognized ecosystem for entrepreneurship & innovation.
            Join us on the journey to empower founders, creators, and visionaries.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              marginBottom: "2.5rem",
            }}
          >
            🏅 Winner — Most Innovative Idea at Kotak BizLabs × T-Hub Hyderabad
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="tel:+919948559727"
              className="btn-glow"
              style={{
                padding: "14px 32px",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              }}
            >
              📞 Contact Us — 9948559727
            </a>
            <a
              href="mailto:chaitanyagoud116@gmail.com"
              className="btn-outline"
              style={{ padding: "14px 32px", fontSize: "1rem" }}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ────────────────────────────────────── */}
      <section
        id="contact"
        style={{ padding: "4rem 2rem 8rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
      >
        <div className="section-heading">
          <span className="gradient-text">Let&apos;s Connect</span>
        </div>
        <div className="section-divider" style={{ margin: "0 auto 2rem" }} />
        <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Open to opportunities in AI Engineering, Startup Collaborations, and Building the Future.
          Let&apos;s create something extraordinary together!
        </p>
        <div
          className="glass"
          style={{ padding: "2rem", marginBottom: "2rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            {[
              { label: "📧 Email", value: "chaitanyagoud116@gmail.com", href: "mailto:chaitanyagoud116@gmail.com" },
              { label: "📞 Phone", value: "+91 9948559727", href: "tel:+919948559727" },
              { label: "💼 LinkedIn", value: "theramchaitanyagoud", href: "https://www.linkedin.com/in/theramchaitanyagoud/" },
              { label: "⌨️ GitHub", value: "chaitanyagoud116", href: "https://github.com/chaitanyagoud116" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "4px", fontWeight: 600 }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#f1f5f9", fontWeight: 500 }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <a
          href="mailto:chaitanyagoud116@gmail.com"
          className="btn-glow"
          style={{ padding: "14px 36px", fontSize: "1rem" }}
        >
          ✉️ Send Me a Message
        </a>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────── */}
      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "#475569",
          fontSize: "0.85rem",
        }}
      >
        <span className="gradient-text" style={{ fontWeight: 700 }}>
          Ram Chaitanya Goud
        </span>{" "}
        © 2026 · Founder & CEO @ REFOUNDED · Built with Next.js & ❤️
      </footer>
    </div>
  );
}
