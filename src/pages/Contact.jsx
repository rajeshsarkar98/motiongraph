import React, { useState } from 'react'; // Removed useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; // Import your custom CSS

const Contact = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const cardsInfo = [
    {
      heading: "More Info",
      description: "Do call us for consultancy support. Just don’t make fake calls to us. We have several packages and custom packages. Based on your information we will be able to decide what can be best for you.",
      icon: "fas fa-info-circle",
    },
    {
      heading: "Data Management",
      description: "We make sure that our data server is advanced installed maintaining from virk free, data corruption. Our server is based on Linux Ubuntu with high security and enhance performance to work from around the globe. Right now we have 146 TERABYTE of HDD.",
      icon: "fas fa-database",
    },
    {
      heading: "Community Management",
      description: "We make sure that our commitment and phone call support are always available. If we are busy, leave us a message, and we’ll connect with you soon.",
      icon: "fas fa-users",
    },
  ];

  const faqData = [
    {
      question: "What if you don't contact with us?",
      answer: "We get in touch within 10-30 minutes. If we don’t, kindly let us know via WhatsApp. Our team is usually busy with editing, shooting, or resting.",
    },
    {
      question: "How will you deliver our Data?",
      answer: "Your content is yours. After full payment, we deliver via HDD or cloud. If clients refuse raw data, we get a confirmation to delete it.",
    },
    {
      question: "How long does it take to deliver my projects?",
      answer: "It depends on project load. We usually take 1-4 months. For more info, check our website.",
    },
    {
      question: "What if you don't receive my phone?",
      answer: "No complaints since 2010. If we miss your call, we’ll get back to you. You can track updates via client portal.",
    },
  ];

  const blurbCards = [
    {
      id: 1,
      img: "https://dmdigitals.com/wp-content/uploads/2024/04/packages.jpg",
      title: "Check Our Packages",
      text: "Our package details change every year. They are not fixed. Kindly verify the details required. We suggest the best options. Get an instant quote.",
      link: "#"
    },
    {
      id: 2,
      img: "https://dmdigitals.com/wp-content/uploads/2024/04/faqa.jpg",
      title: "Payment Procedure",
      text: "Check our Payment Options. To book any events you must pay 30% of the contract amount. Just share the payment screenshot.",
      link: "#"
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 py-md-6 fade-in-section"> {/* Added fade-in-section */}
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Get In Touch With Us</h1>
          <p className="lead text-muted mb-4">
            <strong>LIVING IN INDIA, SERVING ALL OVER INDIA & BEYOND.</strong>
          </p>
          <p className="px-lg-5 mx-lg-5 text-muted">
            Make sure your booking information is exactly what you need. Don’t just panic about Covid-19. We make sure that we take care of ours as well as yours.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-cards-section py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center g-4">
            {cardsInfo.map((card, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="card contact-card h-100 shadow-sm border-0 p-3 card-entry-animation" style={{ animationDelay: `${index * 0.1}s` }}> {/* Added card-entry-animation and inline delay */}
                  <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
                    {card.icon && <i className={`${card.icon} fa-3x text-primary mb-3`}></i>}
                    <h5 className="card-title fw-bold mb-3">{card.heading}</h5>
                    <p className="card-text text-muted flex-grow-1">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices & Contact */}
      <section className="offices-contact-section py-5 bg-light fade-in-section"> {/* Added fade-in-section */}
        <div className="container">
          <div className="row justify-content-center g-5 align-items-center">
            <div className="col-md-5 slide-in-left"> {/* Added slide-in-left */}
              <h2 className="fw-bold mb-4">Our Offices</h2>
              <address className="mb-4 text-muted">
                <strong className="text-primary">Motion Graph</strong><br />
                v53/6, Vivekananda Sarani, Near Baishali Park<br />
                Garia, Kolkata – 700084
              </address>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="tel:+919732271700" className="btn btn-primary btn-lg flex-grow-1">
                  <i className="fas fa-phone-alt me-2"></i>Call Us
                </a>
                <button
                  className="btn btn-outline-primary btn-lg flex-grow-1"
                  onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                >
                  <i className="fas fa-eye me-2"></i>
                  {showPhoneNumber ? '+91 9732271700' : 'View Phone No.'}
                </button>
              </div>
            </div>
            <div className="col-md-5 slide-in-right"> {/* Added slide-in-right */}
              <h2 className="fw-bold mb-4">Availability</h2>
              <p className="mb-4 text-muted">
                <strong className="text-primary">Indian Time Zone</strong><br />
                Booking an Event: 24 Hours Via Website / 11am – 11pm via Phone<br />
                Phone Support: 11am to 9 pm
              </p>
              <p className="mb-0 text-muted">
                <strong className="text-primary">NRI Time Zones</strong><br />
                Booking an Event: 24 Hours Via Website<br />
                11am – 03am via Phone / WhatsApp<br />
                Phone Support: 11am to 4am<br />
                Special NRI Timing: 11 pm to 4 am
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blurb Cards */}
      <section className="blurb-cards-section py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center g-4">
            {blurbCards.map((blurb, index) => (
              <div key={blurb.id} className="col-12 col-md-6 col-lg-5 d-flex">
                <div className="card blurb-card h-100 shadow-sm border-0 card-entry-animation" style={{ animationDelay: `${index * 0.1}s` }}> {/* Added card-entry-animation and inline delay */}
                  <img src={blurb.img} alt={blurb.title} className="card-img-top blurb-card-img" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{blurb.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{blurb.text}</p>
                    <div className="mt-auto">
                      <a href={blurb.link} className="btn btn-outline-primary mt-3">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section py-5 bg-light fade-in-section"> {/* Added fade-in-section */}
        <div className="container">
          <h2 className="mb-5 text-center fw-bold display-5">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="faqAccordion">
            {faqData.map((faq, i) => (
              <div key={i} className="accordion-item faq-item card-entry-animation" style={{ animationDelay: `${i * 0.1}s` }}> {/* Added card-entry-animation and inline delay */}
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${i}`}
                    aria-expanded={i === 0 ? "true" : "false"}
                    aria-controls={`faq${i}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`faq${i}`}
                  className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;