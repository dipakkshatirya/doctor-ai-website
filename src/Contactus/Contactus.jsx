import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
  faPaperPlane,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <section
      ref={sectionRef} id="contact"
      className={`contact-section ${inView ? "in-view" : ""}`}
    >
      <div className="contact-header">
        <h2 id="heading-contact">Contact Us</h2>
        <span className="contact-underline"></span>

        <p className="contact-subtext">
          Have a question or want to book a visit? Send us a message.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* FORM */}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <FontAwesomeIcon
              icon={faUser}
              className="contact-field-icon"
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact-field-icon"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <FontAwesomeIcon
              icon={faPhone}
              className="contact-field-icon"
            />

            <input
              type="tel"
              name="number"
              placeholder="Phone number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="contact-field-icon contact-field-icon-top"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="contact-submit">
            Send Message

            <FontAwesomeIcon
              icon={faPaperPlane}
              id="contact-send-icon"
            />
          </button>
        </form>

        {/* IMAGE */}

        <div className="contact-image-wrap">
          <img
            src="https://plain-apac-prod-public.komododecks.com/202606/30/aWWRXr2qap78Qfr7eqKV/image.jpg"
            alt="Doctor"
            className="contact-image"
          />

          <div className="contact-floating-card">
            <div className="contact-floating-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div>
              <p className="contact-floating-title">
                Visit Clinic
              </p>

              <p className="contact-floating-text">
                Ahmedabad, Gujarat
              </p>
            </div>
          </div>

          <div className="contact-floating-card contact-floating-card-bottom">
            <div className="contact-floating-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>

            <div>
              <p className="contact-floating-title">
                Working Hours
              </p>

              <p className="contact-floating-text">
                Mon - Sat | 10AM - 7PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;