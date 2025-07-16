import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react"; // Import useRef and useState

function Nav() {
  const location = useLocation();
  // State to manage the collapse/expansion of the main navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // Ref for the navbar collapse element to check its state
  const navbarCollapseRef = useRef(null);

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

  const allDropdowns = [
    { id: "services", label: "Services", to: "/services", items: serviceDropdownItems },
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

  // Toggles the navbar collapse state
  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Closes the main navbar collapse
  const closeMainNavbar = () => {
    setIsNavCollapsed(true);
  };

  // Function to close a specific dropdown by simulating a click on its toggle
  const closeSpecificDropdown = (event) => {
    // Find the closest parent with 'dropdown-menu' class
    const dropdownMenu = event.target.closest('.dropdown-menu');
    if (dropdownMenu) {
      // Find the parent dropdown item (li.nav-item.dropdown)
      const dropdownParent = dropdownMenu.closest('.nav-item.dropdown');
      if (dropdownParent) {
        // Find the dropdown toggle button within this specific dropdown
        const dropdownToggle = dropdownParent.querySelector('.dropdown-toggle');
        // Only click if it's currently expanded
        if (dropdownToggle && dropdownToggle.getAttribute('aria-expanded') === 'true') {
          dropdownToggle.click(); // This makes Bootstrap close it
        }
      }
    }
  };

  // Unified click handler for all NavLinks
  const handleNavLinkClick = (event) => {
    closeMainNavbar(); // Always close the main navbar
    closeSpecificDropdown(event); // Attempt to close any open dropdown
  };

  // Optional: auto-close navbar on route change
  // Also ensures the state matches the actual DOM state after external Bootstrap actions
  useEffect(() => {
    if (navbarCollapseRef.current) {
      // Check if Bootstrap has hidden the element. If so, update React state.
      const isHidden = !navbarCollapseRef.current.classList.contains('show');
      if (isNavCollapsed !== isHidden) {
        setIsNavCollapsed(isHidden);
      }
    }
  }, [location, isNavCollapsed]); // Dependency on isNavCollapsed to sync state

  const renderDropdown = (dropdown) => (
    <li className="nav-item dropdown" key={dropdown.id}>
      <NavLink
        to={dropdown.to || "#"}
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""} dropdown-toggle`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dropdown.label}
      </NavLink>
      <ul className="dropdown-menu">
        {dropdown.items.map((item, idx) => (
          <li key={idx}>
            <NavLink
              className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}
              to={item.to}
              onClick={handleNavLinkClick} // Use the unified handler
            >
              {item.label}
            </NavLink>
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
        onClick={handleNavLinkClick} // Use the unified handler
      >
        {link.label}
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4" onClick={handleNavLinkClick}>
          MOTION GRAPH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          // We use our own state for aria-expanded, toggled by Bootstrap's JS
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavToggle} // Toggle our React state when the button is clicked
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
          id="navbarNav"
          ref={navbarCollapseRef} // Attach ref here
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(renderNavLink)}
            {allDropdowns.map(renderDropdown)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
