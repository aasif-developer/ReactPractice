import { experience } from "../data/portfolio";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-desc">
            Hands-on experience building backend systems, collaborating on real
            projects, and following engineering best practices.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((job, index) => (
            <article key={job.role} className="experience__item card">
              <div className="experience__marker">
                <span className="experience__dot" />
                {index < experience.length - 1 && <span className="experience__line" />}
              </div>

              <div className="experience__body">
                <div className="experience__meta">
                  <span className="experience__type">{job.type}</span>
                  <span className="experience__period">{job.period}</span>
                </div>
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">{job.company}</p>
                <ul className="experience__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
