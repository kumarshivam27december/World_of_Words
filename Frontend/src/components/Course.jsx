// import React, { useEffect, useState } from "react";
// import axios from "axios";  // Import Axios
// import { Link } from "react-router-dom";  // Import Link for "Go to Home" button
// function Course() {
//   const [books, setBooks] = useState([]);
//   // Fetch books when the component mounts
//   useEffect(() => {
//     // Fetch books from the backend
//     axios.get("http://localhost:4001/book")  // Adjust the port as per your backend configuration
//       .then((response) => {
//         setBooks(response.data);  // Set the fetched books to state
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//       });
//   }, []);  // Empty dependency array means this will run only once when the component mounts
//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
//       <h1 className="text-3xl font-bold text-center text-pink-500">Available Books</h1>
//       <div className="book-list mt-8">
//         {books.length === 0 ? (
//           <p className="text-center text-gray-600">No books available</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {books.map((book) => (
//               <div key={book._id} className="book-card bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
//                 <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
//                 <p className="text-gray-600 mt-2">{book.name}</p>
//                 <p className="text-gray-600 mt-2">Price: ${book.price}</p>
//                 <p className="text-gray-600 mt-2">Category: {book.category}</p>
//                 <img src={book.image} alt={book.title} className="mt-4 rounded-lg w-full h-72 object-cover" /> {/* Increased height */}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Go to Home Button */}
//       <div className="text-center mt-8">
//         <Link to="/">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
//             Go to Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default Course;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";  // Import Cart Context

function Course() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();  // Get addToCart function
  const navigate = useNavigate();   // To redirect after adding to cart

  useEffect(() => {
    axios
      .get("http://localhost:4001/book")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleBookClick = (book) => {
    addToCart(book);        // Add book to cart
    navigate("/payment");   // Redirect to payment page
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
      <h1 className="text-3xl font-bold text-center text-pink-500">Available Books</h1>
      <div className="book-list mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length === 0 ? (
          <p className="text-center text-gray-600">No books available</p>
        ) : (
          books.map((book) => (
            <div
              key={book._id}
              className="book-card bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => handleBookClick(book)} // Add click handler
            >
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mt-2">{book.name}</p>
              <p className="text-gray-600 mt-2">Price: ${book.price}</p>
              <p className="text-gray-600 mt-2">Category: {book.category}</p>
              <img
                src={book.image}
                alt={book.title}
                className="mt-4 rounded-lg w-full h-72 object-cover"
              />
            </div>
          ))
        )}
      </div>

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

export default Course;
