import { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="flex justify-between items-center px-4 md:px-10 py-3 max-w-7xl mx-auto">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo2.jpg"
            alt="StainTreats Logo"
            className="h-14 w-auto object-contain"
          />
          <span className="text-2xl font-extrabold text-red-600 tracking-wide hidden sm:block">
            StainTreats
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex gap-8 font-semibold items-center">
          <Link
            to="/"
            className="text-red-600 no-underline transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-red-600 no-underline transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-red-600 no-underline transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-red-600 no-underline transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* SOCIALS + MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/Staintreats/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/staintreats_290503/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            <FaInstagram className="text-xl" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-gray-800 hover:text-red-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-800 font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
