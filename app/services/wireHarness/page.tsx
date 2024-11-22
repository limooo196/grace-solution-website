"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineRss,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 bg-gray-50">
      <div className="container mx-auto p-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#27176A]">
            Wire Harness Manufacturing Solutions
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Providing high-quality wire harnesses tailored for industries like
            automotive, aerospace, and medical devices, ensuring reliability and
            innovation.
          </p>
          <button className="mt-6 bg-[#25D366] text-white py-2 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Contact Us
          </button>
        </header>

        {/* Wire Harness Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Wire Harness Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Automotive Wire Harnesses",
                description:
                  "Engineered to meet stringent automotive standards, ensuring safety and reliability in vehicles.",
                image: "/images/automotive-harness.jpg",
              },
              {
                title: "Industrial Wire Harnesses",
                description:
                  "Rugged and durable harnesses designed for harsh industrial environments.",
                image: "/images/industrial-harness.jpg",
              },
              {
                title: "Aerospace Wire Harnesses",
                description:
                  "High-performance harnesses for aerospace applications, adhering to strict regulatory standards.",
                image: "/images/aerospace-harness.jpg",
              },
              {
                title: "Medical Device Wire Harnesses",
                description:
                  "Reliable and safe harnesses for critical medical equipment.",
                image: "/images/medical-harness.jpg",
              },
              {
                title: "Custom Wire Harnesses",
                description:
                  "Tailored harness solutions for unique requirements across various sectors.",
                image: "/images/custom-harness.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:from-indigo-200 hover:to-indigo-300 transition duration-300 transform hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500} // Example width
                  height={300} // Example height
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#27176A] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Trusted and certified for quality and compliance with ISO 9001:2015
            and UL standards.
          </p>
          <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">Certificates</h1>
            <div className="flex flex-wrap justify-center gap-8">
              {["cert1.jpg", "cert2.jpg"].map((cert, index) => {
                const imageSrc = `/Image/certificates/${cert}`;
                return (
                  <div
                    key={index}
                    className="relative w-40 h-40 bg-gray-100 p-4 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Certification ${index + 1}`}
                      width={160}
                      height={160}
                      className="object-contain transition-transform transform hover:scale-110 cursor-pointer"
                      onClick={() => handleImageClick(imageSrc)} // Click to open modal
                    />
                  </div>
                );
              })}
            </div>

            {/* Modal for enlarged image */}
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded-lg relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600"
                  >
                    X
                  </button>
                  <Image
                    src={currentImage}
                    alt="Enlarged"
                    className="max-w-full max-h-screen"
                    width={500} // Add width and height for the enlarged image
                    height={500}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or need a custom solution? Contact us today!
          </p>
          <button className="bg-[#25D366] text-white py-2 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </main>
  );
};

export default Certificates; // Export the Certificates component
