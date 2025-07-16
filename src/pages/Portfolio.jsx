
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ image, text, onView, onLike, liked }) => (
  <div className="col">
    <div className="card shadow-sm h-100">
      <img
        src={image}
        className="card-img-top"
        alt="Portfolio Thumbnail"
        style={{ height: "350px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <p className="card-text flex-grow-1">{text}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="btn-group">
            <button onClick={onView} className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button onClick={onLike} className={`btn btn-sm ${liked ? "btn-success" : "btn-outline-secondary"}`}>
              {liked ? "Liked" : "Like"}
            </button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
);

const Modal = ({ image, text, onClose }) => (
  <div style={modalStyles.overlay}>
    <div style={modalStyles.content}>
      <button onClick={onClose} style={modalStyles.closeButton}>×</button>
      <img src={image} alt="Large View" style={modalStyles.image} />
      <p style={modalStyles.text}>{text}</p>
    </div>
  </div>
);

const Portfolio = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("wedding");


  const weddingImages = [
    {
      image: "https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27155545/pexels-photo-27155545.jpeg",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/12529849/pexels-photo-12529849.jpeg",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    }, {
      image: "https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27155545/pexels-photo-27155545.jpeg",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/12529849/pexels-photo-12529849.jpeg",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    },
    {
      image: "https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27155545/pexels-photo-27155545.jpeg",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/12529849/pexels-photo-12529849.jpeg",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    }
  ];

  const otherImages = [
   
    {
      image: "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?_gl=1*he13bi*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTgzJGozJGwwJGgw",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27118152/pexels-photo-27118152.jpeg?_gl=1*1paa94j*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTk0JGo1NSRsMCRoMA..",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/2566352/pexels-photo-2566352.jpeg?_gl=1*j6iqum*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2Njc4JGozMiRsMCRoMA..",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    },
    {
      image: "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?_gl=1*he13bi*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTgzJGozJGwwJGgw",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27118152/pexels-photo-27118152.jpeg?_gl=1*1paa94j*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTk0JGo1NSRsMCRoMA..",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/2566352/pexels-photo-2566352.jpeg?_gl=1*j6iqum*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2Njc4JGozMiRsMCRoMA..",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    },
    {
      image: "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?_gl=1*he13bi*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTgzJGozJGwwJGgw",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis."
    },
    {
      image: "https://images.pexels.com/photos/27118152/pexels-photo-27118152.jpeg?_gl=1*1paa94j*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2NTk0JGo1NSRsMCRoMA..",
      bio: "Elegant architecture captured at sunset. This view reflects harmony and style."
    },
    {
      image: "https://images.pexels.com/photos/2566352/pexels-photo-2566352.jpeg?_gl=1*j6iqum*_ga*MjM5Njc1ODgyLjE3NDkyMTY1MTQ.*_ga_8JE65Q40S6*czE3NTA2NjU1OTIkbzExJGcxJHQxNzUwNjY2Njc4JGozMiRsMCRoMA..",
      bio: "Creative expression through brush and canvas. Embrace the bold stroke of passion."
    }
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 text-center container">

        <div className="my-5">
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
          <p>
            <button
              className={`me-4 btn my-2 ${activeCategory === "wedding" ? "btn-secondary btn-lg " : "btn-outline-secondary"}`}
              onClick={() => setActiveCategory("wedding")}
            >
              Wedding Photos
            </button>
            <button
              className={`ms-5 btn my-2 ${activeCategory === "other" ? "btn-secondary btn-lg" : "btn-outline-secondary"}`}
              onClick={() => setActiveCategory("other")}
            >
              Other Photos
            </button>
          </p>
        </div>
      </section>

      {/* Album Grid */}

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {(activeCategory === "wedding" ? weddingImages : otherImages).map((item) => (
              <Card
                key={item.id}
                image={item.image}
                text={item.bio}
                liked={likedItems.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onView={() => setViewItem(item)}
              />
            ))}
          </div>
        </div>
      </div>


      {/*  card rendering logic */}
      {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {(activeCategory === "wedding" ? weddingImages : otherImages).map((item) => (
          <Card
            key={item.id}
            image={item.image}
            text={item.bio}
            liked={likedItems.includes(item.id)}
            onLike={() => toggleLike(item.id)}
            onView={() => setViewItem(item)}
          />
        ))}
      </div> */}



      {/* Modal View */}
      {viewItem && (
        <Modal
          image={viewItem.image}
          text={viewItem.bio}
          onClose={() => setViewItem(null)}
        />
      )}
    </main>
  );
};

export default Portfolio;

// Modal inline styles
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  content: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  },

  text: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "1rem",
    background: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    fontSize: "1rem",
    zIndex: 2,
    textAlign: "center",
    lineHeight: "1.5"
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1.2rem",
    background: "rgba(0,0,0,0.3)",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    color: "#fff",
    zIndex: 3
  }
};
