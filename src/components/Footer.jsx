
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; // Your custom CSS file for footer

const footerSections = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      { name: "Guidelines", url: "#" },
      { name: "Terms and Conditions for Payment and Work", url: "#" },
      { name: "Payment", url: "#" },
      { name: "Wedding Booking", url: "#" },
      { name: "Children Photography Enquiry", url: "#" },
      { name: "Careers", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Important Links",
    links: [
      { name: "Prewedding Photography", url: "#" },
      { name: "Prewedding Short Films", url: "#" },
      { name: "Wedding Films", url: "#" },
      { name: "Baby Cinematic Video", url: "#" },
      { name: "Baby First Birthday Photography", url: "#" },
      { name: "First Rice Ceremony", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Quick Service WhatsApp",
    links: [
      { name: "Official WhatsApp", url: "https://wa.me/919732271700" }, // Example WhatsApp link
      { name: "Account Department", url: "https://wa.me/91XXXXXXXXXX" },
      { name: "Creative Head", url: "https://wa.me/91YYYYYYYYYY" },
      { name: "Image Editing Department", url: "https://wa.me/91ZZZZZZZZZZ" },
      { name: "Video Editor", url: "https://wa.me/91AAAAAAAAAA" },
      { name: "Album Department", url: "https://wa.me/91BBBBBBBBBB" },
    ],
  },
];

const socialLinks = [
  { id: 1, icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
  { id: 2, icon: "fab fa-instagram", url: "#", label: "Instagram" },
  { id: 3, icon: "fab fa-whatsapp", url: "https://wa.me/919732271700", label: "WhatsApp" },
  { id: 4, icon: "fab fa-youtube", url: "#", label: "YouTube" },
];

function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <div className="container">
        {/* Main Footer Sections */}
        <div className="row justify-content-center text-center text-md-start mb-4">
          {footerSections.map((section, idx) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" // Responsive columns
              key={section.id} // Use unique ID for key
            >
              <h5 className="footer-title text-uppercase fw-bold mb-3">{section.title}</h5>
              <ul className="list-unstyled mb-0">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="mb-2">
                    <a href={link.url} className="footer-link text-light text-opacity-75 text-decoration-none">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company Info / Brand Section */}
          <div className="col-12 col-md-4 col-lg-3 mb-4 text-center text-md-start">
            <h5 className="footer-title text-uppercase fw-bold mb-3">Motion Graph</h5>
            <p className="text-light text-opacity-75">
              Capturing moments, creating memories. Your trusted partner for professional photography and videography services.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="footer-divider border-secondary my-4" />

        {/* Copyright and Social Media */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-3">
          {/* Copyright Text */}
          <p className="mb-3 mb-md-0 text-center text-md-start text-light text-opacity-75">
            &copy; {new Date().getFullYear()} Motion Graph. All rights reserved. | Established 2020 | <a href="#" className="text-white text-decoration-none footer-link">Contact Developer</a>
          </p>

          {/* Social Icons */}
          <ul className="list-unstyled d-flex gap-3 social-icons mb-0">
            {socialLinks.map(social => (
              <li key={social.id}>
                <a className="text-white text-opacity-75" href={social.url} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <i className={`${social.icon} fa-lg footer-social-icon`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;