import { Link } from "react-router-dom";


function About() {

  
  return (
    <>
    <section className="py-5 text-center container" >
      <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Mission</h1>
            <p className="lead text-body-secondary">
              To create visuals that move people emotionally — in both motion and still
              frames.
            </p>

          </div>
        </div>

    </section>
      
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          {/* Text Section */}
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Behind the Lens: My Story
            </h1>
            <p className="col-lg-10 fs-4">
              Since 2010, I’ve been chasing light, emotion, and stories through my camera.
              From grand wedding mandaps to intense cinematic frames, I’ve built my
              journey with dedication, creativity, and a love for visual storytelling. Based in
              Kolkata, I travel across India and beyond to tell authentic stories through stills
              and motion.
            </p>
           
            <button className="btn me-4 btn-lg my-2 btn-outline-secondary" >
               <Link to="/services" className="nav-link px-2 text-body-secondary"> Our Services</Link>
              </button>
              <button className="btn ms-5 btn-lg my-2 btn-outline-secondary" >
                 <Link to="/contact" className="nav-link px-2 text-body-secondary"> Contact Me</Link>
              </button>
          </div>
          

          {/* Image Section */}
          <div className="col-md-10 mx-auto col-lg-5">
            <div className="overflow-hidden rounded-3 shadow-lg">
              
              <img
                className="img-fluid rounded-3"
                src="https://images.pexels.com/photos/32090632/pexels-photo-32090632.jpeg"

                alt="Photographer behind the lens"
                width="100%"
              />
            </div>
            
          </div>
          
        </div>
      </div>

      {/* <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">Let’s Create Something Beautiful</h1>
            <p className="col-lg-8 mx-auto lead">
              Every great idea starts with a spark. Let’s turn that spark into something meaningful—crafted with care, purpose, and a touch of magic.
            </p>
            <button type="button" class="btn btn-outline-secondary btn-lg" >
              <Link to="/contact" className="nav-link px-2 text-body-secondary">BOOK NOW</Link>
            </button>
          </div>
        </div>
      </div> */}
    </>

  );
}

export default About;
