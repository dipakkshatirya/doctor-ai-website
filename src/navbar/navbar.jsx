import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
  faHeartbeat,
  faDroplet,
  faLungs,
  faUserDoctor,
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
            src="https://plain-apac-prod-public.komododecks.com/202606/28/9ohEpKZecARyHaZ6stcZ/image.png"
            alt="Dr. Hinesh Acharya"
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

        {/* Desktop Treatments Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">
            Treatments <FontAwesomeIcon icon={faCaretDown} />
          </span>

          <div className="dropdown-menu">
            <NavLink to="/treatments/diabetes-management">
              <FontAwesomeIcon icon={faDroplet} />
              Diabetes Management
            </NavLink>

            <NavLink to="/treatments/blood-pressure-management">
              <FontAwesomeIcon icon={faHeartbeat} />
              Blood Pressure Management
            </NavLink>

            <NavLink to="/treatments/chest-pain-management">
              <FontAwesomeIcon icon={faLungs} />
              Chest Pain Management
            </NavLink>

            <NavLink to="/treatments/thyroid-disorders">
              <FontAwesomeIcon icon={faUserDoctor} />
              Thyroid Disorders
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
          href="https://wa.me/919879495597?text=Hello%20Dr.%20Hinesh%20Acharya,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20time%20slots.%20Thank%20you."
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

            // Close treatments when menu closes
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

        {/* Mobile Treatments Accordion */}
        <div className="mobile-dropdown">
          <button
            className="mobile-dropdown-btn"
            onClick={() => setTreatmentOpen(!treatmentOpen)}
          >
            <span>Treatments</span>

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
              to="/treatments/diabetes-management"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
              Diabetes Management
            </NavLink>

            <NavLink
              to="/treatments/blood-pressure-management"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faHeartbeat} />
              Blood Pressure Management
            </NavLink>

            <NavLink
              to="/treatments/chest-pain-management"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faLungs} />
              Chest Pain Management
            </NavLink>

            <NavLink
              to="/treatments/thyroid-disorders"
              onClick={() => {
                setMenuOpen(false);
                setTreatmentOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faUserDoctor} />
              Thyroid Disorders
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
          href="https://wa.me/919879495597?text=Hello%20Dr.%20Hinesh%20Acharya,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20time%20slots.%20Thank%20you."
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