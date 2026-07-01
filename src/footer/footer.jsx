import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const treatments = [
  {
    label: "Diabetes Management",
    route: "/treatments/diabetes-management",
  },
  {
    label: "Blood Pressure Management",
    route: "/treatments/blood-pressure-management",
  },
  {
    label: "Chest Pain Management",
    route: "/treatments/chest-pain-management",
  },
  {
    label: "Thyroid Disorders",
    route: "/treatments/thyroid-disorders",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${inView ? "in-view" : ""}`}
    >
      <div className="footer-top">
        <div className="footer-grid">

          {/* About */}
          <div className="footer-col">
            <h3 className="footer-heading">Dr. Hinesh Acharya</h3>

            <p className="footer-about">
              Consultant Physician for Diabetes, Blood Pressure, Cardiac,
              Lung, Liver, Thyroid, Kidney, Brain Diseases and Fever of any
              type.
            </p>

            <div className="footer-socials">

              <a
                href="https://www.facebook.com/dr.hineshacharya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com/dr.hineshacharya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://wa.me/919879495597"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

            </div>
          </div>

          {/* Treatments */}
          <div className="footer-col">
            <h3 className="footer-heading">Treatment</h3>

            <ul className="footer-links">
              {treatments.map((item) => (
                <li key={item.route}>
                  <Link to={item.route}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Address</h3>

            <ul className="footer-contact">

              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="footer-contact-icon"
                />

                <span>
                  106, 1st Floor, Sun Gravitas,
                  <br />
                  Rajmani Society, Shyamal,
                  <br />
                  Ahmedabad, Gujarat 380015
                </span>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="footer-contact-icon"
                />

                <span>
                  <a href="tel:+919879495597">
                    +91 98794 95597
                  </a>

                  <br />

                  <a href="tel:+916352114024">
                    +91 63521 14024
                  </a>
                </span>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footer-contact-icon"
                />

                <span>
                  <a href="mailto:hracharya88@gmail.com">
                    hracharya88@gmail.com
                  </a>
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} Dr. Hinesh Acharya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;