import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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

  const navigate = useNavigate();
  const location = useLocation();

  // Closes any open menus (used on every nav click)
  const closeMenus = () => {
    setMenuOpen(false);
    setTreatmentOpen(false);
  };

  // Scrolls to a section on the home page.
  // If we're not on "/", navigate there first, then let Home's
  // hash-scroll effect (in App.jsx) handle scrolling once mounted.
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    closeMenus();

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

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
          <NavLink to="/" onClick={closeMenus}>
            Home
          </NavLink>
        </li>

        <li>
          <a href="#about" onClick={scrollToSection("about")}>
            About Us
          </a>
        </li>

        {/* Desktop Specialties Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">
            Specialties <FontAwesomeIcon icon={faCaretDown} />
          </span>

          <div className="dropdown-menu">
            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faBone} />
              Joint Replacement
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faPersonRunning} />
              Sports Medicine
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faHand} />
              Hand & Wrist
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faShoePrints} />
              Foot & Ankle
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faNotesMedical} />
              Spine
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faTruckMedical} />
              Trauma & Fractures
            </a>
          </div>
        </li>

        <li>
          <NavLink to="/blog" onClick={closeMenus}>
            Blog
          </NavLink>
        </li>

        <li>
          <a href="#contact" onClick={scrollToSection("contact")}>
            Contact Us
          </a>
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
        <NavLink to="/" onClick={closeMenus}>
          Home
        </NavLink>

        <a href="#about" onClick={scrollToSection("about")}>
          About Us
        </a>

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
            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faBone} />
              Joint Replacement
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faPersonRunning} />
              Sports Medicine
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faHand} />
              Hand & Wrist
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faShoePrints} />
              Foot & Ankle
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faNotesMedical} />
              Spine
            </a>

            <a href="#services" onClick={scrollToSection("services")}>
              <FontAwesomeIcon icon={faTruckMedical} />
              Trauma & Fractures
            </a>
          </div>
        </div>

        <NavLink to="/blog" onClick={closeMenus}>
          Blog
        </NavLink>

        <a href="#contact" onClick={scrollToSection("contact")}>
          Contact Us
        </a>

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