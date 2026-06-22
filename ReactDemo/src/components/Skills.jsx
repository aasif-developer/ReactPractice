import { skills } from "../data/portfolio";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-desc">
            A focused stack aligned with enterprise backend development — from
            core Java to Spring ecosystem and modern tooling.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__group card">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
