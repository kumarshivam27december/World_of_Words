import React from "react";
import { Link } from "react-router-dom"; // Import Link

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 text-center">
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-pink-500 mb-6">About Us</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to our BookStore! At our heart, we are passionate readers who believe in the transformative power of books. Whether you are a bookworm or just starting your reading journey, our goal is to provide you with an easy-to-use platform that offers a wide range of genres, formats, and learning resources.
        </p>
        <img 
          src="https://c8.alamy.com/comp/E8TFDK/shelves-in-a-second-hand-book-shop-filled-with-books-and-more-books-E8TFDK.jpg" 
          alt="Bookstore Image" 
          className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
        />
        
        {/* Our Mission Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Mission</h2>
          <p className="text-lg leading-7 mb-4">
            Our mission is simple: to empower individuals through knowledge. We aim to curate a diverse collection of books, learning materials, and educational resources that are not only enriching but also inspiring. Whether you're looking for the latest bestseller, classic novels, or specialized academic textbooks, we've got something for every reader.
          </p>
          <p className="text-lg leading-7 mb-4">
            We believe in providing a platform that makes discovering and purchasing books as simple as possible, while also supporting local authors and independent publishers. Our vision is to build a library that adapts to the needs of every reader, from casual readers to lifelong learners. We are committed to making education and reading a more accessible and enjoyable experience for all.
          </p>
          <img 
            src="https://img.freepik.com/free-vector/background-with-target-business-elements_23-2147599085.jpg" 
            alt="Mission Image" 
            className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Our Values Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Values</h2>
          <p className="text-lg leading-7 mb-4">
            We stand by values that help guide our work and ensure our platform remains inclusive, educational, and fun for all our customers:
          </p>
          <ul className="list-disc ml-8 text-lg leading-7 mb-4">
            <li><strong>Customer-Centric:</strong> Your needs and satisfaction are our top priority. We are dedicated to providing a seamless shopping experience.</li>
            <li><strong>Diversity & Inclusion:</strong> We offer books from a wide range of cultures, perspectives, and authors to ensure inclusivity in literature.</li>
            <li><strong>Continuous Learning:</strong> We are committed to continuous learning and growth, both as individuals and as a business. Every book we offer is a gateway to new knowledge.</li>
            <li><strong>Sustainability:</strong> We take pride in promoting eco-friendly practices by offering digital books and supporting green initiatives within the publishing industry.</li>
            <li><strong>Community Building:</strong> We strive to foster a community of passionate readers who can share ideas, discuss books, and support one another's learning journeys.</li>
          </ul>
          <img 
            src="https://www.worldcc.com/portals/iaccm/images/Graphics/03%2002%20UN%20Goals%20graphic.png?ver=W1uiaNIX2_Wm7E-3RvdmqA%3D%3D" 
            alt="Values Image" 
            className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* What We Offer Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">What We Offer</h2>
          <p className="text-lg leading-7 mb-4">
            Our platform offers much more than just books. Here's a glimpse of what you can expect:
          </p>
          <ul className="list-disc ml-8 text-lg leading-7 mb-4">
            <li><strong>A Vast Collection:</strong> Thousands of titles across various genres including fiction, non-fiction, self-help, educational, and more.</li>
            <li><strong>Affordable Prices:</strong> Competitive pricing to make books accessible to all, with frequent discounts and offers.</li>
            <li><strong>Personalized Recommendations:</strong> Based on your preferences, we provide tailored book suggestions to help you discover your next favorite read.</li>
            <li><strong>Fast & Reliable Shipping:</strong> We offer fast and secure delivery options to get your books to you in a timely manner.</li>
            <li><strong>Book Reviews & Ratings:</strong> Read reviews and ratings from fellow readers to make informed purchasing decisions.</li>
          </ul>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkj0t4g4qFkaN7uX7VroxPSY7-xRZZQklSpw&s" 
            alt="Offer Image" 
            className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Our Team Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Team</h2>
          <p className="text-lg leading-7 mb-4">
            We are a passionate group of book lovers, technology enthusiasts, and professionals who have come together with one goal in mind: to make the world of books and learning more accessible to all.
          </p>
          <p className="text-lg leading-7 mb-4">
            Our team works tirelessly to curate the best selection of books, provide excellent customer service, and improve the platform’s user experience every day. Each member of our team is dedicated to delivering high-quality service and ensuring that our customers’ needs are met with precision and care.
          </p>
          <p className="text-lg leading-7 mb-4">
            From technology experts maintaining the platform’s smooth functionality to customer service representatives assisting you with any inquiries, we are all united by our love for books and our desire to share that passion with the world.
          </p>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwwn0Vmx9_ZqehEDuG2YekdLgteofaJElGw&s"
            alt="Team Image" 
            className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Why Choose Us?</h2>
          <p className="text-lg leading-7 mb-4">
            In a world full of online bookstores, we stand out because of the following reasons:
          </p>
          <ul className="list-disc ml-8 text-lg leading-7 mb-4">
            <li><strong>Endless Selection:</strong> From eBooks to paperbacks, our collection covers all formats and genres to satisfy your reading needs.</li>
            <li><strong>Exclusive Discounts:</strong> We offer members-only deals, flash sales, and loyalty rewards to help you save more on your purchases.</li>
            <li><strong>Exceptional Service:</strong> Our customer support team is always ready to assist you, ensuring that your experience with us is smooth and enjoyable.</li>
            <li><strong>Local Authors:</strong> We focus on promoting local talent, offering an avenue for independent authors to showcase their work.</li>
          </ul>
          <img 
            src="https://www.starplusservices.com/app/webroot/upload/images/Why%20choose%20us.jpg"
            alt="Why Choose Us Image" 
            className="w-full mt-6 mb-8 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Home Button */}
        <div className="mt-8">
          <Link to="/">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
