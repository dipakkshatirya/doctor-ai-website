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
            <a href="tel:+919879495597">+91 98794 95597</a>
            {" | "}
            <a href="tel:+916352114024">+91 63521 14024</a>
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
            <a href="mailto:hracharya88@gmail.com?subject=Appointment%20Request">hracharya88@gmail.com</a>
          </span>
          <a href="mailto:hracharya88@gmail.com?subject=Appointment%20Request" className="short-text">Email</a>
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
            <a href="https://maps.app.goo.gl/1fCYeh32UbfLgmz89" target="_blank" rel="noopener noreferrer">Rajmani Society, Shyamal, Ahmedabad</a>
          </span>
          <a href="https://maps.app.goo.gl/1fCYeh32UbfLgmz89" target="_blank" rel="noopener noreferrer" className="short-text">Clinic</a>
        </p>
      </div>
    </header>
  );
};

export default Header;