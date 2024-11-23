"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";
import {
  BsList,
  BsX,
  BsWhatsapp,
  BsFillPinMapFill,
  BsTelephoneFill,
  BsArrowRight,
  BsArrowLeft,
  BsFacebook,
  BsInstagram,
  BsXCircle,
  BsLinkedin,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const styles = {
  navLinks:
    "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6b519] text-xl",
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/">
              <Image
                src="./Image/Logo/GraceSolutionLogo.png"
                width={120}
                height={80}
                alt="Grace Solution Logo"
                className="cursor-pointer"
              />
            </Link>
            <h3 className="text-xl font-semibold mt-4 text-center lg:text-left">
              WIRE HARNESS AND CABLE ASSEMBLY SOLUTIONS
            </h3>
            <p className="text-gray-400 mt-4 text-center lg:text-left text-sm leading-relaxed">
              We specialize in delivering precision-engineered wire harness and
              cable assembly solutions for industrial and commercial
              applications.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center gap-3 mb-3">
              <BsWhatsapp className="text-green-500 text-xl" />
              <span className="text-gray-300">(+62) 81261007619</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <BsWhatsapp className="text-green-500 text-xl" />
              <span className="text-gray-300">(+62) 82390305100</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <AiOutlineMail className="text-xl" />
              <span className="text-gray-300">sales@grace-solution.com</span>
            </div>
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-4">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-4">Our Location</h4>
            <div className="flex items-start gap-3">
              <BsFillPinMapFill className="text-2xl" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Jl. Kenanga No.240, Muka Kuning, Kec. Sei Beduk, Kota Batam,
                Kepulauan Riau 29433
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Grace Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 lg:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
