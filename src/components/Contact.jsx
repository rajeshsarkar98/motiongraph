const Contact = () => {
  const cardsInfo = [
    {
      heading: "More Info",
      description:
        "Do call us for consultancy support. Just don’t make fake calls to us. We have several packages and custom packages. Based on your information we will be able to decide what can be best for you.",
    },
    {
      heading: "Data Management",
      description:
        "We make sure that our data server is advanced installed maintaining from virk free, data corruption. Our server is based on Linux Ubuntu with high security and enhance performance to work from around the globe. Right now we have 146 TERABYTE of HDD.",
    },
    {
      heading: "Community Management",
      description:
        "We make sure that our commitment and phone call support are always available. If we are busy, leave us a message, and we’ll connect with you soon.",
    },
  ];

  const faqData = [
    {
      question: "What if you don't contact with us?",
      answer:
        "We get in touch within 10-30 minutes. If we don’t, kindly let us know via WhatsApp. Our team is usually busy with editing, shooting, or resting.",
    },
    {
      question: "How will you deliver our Data?",
      answer:
        "Your content is yours. After full payment, we deliver via HDD or cloud. If clients refuse raw data, we get a confirmation to delete it.",
    },
    {
      question: "How long does it take to deliver my projects?",
      answer:
        "It depends on project load. We usually take 1-4 months. For more info, check our website.",
    },
    {
      question: "What if you don't receive my phone?",
      answer:
        "No complaints since 2010. If we miss your call, we’ll get back to you. You can track updates via client portal.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className=" container text-center mt-5 py-5">
        <h2>Get In Touch With Us</h2>
        <p>
          <strong>LIVING IN INDIA, SERVING ALL OVER INDIA & BEYOND.</strong>
        </p>
        <p>
          Make sure your booking information is exactly what you need. Don’t just panic about Covid-19. We make sure that we take care of ours as well as yours.
        </p>
      </div>

      {/* Info Cards */}
      <div className="container my-5">
        <div className="row text-center justify-content-center">
          {cardsInfo.map((card, index) => (
            <div key={index} className="col-md-6 col-sm-6 mb-4" style={{ maxWidth: '350px',  }}>
              <div className="card border-0 shadow" style={{ minHeight: '250px' }}>
                <div className="card-body p-4">
                  <h5 className="card-title mb-3 ">{card.heading}</h5>
                  <p className="card-text" style={{ fontSize: '0.9rem' }}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offices & Contact */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Our Offices</h2>
            <p>
              <strong>Motion Graph</strong><br />
              v53/6, Vivekananda Sarani, Near Baishali Park<br />
              Garia, Kolkata – 700084
            </p>
            <div className="d-flex gap-3">
              <a href="tel:+919732271700" className="btn btn-primary">Call Us</a>
              <a href="https://dmdigitals.com/wp-content/uploads/2024/04/New_Contact_Info.png" target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Phone No.
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <p>
              <strong>Indian Time Zone</strong><br />
              Booking an Event: 24 Hours Via Website / 11am – 11pm via Phone<br />
              Phone Support: 11am to 9 pm
            </p>
            <p>
              <strong>NRI Time Zones</strong><br />
              Booking an Event: 24 Hours Via Website<br />
              11am – 03am via Phone / WhatsApp<br />
              Phone Support: 11am to 4am<br />
              Special NRI Timing: 11 pm to 4 am
            </p>
          </div>
        </div>
      </div>

      {/* Blurb Cards */}
      <div className="container my-5">
        <div className="row">
          {[
            {
              img: "https://dmdigitals.com/wp-content/uploads/2024/04/packages.jpg",
              title: "Check Our Packages",
              text: "Our package details change every year. They are not fixed. Kindly verify the details required. We suggest the best options. Get an instant quote.",
            },
            {
              img: "https://dmdigitals.com/wp-content/uploads/2024/04/faqa.jpg",
              title: "Payment Procedure",
              text: "Check our Payment Options. To book any events you must pay 30% of the contract amount. Just share the payment screenshot.",
            },
          ].map((blurb, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <div className="card h-100">
                <img src={blurb.img} alt={blurb.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{blurb.title}</h5>
                  <p className="card-text">{blurb.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">FAQs</h2>
        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${i}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`faq${i}`}
                className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
