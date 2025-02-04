// import Book from "../model/book.model.js";

// export const getBook = async(req, res) => {
//     try {
//         const book = await Book.find();
//         res.status(200).json(book);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json(error);
//     }
// };
import Book from "../model/book.model.js";

export const addBook = async (req, res) => {
    try {
        // Get book details from the request body
        const { name, price, category, image, title } = req.body;

        // Create a new book instance
        const newBook = new Book({
            name,
            price,
            category,
            image,
            title,
        });

        // Save the new book to the database
        await newBook.save();

        // Respond with the saved book details
        res.status(201).json(newBook);  // HTTP status code 201 for created
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Failed to add book", error });  // Respond with error if something goes wrong
    }
};
