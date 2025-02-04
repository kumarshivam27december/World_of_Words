import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"; // Import Link for navigation

function Payment() {
  const { cart, clearCart } = useCart();
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment of $${totalAmount} Successful!`);
    clearCart(); // Clear cart after successful payment
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Payment Details</h1>

      <form onSubmit={handlePayment} className="max-w-md mx-auto mt-6 space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={cardDetails.expiry}
          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-300"
        >
          Pay ${totalAmount}
        </button>
      </form>

      {/* Go back to Cart Button */}
      <div className="text-center mt-6">
        <Link to="/cart">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
            Go Back to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
