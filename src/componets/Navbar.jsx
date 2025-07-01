import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo + Name */}
      <div className="flex items-center space-x-2">
        <img src="src\assets\logo.jpg" alt="TrustDose Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-gray-900">TrustDose</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-gray-600 hover:text-black font-medium">
          Home
        </a>
        <a href="#about" className="text-gray-600 hover:text-black font-medium">
          About
        </a>
        <a href="#features" className="text-gray-600 hover:text-black font-medium">
          Features
        </a>
        <a href="#contact" className="text-gray-600 hover:text-black font-medium">
          Contact
        </a>
      </div>

      {/* Connect Wallet Button */}
      <div>
        <button className="bg-[#A7F3D0] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#c2b1d8] transition duration-300">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
