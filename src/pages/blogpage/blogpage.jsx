import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBone,
  faPersonRunning,
  faHand,
  faShoePrints,
  faNotesMedical,
  faTruckMedical,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
// import "../pages.css";
import "./blogpage.css";

const posts = [
  {
    id: "joint-replacement",
    route: "/blog/joint-replacement",
    icon: faBone,
    image:
      "https://totalspineortho.com/wp-content/uploads/2025/06/joint-replacement-1.webp",
    title: "Joint Replacement",
    readTime: "6 min read",
    description:
      "Advanced surgical treatment for damaged hip, knee and shoulder joints using modern joint replacement techniques to relieve pain, restore mobility and improve quality of life.",
    highlights: [
      "Minimally invasive hip, knee & shoulder implants",
      "Robotic-assisted precision surgery",
      "Personalized post-op rehab plans",
    ],
  },
  {
    id: "sports-medicine",
    route: "/blog/sports-medicine",
    icon: faPersonRunning,
    image:
      "https://moveandshine.in/wp-content/uploads/2024/10/sports-injury-rehab.png",
    title: "Sports Medicine",
    readTime: "5 min read",
    description:
      "Specialized care for sports injuries including ligament tears, ACL injuries, meniscus damage, tendon problems and muscle strains with personalized rehabilitation plans.",
    highlights: [
      "ACL & ligament reconstruction",
      "Arthroscopic meniscus repair",
      "Sport-specific return-to-play programs",
    ],
  },
  {
    id: "hand-wrist",
    route: "/blog/hand-wrist",
    icon: faHand,
    image: "https://www.dryogish.com/wp-content/uploads/2025/07/hand-wrist3.jpg",
    title: "Hand & Wrist",
    readTime: "4 min read",
    description:
      "Comprehensive treatment for hand and wrist fractures, carpal tunnel syndrome, tendon injuries, arthritis and other conditions affecting hand function and movement.",
    highlights: [
      "Carpal tunnel release surgery",
      "Microsurgical tendon repair",
      "Fracture fixation & splinting",
    ],
  },
  {
    id: "foot-ankle",
    route: "/blog/foot-ankle",
    icon: faShoePrints,
    image: "https://southernbone.com/wp-content/uploads/2025/01/foot.webp",
    title: "Foot & Ankle",
    readTime: "5 min read",
    description:
      "Expert diagnosis and treatment for ankle sprains, heel pain, foot fractures, bunions, tendon disorders and other conditions affecting comfortable walking and mobility.",
    highlights: [
      "Ankle ligament reconstruction",
      "Bunion & deformity correction",
      "Diabetic foot care programs",
    ],
  },
  {
    id: "spine",
    route: "/blog/spine",
    icon: faNotesMedical,
    image:
      "https://zenspine.in/wp-content/uploads/2023/06/Degenerative-Conditions.jpg",
    title: "Spine Care",
    readTime: "7 min read",
    description:
      "Comprehensive spine care for back pain, slipped discs, sciatica, spinal deformities and degenerative spine disorders using advanced surgical and non-surgical treatments.",
    highlights: [
      "Minimally invasive spine surgery",
      "Disc replacement & decompression",
      "Non-surgical pain management",
    ],
  },
  {
    id: "trauma-fractures",
    route: "/blog/trauma-fractures",
    icon: faTruckMedical,
    image:
      "https://www.drdivyanshugoyal.com/wp-content/uploads/2019/10/Bone-Fracture.jpg",
    title: "Trauma & Fractures",
    readTime: "6 min read",
    description:
      "Emergency orthopedic care for fractures, accident injuries, complex bone trauma and dislocations with timely treatment to ensure proper healing and recovery.",
    highlights: [
      "24/7 emergency fracture care",
      "Complex trauma reconstruction",
      "Dislocation & polytrauma management",
    ],
  },
];

/**
 * Wraps a block in a scroll-reveal animation. Adds "is-visible" once the
 * element enters the viewport, which triggers the CSS transition.
 */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

const Blogpage = () => {
  return (
    <div className="blog-page">
      {/* Header */}
      <div className="blog-header">
        <span className="blog-eyebrow load-in load-in-1">
          Orthopedic Insights
        </span>
        <h1 className="load-in load-in-2">
          From the <span>Blog</span>
        </h1>
        <p className="blog-subtitle load-in load-in-3">
          Practical, doctor-written guidance on the conditions Dr. Aarav
          Sharma treats most often — from joint replacement to trauma care.
        </p>
      </div>

      {/* Post grid */}
      <div className="blog-grid">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 90} className="blog-card-wrap">
            <article className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-card-icon">
                  <FontAwesomeIcon icon={post.icon} />
                </span>
              </div>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <FontAwesomeIcon icon={faClock} className="blog-card-clock" />
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>
                <p className="blog-card-desc">{post.description}</p>

                <ul className="blog-card-highlights">
                  {post.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <a href={post.route} className="blog-card-link">
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal className="blog-cta">
        <h2>Not sure which specialty you need?</h2>
        <p>Book a consultation and Dr. Sharma will guide you to the right treatment plan.</p>
        <a href="/contact" className="blog-cta-btn">
          Book Appointment
        </a>
      </Reveal>
    </div>
  );
};

export default Blogpage;