import { profile, stats } from "../data/portfolio";
import "./Hero.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content fade-in">
          {profile.available && (
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Open to Backend Developer Roles
            </div>
          )}

          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">{profile.title}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View My Work
            </button>
            <a href={profile.resumeUrl} className="btn btn-outline" download>
              Download Resume
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <span className="hero__social-divider" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <span className="hero__social-divider" />
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="hero__visual fade-in">
          <div className="hero__photo-wrap">
            <img src={profile.photo} alt={profile.name} className="hero__photo" />
          </div>
          <div className="hero__card hero__card--top">
            <span className="hero__card-label">Focus</span>
            <strong>Spring Boot & REST APIs</strong>
          </div>
          <div className="hero__card hero__card--bottom">
            <span className="hero__card-label">Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
