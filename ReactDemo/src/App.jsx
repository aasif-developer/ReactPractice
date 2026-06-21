function App() {
  const profile =
    "https://res.cloudinary.com/devn2ez7p/image/upload/v1775848817/WA_1775848777544_lo4msf.jpg";

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Segoe UI,sans-serif;
          background:#000;
        }

        .container{
          min-height:100vh;
          background:
          radial-gradient(circle at top,#001122,#000 50%),
          linear-gradient(135deg,#000,#001a00);
          color:white;
          overflow:hidden;
          position:relative;
          padding:40px;
        }

        .container::before{
          content:'';
          position:absolute;
          width:200%;
          height:200%;
          background-image:
          radial-gradient(#00ff41 1px, transparent 1px);
          background-size:40px 40px;
          opacity:.15;
          animation:moveStars 80s linear infinite;
        }

        @keyframes moveStars{
          from{transform:translateY(0)}
          to{transform:translateY(-1000px)}
        }

        .hero{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:40px;
          position:relative;
          z-index:2;
        }

        .left{
          flex:1;
          min-width:300px;
        }

        .hello{
          color:#00ff41;
          font-size:20px;
          margin-bottom:10px;
        }

        .name{
          font-size:70px;
          font-weight:900;
          text-shadow:0 0 20px #00ff41;
        }

        .role{
          color:#00d9ff;
          margin-top:10px;
          font-size:28px;
        }

        .desc{
          margin-top:20px;
          line-height:1.8;
          color:#cfcfcf;
          max-width:650px;
        }

        .btns{
          margin-top:25px;
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn{
          padding:14px 28px;
          border:none;
          cursor:pointer;
          font-weight:bold;
          border-radius:10px;
          background:#00ff41;
          color:black;
          box-shadow:0 0 20px #00ff41;
        }

        .btn2{
          padding:14px 28px;
          border:1px solid #00d9ff;
          background:transparent;
          color:#00d9ff;
          border-radius:10px;
        }

        .photoBox{
          width:330px;
          height:330px;
          border-radius:50%;
          padding:6px;
          background:
          linear-gradient(45deg,#00ff41,#00d9ff,#00ff41);
          box-shadow:
          0 0 25px #00ff41,
          0 0 60px #00d9ff;
        }

        .photo{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:50%;
        }

        .card{
          position:relative;
          z-index:2;
          margin-top:30px;
          padding:25px;
          border-radius:20px;
          background:rgba(255,255,255,.05);
          backdrop-filter:blur(10px);
          border:1px solid rgba(0,255,65,.3);
        }

        .card h2{
          color:#00ff41;
          margin-bottom:15px;
        }

        .skills{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }

        .skill{
          padding:10px 18px;
          border:1px solid #00ff41;
          border-radius:8px;
          color:#00ff41;
          box-shadow:0 0 10px #00ff41;
        }

        .terminal{
          background:black;
          border:1px solid #00ff41;
          padding:20px;
          border-radius:15px;
          color:#00ff41;
          font-family:monospace;
          line-height:1.8;
          box-shadow:0 0 20px #00ff41;
        }

        .projects{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:20px;
          margin-top:20px;
        }

        .project{
          padding:20px;
          border-radius:15px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(0,217,255,.4);
          transition:.3s;
        }

        .project:hover{
          transform:translateY(-8px);
          box-shadow:0 0 20px #00d9ff;
        }

        .project h3{
          color:#00d9ff;
          margin-bottom:10px;
        }

        .footer{
          text-align:center;
          margin-top:40px;
          color:#bbb;
        }
      `}</style>

      <div className="container">

        <div className="hero">

          <div className="left">

            <p className="hello">{">"} INITIALIZING PROFILE...</p>

            <h1 className="name">
              MOHAMMED <span style={{ color: "#00d9ff" }}>AASIF</span>
            </h1>

            <h2 className="role">
              JAVA BACKEND DEVELOPER 🚀
            </h2>

            <p className="desc">
              Passionate about Java, Spring Boot, REST APIs,
              MySQL and scalable backend systems.
              Currently learning modern backend development
              and preparing for product-based companies.
            </p>

            <div className="btns">
              <button className="btn">CONNECT</button>
              <button className="btn2">DOWNLOAD CV</button>
            </div>

          </div>

          <div className="photoBox">
            <img src={profile} alt="profile" className="photo" />
          </div>

        </div>

        <div className="card">
          <h2>SYSTEM STATUS</h2>

          <div className="terminal">
            <p>{">"} Loading User Data...</p>
            <p>{">"} Java ✓</p>
            <p>{">"} Spring Boot ✓</p>
            <p>{">"} REST API ✓</p>
            <p>{">"} MySQL ✓</p>
            <p>{">"} GitHub ✓</p>
            <p>{">"} Status : ONLINE</p>
          </div>
        </div>

        <div className="card">
          <h2>TECH STACK</h2>

          <div className="skills">
            <span className="skill">JAVA</span>
            <span className="skill">SPRING BOOT</span>
            <span className="skill">MYSQL</span>
            <span className="skill">REST API</span>
            <span className="skill">REACT</span>
            <span className="skill">GIT</span>
            <span className="skill">GITHUB</span>
          </div>
        </div>

        <div className="card">
          <h2>PROJECT DATABASE</h2>

          <div className="projects">

            <div className="project">
              <h3>🛡 FraudShield AI</h3>
              <p>
                AI-powered scam detection platform for
                SMS, Email and WhatsApp fraud analysis.
              </p>
            </div>

            <div className="project">
              <h3>☕ Java Internship Tasks</h3>
              <p>
                Calculator, Fibonacci, Factorial,
                Palindrome Checker and more.
              </p>
            </div>

            <div className="project">
              <h3>🚀 Backend API</h3>
              <p>
                Spring Boot REST API with MySQL
                and layered architecture.
              </p>
            </div>

          </div>
        </div>

        <div className="card">
          <h2>CONNECT_PROTOCOL</h2>

          <p>📧 aasif@example.com</p>
          <br />
          <p>🐙 github.com/aasif-developer</p>
          <br />
          <p>💼 LinkedIn Profile</p>
        </div>

        <div className="footer">
          © 2026 Mohammed AASIF | Cyber Portfolio
        </div>

      </div>
    </>
  );
}

export default App;