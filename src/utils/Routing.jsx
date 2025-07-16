// Routing.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services"; // This is now your Services OVERVIEW page
import ServiceDetailPage from "../pages/ServiceDetailPage"; // NEW: For individual service details
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Payment from "../pages/Payment";

// Other dynamic components as before
import BabyCinematicVideo from "../pages/BabyCinematicVideo";
import BabyFirstBirthdayPhotoshoot from "../pages/BabyFirstBirthdayPhotoshoot";
import BabyPortfolio from "../pages/BabyPortfolio";
import ChildrenBooking from "../pages/ChildrenBooking";
import EventBooking from "../pages/EventBooking";
// If you want separate, unique pages for these, keep them. Otherwise,
// the ServiceDetailPage handles them dynamically.
// import FirstRiceCeremony from "../pages/FirstRiceCeremony";
// import MeternityPhotography from "../pages/MeternityPhotography";
// import NewBornBabyPhotoshoot from "../pages/NewBornBabyPhotoshoot";
// import UpanayanPhotography from "../pages/UpanayanPhotography";

import PreweddingPortfolio from "../pages/PreweddingPortfolio";
import PreweddingShortfilms from "../pages/PreweddingShortfilms";
import WeddingFilms from "../pages/WeddingFilms";
import WeddingPortfolio from "../pages/WeddingPortfolio";
import Booking from "../pages/Booking";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} /> {/* Main services overview */}
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/booking" element={<Booking />} />

      {/* Dynamic Route for individual Services */}
      {/* This route will catch any path like /services/maternity, /services/newborn, etc. */}
      <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

      {/* Dynamic Routes for Portfolio */}
      <Route path="/portfolio/prewedding" element={<PreweddingPortfolio />} />
      <Route path="/portfolio/wedding" element={<WeddingPortfolio />} />
      <Route path="/portfolio/baby" element={<BabyPortfolio />} />

      {/* Dynamic Routes for Films */}
      <Route path="/film/wedding" element={<WeddingFilms />} />
      <Route path="/film/prewedding" element={<PreweddingShortfilms />} />
      <Route path="/film/baby" element={<BabyCinematicVideo />} />

      {/* Dynamic Routes for Booking */}
      <Route path="/booking/event" element={<EventBooking />} />
      <Route path="/booking/children" element={<ChildrenBooking />} />

      {/* Catch-all for undefined routes - can be a 404 page */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;