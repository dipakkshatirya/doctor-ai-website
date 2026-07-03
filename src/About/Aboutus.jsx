import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowRight,
  faAward,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const CountUp = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  start,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, end, duration]);

  return (
    <span className="countup-value">
      {decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}
      {suffix}
    </span>
  );
};

const Aboutus = () => {
  const [inView, setInView] = useState(false);
  const [contentInView, setContentInView] = useState(false);
  const statsRef = useRef(null);
  const containerRef = useRef(null);

  // Stats counter observer (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  // Text + image scroll-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);
  const navigate = useNavigate();

  return (
    <section className="aboutus">
      {/* Main Content */}
      <div className="aboutus-container" ref={containerRef}>
        {/* Left Content */}
        <div className={`aboutus-content ${contentInView ? "in-view" : ""}`}>
          <h2 className="aboutus-heading">About Us</h2>

          <p className="aboutus-paragraph">
            Dr. Aarav Sharma is a dedicated orthopedic surgeon specializing in
            joint replacement, sports medicine, spine care, hand and wrist
            surgery, foot and ankle disorders, and trauma management. He is
            committed to delivering advanced, personalized treatment that helps
            patients recover mobility, relieve pain, and return to an active
            lifestyle.
          </p>

          <p className="aboutus-paragraph">
            Having treated over 45,000 patients, Dr. Aarav Sharma is known for
            his medical excellence and reliability. His 4.8-star Google rating
            reflects his commitment to quality care and patient well-being.
          </p>
        </div>

        {/* Right Image */}
        <div className={`aboutus-image ${contentInView ? "in-view" : ""}`}>
          <div className="image-wrapper">
            <img
              src="https://plain-apac-prod-public.komododecks.com/202607/02/hbisVDxNe5nhqtjP1Ee8/image.png"
              alt="Dr"
              className="doctor-image"
            />

            <div className="image-shadow"></div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-section" ref={statsRef}>
        <div className="stat-card">
          <FontAwesomeIcon icon={faUserGroup} className="stat-icon" />

          <h3 className="stat-number">
            <CountUp end={45000} start={inView} suffix="+" />
          </h3>

          <p className="stat-label">Patients</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faAward} className="stat-icon" />

          <h3 className="stat-number">
            <CountUp end={20} start={inView} suffix=" Years" />
          </h3>

          <p className="stat-label">of Experience</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faStar} className="stat-icon" />

          <h3 className="stat-number">
            <CountUp end={4.8} decimals={1} start={inView} suffix=" Star" />
          </h3>

          <p className="stat-label">On Google</p>
        </div>
      </div>

      {/* Button */}
      <div className="aboutus-button">
        <button className="read-more-btn" onClick={() => navigate("/about")}>
          <span>Read More</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default Aboutus;
