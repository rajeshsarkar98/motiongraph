import Nav from "./components/Nav";
import Routing from "./utils/Routing";
import Footer from "./components/Footer"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
     <Nav />
     <Routing />
     <Footer />
    </>
  );
}

export default App;


