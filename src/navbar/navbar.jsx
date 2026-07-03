import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
  faBone,
  faPersonRunning,
  faHand,
  faShoePrints,
  faNotesMedical,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://plain-apac-prod-public.komododecks.com/202607/02/IOS1g5zk4ewhR4OFMGDv/image.png"
            alt="Dr. Aarav Sharma"
          />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>

        {/* Desktop Specialties Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">
            Specialties <FontAwesomeIcon icon={faCaretDown} />
          </span>

          <div className="dropdown-menu">
            <NavLink to="/blog/joint-replacement">
              <FontAwesomeIcon icon={faBone} />
              Joint Replacement
            </NavLink>

            <NavLink to="/blog/sports-medicine">
              <FontAwesomeIcon icon={faPersonRunning} />
              Sports Medicine
            </NavLink>

            <NavLink to="/blog/hand-wrist">
              <FontAwesomeIcon icon={faHand} />
              Hand & Wrist
            </NavLink>

            <NavLink to="/blog/foot-ankle">
              <FontAwesomeIcon icon={faShoePrints} />
              Foot & Ankle
            </NavLink>

            <NavLink to="/blog/spine">
              <FontAwesomeIcon icon={faNotesMedical} />
              Spine
            </NavLink>

            <NavLink to="/blog/trauma-fractures">
              <FontAwesomeIcon icon={faTruckMedical} />
              Trauma & Fractures
            </NavLink>
          </div>
        </li>

        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <a
          href="https://wa.me/919265139142?text=Hello%20Dr.%20Aarav%20Sharma,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20time%20slots.%20Thank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="appointment-btn"
        >
          Book Appointment
        </a>

        <div
          className="mobile-menu"
          onClick={() => {
            setMenuOpen(!menuOpen);

            if (menuOpen) {
              setTreatmentOpen(false);
            }
          }}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          onClick={() => {
            setMenuOpen(false);
            setTreatmentOpen(false);
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => {
            setMenuOpen(false);
            setTreatmentOpen(false);
          }}
        >
          About Us
        </NavLink>

        {/* Mobile Specialties */}
        <div className="mobile-dropdown">
          <button
            className="mobile-dropdown-btn"
            onClick={() => setTreatmentOpen(!treatmentOpen)}
          >
            <span>Specialties</span>

            <FontAwesomeIcon
              icon={faCaretDown}
              className={treatmentOpen ? "rotate" : ""}
            />
          </button>

          <div
            className={`mobile-dropdown-content ${
              treatmentOpen ? "active" : ""
            }`}
          >
            <NavLink
              to="/blog/joint-replacement"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faBone} />
              Joint Replacement
            </NavLink>

            <NavLink
              to="/blog/sports-medicine"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faPersonRunning} />
              Sports Medicine
            </NavLink>

            <NavLink
              to="/blog/hand-wrist"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faHand} />
              Hand & Wrist
            </NavLink>

            <NavLink
              to="/blog/foot-ankle"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faShoePrints} />
              Foot & Ankle
            </NavLink>

            <NavLink
              to="/blog/spine"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faNotesMedical} />
              Spine
            </NavLink>

            <NavLink
              to="/blog/trauma-fractures"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faTruckMedical} />
              Trauma & Fractures
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/blog"
          onClick={() => {
            setMenuOpen(false);
            setTreatmentOpen(false);
          }}
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => {
            setMenuOpen(false);
            setTreatmentOpen(false);
          }}
        >
          Contact Us
        </NavLink>

        <a
          href="https://wa.me/919265139142?text=Hello%20Dr.%20Aarav%20Sharma,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20time%20slots.%20Thank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-btn"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;