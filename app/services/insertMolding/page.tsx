"use client";
import Image from "next/image";
import {
  HiOutlineCube,
  HiOutlineCheckCircle,
  HiOutlineRss,
} from "react-icons/hi";

export default function InsertMolding() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#27176A]">
            Insert Molding Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Precision and reliability in insert molding. We provide tailored
            solutions for various industries, ensuring exceptional quality and
            durability in every product.
          </p>
          <button className="mt-6 bg-[#25D366] text-white py-3 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Contact Us
          </button>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose Our Insert Molding
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                icon: (
                  <HiOutlineCheckCircle className="text-[#27176A] text-5xl" />
                ),
              },
              {
                title: "Custom Designs",
                description:
                  "Tailored to your project specifications, ensuring seamless integration.",
                icon: <HiOutlineRss className="text-[#27176A] text-5xl" />,
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
                title: "Automotive",
                description:
                  "Precision components for reliable automotive systems.",
                image: "/images/automotive-insert.jpg",
              },
              {
                title: "Consumer Electronics",
                description:
                  "Durable and compact components for modern devices.",
                image: "/images/electronics-insert.jpg",
              },
              {
                title: "Medical Devices",
                description:
                  "Safe and reliable parts for critical healthcare equipment.",
                image: "/images/medical-insert.jpg",
              },
              {
                title: "Industrial Machinery",
                description:
                  "High-performance solutions for demanding industrial environments.",
                image: "/images/industrial-insert.jpg",
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
                title: "Design Assistance",
                description:
                  "Work with our experts to design the perfect solution for your needs.",
                icon: <HiOutlineCube className="h-8 w-8 text-white" />,
              },
              {
                title: "Prototyping",
                description:
                  "Efficient prototyping for testing and rapid iterations.",
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
            Ready for Custom Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Connect with us to discuss your specific insert molding
            requirements.
          </p>
          <button className="bg-[#25D366] text-white py-3 px-6 rounded hover:bg-[#1DAF54] transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </main>
  );
}
