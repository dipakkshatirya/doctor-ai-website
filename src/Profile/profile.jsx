import React, { useState, useEffect } from "react";
import "./profile.css";

const images = [
  // "https://plain-apac-prod-public.komododecks.com/202606/29/OruCmUDJ9ol0Mw91z7WS/image.png",
  "https://plain-apac-prod-public.komododecks.com/202606/30/kd9zYm7SHhjA0uLG9z5B/image.webp",
  "https://plain-apac-prod-public.komododecks.com/202606/30/ZX3X2HvyaSlZCQ3EcFxM/image.webp",
  "https://plain-apac-prod-public.komododecks.com/202606/30/dJHl3IsAUxnyHejJ4RXn/image.webp",
];

const borderRadii = [
  "12px 24px 12px 24px",
  "24px 8px 24px 8px",
  "16px 16px 4px 4px",
  // "8px 20px 8px 20px",
];

const Profile = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [borderIdx, setBorderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
      setBorderIdx((prev) => (prev + 1) % borderRadii.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="profile">
      {/* Left Side - Doctor Image + Overlays */}
      <div className="left-side">
        {/* Main doctor image */}
        <div className="doctor-img-wrapper">
          <img
            className="doctor-main-img"
            src="https://plain-apac-prod-public.komododecks.com/202606/29/D8KzldaoUj7ko8czzVVh/image.png"
            alt="Dr. Hinesh Acharya"
          />
        </div>

        {/* Floating badge - 10+ Years Exp */}
        <div className="exp-badge">
          <div className="exp-badge-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
            >
              <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="2" />
              <path
                d="M7 13l-3 7 8-3 8 3-3-7"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="exp-badge-text">
            <span className="exp-number">10+</span>
            <span className="exp-label">Years Exp.</span>
          </div>
        </div>

        {/* Frequently changing image - crossfade between all images */}
        <div
          className="freq-img-box"
          style={{ borderRadius: borderRadii[borderIdx] }}
        >
          <div className="freq-img-inner">
            {images.map((src, i) => (
              <img
                key={`${src}-${i}`} // Updated to ensure absolute uniqueness
                src={src}
                alt="clinic"
                className={`freq-img ${i === currentImg ? "active" : "inactive"}`}
              />
            ))}
          </div>
          <div className="freq-img-fade" />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="right-side">
        <span className="eyebrow">Trusted Medical Care</span>
        <h3 className="dr-prefix">DR.</h3>
        <h1 className="dr-name">Hinesh Acharya</h1>

        <p className="dr-desc">
          Consultant Physician for Diabetes, Blood Pressure, Cardiac, Lung,
          Liver, Thyroid, Kidney, Brain Diseases and Fever of any type.
        </p>

        <button
          className="contact-btn"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Profile;
