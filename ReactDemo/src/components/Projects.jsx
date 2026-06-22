import { projects } from "../data/portfolio";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Real-world applications demonstrating backend architecture, API design,
            and full-stack integration — built to enterprise standards.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`projects__card card ${project.featured ? "projects__card--featured" : ""}`}
            >
              {project.featured && <span className="projects__featured-badge">Featured</span>}

              <div className="projects__card-header">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__subtitle">{project.subtitle}</p>
              </div>

              <p className="projects__desc">{project.description}</p>

              <ul className="projects__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="projects__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline projects__link"
                >
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary projects__link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
