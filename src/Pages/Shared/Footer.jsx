import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 sm:p-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-10">
        {/* Brand Section */}
        <div className="flex flex-col items-start space-y-3 sm:w-1/3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-2xl font-bold text-indigo-500">
              QuestGroup
            </span>
          </div>
          <p className="text-gray-400">
            Empowering your journey with innovative solutions since 2025.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="sm:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Explore
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-indigo-500 transition">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="sm:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Connect with us
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/questgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-indigo-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.834 9.834 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.918 4.918 0 001.523 6.574 4.903 4.903 0 01-2.228-.616v.062a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.922 4.922 0 004.596 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.786-.023-1.17-.068a13.945 13.945 0 007.557 2.212c9.054 0 14.003-7.503 14.003-14.002 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/questgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-indigo-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/questgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-indigo-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} QuestGroup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
