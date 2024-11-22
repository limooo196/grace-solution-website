"use client";
import Image from "next/image";
import {
  AiOutlineTool,
  AiOutlineCheckCircle,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FaCogs, FaDraftingCompass, FaCertificate } from "react-icons/fa";

export default function ToolingFabrication() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#27176A]">
            Tooling Fabrication Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            At PT. Grace Solution, we specialize in crafting precision tools and
            fixtures that enhance manufacturing efficiency. With our certified
            expertise and advanced facilities, we deliver solutions tailored to
            your needs.
          </p>
          <button className="mt-6 bg-[#25D366] text-white py-3 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Contact Us
          </button>
        </header>

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

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Elevate Your Manufacturing?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact PT. Grace Solution today for precision tooling fabrication
            solutions.
          </p>
          <button className="bg-[#25D366] text-white py-3 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Get in Touch
          </button>
        </section>
      </div>
    </main>
  );
}
