// Nav.jsx
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const portfolioItems = [
    { to: "/portfolio/prewedding", label: "Prewedding Portfolio" },
    { to: "/portfolio/wedding", label: "Wedding Portfolio" },
    { to: "/portfolio/baby", label: "Baby Portfolio" },
  ];

  const filmItems = [
    { to: "/film/wedding", label: "Wedding Films" },
    { to: "/film/prewedding", label: "Prewedding Shortfilms" },
    { to: "/film/baby", label: "Baby Cinematic Video" },
  ];

  const bookingItems = [
    { to: "/booking/event", label: "Event Booking" },
    { to: "/booking/children", label: "Children Booking" },
  ];

  // Manual list of services for the dropdown to ensure all are listed
  const serviceDropdownItems = [
    { to: "/services/cinematic-wedding-films", label: "Cinematic Wedding Films" },
    { to: "/services/premium-wedding-photography", label: "Premium Wedding Photography" },
    { to: "/services/maternity", label: "Maternity Photography" },
    { to: "/services/newborn", label: "New Born Baby Photoshoot" },
    { to: "/services/first-rice", label: "First Rice Ceremony & Annaprashan" },
    { to: "/services/birthday", label: "Baby's First Birthday Photoshoot" },
    { to: "/services/upanayan", label: "Upanayan Photography" },
    { to: "/services/direction-of-photography", label: "Direction of Photography" },
    { to: "/services/travel-destination-projects", label: "Travel & Destination Projects" },
    { to: "/services/portraits-pre-wedding", label: "Portraits & Pre-wedding" },
    { to: "/services/commercial-brand-shoots", label: "Commercial / Brand Shoots" },
    { to: "/services/short-films-music-videos", label: "Short Films & Music Videos" },
  ];

  const dropdowns = [
    { id: "portfolio", label: "Portfolio", items: portfolioItems },
    { id: "film", label: "Film", items: filmItems },
    { id: "booking", label: "Booking", items: bookingItems },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
    { to: "/payment", label: "Payment" },
  ];

  const renderDropdown = (dropdown) => (
    <li className="nav-item dropdown" key={dropdown.id}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dropdown.label}
      </a>
      <ul className="dropdown-menu">
        {dropdown.items.map((item, idx) => (
          <li key={idx}>
            <Link className="dropdown-item" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );

  const renderNavLink = (link) => (
    <li className="nav-item" key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        aria-current={({ isActive }) => (isActive ? "page" : undefined)}
      >
        {link.label}
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          MOTION GRAPH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(renderNavLink)}

            {/* Special handling for Services: main link + dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/services" // Main link to services overview page
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""} dropdown-toggle`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Services
              </NavLink>
              <ul className="dropdown-menu">
                {serviceDropdownItems.map((item, idx) => (
                  <li key={idx}>
                    <Link className="dropdown-item" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Render other dropdowns */}
            {dropdowns.map(renderDropdown)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;