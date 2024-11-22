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
import {
  HiOutlinePencil,
  HiOutlineRss,
  HiOutlineCheckCircle,
  HiOutlineTag,
} from "react-icons/hi";

export default function Home() {
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

        {/* Value-Added Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Design Expertise",
                description:
                  "Collaborate with our experts for tailored wire harness solutions.",
                icon: <HiOutlinePencil className="h-8 w-8" />,
              },
              {
                title: "Prototyping",
                description:
                  "Rapid prototyping services for quick iterations and testing.",
                icon: <HiOutlineRss className="h-8 w-8" />,
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous quality testing to ensure reliable performance.",
                icon: <HiOutlineCheckCircle className="h-8 w-8" />,
              },
              {
                title: "Global Standards",
                description:
                  "Certified with ISO 9001:2015 and compliant with UL standards.",
                icon: <HiOutlineCheckCircle className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition duration-300 transform hover:shadow-xl hover:bg-indigo-50"
              >
                <div className="bg-[#111827] text-white p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
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
          <div className="flex flex-wrap justify-center gap-8">
            {["iso.jpg", "ul.jpg"].map((cert, index) => (
              <div key={index} className="w-40 h-40 bg-gray-100 p-4 rounded-lg">
                <Image
                  src={`/images/${cert}`}
                  alt={`Certification ${index + 1}`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            ))}
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
}
