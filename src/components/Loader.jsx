import { useState, useEffect } from "react";
import Home from "./Home"
import "../App.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if the user already clicked "Get Explore" in this session
    const isExplored = sessionStorage.getItem("explored");
    if (isExplored === "true") {
      setShowLoader(false);
    }
  }, []);

  const handleExploreClick = () => {
    // Mark as explored for this session
    sessionStorage.setItem("explored", "true");
    setShowLoader(false);
  };

  return (
    <div className="app-container">
      {showLoader ? <LoaderPage onExplore={handleExploreClick} /> : <Homee />}
    </div>
  );
};

const LoaderPage = ({ onExplore }) => {
  return (
    <div className="mainDiv d-flex flex-column justify-content-center align-items-center vh-100 text-white text-center">
      <main className="secondDiv px-3 bg-opacity-75 rounded shadow bg-light p-4 text-dark">
        <h1 className="display-5">“Photography that breathes. Motion that speaks.”</h1>
        <p className="lead">Capturing emotion in motion — welcome to Motion Graph.</p>
        <button className="btn btn-lg btn-light fw-bold mt-3" onClick={onExplore}>
          Get Explore
        </button>
      </main>
    </div>
  );
};

const Homee = () => (
  <>
    <Home />
  </>
);

export default Loader;
