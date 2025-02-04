import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// Route to get all books
router.get("/books", getBook);  // Ensure this matches the frontend API call

export default router;

