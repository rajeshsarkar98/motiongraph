import React, { useState } from 'react'; // Import useState
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Blog.css'; // Your custom CSS
import BlogModal from '../components/BlogModal'; // Import the new Modal component

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    description: 'Learn effective strategies to enhance your website\'s conversion rate and turn more visitors into customers. Discover actionable tips for improving user experience, optimizing calls to action, and leveraging data analytics. This article delves into various aspects, from website design to compelling content and effective calls-to-action, providing a comprehensive guide to boosting your online performance. Dive deep into A/B testing, heatmaps, and user feedback analysis to fine-tune your approach.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=3603&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    description: 'Unlock the power of SEO to skyrocket your sales. This guide covers essential techniques like keyword research, on-page optimization, link building, and performance tracking to boost your organic traffic. Explore advanced SEO tactics including technical SEO, local SEO, and mobile optimization, all designed to increase your visibility and attract qualified leads. Implement these strategies to dominate search engine rankings and expand your customer base.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Lindsay Walton',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=3270&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    description: 'Elevate your customer journey with strategies designed to create memorable and positive interactions. Learn about personalized communication, efficient support systems, and feedback integration to foster loyalty. This article provides detailed insights into creating seamless touchpoints, resolving issues proactively, and building lasting relationships through exceptional service. Understand the importance of every interaction in shaping customer perception and driving repeat business.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=3270&q=80',
    link: '#',
  },
    {
    id: 4,
    title: 'Mastering remote team collaboration',
    description: 'Discover best practices and tools for fostering seamless collaboration within remote teams. From communication strategies to project management, ensure your distributed workforce thrives and achieves its goals. This comprehensive guide covers everything from establishing clear communication channels and utilizing video conferencing effectively, to managing projects with agile methodologies and maintaining team cohesion across different time zones. Empower your remote team to achieve peak performance.',
    date: 'Jan 25, 2020',
    datetime: '2020-01-25',
    author: {
      name: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1497215728101-8557ad300bd7?auto=format&fit=crop&w=3270&q=80',
    link: '#',
  }
];

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleShowModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null); // Clear selected post when closing
  };

  return (
    <section className="py-5 bg-light blog-section-custom">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">From Our Blog</h2>
          <p className="lead text-muted">Unlock insights and strategies to propel your business forward.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                className="card h-100 shadow-sm blog-card-attractive"
                onClick={() => handleShowModal(post)} // Add onClick here
                style={{ cursor: 'pointer' }} // Indicate it's clickable
              >
                <img
                  src={post.image}
                  className="card-img-top blog-card-img"
                  alt={post.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-3">
                    {/* The link is now removed from here, click on card opens modal */}
                    <span className="text-decoration-none text-dark fw-bold">{post.title}</span>
                  </h5>
                  <p className="card-text text-secondary mb-3 flex-grow-1">
                    {post.description ? `${post.description.substring(0, 120)}...` : 'No description available.'}
                  </p>

                  <div className="mt-auto pt-3 border-top">
                    <div className="d-flex align-items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                      <div>
                        <p className="card-text fw-semibold mb-0">{post.author.name}</p>
                        <p className="card-text text-muted small mb-0">
                          <time dateTime={post.datetime}>{post.date}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the BlogModal component */}
      {selectedPost && ( // Only render if a post is selected
        <BlogModal
          show={showModal}
          handleClose={handleCloseModal}
          post={selectedPost}
        />
      )}
    </section>
  );
};

export default Blog;