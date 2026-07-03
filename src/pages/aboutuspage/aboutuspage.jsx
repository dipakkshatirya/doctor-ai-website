import React, { useEffect, useRef } from "react";
// import "../pages.css";
import "./aboutuspage.css";

const specialties = [
  { name: "Joint Replacement", href: "/blog/joint-replacement" },
  { name: "Sports Medicine", href: "/blog/sports-medicine" },
  { name: "Hand & Wrist", href: "/blog/hand-wrist" },
  { name: "Foot & Ankle", href: "/blog/foot-ankle" },
  { name: "Spine Care", href: "/blog/spine" },
  { name: "Trauma & Fractures", href: "/blog/trauma-fractures" },
];

/**
 * Wraps any block in a scroll-reveal animation.
 * Adds the "is-visible" class once the element enters the viewport,
 * which triggers the fade/slide-in transition defined in about-us.css.
 */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

const AboutUsPage = () => {
  return (
    <section className="about-page">
      {/* Hero — animates in on page load, no scroll needed */}
      <div className="about-hero">
        <div className="about-hero-text">
          <span className="about-eyebrow load-in load-in-1">
            Trusted Medical Care
          </span>
          <h1 className="load-in load-in-2">
            Dr. Aarav <span>Sharma</span>
          </h1>
          <p className="about-tagline load-in load-in-3">
            Expert orthopedic care for joint replacement, sports injuries,
            hand, foot, spine, and fracture treatments.
          </p>

          <div className="about-stats load-in load-in-4">
            <div className="about-stat-card">
              <span className="about-stat-number">45,000+</span>
              <span className="about-stat-label">Patients Treated</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-number">4.8★</span>
              <span className="about-stat-label">Google Rating</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-number">20+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about-hero-images load-in load-in-2">
          <img
            src="https://plain-apac-prod-public.komododecks.com/202607/02/2lulIAM1YcctQUFrQTz2/image.png"
            alt="Dr. Aarav Sharma"
            className="about-hero-img-main"
          />
          <img
            src="https://plain-apac-prod-public.komododecks.com/202607/02/hbisVDxNe5nhqtjP1Ee8/image.png"
            alt="Dr. Aarav Sharma at the clinic"
            className="about-hero-img-secondary load-in load-in-5"
          />
        </div>
      </div>

      {/* Bio — reveals on scroll */}
      <Reveal className="about-bio">
        <h2>About the Doctor</h2>
        <p>
          Dr. Aarav Sharma is a dedicated orthopedic surgeon specializing in
          joint replacement, sports medicine, spine care, hand and wrist
          surgery, foot and ankle disorders, and trauma management. He is
          committed to delivering advanced, personalized treatment that helps
          patients recover mobility, relieve pain, and return to an active
          lifestyle.
        </p>
        <p>
          Having treated over 45,000 patients, Dr. Aarav Sharma is known for
          his medical excellence and reliability. His 4.8-star Google rating
          reflects his commitment to quality care and patient well-being.
        </p>
      </Reveal>

      {/* Specialties — heading reveals, then each card staggers in */}
      <div className="about-specialties">
        <Reveal as="h2">Specialties</Reveal>
        <div className="about-specialties-grid">
          {specialties.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} className="about-specialty-wrap">
              <a href={item.href} className="about-specialty-card">
                {item.name}
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Contact — reveals on scroll */}
      <Reveal className="about-contact">
        <h2>Get in Touch</h2>
        <div className="about-contact-grid">
          <div className="about-contact-item">
            <span className="about-contact-label">Address</span>
            <p>
              302, Shree Avenue Complex, Satellite Road, Near Shivranjani
              Crossroads, Ahmedabad, Gujarat 380015
            </p>
          </div>
          <div className="about-contact-item">
            <span className="about-contact-label">Phone</span>
            <a href="tel:+919879495597">+91 92651 39142</a>
          </div>
          <div className="about-contact-item">
            <span className="about-contact-label">Email</span>
            <a href="mailto:hracharya88@gmail.com">
              DrAaravSharma@business.com
            </a>
          </div>
        </div>

        <a href="/contact" className="about-cta-btn">
          Book Appointment
        </a>
      </Reveal>
    </section>
  );
};

export default AboutUsPage;