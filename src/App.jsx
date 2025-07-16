// App.jsx
import Nav from "./components/Nav";
import AppRoutes from "./utils/Routing"; // Renamed Routing to AppRoutes for clarity
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;