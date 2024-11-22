"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  BsList,
  BsX,
  BsWhatsapp,
  BsFillPinMapFill,
  BsTelephoneFill,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const styles = {
  navLinks:
    "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6b519] text-xl",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [mobileNavBar, setMobileNavBar] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-lg py-6">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="./Image/Logo/GraceSolutionLogo.png"
            width={120}
            height={80}
            alt="Grace Solution Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Contact Information (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-3">
            <BsFillPinMapFill className="text-blue-400 text-xl" />
            <span className="text-gray-300 text-sm">
              Muka-Kuning 29433, Batam - Indonesia
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BsTelephoneFill className="text-blue-400 text-xl" />
            <span className="text-gray-300 text-sm">(0770) 611-367</span>
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
              src="./Image/Logo/GraceSolutionLogo.png"
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
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center bg-gray-800 shadow-md mt-6 py-3 rounded-md">
        <ul className="flex gap-12 text-gray-300 text-sm font-medium">
          <li className="hover:text-blue-400 transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-blue-400 transition">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-blue-400 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-400 transition">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
