"use client";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-20 bebas flex items-center justify-between px-2 py-3 bg-white sticky top-0">
      {/* Logo */}
      <div>
        <Image
          src="/cropped-matrix-logo-Photoroom-2 (1).png"
          alt="Matrix Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden text-black md:flex items-center gap-4">
        <a
          href="#"
          className="text-xl hover:text-red-600 transition-colors"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-xl hover:text-red-600 transition-colors"
        >
          About
        </a>

        <a
          href="#product"
          className="text-xl hover:text-red-600 transition-colors"
        >
          Product
        </a>

        <a
          href="#contact"
          className="text-xl hover:text-red-600 transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918810540823"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsappima.png"
            alt="WhatsApp"
            width={80}
            height={80}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Get Quote Button */}
        <button
          type="button"
          className="font-medium bg-[#CF1919] text-white px-3 py-1.5 rounded-sm text-lg hover:bg-red-700 transition-colors"
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;