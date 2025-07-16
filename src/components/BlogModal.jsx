
import React, { useEffect } from 'react';
import { Modal, Button } from 'bootstrap'; 



const BlogModal = ({ show, handleClose, post }) => {
  // useEffect to handle Bootstrap's manual modal toggling if not using react-bootstrap
  useEffect(() => {
    const modalElement = document.getElementById('blogPostModal');
    if (modalElement) {
      const bsModal = new Modal(modalElement);
      if (show) {
        bsModal.show();
      } else {
        bsModal.hide();
      }

      // Cleanup function to dispose of the modal instance
      return () => {
        if (bsModal) {
          bsModal.dispose();
        }
      };
    }
  }, [show]); // Rerun when 'show' changes

  if (!post) {
    return null; // Don't render if no post is selected
  }

  // Ensure Bootstrap JS is loaded for the modal to function correctly
  // Add this script tag in your public/index.html just before closing </body>
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`} // Add d-block to force display
      id="blogPostModal"
      tabIndex="-1"
      aria-labelledby="blogPostModalLabel"
      aria-hidden={!show}
      style={{ display: show ? 'block' : 'none' }} // Ensure display style is set
      onClick={handleClose} // Close when clicking outside modal content
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="blogPostModalLabel">{post.title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            {post.image && (
              <img src={post.image} className="img-fluid rounded mb-3" alt={post.title} style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            )}
            <p className="lead">{post.description}</p>
            <hr />
            <div className="d-flex align-items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <p className="mb-0 fw-bold">{post.author.name}</p>
                <p className="text-muted small mb-0">Published on <time dateTime={post.datetime}>{post.date}</time></p>
              </div>
            </div>
            {/* You can add more details here, like full article content if available */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            {/* Optional: Add a link to the actual blog post page if it exists */}
            {post.link && (
              <a href={post.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Full Post
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;