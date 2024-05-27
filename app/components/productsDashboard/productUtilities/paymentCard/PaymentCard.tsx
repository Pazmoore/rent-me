import React from "react";
import "./payment-card.scss";

const PaymentCard = () => {
  return (
    <div className="paymentCard">
      <div className="price">
        <h3>Est. Payment </h3> <p>$23</p>
      </div>
      <div className="price">
        <h3>Service fee </h3> <p>$23</p>
      </div>
      <div className="total">
        <div className="price">
          <h3>Total Payment </h3> <p>$23</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
