import Loader from "./Loader";
import "../styles/Testimonials.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      {/* <div className="testimonial-container">
        <h2 className="testimonial-heading">Real Emotions. Real Clients.</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Motion Graph made our wedding look like a movie! The details and emotions
            were captured beautifully.”
          </p>
          <p className="testimonial-author">– Ritu & Ayan</p>
        </div>
      </div> */}
      <Loader />
     
    </section>
  );
}

export default Testimonial;
