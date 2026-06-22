import { useState } from "react";
import { profile } from "../data/portfolio";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-desc">
            I'm actively seeking backend developer opportunities at product-based
            companies and MNCs. Whether you're a recruiter or a fellow developer —
            I'd love to connect.
          </p>

          <div className="contact__details">
            <a href={`mailto:${profile.email}`} className="contact__detail card">
              <span className="contact__detail-icon">✉</span>
              <div>
                <strong>Email</strong>
                <p>{profile.email}</p>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__detail card">
              <span className="contact__detail-icon">in</span>
              <div>
                <strong>LinkedIn</strong>
                <p>Connect professionally</p>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__detail card">
              <span className="contact__detail-icon">GH</span>
              <div>
                <strong>GitHub</strong>
                <p>View my repositories</p>
              </div>
            </a>
          </div>
        </div>

        <form className="contact__form card" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          {sent && (
            <p className="contact__success">
              Opening your email client… Feel free to send the message directly.
            </p>
          )}

          <div className="contact__field">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="I'd like to discuss an opportunity..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
