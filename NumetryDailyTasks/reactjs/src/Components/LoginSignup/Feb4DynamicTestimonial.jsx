import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../Css/Feb4DynamicTestimonial.css";

const fetchTestimonials = async () => {
  return [
    {
      name: "Atharva Pande",
      review: "This product changed my life! Highly recommend it to everyone.",
      image: require("../images/passport.jpeg"),
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Amazing service and quality. I will be back for more!",
      image: require("../images/passport.jpeg"),
      rating: 4,
    },
    {
      name: "Mike Johnson",
      review: "Great experience, fantastic support, and an awesome team!",
      image: require("../images/passport.jpeg"),
      rating: 5,
    },
  ];
};

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "filled-star" : "empty-star"}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    };
    getTestimonials();
  }, []);

  return (
    <div className="testimonial-container">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        // autoplay={{ delay: 3000 }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-name">{testimonial.name}</p>
            <StarRating rating={testimonial.rating} />
            <p className="testimonial-review">"{testimonial.review}"</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
