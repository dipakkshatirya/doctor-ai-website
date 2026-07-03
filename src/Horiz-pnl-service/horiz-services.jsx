import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVirus,
  faMosquito,
  faBrain,
  faBolt,
  faGem,
  faLungs,
  faSnowflake,
  faHeadSideCough,
  faWind,
  faFaceSadTear,
  faFaceDizzy,
  faThermometerFull,
  faDroplet,
  faSyringe,
  faVial,
  faHeartCircleExclamation,
  faFlask,
  faBandage,
  faHeartPulse,
  faBone,
  faPersonRunning,
  faHand,
  faShoePrints,
  faNotesMedical,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import "./Horizservices.css";

const conditions = [
 { name: "Knee Arthritis", icon: faBone },
  { name: "Hip Arthritis", icon: faBone },
  { name: "Joint Replacement", icon: faBone },
  { name: "Sports Injuries", icon: faPersonRunning },
  { name: "ACL Tear", icon: faPersonRunning },
  { name: "Meniscus Injury", icon: faPersonRunning },
  { name: "Shoulder Dislocation", icon: faHand },
  { name: "Rotator Cuff Injury", icon: faHand },
  { name: "Carpal Tunnel Syndrome", icon: faHand },
  { name: "Hand & Wrist Fractures", icon: faHand },
  { name: "Foot & Ankle Pain", icon: faShoePrints },
  { name: "Ankle Ligament Injury", icon: faShoePrints },
  { name: "Heel Pain", icon: faShoePrints },
  { name: "Plantar Fasciitis", icon: faShoePrints },
  { name: "Back Pain", icon: faNotesMedical },
  { name: "Neck Pain", icon: faNotesMedical },
  { name: "Slipped Disc", icon: faNotesMedical },
  { name: "Sciatica", icon: faNotesMedical },
  { name: "Spinal Disorders", icon: faNotesMedical },
  { name: "Bone Fractures", icon: faTruckMedical },
  { name: "Trauma Care", icon: faTruckMedical },
  { name: "Post-Fracture Rehabilitation", icon: faTruckMedical },
];

const Horizservices = () => {
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

  return (
    <section
      className={`horiz-section ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      {/* Heading */}
      <div className="horiz-header">
        <h2 id="heading-horiz">Conditions Treated</h2>
        <span className="horiz-underline"></span>
      </div>

      {/* Infinite Marquee */}
      <div className="horiz-marquee">
        <div className="horiz-track">
          {[...conditions, ...conditions].map((item, index) => (
            <div className="horiz-chip" key={`${item.name}-${index}`}>
              <span className="horiz-chip-icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>

              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Horizservices;