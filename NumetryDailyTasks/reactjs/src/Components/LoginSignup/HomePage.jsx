import React, { useState, useEffect } from "react";
import "../Css/HomePage.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/numetryLogo.jpg" alt="Numetry Logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="registration.html">Login/Signup</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <h2>Innovative IT Solutions for Your Business</h2>
      <p>Empower your business with our expert IT services. From software development to cloud solutions, we help you stay ahead in the digital age.</p>
      <a href="#services" className="btn-primary">Explore Services</a>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-items">
        <div className="service-item">
          <h3>Custom Software Development</h3>
          <p>We create tailored software solutions to meet your unique business needs.</p>
        </div>
        <div className="service-item">
          <h3>IT Consulting</h3>
          <p>Our experts provide strategic IT consulting to optimize your operations.</p>
        </div>
        <div className="service-item">
          <h3>Cloud Solutions</h3>
          <p>Secure and scalable cloud services to enhance your business flexibility.</p>
        </div>
      </div>
    </section>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "images/numetryLogo.jpg",
    "images/our-vision.jpg",
    "images/NUm-Values.jpg",
  ];

  const showSlide = (index) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => showSlide(currentIndex - 1)}>&#8592; Prev</button>
        <button onClick={() => showSlide(currentIndex + 1)}>Next &#8594;</button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>At Numetry Technology, we are dedicated to delivering top-notch IT solutions that drive success.</p>
      <Carousel />
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>At Numetry Technologies, I value the dedication to fostering the growth and development of freshers.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>Phone: +123 456 7890</li>
            <li>Email: numetry@gmail.com</li>
            <li>Address: Skyone 101, Kalyani Nager, Pune</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MySite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;
