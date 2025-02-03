import React,{useState} from "react";
import "../Css/NumetryWeb.css"; // Ensure you have the corresponding CSS file

import logo from '../images/numetryLogo.jpg';  

const NumetryWeb = () => {

  const [currentIndex, setCurrentIndex] = useState(0); // State to track current index

  const images = [
    require("../images/numetryLogo.jpg"),
    require("../images/our-vision.jpg"),
    require("../images/Tech-Companies.jpg"),
    require("../images/Team-Work.jpeg"),
   
  ]; // Images for the carousel

  // Next Slide Function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Numetry Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="registration.html">Login/Signup</a></li>
          </ul>
        </nav>
      </header>


      <section className="hero">
        <h2>Innovative IT Solutions for Your Business</h2>
        <p>Empower your business with our expert IT services. From software development to cloud solutions, we help you stay ahead in the digital age.</p>
        <a href="#services" className="btn-primary">Explore Services</a>
      </section>

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

          {/*  */}
        
    <div class="card-grid">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>About Numetry</h3>

            </div>
            <div class="flip-card-back">
                <p>Numetry Technology is an innovative IT company providing cutting-edge software solutions, cloud computing, and AI-driven technologies.</p>
            </div>
          </div>
        </div>
        
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>Our Services</h3>
            </div>
            <div class="flip-card-back">
                <p>We offer software development, AI solutions, IT consulting, and cloud-based services tailored to business needs.</p>
            </div>
          </div>
        </div>
      
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>Our Mission</h3>
            </div>
            <div class="flip-card-back">
                <p>Our mission is to empower businesses with scalable, efficient, and innovative digital solutions that drive success.</p>
            </div>
          </div>
        </div>
      </div>

      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At Numetry Technology, we are dedicated to delivering top-notch IT solutions that drive success. With a team of skilled professionals, we ensure your business is equipped with the tools it needs to thrive.</p>
        
        
        <div className="carousel">
      <div className="carousel-inner" id="carouselInner">
        <img
          src={images[currentIndex]} // Render current image based on index
          alt={`Image ${currentIndex + 1}`} // Alt text for the image
          className="carousel-image"
        />
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>&#8592; Prev</button>
        <button onClick={nextSlide}>Next &#8594;</button>
      </div>
    </div>
{/*     
    <div className="carousel">
          <div className="carousel-inner" id="carouselInner">
            <img src={require("../images/numetryLogo.jpg")} alt="Image 1" />
            <img src={require("../images/our-vision.jpg")} alt="Image 2" />
            <img src={require("../images/Mission-Core-Values.jpg")} alt="Image 3" />
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide}>&#8592; Prev</button>
            <button onClick={nextSlide}>Next &#8594;</button>
          </div>
        </div> */}
      </section>

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
              <a href="#"><i className="fab fa-twitter fa-lg" style={{ color: "#1da1f2", marginRight: "15px" }}></i></a>
              <a href="#"><i className="fab fa-facebook fa-lg" style={{ color: "#3b5998", marginRight: "15px" }}></i></a>
              <a href="#"><i className="fab fa-instagram fa-lg" style={{ color: "#e4405f", marginRight: "15px" }}></i></a>
              <a href="#"><i className="fab fa-linkedin fa-lg" style={{ color: "#0077b5", marginRight: "15px" }}></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 MySite. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};





 

export default NumetryWeb;
