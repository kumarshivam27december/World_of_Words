import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Payment() {
  const { cart, clearCart } = useCart();
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    alert("Payment Successful! 🎉");
    clearCart();
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Payment Page</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">No items in the cart.</p>
      ) : (
        <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-md shadow-md space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total Amount:</p>
            <p>${totalAmount}</p>
          </div>

          <button
            onClick={handlePayment}
            className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-700 duration-300"
          >
            Pay Now
          </button>
        </div>
      )}

      <div className="text-center mt-8">
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
