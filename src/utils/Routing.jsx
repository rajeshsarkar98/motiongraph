
import { Routes, Route } from "react-router-dom";


import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Routing() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
