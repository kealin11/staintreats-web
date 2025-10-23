import { useState } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-30">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 w-full max-w-7xl mx-auto">
        {/* LEFT: Logo */}
        <Link to="/">
          <img src="/logo.jpg" alt="Hospital Logo" className="h-14 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-blue-700 font-medium">
          <Link to="/services" className="hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact Us
          </Link>
          <Link to="/machine" className="hover:text-blue-500 transition-colors">
            Machines
          </Link>
        </nav>

        {/* RIGHT: Social Icon + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/milpark-radiology-inc/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col px-4 py-4 gap-4 text-blue-700 font-medium">
            <li>
              <Link
                to="/services"
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/machine"
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Machines
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
