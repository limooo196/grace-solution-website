"use client";
import Image from "next/image";
import React, { useState } from "react";

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

  const wireHarnessTypes = [
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
  ];

  return (
    <main className="lg:pt-12 xl:pb-0 w-full bg-[#F2F2F2]">
      <div className="container mx-auto p-8">
        {/* Header Section */}
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0B132B]">
            Wire Harness Manufacturing Solutions
          </h1>
          <p className="text-lg lg:text-xl text-[#6C6C6C] mt-4">
            Providing high-quality wire harnesses tailored for industries like
            automotive, aerospace, and medical devices, ensuring reliability and
            innovation.
          </p>
          <button className="mt-6 bg-[#0F8652] hover:bg-[#0D7345] text-white py-2 px-6 rounded transition duration-300 font-medium">
            Contact Us
          </button>
        </header>

        {/* Wire Harness Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B132B] mb-6">
            Wire Harness Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wireHarnessTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#0B132B] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6C6C6C] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B132B] mb-4">
            Certifications
          </h2>
          <p className="text-lg text-[#6C6C6C] mb-6 max-w-2xl mx-auto">
            Trusted and certified for quality and compliance with ISO 9001:2015
            and UL standards.
          </p>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
            <h1 className="text-xl lg:text-2xl font-bold text-[#0B132B] mb-4">
              Certificates
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {["cert1.jpg", "cert2.jpg"].map((cert, index) => {
                const imageSrc = `/Image/certificates/${cert}`;
                return (
                  <div
                    key={index}
                    className="relative bg-[#F2F2F2] rounded-lg overflow-hidden flex items-center justify-center
                       w-full sm:w-[200px] md:w-[250px] lg:w-[300px] p-4"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Certification ${index + 1}`}
                      width={300}
                      height={400}
                      className="object-contain transition-transform transform hover:scale-110 cursor-pointer w-full h-auto"
                      onClick={() => handleImageClick(imageSrc)}
                    />
                  </div>
                );
              })}
            </div>

            {/* Modal for enlarged image */}
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                <div className="bg-white p-4 rounded-lg relative max-w-3xl w-full max-h-full overflow-auto">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 font-bold text-lg"
                  >
                    X
                  </button>
                  <Image
                    src={currentImage}
                    alt="Enlarged"
                    className="max-w-full h-auto object-contain mx-auto"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B132B] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#6C6C6C] mb-6 max-w-2xl mx-auto">
            Have questions or need a custom solution? Contact us today!
          </p>
          <button className="bg-[#0F8652] hover:bg-[#0D7345] text-white py-2 px-6 rounded font-medium transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </main>
  );
};

export default Certificates;
