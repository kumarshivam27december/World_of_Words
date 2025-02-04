
// import React from "react";
// import Home from "./home/Home";
// import Course from "./components/Course";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";
// import Jobs from "./components/Jobs";
// import PressKit from "./components/PressKit";
// // import AddBook from "./components/AddBook";  // Import the AddBook component

// function App() {
//   const [authUser, setAuthUser] = useAuth();  // Check authentication state
//   console.log(authUser);

//   return (
//     <>
//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/course" element={<Course />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/press-kit" element={<PressKit />} />
          
//           {/* Protected Route for Courses */}
//           <Route
//             path="/courses"
//             element={authUser ? <Courses /> : <Navigate to="/signup" />}
//           />

//           {/* Signup Route */}
//           <Route path="/signup" element={<Signup />} />

//           {/* AddBook Route */}
//           {/* <Route
//             path="/add-book"
//             element={authUser ? <AddBook /> : <Navigate to="/signup" />}  // Protected Route
//           /> */}
//         </Routes>
//         <Toaster />
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import Contact from "./components/Contact";
import About from "./components/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Jobs from "./components/Jobs";
import PressKit from "./components/PressKit";
import Cart from "./components/Cart";       // 🛒 Import Cart Component
import Payment from "./components/Payment"; // 💳 Import Payment Component
// import AddBook from "./components/AddBook";  // Import the AddBook component

function App() {
  const [authUser, setAuthUser] = useAuth(); // Check authentication state
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen"> {/* Ensure full-page background */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/press-kit" element={<PressKit />} />

          {/* 🛒 Cart & 💳 Payment Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

          {/* Protected Route for Courses */}
          <Route
            path="/courses"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />

          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />

          {/* AddBook Route (Commented for now) */}
          {/* <Route
            path="/add-book"
            element={authUser ? <AddBook /> : <Navigate to="/signup" />}  // Protected Route
          /> */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
