"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BsWhatsapp,
  BsFillPinMapFill,
  BsTelephoneFill,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-md h-16" : "bg-transparent h-20"
      } z-50`} // No bottom margin here
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center h-full">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="./Image/Logo/GraceSolutionLogo.png"
            width={100}
            height={80}
            alt="Grace Solution Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Contact Information (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-3">
            <BsFillPinMapFill className="text-blue-400 text-xl" />
            <span
              className={`text-sm ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              Muka-Kuning 29433, Batam - Indonesia
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BsTelephoneFill className="text-blue-400 text-xl" />
            <span
              className={`text-sm ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              (0770) 611-367
            </span>
          </div>
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <BsWhatsapp className="text-white text-lg mr-2" />
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileNavBar(!mobileNavBar)}
          className="lg:hidden text-gray-300 text-2xl"
        >
          {mobileNavBar ? <BsArrowLeft /> : <BsArrowRight />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 bg-gray-900 w-[250px] h-full shadow-lg transform transition-transform duration-300 z-50 ${
          mobileNavBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4">
          <Link href="/">
            <Image
              src="./Image/logo/GraceSolutionLogo.png"
              width={100}
              height={75}
              alt="Grace Solution Logo"
              className="cursor-pointer mb-6"
            />
          </Link>
          <ul className="space-y-6">
            <li>
              <Link
                href="/services"
                className={`transition ${
                  isScrolled
                    ? "text-white hover:text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`transition ${
                  isScrolled
                    ? "text-white hover:text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition ${
                  isScrolled
                    ? "text-white hover:text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition ${
                  isScrolled
                    ? "text-white hover:text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center bg-gray-800 shadow-md py-2 rounded-md">
        <ul className="flex gap-12 text-sm font-medium">
          <li
            className={`hover:text-blue-400 transition ${
              isScrolled ? "text-white" : "text-gray-300"
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`hover:text-blue-400 transition ${
              isScrolled ? "text-white" : "text-gray-300"
            }`}
          >
            <Link href="/products">Products</Link>
          </li>
          <li
            className={`hover:text-blue-400 transition ${
              isScrolled ? "text-white" : "text-gray-300"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-blue-400 transition ${
              isScrolled ? "text-white" : "text-gray-300"
            }`}
          >
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
