
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Testimonials.css'; // Import your custom CSS for testimonials

// Dummy data for testimonials
const testimonialsData = [
  {
    id: 1,
    quote: "Motion Graph captured our wedding day perfectly! Every photo tells a story, and the video brought tears to our eyes. Their team was professional, friendly, and truly understood our vision. Highly recommended!",
    author: "Priya Sharma",
    role: "Bride",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote: "The pre-wedding shoot with Motion Graph was an absolute blast! They made us feel so comfortable, and the creativity in each shot was amazing. We cherish these memories forever.",
    author: "Rahul Verma",
    role: "Groom",
    avatar: "https://images.unsplash.com/photo-1528892952291-009c669ce8f5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote: "For our baby's first birthday, Motion Graph delivered beyond expectations. The photos are vibrant, lively, and truly captured the joy of the day. A fantastic experience from start to finish.",
    author: "Anjali Singh",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 4,
    quote: "The corporate event photography was seamless and highly professional. Motion Graph understood our brand needs and delivered high-quality images that perfectly reflect our company's ethos. Excellent work!",
    author: "Vikram Bose",
    role: "Event Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
  },
  {
    id: 5,
    quote: "Their team made our family portrait session so much fun! Even the kids enjoyed it. The final prints are stunning and now proudly displayed in our home.",
    author: "Deepa Narayan",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 6,
    quote: "The quality of the wedding album was exceptional. Every page is a masterpiece. Motion Graph truly put their heart into preserving our memories.",
    author: "Arjun Reddy",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
];

// Helper component for Star Rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fas fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    );
  }
  return <div className="mb-2">{stars}</div>;
};

function Testimonials() {
  return (
    <section className="testimonials-section py-5 py-md-6 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">What Our Clients Say</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Hear directly from those who've experienced our passion for photography and cinematic storytelling.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="row justify-content-center g-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="col-12 col-md-6 col-lg-4 d-flex" // Responsive columns and equal height
            >
              <div
                className="card testimonial-card h-100 shadow-sm border-0 p-4"
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered entry animation
              >
                <div className="card-body d-flex flex-column text-center">
                  {/* Star Rating */}
                  {testimonial.rating && <StarRating rating={testimonial.rating} />}

                  {/* Quote */}
                  <p className="card-text flex-grow-1 testimonial-quote">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="rounded-circle me-3 testimonial-avatar"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.author}</h6>
                      <p className="text-muted small mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;