import { useState, useEffect } from "react";
import { navLinks, profile } from "../data/portfolio";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo("home")}>
          <span className="navbar__logo-mark">MA</span>
          <span className="navbar__logo-text">{profile.lastName}</span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="navbar__link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a href={profile.resumeUrl} className="btn btn-primary navbar__cta" download>
            Resume
          </a>
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
