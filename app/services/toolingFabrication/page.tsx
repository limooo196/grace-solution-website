"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineTool,
  AiOutlineCheckCircle,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FaCogs, FaDraftingCompass, FaCertificate } from "react-icons/fa";

export default function ToolingFabrication() {
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
            Tooling Fabrication Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At PT. Grace Solution, we specialize in crafting precision tools and
            fixtures that enhance manufacturing efficiency. With our certified
            expertise and advanced facilities, we deliver solutions tailored to
            your needs.
          </p>
        </div>
      </motion.div>
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Key Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose PT. Grace Solution?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ISO 9001:2015 Certified",
                description:
                  "Our ISO-certified processes ensure the highest standards of quality in every project.",
                icon: <FaCertificate className="text-[#27176A] text-5xl" />,
              },
              {
                title: "Custom Design Expertise",
                description:
                  "We excel in designing and fabricating tools tailored to your specific requirements.",
                icon: <FaDraftingCompass className="text-[#27176A] text-5xl" />,
              },
              {
                title: "Advanced Equipment",
                description:
                  "Equipped with state-of-the-art machines to deliver precision and reliability.",
                icon: <FaCogs className="text-[#27176A] text-5xl" />,
              },
              {
                title: "Experienced Team",
                description:
                  "Leverage the knowledge of our skilled team with decades of tooling experience.",
                icon: (
                  <AiOutlineCheckCircle className="text-[#27176A] text-5xl" />
                ),
              },
              {
                title: "Kaizen Practices",
                description:
                  "Continuous improvement is at the heart of our operations, ensuring innovation and efficiency.",
                icon: <AiOutlineTool className="text-[#27176A] text-5xl" />,
              },
              {
                title: "Trusted by Industry Leaders",
                description:
                  "Partnered with global giants like Sumitomo and Pegatron, reflecting our reliability.",
                icon: <AiOutlineAppstore className="text-[#27176A] text-5xl" />,
              },
            ].map((feature, index) => (
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
            {[
              {
                title: "Automotive Industry",
                description:
                  "Precision tools and fixtures for reliable automotive production.",
                image: "/images/automotive-tooling.jpg",
              },
              {
                title: "Electronics Manufacturing",
                description:
                  "Custom jigs for efficient and precise electronics assembly.",
                image: "/images/electronics-tooling.jpg",
              },
              {
                title: "Industrial Machinery",
                description:
                  "Rugged tools designed for heavy-duty industrial applications.",
                image: "/images/industrial-tooling.jpg",
              },
              {
                title: "Medical Devices",
                description:
                  "High-precision tools for critical healthcare equipment production.",
                image: "/images/medical-tooling.jpg",
              },
            ].map((application, index) => (
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
                />
                <h3 className="text-2xl font-semibold text-[#27176A] mb-4">
                  {application.title}
                </h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value-Added Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
            Value-Added Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Prototyping",
                description:
                  "Accelerate your project timelines with rapid prototyping services.",
                icon: <AiOutlineTool className="h-8 w-8 text-white" />,
              },
              {
                title: "Design Consultation",
                description:
                  "Collaborate with our experts to ensure optimal tooling design.",
                icon: <FaDraftingCompass className="h-8 w-8 text-white" />,
              },
              {
                title: "Rigorous Quality Control",
                description:
                  "Each tool undergoes stringent testing to meet exacting standards.",
                icon: <FaCertificate className="h-8 w-8 text-white" />,
              },
              {
                title: "Maintenance Support",
                description:
                  "Comprehensive after-sales support to keep your tools in top condition.",
                icon: <AiOutlineCheckCircle className="h-8 w-8 text-white" />,
              },
            ].map((service, index) => (
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
              Ready to Elevate Your Manufacturing?
            </span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed relative z-10 text-[#F2F2F2]/90">
            Contact PT. Grace Solution today for precision tooling fabrication
            solutions.
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
