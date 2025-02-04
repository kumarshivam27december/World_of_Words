import React from "react";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 text-center">
      <h1 className="text-3xl font-bold text-pink-500">Careers at BookStore</h1>
      <p className="mt-6 text-lg leading-7">
        Join our dynamic team and help shape the future of reading and learning. 
        Explore exciting opportunities with us!
      </p>

      {/* Home Button */}
      <div className="mt-6">
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Jobs;
