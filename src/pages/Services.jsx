// pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import "../styles/Services.css"; // Ensure this CSS file contains the general styles

// Define the contentDetails array for all services
// It's highly recommended to move this data to a separate file (e.g., `data/servicesData.js`)
// and import it into both Services.jsx and ServiceDetailPage.jsx to avoid duplication.
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


function Services() {
  // You can include the carousel and customer reviews here if you want them
  // to appear ONLY on the main /services page, not on individual service detail pages.
  // Or, you can move them to your Home page if they are general site features.

  const carouselSlides = [
    {
      title: "Capture Every Precious Moment",
      description: "From weddings to first birthdays, we bring your memories to life with stunning photography and cinematic films.",
      btnText: "Explore Portfolio",
      img: "https://images.pexels.com/photos/8315040/pexels-photo-8315040.jpeg",
    },
    {
      title: "Your Story, Beautifully Told",
      description: "Our passion is to create visual narratives that reflect your unique emotions and milestones.",
      btnText: "Learn About Us",
      img: "https://images.pexels.com/photos/20021558/pexels-photo-20021558.jpeg",
    },
    {
      title: "Unforgettable Visual Experiences",
      description: "Discover our range of services designed to capture life's most important occasions.",
      btnText: "Browse Services",
      img: "https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg",
    },
  ];

  const customersReviews = [
    {
      id: 1,
      name: "Ritu Sharma",
      review: "Motion Graph made our wedding look like a movie! The details and emotions were captured beautifully.",
      img: "https://i.pinimg.com/736x/01/8b/69/018b69e2a712d0e198c53e9509c98ed8.jpg",
    },
    {
      id: 2,
      name: "Ayan Das",
      review: "The team was professional and captured every moment perfectly. Highly recommend their services!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3LtU50jCRYTgRetz0iVGx2ycAVPb7seORg&s",
    },
    {
      id: 3,
      name: "Ankita Roy",
      review: "Our maternity shoot was magical! They truly have an eye for capturing pure joy.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MARz_NWTNX0R1yVI2hJjuntvfg517kVEf9LxYTGNlPAlDx4vYTM7tLYH39H5mQ7iz0Y&usqp=CAU",
    },
    {
      id: 4,
      name: "Priya Singh",
      review: "The newborn photos are simply adorable. Thank you for creating such precious memories for us.",
      img: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/175/893/new_medium/fitooor.jpg?1571903243",
    },
  ];

  return (
    <main>
      {/* Carousel */}
      <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselSlides.map((slide, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
              <img
                src={slide.img}
                className="d-block w-100 img-fluid"
                alt={`Slide ${idx + 1}`}
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block text-start">
                <h1 className="animate__animated animate__fadeInDown">{slide.title}</h1>
                <p className="animate__animated animate__fadeInUp animate__delay-0-5s">{slide.description}</p>
                <p className="animate__animated animate__zoomIn animate__delay-1s">
                  <a className="btn btn-lg btn-primary" href="#">
                    {slide.btnText}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Customer Reviews Section (Optional: can be moved to Home/Testimonials) */}
      <div className="container marketing mt-5">
        <h2 className="pb-2 border-bottom text-center mb-5 animate__animated animate__fadeIn">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {customersReviews.map((review) => (
            <div key={review.id} className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
              <div className="customer-review-card animate__animated animate__zoomIn animate__delay-0-5s">
                <img
                  src={review.img}
                  className="rounded-circle mb-3"
                  alt={review.name}
                  width="140"
                  height="140"
                />
                <h3 className="fw-normal">{review.name}</h3>
                <p className="text-muted">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Listing Section - Main content of the /services page */}
      <div className="container marketing mt-5 pt-5">
        <h1 className="text-center mb-5 animate__animated animate__fadeInDown">Our Professional Services</h1>

        <div className="row g-4">
          {servicesData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              {/* Link to the individual service detail page */}
              <Link to={`/services/${item.slug}`} className="service-card-link text-decoration-none">
                <div className="card h-100 shadow-sm animate__animated animate__zoomIn animate__delay-0-5s">
                  <img
                    src={item.img}
                    className="card-img-top service-card-img"
                    alt={item.heading}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.heading}</h5>
                    <p className="card-text text-muted">{item.bio.substring(0, 100)}...</p> {/* Truncate bio for cards */}
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">Learn More</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <hr className="featurette-divider my-5 animate__animated animate__fadeIn" />
      </div>
    </main>
  );
}

export default Services;