import React from "react";
import "../styles/Services.css";

function Services() {
  const carouselSlides = [
    {
      title: "Example headline.",
      description: "Some representative placeholder content for the first slide of the carousel.",
      btnText: "Sign up today",
      img: "https://images.pexels.com/photos/8315040/pexels-photo-8315040.jpeg",
    },
    {
      title: "Another example headline.",
      description: "Some representative placeholder content for the second slide of the carousel.",
      btnText: "Learn more",
      img: "https://images.pexels.com/photos/20021558/pexels-photo-20021558.jpeg",
    },
    {
      title: "One more for good measure.",
      description: "Some representative placeholder content for the third slide of this carousel.",
      btnText: "Browse gallery",
      img: "https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg",
    },
  ];

  const customersReviews = [
    {
      id:1,
      name: "Ritu Sharma",
      review: "Motion Graph made our wedding look like a movie! The details and emotions were captured beautifully",
      img: "https://i.pinimg.com/736x/01/8b/69/018b69e2a712d0e198c53e9509c98ed8.jpg",
    },
    {
      id:2,
      name: "Ayan Das",
      review: "Motion Graph made our wedding look like a movie! The details and emotions were captured beautifully",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3LtU50jCRYTgRetz0iVGx2ycAVPb7seORg&s",
    },
    {
      id:3,
      name: "Ankita Roy",
      review: "Motion Graph made our wedding look like a movie! The details and emotions were captured beautifully",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MARz_NWTNX0R1yVI2hJjuntvfg517kVEf9LxYTGNlPAlDx4vYTM7tLYH39H5mQ7iz0Y&usqp=CAU",
    },
    {
      id:3,
      name: "Ankita Roy",
      review: "Motion Graph made our wedding look like a movie! The details and emotions were captured beautifully",
      img: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/175/893/new_medium/fitooor.jpg?1571903243",
    }
  ];

  const contentDetails = [
    {
      id: 1,
      heading: "Cinematic Wedding Films",
      bio: "Cinematic Wedding Films captures your special day with elegance and emotion...",
      img: "https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg",
    },
    {
      id: 2,
      heading: "Premium Wedding Photography",
      bio: "Premium Wedding Photography offers elegant, high-quality imagery...",
      img: "https://images.pexels.com/photos/27855791/pexels-photo-27855791.jpeg",
    },
    {
      id: 3,
      heading: "Direction of Photography",
      bio: "Our Direction of Photography brings your story to life through cinematic visuals...",
      img: "https://images.pexels.com/photos/3099160/pexels-photo-3099160.jpeg",
    },
    {
      id: 4,
      heading: "Travel & Destination Projects",
      bio: "We specialize in Travel & Destination projects that capture the beauty...",
      img: "https://images.pexels.com/photos/32685207/pexels-photo-32685207.jpeg",
    },
    {
      id: 5,
      heading: "Portraits & Pre-wedding",
      bio: "Our Portraits & Pre-wedding sessions are designed to capture the genuine connection...",
      img: "https://images.pexels.com/photos/30706026/pexels-photo-30706026.jpeg",
    },
    {
      id: 6,
      heading: "Commercial / Brand Shoots",
      bio: "We create impactful Commercial and Brand Shoots that elevate your business...",
      img: "https://images.pexels.com/photos/5622883/pexels-photo-5622883.jpeg",
    },
    {
      id: 7,
      heading: "Short Films & Music Videos",
      bio: "We produce Short Films and Music Videos that blend powerful storytelling...",
      img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
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
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <p><a className="btn btn-lg btn-primary" href="#">{slide.btnText}</a></p>
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

      {/* Customer Reviews */}
      <div className="container marketing mt-5">
        <div className="row">
          {customersReviews.map((item, i) => (
            <div className="col-sm-10 col-md-6 col-lg-6 text-center mb-5" key={i}>
              <div className="rounded-circle mx-auto mb-3 overflow-hidden" style={{ width: 140, height: 140 }}>
                <img className="img-fluid rounded" src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="fw-normal">{item.name}</h3>
              <p className="px-3">{item.review}</p>
            </div>
          ))}
        </div>

        {/* Service Featurettes */}
        {contentDetails.map((item, idx) => (
          <React.Fragment key={item.id}>
            <hr className="featurette-divider mt-5" />
            <div className={`row featurette align-items-center ${idx % 2 === 1 ? "flex-md-row-reverse" : ""}`}>
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">{item.heading}</h2>
                <p className="lead">{item.bio}</p>
              </div>
              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  src={item.img}
                  className="img-fluid rounded"
                  alt={item.heading}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
        <hr className="featurette-divider" />
      </div>
    </main>
  );
}

export default Services;
