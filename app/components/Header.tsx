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
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic background for the header
  const navBg = isScrolled ? "bg-white" : "bg-[#0B132B]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md ${navBg}`}
      style={{
        height: isScrolled ? "70px" : "90px",
      }}
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
          <div
            className={`flex items-center gap-3 ${
              isScrolled ? "text-[#0B132B]" : "text-white"
            }`}
          >
            <BsFillPinMapFill className="text-xl" />
            <span className="text-sm">
              Muka-Kuning 29433, Batam - Indonesia
            </span>
          </div>
          <div
            className={`flex items-center gap-3 ${
              isScrolled ? "text-[#0B132B]" : "text-white"
            }`}
          >
            <BsTelephoneFill className="text-xl" />
            <span className="text-sm">(0770) 611-367</span>
          </div>
          <Link href="/contact">
            <button
              className={`bg-[#0F8652] ${
                isScrolled ? "text-[#0B132B]" : "text-white"
              } flex items-center gap-2 hover:bg-[#0D7345] px-4 py-2 rounded-md shadow-md transition duration-300 font-semibold`}
            >
              <BsWhatsapp className="text-lg" />
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileNavBar(!mobileNavBar)}
          className={`${
            isScrolled ? "text-[#0B132B]" : "text-white"
          } lg:hidden text-2xl`}
        >
          {mobileNavBar ? <BsArrowLeft /> : <BsArrowRight />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 ${navBg} w-[250px] h-full shadow-lg transform transition-transform duration-300 z-50 ${
          mobileNavBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4">
          <Link href="/">
            <Image
              src="./Image/Logo/GraceSolutionLogo.png"
              width={100}
              height={75}
              alt="Grace Solution Logo"
              className="cursor-pointer mb-6"
            />
          </Link>
          <ul className="space-y-6">
            {/* For mobile, keep links white on a navy background */}
            <li>
              <Link
                href="/services"
                className="text-white hover:text-[#0F8652] transition font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white hover:text-[#0F8652] transition font-medium"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-[#0F8652] transition font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-[#0F8652] transition font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Desktop Navigation with a glass-like background */}
      <nav className="hidden lg:flex justify-center py-2">
        <div className="bg-[#0B132B]/60 backdrop-blur-md rounded-full px-8 py-2">
          <ul className="flex gap-12 text-sm font-medium text-white">
            <li className="hover:text-[#0F8652] transition">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-[#0F8652] transition">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:text-[#0F8652] transition">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#0F8652] transition">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
