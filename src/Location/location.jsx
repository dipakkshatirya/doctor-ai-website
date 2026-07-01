import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faClock,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./location.css";

const clinicPhotos = [
  "https://plain-apac-prod-public.komododecks.com/202606/30/kd9zYm7SHhjA0uLG9z5B/image.webp",
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Dr.+Hinesh+Acharya+M.D.+Medicine+M.D.+Physician+Ahmedabad";

const Location = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
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
      className={`location-section ${visible ? "show" : ""}`}
    >
      <div className="location-header">
        <h2 id="heading-location">Find Us</h2>

        <span className="location-underline"></span>

        <p className="location-subtext">
          Visit our clinic — easy to find, easy to reach
        </p>
      </div>

      <div className="location-map-card">
        {/* <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="location-open-maps"
        >
          Open in Maps
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a> */}

        <iframe
          title="Clinic"
          className="location-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.6623198445136!2d72.53031513267021!3d23.010883765447378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d3512918ff%3A0x3d1fa76a9f3e5d43!2sDr.%20Hinesh%20Acharya%20M.D.%20Medicine%20M.D.%20Physician!5e0!3m2!1sen!2sin!4v1782855129815!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

        <div className="location-card">
          <div className="location-card-image">
            <img src={clinicPhotos[0]} alt="Clinic" />

            <span className="location-card-pin">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>

          <div className="location-card-body">
            <p className="location-card-title">
              Dr. Hinesh Acharya Clinic
            </p>

            <p className="location-card-subtitle">
              Consultant Physician · Ahmedabad
            </p>

            <div className="location-card-bottom">
              <span className="location-card-timing">
                <span className="location-status-dot"></span>
                <FontAwesomeIcon icon={faClock} />
                Mon - Sat, 10AM - 7PM
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