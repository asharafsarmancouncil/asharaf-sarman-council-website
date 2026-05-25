import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { MapPin, Phone, HeartHandshake, Sprout, Users, ArrowRight } from "lucide-react";
import "./styles.css";

function App() {
  const services = [
    {
      icon: <Users />,
      title: "Community Unity",
      text: "Bringing families, elders, youth, and community leaders together through shared service and support.",
    },
    {
      icon: <HeartHandshake />,
      title: "Service & Support",
      text: "Connecting people to helpful resources, guidance, programs, and opportunities that strengthen daily life.",
    },
    {
      icon: <Sprout />,
      title: "Growth & Prosperity",
      text: "Promoting education, development, leadership, and long-term community success.",
    },
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#home">
            <span className="brand-logo">
              <img src="/logo.png" alt="Asharaf Sarman Council logo" />
            </span>
            <span>
              <strong>Asharaf Sarman Council</strong>
              <small>Hope • Prosperity • Growth</small>
            </span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-primary" href="#contact">Get Involved</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="glow glow-gold"></div>
          <div className="glow glow-green"></div>

          <div className="hero-inner">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Community Development</p>
              <h1>Building a stronger community through unity, service, and opportunity.</h1>
              <p className="hero-text">
                Asharaf Sarman Council of North America is dedicated to supporting community growth,
                family stability, leadership, and prosperity.
              </p>

              <div className="hero-actions">
                <a className="button button-green" href="#about">
                  Learn More <ArrowRight size={18} />
                </a>
                <a className="button button-outline" href="#contact">Contact Us</a>
              </div>
            </motion.div>

            <motion.div
              className="logo-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img src="/logo.png" alt="Asharaf Sarman Council logo" />
            </motion.div>
          </div>
        </section>

        <section id="about" className="purpose">
          <div className="section-center">
            <p className="eyebrow gold">Our Purpose</p>
            <h2>Hope. Prosperity. Growth.</h2>
            <p>
              We work to uplift the community by creating connections, encouraging service,
              and building pathways toward education, opportunity, and long-term success.
            </p>
          </div>
        </section>

        <section id="programs" className="programs">
          <div className="section-heading">
            <p className="eyebrow">What We Focus On</p>
            <h2>Programs and community priorities</h2>
          </div>

          <div className="cards">
            {services.map((item) => (
              <article className="card" key={item.title}>
                <div className="icon">{React.cloneElement(item.icon, { size: 30 })}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="steps">
          <div className="step">
            <span>01</span>
            <h3>Connect</h3>
            <p>Build relationships and identify community needs.</p>
          </div>
          <div className="step">
            <span className="green">02</span>
            <h3>Serve</h3>
            <p>Support families with practical programs and resources.</p>
          </div>
          <div className="step">
            <span className="navy">03</span>
            <h3>Grow</h3>
            <p>Create opportunities for long-term prosperity and leadership.</p>
          </div>
        </section>

        <section id="contact" className="contact-wrap">
          <div className="contact">
            <div>
              <p className="eyebrow gold">Contact</p>
              <h2>Get in touch</h2>
              <p>
                Reach out to Asharaf Sarman Council of North America for community development,
                partnership, and support opportunities.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-row">
                <MapPin />
                <p>14587 Grand Ave Ste 110<br />Burnsville, MN 55306</p>
              </div>
              <div className="contact-row">
                <Phone />
                <p>+1 (612) 919-2063</p>
              </div>
              <p className="director">Executive Director: Mohamed Noor</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Asharaf Sarman Council of North America. All rights reserved.</p>
        <p>Hope • Prosperity • Growth</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
