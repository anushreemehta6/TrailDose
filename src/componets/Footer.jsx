import React from 'react'

function Footer() {
  return (
    <footer className="p-6 md:p-8 lg:p-10 bg-white text-[#101828] border-t border-gray-200">
  <div className="mx-auto max-w-screen-xl text-center ">
    {/* Logo + Name */}
    <a
      href="/"
      className="flex justify-center items-center text-2xl font-semibold text-[#101828] mb-4 gap-1"
    >
      <img src="src/assets/logo.jpg" alt="" width={30}/>
      TrustDose
    </a>

    {/* Short Description */}
    <p className="mb-6 text-gray-600 text-sm max-w-xl mx-auto">
      A tamper-proof, transparent, and blockchain-powered platform for clinical trial registration and management.
    </p>

    {/* Nav Links */}
    <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm mb-6 text-[#101828] font-medium">
      <li><a href="#home" className="hover:text-[#00EF8B] transition">Home</a></li>
      <li><a href="#about" className="hover:text-[#00EF8B] transition">About</a></li>
      <li><a href="#features" className="hover:text-[#00EF8B] transition">Features</a></li>
      <li><a href="#contact" className="hover:text-[#00EF8B] transition">Contact</a></li>
      
    </ul>

    {/* Footer Bottom */}
    <span className="text-sm text-gray-500 block">
      © {new Date().getFullYear()} <a href="#" className="hover:text-[#00EF8B] font-semibold">TrustDose</a>. All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer