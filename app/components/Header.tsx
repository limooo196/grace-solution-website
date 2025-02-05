"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for Next.js 13+ App Router
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false); // Added state to check client-side rendering
  const pathname = usePathname(); // Get the current path using usePathname

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change navbar style after scrolling 50px
  };

  useEffect(() => {
    setIsClient(true); // Indicate that the component is now mounted on the client
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  const logoSize = isScrolled ? 80 : 100; // Shrink the logo size when scrolled
  const navHeight = isScrolled ? "h-[60px]" : "h-[90px]"; // Shrink navbar height on scroll
  const navPadding = isScrolled ? "px-6" : "px-12"; // Shrink navbar padding
  const logoTransition = "transform 0.3s ease"; // Smooth transition for logo size

  // Function to check if the link is active
  const isActiveLink = (href: string) => isClient && pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg} ${navHeight}`}
    >
      <div
        className={`container mx-auto ${navPadding} flex justify-between items-center h-full transition-all duration-300`}
      >
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="./Image/Logo/GraceSolutionLogo.png"
            width={logoSize}
            height={logoSize}
            alt="Grace Solution Logo"
            className="cursor-pointer transition-all duration-300"
            style={{ transition: logoTransition }} // Apply smooth transition to logo
          />
        </Link>

        {/* Main Navigation */}
        <div className="flex items-center justify-center flex-grow space-x-10 font-sans">
          <Link
            href="/"
            className={`${
              isActiveLink("/") ? "text-[#0F8652] font-semibold" : "text-black"
            } hover:text-[#0F8652] transition duration-300 ease-out`}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`${
              isActiveLink("/services")
                ? "text-[#0F8652] font-semibold"
                : "text-black"
            } hover:text-[#0F8652] transition duration-300 ease-out`}
          >
            Services
          </Link>

          <Link
            href="/products"
            className={`${
              isActiveLink("/products")
                ? "text-[#0F8652] font-semibold"
                : "text-black"
            } hover:text-[#0F8652] transition duration-300 ease-out`}
          >
            Products
          </Link>

          <Link
            href="/about"
            className={`${
              isActiveLink("/about")
                ? "text-[#0F8652] font-semibold"
                : "text-black"
            } hover:text-[#0F8652] transition duration-300 ease-out`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`${
              isActiveLink("/contact")
                ? "text-[#0F8652] font-semibold"
                : "text-black"
            } hover:text-[#0F8652] transition duration-300 ease-out`}
          >
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-black hover:text-[#0F8652] transition duration-300 ease-out"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-black hover:text-[#0F8652] transition duration-300 ease-out"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="https://wa.me/6281261007619" target="_blank">
            <button className="bg-[#0F8652] text-white hover:bg-[#0D7345] flex items-center gap-2 px-4 py-2 rounded-md shadow-md transition duration-300 ease-out">
              <BsWhatsapp className="text-lg" />
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
