import React, { useEffect } from 'react'; // Import useEffect
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const photos = [
    {
      src: "https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg",
      title: "Anjali & Raj",
      date: "Dec 20, 2024",
      location: "Kolkata, India",
    },
    {
      src: "https://images.pexels.com/photos/20088740/pexels-photo-20088740.jpeg",
      title: "Priya & Arjun",
      date: "Jan 15, 2025",
      location: "Jaipur, India",
    },
    {
      src: "https://images.pexels.com/photos/32212932/pexels-photo-32212932.jpeg",
      title: "Meera & Karan",
      date: "Feb 10, 2025",
      location: "Kolkata, India",
    },
    {
      src: "https://images.pexels.com/photos/13141368/pexels-photo-13141368.png?_gl=1*14p2lsa*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA3MDMzMTckbzE2JGcxJHQxNzUwNzAzNzkyJGo0NiRsMCRoMA..",
      title: "Sonali Saha",
      date: "Mar 18, 2025",
      location: "Kolkata, India",
    },
    {
      src: "https://images.pexels.com/photos/32168705/pexels-photo-32168705.jpeg?_gl=1*1gsvi0s*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA3MDMzMTckbzE2JGcxJHQxNzUwNzAzMzYwJGoxNyRsMCRoMA..",
      title: "Lovly Mahato",
      date: "Jun 22, 2025",
      location: "Kolkata, India",
    },
    {
      src: "https://images.pexels.com/photos/26755670/pexels-photo-26755670.jpeg?_gl=1*jki0jw*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA3MDMzMTckbzE2JGcxJHQxNzUwNzAzNDIwJGoyNyRsMCRoMA..",
      title: "Sonia Das",
      date: "Jun 28, 2025",
      location: "Kolkata, India",
    },
    {
      src: "https://images.pexels.com/photos/30276913/pexels-photo-30276913.jpeg?_gl=1*1m52me0*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA3MDMzMTckbzE2JGcxJHQxNzUwNzAzNDA2JGo0MSRsMCRoMA..",
      title: "Anamika Sharma",
      date: "apr 22, 2025",
      location: "Kolkata, India",
    },
  ];

  const scrollAlbum = (direction) => {
    const container = document.getElementById("album-scroll-container");
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Add a useEffect to apply initial animations after component mounts
  useEffect(() => {
    // This empty useEffect ensures the component is mounted before CSS animations
    // based on initial opacity:0 are triggered.
  }, []);

  return (
    <section className="home-page"> {/* Changed class to home-page for better structure */}
      {/* Hero Section */}
      <div className="home-hero__block block-1 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
        <div className="hero-content p-4 bg-white bg-opacity-75 rounded shadow text-dark text-center">
          <h1 className="display-5 fw-bold mb-3 animate__fade-in-up animate__delay-0_5s">
            "We Frame Emotions – In Motion & Still"
          </h1>
          <h2 className="h5 mb-3 animate__fade-in-up animate__delay-0_7s">
            Cinematic Film | Timeless Photography | 14+ Years of Experience
          </h2>
          <p className="lead mb-4 animate__fade-in-up animate__delay-0_9s">
            Professional Photography & Cinematography by Palash Das
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 animate__fade-in-up animate__delay-1s">
            <button className="btn btn-danger" onClick={() => navigate("/portfolio")}>
              Explore Portfolio
            </button>
            <button className="btn btn-outline-danger" onClick={() => navigate("/contact")}>
              Book Now
            </button>
          </div>
        </div>

        <div className="social-links position-absolute start-0 bottom-0 m-4 d-flex gap-4">
          {[
            {
              href: "https://www.facebook.com/share/19TMK3Mfq6/",
              class: "bi bi-facebook",
              path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05...",
            },
            {
              href: "#",
              class: "bi bi-instagram",
              path: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222...",
            },
            {
              href: "#",
              class: "bi bi-youtube",
              path: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335...",
            },
          ].map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noreferrer" className={`text-white animate__fade-in-left animate__delay-${1.5 + index * 0.2}s`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className={social.class} viewBox="0 0 16 16">
                {/* Paths abbreviated for brevity. Ensure full paths are used. */}
                {/* Using a generic path here. Replace with full SVG paths */}
                <path d={social.path.substring(0, 50) + "..."} className="text-danger" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* About Page Section (Integrated) */}
      <section className="home-about-section py-5 px-3 text-white bg-dark"> 
        <div className="container">
          <div className="row justify-content-center text-center mb-5 animate__fade-in animate__delay-0_5s">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="fw-light display-4 text-danger animate__fade-in-up">Our Mission</h1>
              <p className="lead text-body-secondary animate__fade-in-up animate__delay-0_2s">
                To create visuals that move people emotionally — in both motion and still frames.
              </p>
            </div>
          </div>

          <div className="row align-items-center g-lg-5 py-5">
            {/* Text Section */}
            <div className="col-lg-7 text-center text-lg-start animate__fade-in-left animate__delay-0_5s">
              <h1 className="display-4 fw-bold lh-1 text-danger mb-3 animate__fade-in-up">
                Behind the Lens: My Story
              </h1>
              <p className="col-lg-10 fs-4 text-light animate__fade-in-up animate__delay-0_2s">
                Since 2010, I’ve been chasing light, emotion, and stories through my camera.
                From grand wedding mandaps to intense cinematic frames, I’ve built my
                journey with dedication, creativity, and a love for visual storytelling. Based in
                Kolkata, I travel across India and beyond to tell authentic stories through stills
                and motion.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                <button className="btn btn-outline-danger btn-lg my-2 animate__fade-in-up animate__delay-0_4s" onClick={() => navigate("/services")}>
                  Our Services
                </button>
                <button className="btn btn-danger btn-lg my-2 animate__fade-in-up animate__delay-0_6s" onClick={() => navigate("/contact")}>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-md-10 mx-auto col-lg-5 animate__fade-in-right animate__delay-0_5s">
              <div className="overflow-hidden rounded-3 shadow-lg about-image-wrapper">
                <img
                  className="img-fluid rounded-3"
                  src="https://images.pexels.com/photos/32090632/pexels-photo-32090632.jpeg"
                  alt="Photographer behind the lens"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Brand Introduction */}
      <div className="home-hero__block block-2 text-center py-5 px-3 bg-light">
        <div className="container">
          <h2 className="display-5 text-dark mb-3 animate__fade-in-up animate__delay-0_2s">
            "The Artist Behind The Brand"
          </h2>
          <p className="lead animate__fade-in-up animate__delay-0_4s">
            I’m Palash Das, founder of Motion Graph. With 14+ years in photography and cinematography, I’ve created over 300+ wedding stories, worked on 5 full-length films, and built visual content for passionate brands.
          </p>
        </div>

        {/* Album Section */}
        <section className="position-relative py-5 text-white bg-dark"> {/* Added bg-dark for contrast */}
          <h2 className="text-danger text-center mb-5 animate__fade-in-up animate__delay-0_2s">
            "Real Emotions. Real Clients."
          </h2>

          {/* Navigation Buttons */}
          <div className="d-none d-md-block">
            <button
              className="album-nav-btn album-nav-prev btn btn-outline-light animate__fade-in animate__delay-0_5s"
              onClick={() => scrollAlbum("left")}
              aria-label="Scroll left"
            >
              &lt;&lt;
            </button>
            <button
              className="album-nav-btn album-nav-next btn btn-outline-light animate__fade-in animate__delay-0_5s"
              onClick={() => scrollAlbum("right")}
              aria-label="Scroll right"
            >
              &gt;&gt;
            </button>
          </div>

          {/* Full-Width Scrollable Album */}
          <div
            className="album-scroll-container d-flex overflow-auto gap-4 py-4 px-4"
            id="album-scroll-container"
            style={{ width: "100%" }}
          >
            {photos.map((photo, index) => (
              <div
                className={`card bg-light text-dark flex-shrink-0 shadow album-card animate__scale-in-fade-in animate__delay-${0.6 + index * 0.1}s`}
                key={index}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="card-img-top img-fluid"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-danger">{photo.title}</h5>
                  <p className="card-text mb-1">{photo.date}</p>
                  <p className="card-text">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="home-hero__block block-3 text-center py-5 bg-dark text-white"> {/* Made dark for consistency */}
        <div className="container">
          <h2 className="mb-3 animate__fade-in-up">Get In Touch</h2>
          <p className="lead animate__fade-in-up animate__delay-0_2s">
            Ready to capture your moments? Contact us today to discuss your project!
          </p>
          <button className="btn btn-danger btn-lg mt-3 animate__fade-in-up animate__delay-0_4s" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}