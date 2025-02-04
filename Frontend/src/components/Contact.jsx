import React from "react";
import { Link } from "react-router-dom";  // Import Link

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
        <h1 className="text-3xl font-bold text-center text-pink-500">Contact Us</h1>
        <form className="mt-8 space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Home Button */}
        <div className="text-center mt-6">
          <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
