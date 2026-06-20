function App() {
  const profile =
    "https://res.cloudinary.com/devn2ez7p/image/upload/v1775848817/WA_1775848777544_lo4msf.jpg";

  return (
    <div style={styles.page}>
      {/* Stars */}
      <div style={styles.star1}></div>
      <div style={styles.star2}></div>
      <div style={styles.star3}></div>
      <div style={styles.star4}></div>

      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <h3 style={styles.hello}>👋 Hello, I'm</h3>

          <h1 style={styles.name}>
            Mohammed <span style={{ color: "#4facfe" }}>AASIF</span>
          </h1>

          <h2 style={styles.role}>Java Backend Developer 🚀</h2>

          <p style={styles.desc}>
            Passionate about Java, Spring Boot, REST APIs, MySQL and Backend
            Development. Building scalable applications and continuously
            learning new technologies.
          </p>

          <button style={styles.btn}>Let's Connect</button>
        </div>

        <div style={styles.imageBox}>
          <img src={profile} alt="profile" style={styles.image} />
        </div>
      </div>

      {/* About */}
      <div style={styles.card}>
        <h2>✨ About Me</h2>

        <p>
          Computer Science Student passionate about Backend Development,
          Problem Solving, APIs and Modern Web Technologies.
        </p>
      </div>

      {/* Skills */}
      <div style={styles.card}>
        <h2>💻 Skills</h2>

        <div style={styles.skills}>
          <span style={styles.skill}>Java</span>
          <span style={styles.skill}>Spring Boot</span>
          <span style={styles.skill}>MySQL</span>
          <span style={styles.skill}>REST API</span>
          <span style={styles.skill}>Git</span>
          <span style={styles.skill}>GitHub</span>
          <span style={styles.skill}>React</span>
        </div>
      </div>

      {/* Projects */}
      <div style={styles.projects}>
        <div style={styles.project}>
          <h3>🛡 FraudShield AI</h3>
          <p>
            AI-powered scam detection application for SMS, Email and WhatsApp.
          </p>
        </div>

        <div style={styles.project}>
          <h3>☕ Java Internship Tasks</h3>
          <p>Calculator, Fibonacci, Factorial, Palindrome Checker and more.</p>
        </div>
      </div>

      {/* Contact */}
      <div style={styles.card}>
        <h2>📞 Contact</h2>

        <p>📧 aasif@example.com</p>
        <p>💼 LinkedIn Profile</p>
        <p>🐙 github.com/aasif-developer</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    background:
      "linear-gradient(135deg, #050816, #0b1120, #1a1f71, #6a11cb)",
    position: "relative",
    overflow: "hidden",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "40px",
  },

  hello: {
    color: "#4facfe",
  },

  name: {
    fontSize: "4rem",
    margin: "10px 0",
  },

  role: {
    color: "#00f7ff",
  },

  desc: {
    maxWidth: "600px",
    color: "#d1d5db",
    lineHeight: "1.8",
  },

  btn: {
    padding: "15px 30px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(90deg,#00f7ff,#8a2be2)",
    color: "white",
    fontWeight: "bold",
    marginTop: "15px",
    cursor: "pointer",
    boxShadow: "0 0 20px #00f7ff",
  },

  imageBox: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    padding: "8px",
    background: "linear-gradient(45deg,#00f7ff,#8a2be2)",
    boxShadow: "0 0 50px #00f7ff",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "20px",
    marginBottom: "25px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  skills: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "15px",
  },

  skill: {
    padding: "10px 20px",
    borderRadius: "50px",
    background: "rgba(0,247,255,0.15)",
    border: "1px solid #00f7ff",
  },

  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  project: {
    background: "rgba(255,255,255,0.08)",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
  },

  star1: {
    position: "absolute",
    width: "8px",
    height: "8px",
    background: "white",
    borderRadius: "50%",
    top: "10%",
    left: "20%",
    boxShadow: "0 0 20px white",
  },

  star2: {
    position: "absolute",
    width: "6px",
    height: "6px",
    background: "#00f7ff",
    borderRadius: "50%",
    top: "25%",
    right: "10%",
    boxShadow: "0 0 20px #00f7ff",
  },

  star3: {
    position: "absolute",
    width: "7px",
    height: "7px",
    background: "#8a2be2",
    borderRadius: "50%",
    top: "70%",
    left: "15%",
    boxShadow: "0 0 20px #8a2be2",
  },

  star4: {
    position: "absolute",
    width: "10px",
    height: "10px",
    background: "#fff",
    borderRadius: "50%",
    top: "85%",
    right: "20%",
    boxShadow: "0 0 25px white",
  },
};

export default App;