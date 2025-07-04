import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const portfolioItems = [
    { to: "/portfolio/prewedding", label: "Prewedding Portfolio" },
    { to: "/portfolio/wedding", label: "Wedding Portfolio" },
    { to: "/portfolio/baby", label: "Baby Portfolio" },
  ];

  const servicesItems = [
    { to: "/services/maternity", label: "Maternity Photography" },
    { to: "/services/newborn", label: "New Born Baby Photoshoot" },
    { to: "/services/first-rice", label: "First Rice Ceremony" },
    { to: "/services/birthday", label: "Baby First Birthday Photoshoot" },
    { to: "/services/upanayan", label: "Upanayan Photography" },
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

  const dropdowns = [
    { id: "portfolio", label: "Portfolio", items: portfolioItems },
    { id: "services", label: "Services", items: servicesItems },
    { id: "film", label: "Film", items: filmItems },
    { id: "booking", label: "Booking", items: bookingItems },
  ];

    const renderDropdown = (dropdown, size) => (
    <li className="nav-item dropdown" key={dropdown.id}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id={`${dropdown.id}Dropdown${size}`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dropdown.label}
      </a>
      <ul className="dropdown-menu" aria-labelledby={`${dropdown.id}Dropdown${size}`}>
        {dropdown.items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="dropdown-item">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );


  const commonLinks = [
    { to: "/payment", label: "Payment" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact Us" },
  ];

  const renderLinks = (size) => (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      {dropdowns.map((dropdown) => renderDropdown(dropdown, size))}
      {commonLinks.map((link) => (
        <li className="nav-item" key={link.to}>
          <Link to={link.to} className="nav-link">
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-white  px-4 fixed-top">
      <div className="container-fluid me-5">
        <Link to="/" className="navbar-brand fw-bold">
          MOTION GRAPH
        </Link>

        <button
          className=" navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas for Small/Medium Devices */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Navigation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {renderLinks("Sm")}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
