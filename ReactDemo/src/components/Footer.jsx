import { profile } from "../data/portfolio";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">MA</span>
          <p>
            {profile.name} — {profile.title}
          </p>
        </div>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <p className="footer__copy">
          © {year} {profile.name}. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
