"use client";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp, BsFillPinMapFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white py-12">
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
            <h3 className="text-lg lg:text-xl font-semibold mt-4 text-center lg:text-left">
              WIRE HARNESS & CABLE ASSEMBLY SOLUTIONS
            </h3>
            <p className="mt-4 text-[#F2F2F2] text-sm leading-relaxed text-center lg:text-left font-sans">
              We deliver precision-engineered wire harness and cable assembly
              solutions for industrial and commercial applications, ensuring
              excellence at every step.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <BsWhatsapp className="text-[#0F8652] text-xl" />
              <span className="text-[#F2F2F2] text-sm">(+62) 81261007619</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <BsWhatsapp className="text-[#0F8652] text-xl" />
              <span className="text-[#F2F2F2] text-sm">(+62) 82390305100</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <AiOutlineMail className="text-xl text-[#F2F2F2]" />
              <span className="text-[#F2F2F2] text-sm">
                sales@grace-solution.com
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Location
            </h4>
            <div className="flex items-start gap-3">
              <BsFillPinMapFill className="text-2xl text-[#0F8652]" />
              <p className="text-[#F2F2F2] text-sm leading-relaxed">
                Jl. Kenanga No.240, Muka Kuning, Kec. Sei Beduk,
                <br />
                Kota Batam, Kepulauan Riau 29433
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#4F5D8A] mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-[#D1D1D1] text-sm">
            © 2024 Grace Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 lg:mt-0">
            <Link
              href="/privacy"
              className="text-[#D1D1D1] hover:text-[#F2F2F2] text-sm transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#D1D1D1] hover:text-[#F2F2F2] text-sm transition"
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
