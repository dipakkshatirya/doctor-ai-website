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
} from "@fortawesome/free-solid-svg-icons";
import "./Horizservices.css";

const conditions = [
  { name: "Viral Fever", icon: faVirus },
  { name: "Dengue Fever", icon: faMosquito },
  { name: "Headache", icon: faBrain },
  { name: "Migraine", icon: faBolt },
  { name: "Chikungunya Fever", icon: faMosquito },
  { name: "Stone Pain", icon: faGem },
  { name: "Pneumonia", icon: faLungs },
  { name: "Cold", icon: faSnowflake },
  { name: "Cough", icon: faHeadSideCough },
  { name: "Asthma", icon: faWind },
  { name: "COPD", icon: faLungs },
  { name: "Depression", icon: faFaceSadTear },
  { name: "Anxiety", icon: faFaceDizzy },
  { name: "Typhoid Fever", icon: faThermometerFull },
  { name: "Diarrhoea", icon: faDroplet },
  { name: "IM, IV Injections", icon: faSyringe },
  { name: "B12 Injections", icon: faVial },
  { name: "CV Stroke", icon: faHeartCircleExclamation },
  { name: "Urine Infection", icon: faFlask },
  { name: "Jaundice", icon: faDroplet },
  { name: "Dressing for Minor Injuries", icon: faBandage },
  { name: "Ischemic Heart Disease", icon: faHeartPulse },
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