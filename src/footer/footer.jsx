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
    label: "Joint Replacement",
    route: "/blog/joint-replacement",
  },
  {
    label: "Sports Medicine",
    route: "/blog/sports-medicine",
  },
  {
    label: "Hand & Wrist",
    route: "/blog/hand-wrist",
  },
  {
    label: "Foot & Ankle",
    route: "/blog/foot-ankle",
  },
  {
    label: "Spine Care",
    route: "/blog/spine",
  },
  {
    label: "Trauma & Fractures",
    route: "/blog/trauma-fractures",
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
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${inView ? "in-view" : ""}`}>
      <div className="footer-top">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-col">
            <h3 className="footer-heading">Dr. Aarav Sharma</h3>

            <p className="footer-about">
              Expert orthopedic care for joint replacement, sports injuries,
              hand, foot, spine, and fracture treatments.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://wa.me/919265139142"
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
            <h3 className="footer-heading">Specialties</h3>

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
                  302, Shree Avenue Complex,
                  <br />
                  Satellite Road, Near Shivranjani Crossroads,
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
                  <a href="tel:+919879495597">+91 92651 39142</a>

                  {/* <br /> */}

                  {/* <a href="tel:+916352114024">+91 92651 39142</a> */}
                </span>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footer-contact-icon"
                />

                <span>
                  <a href="mailto:hracharya88@gmail.com">
                    DrAaravSharma@business.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Dr. Aarav Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
