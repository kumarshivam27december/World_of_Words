import React, { useState } from "react";
import axios from "axios";  // Import Axios

function AddBook() {
  const [book, setBook] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    title: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to add book
    axios.post("https://world-of-words-vrvn.onrender.com/book", book)  // Ensure your backend is listening on the correct port
      .then((response) => {
        console.log("Book added:", response.data);
        alert("Book added successfully!");
        setBook({
          name: "",
          price: "",
          category: "",
          image: "",
          title: "",
        }); // Reset form after submission
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book.");
      });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={book.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={book.image}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
