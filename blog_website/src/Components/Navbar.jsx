// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
//       <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
//       <Link to="/destinations" style={{ margin: "0 10px" }}>Destinations</Link>
//       <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
//       <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">TravelBlog</Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
