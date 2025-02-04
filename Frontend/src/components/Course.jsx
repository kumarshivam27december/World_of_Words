import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext"; // Import Cart Context
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Course() {
  const [books, setBooks] = useState([]); // State to store books
  const { addToCart } = useCart(); // Access addToCart function from context
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Fetch books from the backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:4001/book/books") // Fetch books from MongoDB
      .then((response) => {
        setBooks(response.data); // Store the books in state
      })
      .catch((error) => {
        console.error("Error fetching books:", error); // Handle errors
      });
  }, []); // Empty dependency array means this will run once when the component mounts

  // Handle adding a book to the cart
  const handleAddToCart = (book) => {
    addToCart(book); // Add the book to the cart
  };

  // Handle proceeding to the payment page
  const handleProceedToPayment = () => {
    navigate("/payment"); // Redirect to the payment page
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Available Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {books.length === 0 ? (
          <p className="text-center text-gray-600">No books available</p> // Handle empty books
        ) : (
          // Map through the books and display each one
          books.map((book) => (
            <div key={book._id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mt-2">{book.name}</p>
              <p className="text-gray-600">Price: ${book.price}</p>
              <img
                src={book.image}
                alt={book.title}
                className="mt-4 rounded-lg w-full h-72 object-cover"
              />

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(book)} // Add book to cart
                className="bg-pink-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-pink-700 duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Proceed to Payment Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleProceedToPayment} // Navigate to payment page
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 duration-300"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Course;
