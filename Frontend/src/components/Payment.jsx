import React, { useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! Thank you for shopping.");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Payment</h1>
      <form onSubmit={handlePayment} className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="CVV"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-300">
          Pay Now
        </button>
      </form>

      {/* Back to Cart */}
      <div className="text-center mt-6">
        <Link to="/cart">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
            Back to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
