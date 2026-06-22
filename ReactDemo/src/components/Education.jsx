import { education, certifications } from "../data/portfolio";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education__grid">
        <div className="education__block">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>

          {education.map((edu) => (
            <div key={edu.degree} className="education__item card">
              <span className="education__period">{edu.period}</span>
              <h3 className="education__degree">{edu.degree}</h3>
              <p className="education__institution">{edu.institution}</p>
              <p className="education__details">{edu.details}</p>
            </div>
          ))}
        </div>

        <div className="education__block">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Continuous Learning</h2>

          <div className="education__certs">
            {certifications.map((cert) => (
              <div key={cert.name} className="education__cert card">
                <div className="education__cert-info">
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <span className="education__cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
