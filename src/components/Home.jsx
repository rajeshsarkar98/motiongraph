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

  return (
    <section className="home-hero">

      {/* Hero Section */}
      <div className="home-hero__block block-1 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
        <div className="p-4 bg-white bg-opacity-75 rounded shadow text-dark text-center">
          <h1 className="display-5 fw-bold mb-3">"We Frame Emotions – In Motion & Still"</h1>
          <h2 className="h5 mb-3">Cinematic Film | Timeless Photography | 14+ Years of Experience</h2>
          <p className="lead mb-4">Professional Photography & Cinematography by Palash Das</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-danger" onClick={() => navigate("/portfolio")}>Explore Portfolio</button>
            <button className="btn btn-outline-danger" onClick={() => navigate("/contact")}>Book Now</button>
          </div>
        </div>

        <div className="position-absolute start-0 bottom-0 m-4 d-flex gap-4">
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
            <a key={index} href={social.href} target="_blank" rel="noreferrer" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className={social.class} viewBox="0 0 16 16">
                <path d={social.path} className="text-danger" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Brand Introduction */}
      <div className="home-hero__block block-2 text-center py-5 px-3 bg-light">
        <div className="container">
          <h2 className="display-5 text-dark mb-3">"The Artist Behind The Brand"</h2>
          <p className="lead">
            I’m Palash Das, founder of Motion Graph. With 14+ years in photography and cinematography, I’ve created over 300+ wedding stories, worked on 5 full-length films, and built visual content for passionate brands.
          </p>
        </div>

        {/* Album Section */}
        <section className="position-relative py-5  text-white">
          <h2 className="text-danger text-center mb-5">"Real Emotions. Real Clients."</h2>

          {/* Navigation Buttons */}
          <div className="d-none d-md-block">
            <button
              className="album-nav-btn album-nav-prev btn btn-outline-light"
              onClick={() => scrollAlbum("left")}
              aria-label="Scroll left"
            >
              &lt;&lt;
            </button>
            <button
              className="album-nav-btn album-nav-next btn btn-outline-light"
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
                className="card bg-light text-dark flex-shrink-0 shadow"
                style={{ minWidth: "600px", maxWidth: "90%" }}
                key={index}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="card-img-top img-fluid"
                  style={{ height: "85%", objectFit: "cover" }}
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
      <div className="home-hero__block block-3 text-center py-5">
        <div className="container">
          <h2 className="mb-3">Get In Touch</h2>
          <p>Contact or CTA section here...</p>
          {/* <Blog /> */}
        </div>
      </div>
    </section>
  );
}


