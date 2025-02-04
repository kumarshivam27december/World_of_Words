// import express from "express";
// import { getBook } from "../controller/book.controller.js";

// const router = express.Router();

// router.get("/books", getBook);

// export default router;
// import express from "express";
// import { addBook } from "../controller/book.controller.js";

// const router = express.Router();

// // POST route to add a new book
// router.post("/add", addBook);

// export default router;
import express from "express";
import { getBook } from "../controller/book.controller.js";
import { addBook } from "../controller/book.controller.js";  // Import the addBook controller

const router = express.Router();

// Get all books
router.get("/", getBook);

// Add a new book
router.post("/", addBook);  // Ensure the POST request is handled correctly

export default router;


