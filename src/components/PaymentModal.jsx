import React, { useEffect } from 'react';
import { Modal } from 'bootstrap'; // Import Bootstrap's JS Modal class (if using plain Bootstrap JS)
// If you were using react-bootstrap library, you'd import:
// import { Modal, Button } from 'react-bootstrap';

const PaymentModal = ({ show, handleClose, paymentDetails }) => {

  // This useEffect ensures Bootstrap's JS modal functionality is correctly triggered.
  // It manually toggles the modal's display based on the 'show' prop.
  useEffect(() => {
    const modalElement = document.getElementById('paymentBarcodeModal');
    if (modalElement) {
      const bsModal = new Modal(modalElement, {
        backdrop: 'static', // Prevent closing when clicking outside
        keyboard: false     // Prevent closing with ESC key
      });

      if (show) {
        bsModal.show();
      } else {
        bsModal.hide();
      }

      // Cleanup function to dispose of the modal instance when component unmounts
      // or 'show' changes to false
      return () => {
        if (bsModal) {
          bsModal.dispose();
        }
      };
    }
  }, [show]); // Re-run effect when 'show' prop changes

  // Placeholder QR Code URL (replace with your actual QR code image)
  // You might generate this dynamically based on amount/order ID in a real app
  const qrCodeUrl = `https://placehold.co/300x300/000000/FFFFFF?text=Scan+to+Pay%0AAmount:+INR+${paymentDetails.amount}`;

  return (
    // Bootstrap Modal structure
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`} // 'show d-block' forces visibility
      id="paymentBarcodeModal"
      tabIndex="-1"
      aria-labelledby="paymentBarcodeModalLabel"
      aria-hidden={!show}
      style={{ display: show ? 'block' : 'none' }} // Control display via inline style
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content payment-modal-content">
          <div className="modal-header payment-modal-header">
            <h5 className="modal-title" id="paymentBarcodeModalLabel">Complete Your Payment</h5>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body payment-modal-body text-center">
            <p className="mb-3">Scan the QR code below to pay **INR {paymentDetails.amount}**</p>
            <p className="mb-4 small text-muted">For: {paymentDetails.name} ({paymentDetails.email})</p>

            {/* QR Code Image */}
            <img
              src={qrCodeUrl}
              alt="Payment QR Code"
              className="img-fluid rounded border border-secondary p-2 payment-qr-code"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/CCCCCC/000000?text=QR+Code+Unavailable"; }} // Fallback
            />

            <p className="mt-4 mb-2 fw-bold">Instructions:</p>
            <ul className="list-unstyled text-start small mx-auto" style={{ maxWidth: '300px' }}>
              <li><i className="fas fa-check-circle text-success me-2"></i> Open your preferred UPI app (e.g., Google Pay, PhonePe, Paytm).</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Select 'Scan QR Code'.</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Scan the code above.</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Confirm the amount and complete the payment.</li>
            </ul>
            <p className="small text-danger mt-3">Do NOT close this window until payment is confirmed.</p>
          </div>
          <div className="modal-footer payment-modal-footer justify-content-center">
            <button type="button" className="btn btn-outline-light btn-lg" onClick={handleClose}>
              Done / Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;