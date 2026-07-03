import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="top-header">
      {/* Phone */}
      <div className="header-box">
        <div className="icon-box">
          <FontAwesomeIcon icon={faPhoneVolume} />
        </div>
        <p>
          <span className="full-text">
            <strong>Call Us:</strong>{" "}
            <a href="tel:+919879495597">+91 92651 39142</a>
            
          </span>
          <a href="tel:+919879495597" className="short-text">Call</a>
        </p>
      </div>

      <div className="divider"></div>

      {/* Email */}
      <div className="header-box">
        <div className="icon-box">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <p>
          <span className="full-text">
            <strong>Email:</strong>{" "}
            <a href="mailto:i.dipakkshatriya@gmail.com?subject=Appointment%20Request">DrAaravSharma@business.com</a>
          </span>
          <a href="mailto:i.dipakkshatriya@gmail.com?subject=Appointment%20Request" className="short-text">Email</a>
        </p>
      </div>

      <div className="divider"></div>

      {/* Location */}
      <div className="header-box">
        <div className="icon-box">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <p>
          <span className="full-text">
            <strong>Clinic:</strong>{" "}
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Satellite Road, Near Shivranjani, Ahmedabad</a>
          </span>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="short-text">Clinic</a>
        </p>
      </div>
    </header>
  );
};

export default Header;