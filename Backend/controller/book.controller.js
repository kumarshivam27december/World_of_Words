
import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();  // Fetch all books
        res.status(200).json(books);  // Send the books as JSON
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Failed to fetch books", error });
    }
};
