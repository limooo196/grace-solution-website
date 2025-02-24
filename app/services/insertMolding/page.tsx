"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineCube,
  HiOutlineCheckCircle,
  HiOutlineRss,
} from "react-icons/hi";

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
          alt="Enlarged Image"
          className="max-w-full h-auto object-contain mx-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default function InsertMolding() {
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

  // Dummy data for the features and application areas
  const features = [
    {
      title: "Precision Engineering",
      description:
        "Achieve exceptional accuracy with state-of-the-art insert molding processes.",
      icon: <HiOutlineCube className="text-[#27176A] text-5xl" />,
    },
    {
      title: "Durable Solutions",
      description:
        "Robust materials and reliable designs for long-lasting performance.",
      icon: <HiOutlineCheckCircle className="text-[#27176A] text-5xl" />,
    },
    {
      title: "Custom Designs",
      description:
        "Tailored to your project specifications, ensuring seamless integration.",
      icon: <HiOutlineRss className="text-[#27176A] text-5xl" />,
    },
  ];

  const applications = [
    {
      title: "Automotive",
      description: "Precision components for reliable automotive systems.",
      image: "/images/cable1.jpg",
    },
    {
      title: "Consumer Electronics",
      description: "Durable and compact components for modern devices.",
      image: "/images/cable2.jpg",
    },
    {
      title: "Medical Devices",
      description: "Safe and reliable parts for critical healthcare equipment.",
      image: "/images/cable3.jpg",
    },
    {
      title: "Industrial Machinery",
      description:
        "High-performance solutions for demanding industrial environments.",
      image: "/images/cable4.jpg",
    },
  ];

  const valueAddedServices = [
    {
      title: "Design Assistance",
      description:
        "Work with our experts to design the perfect solution for your needs.",
      icon: <HiOutlineCube className="h-8 w-8 text-white" />,
    },
    {
      title: "Prototyping",
      description: "Efficient prototyping for testing and rapid iterations.",
      icon: <HiOutlineRss className="h-8 w-8 text-white" />,
    },
    {
      title: "Quality Testing",
      description:
        "Ensure reliability and performance with rigorous quality checks.",
      icon: <HiOutlineCheckCircle className="h-8 w-8 text-white" />,
    },
    {
      title: "Custom Packaging",
      description:
        "Streamline installation with tailored labeling and packaging options.",
      icon: <HiOutlineCube className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <main className="bg-gray-50">
      <motion.div
        className="bg-[#0B132B] text-white py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold">
            {" "}
            Insert Molding Solutions
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Precision and reliability in insert molding. We provide tailored
            solutions for various industries, ensuring exceptional quality and
            durability in every product.
          </p>
        </div>
      </motion.div>
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Header Section */}

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose Our Insert Molding
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Areas Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Application Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-300"
              >
                <Image
                  src={application.image}
                  alt={application.title}
                  width={500}
                  height={400}
                  className="rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold text-[#27176A] mb-4">
                  {application.title}
                </h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value-Added Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
            Value-Added Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {valueAddedServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              >
                <div className="bg-[#25D366] p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="relative py-16 px-4 bg-[#0B132B] text-white">
        <div className="max-w-3xl mx-auto text-center rounded-lg p-8 relative">
          {/* Decorative Accent (optional) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#4F5D8A] to-[#0B132B] opacity-80 rounded-lg"></div>

          <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">
            <span className="underline decoration-[#0F8652]">
              Ready for Custom Solutions?
            </span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed relative z-10 text-[#F2F2F2]/90">
            Connect with us to discuss your specific insert molding
            requirements.
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
}
