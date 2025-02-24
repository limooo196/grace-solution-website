"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Wire Harness",
      description:
        "Our wire harnesses are designed for precision and reliability, using only the highest quality materials. Every product undergoes thorough testing to guarantee seamless electrical connections in any environment.",
      image: "./Image/fix_size/wire_harness_2.png",
      link: "/services/wireHarness",
    },
    {
      title: "Insert Molding",
      description:
        "With advanced engineering and careful attention to detail, our insert molding services deliver durable, high-performance components that integrate perfectly into your systems, ensuring long-lasting results.",
      image: "/Image/fix_size/rsz_insert_molding.jpg",
      link: "/services/insertMolding",
    },
    {
      title: "Tooling Fabrication",
      description:
        "Combining cutting-edge technology with expert craftsmanship, our tooling fabrication sets new industry standards. We focus on creating reliable, durable, and innovative tools that push the limits of performance.",
      image: "./Image/fix_size/warehouse_1.jpg",
      link: "/services/toolingFabrication",
    },
    {
      title: "Warehouse and Logistics",
      description:
        "Our warehouse and logistics solutions are designed for efficiency, ensuring smooth inventory management and timely deliveries. We tailor our services to meet the unique needs of your business, no matter the size or complexity.",
      image: "/Image/fix_size/warehouse_1.jpg",
      link: "/services/warehouse",
    },
  ];

  return (
    <main className="w-full bg-[#F2F2F2] font-sans">
      {/* Page Intro Section */}

      <motion.div
        className="bg-[#0B132B] text-white py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold">Our Services</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Discover our range of specialized services, designed to deliver
            excellence, innovation, and reliability tailored to your needs.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <section className="container mx-auto px-4 xl:px-60 pb-16 py-12">
        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Image Section */}
              <div className="lg:w-4/12 w-full h-full">
                <div className="relative w-full h-64 lg:h-full">
                  <Image
                    className="object-cover w-full h-full"
                    src={service.image}
                    alt={`${service.title} Service`}
                    fill
                    sizes="(max-width:1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="lg:w-8/12 p-6 lg:p-10">
                <h2 className="font-serif text-2xl font-bold mb-4 text-[#0B132B]">
                  {service.title}
                </h2>
                <p className="text-[#6C6C6C] text-md leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <button
                    type="button"
                    className="bg-[#0F8652] text-white py-2 px-6 rounded-md hover:bg-[#0D7345] transition-transform transform hover:scale-105 font-semibold shadow-lg"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-16 px-4 bg-[#0B132B] text-white">
        <div className="max-w-3xl mx-auto text-center rounded-lg p-8 relative">
          {/* Decorative Accent (optional) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#4F5D8A] to-[#0B132B] opacity-80 rounded-lg"></div>

          <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">
            <span className="underline decoration-[#0F8652]">Work with Us</span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed relative z-10 text-[#F2F2F2]/90">
            Let's collaborate to create innovative solutions tailored to your
            needs. Our team is committed to delivering top-tier results with
            exceptional care and attention to detail.
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
