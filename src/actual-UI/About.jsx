import { useState, useEffect } from 'react';
import '../css/About.css'

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`about-container ${loaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">
            Innovating the Future
            <span className="title-highlight"></span>
          </h1>
          <p className="hero-subtitle animate-fade-in">Where Technology Meets Creativity</p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <h2 className="section-title animate-slide-left">Our Culture</h2>
        <div className="culture-grid">
          {cultureItems.map((item, index) => (
            <div key={index} className="culture-card animate-card">
              <div className="culture-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title animate-slide-right">Meet Our Leader</h2>
        <div className="profile-card animate-scale">
          <div className="profile-image">
            <img src="/path-to-owner-image.jpg" alt="Company Owner" />
          </div>
          <div className="profile-info">
            <h3>John Doe</h3>
            <p className="position">CEO & Founder</p>
            <p className="bio">Visionary leader with 15+ years of experience in tech innovation...</p>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="process-section">
        <h2 className="section-title animate-slide-left">Our Process</h2>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="step animate-step">
              <div className="step-number">0{index + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-fade-in">
        <h2 className="section-title">Let's Connect</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

// Sample data
const cultureItems = [
  { icon: '🤝', title: 'Collaboration', description: 'We believe in teamwork and shared success' },
  { icon: '🚀', title: 'Innovation', description: 'Constantly pushing boundaries of technology' },
  { icon: '❤️', title: 'Passion', description: 'Driven by love for what we do' },
];

const processSteps = [
  { title: 'Discovery', description: 'Understanding client needs and objectives' },
  { title: 'Strategy', description: 'Developing tailored solutions and planning' },
  { title: 'Execution', description: 'Implementing with precision and care' },
];

export default AboutUs;