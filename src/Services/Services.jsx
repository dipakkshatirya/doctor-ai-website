import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBone,
  faPersonRunning,
  faHand,
  faShoePrints,
  faNotesMedical,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";

const servicesData = [
  {
    id: "joint-replacement",
    route: "/blog/joint-replacement",
    icon: faBone,
    image:
      "https://totalspineortho.com/wp-content/uploads/2025/06/joint-replacement-1.webp",
    title: "Joint Replacement",
    description:
      "Advanced surgical treatment for damaged hip, knee and shoulder joints using modern joint replacement techniques to relieve pain, restore mobility and improve quality of life.",
  },
  {
    id: "sports-medicine",
    route: "/blog/sports-medicine",
    icon: faPersonRunning,
    image:
      "https://moveandshine.in/wp-content/uploads/2024/10/sports-injury-rehab.png",
    title: "Sports Medicine",
    description:
      "Specialized care for sports injuries including ligament tears, ACL injuries, meniscus damage, tendon problems and muscle strains with personalized rehabilitation plans.",
  },
  {
    id: "hand-wrist",
    route: "/blog/hand-wrist",
    icon: faHand,
    image:
      "https://www.dryogish.com/wp-content/uploads/2025/07/hand-wrist3.jpg",
    title: "Hand & Wrist",
    description:
      "Comprehensive treatment for hand and wrist fractures, carpal tunnel syndrome, tendon injuries, arthritis and other conditions affecting hand function and movement.",
  },
  {
    id: "foot-ankle",
    route: "/blog/foot-ankle",
    icon: faShoePrints,
    image:
      "https://southernbone.com/wp-content/uploads/2025/01/foot.webp",
    title: "Foot & Ankle",
    description:
      "Expert diagnosis and treatment for ankle sprains, heel pain, foot fractures, bunions, tendon disorders and other conditions affecting comfortable walking and mobility.",
  },
  {
    id: "spine",
    route: "/blog/spine",
    icon: faNotesMedical,
    image:
      "https://zenspine.in/wp-content/uploads/2023/06/Degenerative-Conditions.jpg",
    title: "Spine Care",
    description:
      "Comprehensive spine care for back pain, slipped discs, sciatica, spinal deformities and degenerative spine disorders using advanced surgical and non-surgical treatments.",
  },
  {
    id: "trauma-fractures",
    route: "/blog/trauma-fractures",
    icon: faTruckMedical,
    image:
      "https://www.drdivyanshugoyal.com/wp-content/uploads/2019/10/Bone-Fracture.jpg",
    title: "Trauma & Fractures",
    description:
      "Emergency orthopedic care for fractures, accident injuries, complex bone trauma and dislocations with timely treatment to ensure proper healing and recovery.",
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
        <h2 id="heading-servc">Our Orthopedic Specialties</h2>
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