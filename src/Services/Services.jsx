import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDroplet,
  faHeartPulse,
  faHeartCircleExclamation,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";

const servicesData = [
  {
    id: "diabetes",
    route: "/treatments/diabetes-management",
    icon: faDroplet,
    image:
      "https://cdn.scope.digital/Images/Articles/diyabet-nedir-seker-hastaligi-belirtileri-nelerdir-6792354.jpg?tr=w-630,h-420",
    title: "Diabetes Management",
    description:
      "We have in-clinic Glucometer to measure blood sugar and laboratory to check FAS, PPBS, Hb A,C. We have Diet advise by doctor and weight management plans.",
  },
  {
    id: "blood-pressure",
    route: "/treatments/blood-pressure-management",
    icon: faHeartPulse,
    image:
      "https://ebv2e3r5onu.exactdn.com/wp-content/uploads/2021/12/Blood-Pressure-Numbers_Newsroom-1024x576.jpg?strip=all",
    title: "Blood Pressure Management",
    description:
      "We treat blood pressure patients at our clinic with the best knowledge and experience of Dr. Hinesh Acharya. We have in-clinic blood pressure measuring.",
  },
  {
    id: "chest-pain",
    route: "/treatments/chest-pain-management",
    icon: faHeartCircleExclamation,
    image:
      "https://parashospitals-web.s3.ap-south-1.amazonaws.com/blogs/August2024/1724911181Chest%20pain.jpg",
    title: "Chest Pain Management",
    description:
      "We have ECG facility at the clinic for diagnosis of cardiac problems and immediate evaluation of chest pain related concerns.",
  },
  {
    id: "thyroid",
    route: "/treatments/thyroid-disorders",
    icon: faBrain,
    image:
      "https://www.thehealthsite.com/wp-content/uploads/2022/02/thyroid.jpeg",
    title: "Thyroid Disorders",
    description:
      "We treat thyroid patients at our clinic with the best treatment plans, regular monitoring and personalised care for lasting results.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const [inView, setInView] = useState(false);
  const servicesRef = useRef(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" ref={servicesRef}>
      <div className={`services-header ${inView ? "in-view" : ""}`}>
        <h2 id="heading-servc">Our Services</h2>
        <span className="services-underline"></span>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${inView ? "in-view" : ""}`}
            style={{ animationDelay: `${0.15 * index}s` }}
          >
            <div className="service-card-img-wrap">
              <img src={service.image} alt={service.title} />

              <div className="service-icon-badge">
                <FontAwesomeIcon icon={service.icon} />
              </div>
            </div>

            <div className="service-card-body">
              <p className="service-title">{service.title}</p>

              <p className="service-desc">{service.description}</p>

              <button
                className="service-read-more"
                onClick={() => navigate(service.route)}
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  id="read-more-icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;