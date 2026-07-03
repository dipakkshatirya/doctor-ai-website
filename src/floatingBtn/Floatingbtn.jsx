import React from "react";
import "./Floatingbtn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Floatingbtn = () => {
  return (
    <>
      {/* Phone */}
      <a
        href="tel:+919265139142"
        className="floating-btn phone-btn"
        aria-label="Call Now"
      >
        <span className="floating-ripple"></span>
        <span className="floating-ripple delay"></span>

        <FontAwesomeIcon icon={faPhone} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919265139142"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp"
      >
        <span className="floating-ripple"></span>
        <span className="floating-ripple delay"></span>

        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
};

export default Floatingbtn;