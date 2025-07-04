import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=3603&q=80',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Lindsay Walton',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=3270&q=80',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=3270&q=80',
  }
];

const Blog = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">From the blog</h2>
          <p className="text-muted">Learn how to grow your business with our expert advice.</p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2 text-muted small">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <div className="d-flex align-items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="rounded-circle me-2"
                        width="24"
                        height="24"
                      />
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                  <h5 className="card-title">
                    <a href="#" className="stretched-link text-dark text-decoration-none">{post.title}</a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
