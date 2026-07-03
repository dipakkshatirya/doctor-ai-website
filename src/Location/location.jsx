import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./location.css";

const clinicPhotos = [
  "https://plain-apac-prod-public.komododecks.com/202607/02/oLSqPxQgOKRt8XQgdQJw/image.png",
];

const Location = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`location-section ${show ? "show" : ""}`}
    >
      <div className="location-header">
        <h2 id="heading-location">Find Us</h2>

        <span className="location-underline"></span>

        <p className="location-subtext">
          Visit our clinic — easy to find, easy to reach
        </p>
      </div>

      <div className="location-map-card">
        <iframe
          title="Clinic"
          className="location-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235169.99872668734!2d72.26207344540272!3d22.930654933300136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a22e4629eb%3A0xd037452381bd2204!2sAarav%20Physiotherapy%20Centre!5e0!3m2!1sen!2sin!4v1783052708234!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="location-card">
          <div className="location-card-image">
            <img src={clinicPhotos[0]} alt="Dr. Aarav Sharma Clinic" />

            <span className="location-card-pin">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>

          <div className="location-card-body">
            <p className="location-card-title">
              Dr. Aarav Sharma Clinic
            </p>

            <p className="location-card-subtitle">
              Orthopedic Surgeon · Ahmedabad
            </p>

            <div className="location-card-bottom">
              <span className="location-card-timing">
                <span className="location-status-dot"></span>
                <FontAwesomeIcon icon={faClock} />
                Mon – Sat, 10:00 AM – 7:00 PM
              </span>

              <span className="location-card-rating">
                <FontAwesomeIcon icon={faStar} />
                4.9
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;