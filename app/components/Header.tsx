"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    setIsClient(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  const logoSize = isScrolled ? 80 : 100;
  const navHeight = isScrolled ? "h-[60px]" : "h-[90px]";
  const navPadding = isScrolled ? "px-6" : "px-12";
  const logoTransition = "transform 0.3s ease";

  const isActiveLink = (href: string) => isClient && pathname === href;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/products", text: "Products" },
    { href: "/about", text: "About Us" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg} ${navHeight}`}
    >
      <div
        className={`container mx-auto ${navPadding} flex justify-between items-center h-full transition-all duration-300`}
      >
        {/* Logo Section */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="./Image/Logo/GraceSolutionLogo.png"
            width={logoSize}
            height={logoSize}
            alt="Grace Solution Logo"
            className="cursor-pointer transition-all duration-300"
            style={{ transition: logoTransition }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-grow space-x-10 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActiveLink(link.href)
                  ? "text-[#0F8652] font-semibold"
                  : "text-black"
              } hover:text-[#0F8652] transition duration-300 ease-out`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Desktop Social Media Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://wa.me/6281261007619" target="_blank">
            <button className="bg-[#0F8652] text-white hover:bg-[#0D7345] flex items-center gap-2 px-4 py-2 rounded-md shadow-md transition duration-300 ease-out">
              <BsWhatsapp className="text-lg" />
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-black hover:text-[#0F8652] transition duration-300 ease-out"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-2xl ${
                  isActiveLink(link.href)
                    ? "text-[#0F8652] font-semibold"
                    : "text-black"
                } hover:text-[#0F8652] transition duration-300 ease-out`}
              >
                {link.text}
              </Link>
            ))}

            <div className="flex space-x-6 mt-8">
              <Link href="https://wa.me/6281261007619" target="_blank">
                <button className="bg-[#0F8652] text-white hover:bg-[#0D7345] flex items-center gap-2 px-6 py-3 rounded-md shadow-md transition duration-300 ease-out">
                  <BsWhatsapp className="text-xl" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
