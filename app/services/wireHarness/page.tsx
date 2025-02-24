"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the types for the modal props
interface ModalProps {
  image: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, closeModal }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden="false"
    >
      <div className="bg-white p-4 rounded-lg relative max-w-3xl w-full max-h-full overflow-auto">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 font-bold text-lg"
          aria-label="Close modal"
        >
          X
        </button>
        <Image
          src={image}
          alt="Enlarged Certification"
          className="max-w-full h-auto object-contain mx-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const handleImageClick = (imageSrc: string): void => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentImage("");
  };

  const automotiveWireHarnessTypes = [
    {
      title: "Cable1 Automotive Wire Harness",
      description: "Description for Cable1 Automotive Wire Harness.",
      image: "/images/cable1.jpg", // Placeholder image path
    },
    {
      title: "Cable2 High-Performance Automotive Harness",
      description:
        "Description for Cable2 High-Performance Automotive Harness.",
      image: "/images/cable2.jpg", // Placeholder image path
    },
    {
      title: "Cable3 Eco-Friendly Automotive Wire Harnesses",
      description:
        "Description for Cable3 Eco-Friendly Automotive Wire Harnesses.",
      image: "/images/cable3.jpg", // Placeholder image path
    },
    {
      title: "Cable4 Electric Vehicle Wire Harnesses",
      description: "Description for Cable4 Electric Vehicle Wire Harnesses.",
      image: "/images/cable4.jpg", // Placeholder image path
    },
    {
      title: "Cable5 Standard Automotive Wire Harnesses",
      description: "Description for Cable5 Standard Automotive Wire Harnesses.",
      image: "/images/cable5.jpg", // Placeholder image path
    },
  ];

  const industrialWireHarnessTypes = [
    {
      title: "Cable1 Industrial Wire Harnesses",
      description: "Description for Cable1 Industrial Wire Harnesses.",
      image: "/images/cable6.jpg", // Placeholder image path
    },
    {
      title: "Cable2 Heavy Duty Industrial Wire Harnesses",
      description:
        "Description for Cable2 Heavy Duty Industrial Wire Harnesses.",
      image: "/images/cable7.jpg", // Placeholder image path
    },
    {
      title: "Cable3 Custom Industrial Wire Harnesses",
      description: "Description for Cable3 Custom Industrial Wire Harnesses.",
      image: "/images/cable8.jpg", // Placeholder image path
    },
    {
      title: "Cable4 Marine Industrial Wire Harnesses",
      description: "Description for Cable4 Marine Industrial Wire Harnesses.",
      image: "/images/cable9.jpg", // Placeholder image path
    },
    {
      title: "Cable5 Oil & Gas Wire Harnesses",
      description: "Description for Cable5 Oil & Gas Wire Harnesses.",
      image: "/images/cable10.jpg", // Placeholder image path
    },
  ];

  return (
    <main className=" xl:pb-0 w-full bg-[#F2F2F2]">
      <motion.div
        className="bg-[#0B132B] text-white py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold"> Wire Harness</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Providing high-quality wire harnesses tailored for industries like
            automotive, aerospace, and medical devices, ensuring reliability and
            innovation.
          </p>
        </div>
      </motion.div>
      <div className="container mx-auto p-8">
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B132B] mb-6">
            Automotive Wire Harness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automotiveWireHarnessTypes.map((item, index) => (
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
                  loading="lazy" // Added lazy loading
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

        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B132B] mb-6">
            Industrial Wire Harness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialWireHarnessTypes.map((item, index) => (
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
                  loading="lazy" // Added lazy loading
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
                    className="relative bg-[#F2F2F2] rounded-lg overflow-hidden flex items-center justify-center w-full sm:w-[200px] md:w-[250px] lg:w-[300px] p-4"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Certification ${index + 1}`}
                      width={300}
                      height={400}
                      className="object-contain transition-transform transform hover:scale-110 cursor-pointer w-full h-auto"
                      onClick={() => handleImageClick(imageSrc)}
                      loading="lazy" // Added lazy loading
                    />
                  </div>
                );
              })}
            </div>
            {isOpen && <Modal image={currentImage} closeModal={closeModal} />}
          </div>
        </section>

        {/* Contact Section */}
      </div>
      <section className="relative py-16 px-4 bg-[#0B132B] text-white">
        <div className="max-w-3xl mx-auto text-center rounded-lg p-8 relative">
          {/* Decorative Accent (optional) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#4F5D8A] to-[#0B132B] opacity-80 rounded-lg"></div>

          <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">
            <span className="underline decoration-[#0F8652]">Get in Touch</span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed relative z-10 text-[#F2F2F2]/90">
            Have questions or need a custom solution? Contact us today! top-tier
            results with exceptional care and attention to detail.
          </p>
          <Link href="/contact" className="relative z-10 inline-block">
            <button
              type="button"
              className="bg-[#0F8652] hover:bg-[#0D7345] text-white py-3 px-8 rounded-md font-medium transition-transform transform hover:scale-105 shadow-xl"
            >
              Contact Us
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">
                ➜
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Certificates;
