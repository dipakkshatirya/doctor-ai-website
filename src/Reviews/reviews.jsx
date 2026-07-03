import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./reviews.css";

const reviewsData = [
  
  {
    name: "Jatin Mehta",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/c2/5e/e9/c25ee9027c1173705b2fd2034639705e.jpg",
    review:
      "I underwent knee replacement surgery under Dr. Aarav Sharma. The entire process—from consultation to recovery—was handled professionally. My knee pain has completely gone, and I can walk comfortably again. Highly recommended.",
  },
  {
    name: "Neha Patel",
    rating: 5,
    image:
      "https://i.pinimg.com/564x/19/19/c3/1919c3e6a2ffb8ce138d359fbe083f7b.jpg",
    review:
      "After suffering from a severe ankle ligament injury, I received excellent treatment and rehabilitation guidance. The recovery was much faster than I expected, and I'm back to my normal routine without pain.",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    image:
      "https://i.pinimg.com/236x/4f/5a/18/4f5a1819b3c8b831be64bab259639397.jpg",
    review:
      "I had a wrist fracture after a bike accident. Dr. Aarav Sharma explained every step of the treatment and ensured a smooth recovery. My hand movement is now completely normal.",
  },
  {
    name: "Pooja Sharma",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1706943262117-b35de4ba50b4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    review:
      "For months I struggled with severe back pain due to a spine problem. Dr. Aarav Sharma recommended the right treatment without unnecessary surgery. Today I can work and travel comfortably again.",
  },
  {
    name: "Aisha Khan",
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdcxJ0jshY41NKCMugVyAs3oHI-vKphlpGb-s5lje9CB5UrTt2tb9HtCd&s=10",
    review:
      "I consulted Dr. Aarav Sharma for chronic shoulder pain. His diagnosis was accurate, and the physiotherapy plan worked wonderfully. I regained full shoulder movement within a few weeks.",
  },
  {
    name: "Rohit Desai",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/52/08/ce/5208ce6c1a5852114c7984a2f0a1c74d.jpg",
    review:
      "Following a football injury, I suffered an ACL tear. Dr. Aarav Sharma performed the surgery successfully and guided me throughout rehabilitation. I'm back on the field with complete confidence.",
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