import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./reviews.css";

const reviewsData = [
  {
    name: "Nipun Patel",
    rating: 4,
    image:
      "https://plain-apac-prod-public.komododecks.com/202606/30/Oxrk2ZiepdZ4tuFzBnXq/image.png",
    review: "Good prescription given. Very informative and friendly doctor.",
  },
  {
    name: "Arti Rajak",
    rating: 5,
    image:
      "https://plain-apac-prod-public.komododecks.com/202606/30/aPE0AC5EuqWoHGG3Zz9T/image.png",
    review:
      "Amazing Experience. Dr. Hinesh Acharya effectively managed my high blood pressure. Understanding my health history, he developed a thorough plan to improve my overall health. Thanks to his treatment, my blood pressure has improved significantly, and I am completely satisfied with the care. I strongly recommend Dr. Hinesh.",
  },
  {
    name: "Kishan Rajput",
    rating: 5,
    image:
      "https://plain-apac-prod-public.komododecks.com/202606/30/HEdzkxmyjYd714AmkCnX/image.png",
    review:
      "Dr. is a very kind and humble human being. His approach towards patients is unmatchable.",
  },
  {
    name: "SHAHEZAD KAZI",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU0VeXug29sD0WXRLv3bmo63ptxes9W3LHCufpXygaaiTiBrm1v=w108-h108-p-rp-mo-br100",
    review:
      "Dr. Hinesh Acharya is an outstanding physician with exceptional knowledge and experience in internal medicine. He listens patiently, explains the condition clearly and provides the most effective treatment. His diagnosis is accurate and treatment results are excellent. Truly a caring and trustworthy doctor. Highly recommended!",
  },
  {
    name: "Vijay Kumar Yadav",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUZgVsZT7gB0Hei16Afp5zOEzmxBGB19f2k9Izn_wU6Fge7tdip=w108-h108-p-rp-mo-br100",
    review:
      "An excellent family physician—very patient, knowledgeable and caring. He listens carefully and explains everything clearly. We always feel confident and comfortable under his care. Highly recommended for families.",
  },
  {
    name: "Ashka Shah",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU_yRx1W8rEG7EPDFaBeaJIPFTJw3fB0XpMaU38pDjAjrT8qLQf=w108-h108-p-rp-mo-ba12-br100",
    review:
      "I was hospitalised at Parekh's for dengue and Dr. Hinesh was my doctor. He really took good care of me, even more than my family could. I would have died without him. Dr. Hinesh is technically very sound and I would highly recommend him.",
  },
  {
    name: "Hinal Gohil",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocLxkTUchAmLXsH_njtZD03U3JL2jTQMe67N1i_UB2-iWJkRvA=w108-h108-p-rp-mo-br100",
    review:
      "Dr. Hinesh Acharya is one of the most trusted diabetes doctors in Ahmedabad, renowned for his expertise in treating diabetes with individualized care. His rich experience, empathetic manner and dedication to patient welfare make him the first choice for effective diabetes treatment.",
  },
];


const StarRating = ({ rating }) => {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "star-filled" : "star-empty"}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ item }) => (
  <div className="review-card">
    <div className="review-top">
      <img src={item.image} alt={item.name} className="review-avatar" />
      <div className="review-meta">
        <p className="review-name">{item.name}</p>
        <StarRating rating={item.rating} />
      </div>
      <FontAwesomeIcon icon={faGoogle} className="review-google-icon" />
    </div>

    <FontAwesomeIcon icon={faQuoteLeft} className="review-quote-icon" />
    <p className="review-text">{item.review}</p>
  </div>
);

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 id="heading-reviews">Patient Reviews</h2>
        <span className="reviews-underline"></span>
        <p className="reviews-subtext">
          <FontAwesomeIcon icon={faGoogle} className="reviews-subtext-icon" />
          Genuine reviews from our patients on Google
        </p>
      </div>

      <div className="reviews-marquee">
        <div className="reviews-track">
          {[...reviewsData, ...reviewsData].map((item, index) => (
            <ReviewCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;