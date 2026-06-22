import { about } from "../data/portfolio";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Backend Engineer with a Product Mindset</h2>
        </div>

        <div className="about__content">
          <p className="about__summary">{about.summary}</p>

          <ul className="about__highlights">
            {about.highlights.map((item) => (
              <li key={item} className="about__highlight">
                <span className="about__check">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="about__values">
            <div className="about__value card">
              <span className="about__value-icon">⚡</span>
              <h3>Performance</h3>
              <p>Optimized queries and efficient API design for scalable systems</p>
            </div>
            <div className="about__value card">
              <span className="about__value-icon">🛡</span>
              <h3>Reliability</h3>
              <p>Robust error handling, validation, and secure coding practices</p>
            </div>
            <div className="about__value card">
              <span className="about__value-icon">📐</span>
              <h3>Architecture</h3>
              <p>Clean layered design following industry-standard patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
