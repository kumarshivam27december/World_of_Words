import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0); // Total price calculation

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>
      ) : (
        <div className="max-w-md mx-auto mt-6 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded-md shadow-md">
              <div>
                <p className="text-gray-800 font-semibold">{item.title}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 duration-300"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between mt-4 font-bold text-lg">
            <p>Total:</p>
            <p>${totalAmount}</p>
          </div>

          {/* Proceed to Payment */}
          <div className="text-center mt-6">
            <Link to="/payment">
              <button className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-700 duration-300">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Go to Home Button */}
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

export default Cart;
