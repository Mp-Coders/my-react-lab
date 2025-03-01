import React from "react";
import { Link } from "react-router-dom";
import "./../styles/ThankYouPage.css";

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default ThankYouPage;
