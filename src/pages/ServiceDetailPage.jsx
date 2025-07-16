// pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom"; // Import Link
import "../styles/ServiceDetailPage.css"; // A new, dedicated CSS file for detail pages

// It's crucial that this `servicesData` array is the SAME as the one in Services.jsx.
// Ideally, you'd put this in a separate file (e.g., `src/data/servicesData.js`)
// and import it into both components.
const servicesData = [
  {
    id: 1,
    heading: "Cinematic Wedding Films",
    bio: "Captures your special day with elegance and emotion, creating a timeless masterpiece you'll cherish forever. We focus on storytelling and high-quality production.",
    img: "https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg",
    slug: "cinematic-wedding-films",
  },
  {
    id: 2,
    heading: "Premium Wedding Photography",
    bio: "Offers elegant, high-quality imagery that preserves every precious moment and detail of your wedding day with artistic flair.",
    img: "https://images.pexels.com/photos/27855791/pexels-photo-27855791.jpeg",
    slug: "premium-wedding-photography",
  },
  {
    id: 3,
    heading: "Maternity Photography",
    bio: "Celebrate the beautiful journey of motherhood with our Maternity Photography. We capture the glow and anticipation with tender, artistic portraits.",
    img: "https://images.pexels.com/photos/3381831/pexels-photo-3381831.jpeg",
    slug: "maternity",
  },
  {
    id: 4,
    heading: "Newborn Baby Photoshoot",
    bio: "Our Newborn Baby Photoshoots gently capture the innocence and delicate beauty of your little one's first days, creating heartwarming memories.",
    img: "https://images.pexels.com/photos/3991206/pexels-photo-3991206.jpeg",
    slug: "newborn",
  },
  {
    id: 5,
    heading: "First Rice Ceremony & Annaprashan",
    bio: "Document your child's important milestone with our First Rice Ceremony (Annaprashan) photography, capturing the joy and traditions of this special event.",
    img: "https://images.pexels.com/photos/7955075/pexels-photo-7955075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "first-rice",
  },
  {
    id: 6,
    heading: "Baby's First Birthday Photoshoot",
    bio: "Commemorate your baby's big day with a fun and memorable First Birthday Photoshoot, capturing their playful spirit and joyful celebrations.",
    img: "https://images.pexels.com/photos/1601072/pexels-photo-1601072.jpeg",
    slug: "birthday",
  },
  {
    id: 7,
    heading: "Upanayan Photography",
    bio: "Capture the sacred and significant Upanayan (thread ceremony) with our respectful and detailed photography, preserving cultural traditions and family moments.",
    img: "https://images.pexels.com/photos/7955077/pexels-photo-7955077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "upanayan",
  },
  {
    id: 8,
    heading: "Direction of Photography",
    bio: "Our Direction of Photography brings your story to life through cinematic visuals, ensuring every frame is perfectly composed and emotionally resonant.",
    img: "https://images.pexels.com/photos/3099160/pexels-photo-3099160.jpeg",
    slug: "direction-of-photography",
  },
  {
    id: 9,
    heading: "Travel & Destination Projects",
    bio: "We specialize in Travel & Destination projects that capture the beauty and essence of your chosen location, turning your adventures into stunning visual narratives.",
    img: "https://images.pexels.com/photos/32685207/pexels-photo-32685207.jpeg",
    slug: "travel-destination-projects",
  },
  {
    id: 10,
    heading: "Portraits & Pre-wedding",
    bio: "Our Portraits & Pre-wedding sessions are designed to capture the genuine connection and unique personalities of couples, creating beautiful and authentic images.",
    img: "https://images.pexels.com/photos/30706026/pexels-photo-30706026.jpeg",
    slug: "portraits-pre-wedding",
  },
  {
    id: 11,
    heading: "Commercial / Brand Shoots",
    bio: "We create impactful Commercial and Brand Shoots that elevate your business's image, delivering compelling visuals that resonate with your target audience.",
    img: "https://images.pexels.com/photos/5622883/pexels-photo-5622883.jpeg",
    slug: "commercial-brand-shoots",
  },
  {
    id: 12,
    heading: "Short Films & Music Videos",
    bio: "We produce Short Films and Music Videos that blend powerful storytelling with stunning cinematography, bringing your creative vision to life with professional polish.",
    img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
    slug: "short-films-music-videos",
  },
];

function ServiceDetailPage() {
  const { serviceSlug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate(); // For programmatic navigation

  // Find the service that matches the slug
  const service = servicesData.find((item) => item.slug === serviceSlug);

  // If the service is not found, render a 404-like message
  if (!service) {
    return (
      <div className="container text-center mt-5 pt-5">
        <h2 className="animate__animated animate__fadeIn">Service Not Found!</h2>
        <p className="lead animate__animated animate__fadeIn animate__delay-0-5s">The service you are looking for does not exist.</p>
        <button onClick={() => navigate('/services')} className="btn btn-primary mt-3 animate__animated animate__zoomIn">
          Back to All Services
        </button>
      </div>
    );
  }

  return (
    <div className="container service-detail-page mt-5 pt-5 animate__animated animate__fadeIn">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h1 className="mb-4 animate__animated animate__fadeInDown">{service.heading}</h1>
          <img
            src={service.img}
            alt={service.heading}
            className="img-fluid rounded shadow-lg mb-4 service-detail-img animate__animated animate__zoomIn"
          />
          <p className="lead service-detail-bio animate__animated animate__fadeInUp">{service.bio}</p>
          <hr className="my-5 animate__animated animate__fadeIn" />
          <p className="text-muted">
            Ready to book this service? Feel free to <Link to="/contact">contact us</Link> or visit our <Link to="/booking">booking page</Link>!
          </p>
          <button onClick={() => navigate('/services')} className="btn btn-outline-primary mt-3 animate__animated animate__fadeIn">
            &larr; Back to All Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;