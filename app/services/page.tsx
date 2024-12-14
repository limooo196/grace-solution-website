"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Wire Harness",
      description:
        "Our wire harness solutions are crafted with precision and top-quality materials. Rigorous testing and innovative design ensure seamless, efficient electrical connectivity for any application.",
      image: "/Image/optimized/wire_harness_2.webp",
      link: "/services/wireHarness",
    },
    {
      title: "Insert Molding",
      description:
        "Our insert molding combines precision engineering, seamless component integration, and superior materials. Meticulous attention to detail delivers unmatched reliability and durability.",
      image: "/Image/optimized/insert_molding.webp",
      link: "/services/insertMolding",
    },
    {
      title: "Tooling Fabrication",
      description:
        "Leveraging cutting-edge technology and precision craftsmanship, our tooling fabrication sets industry benchmarks for reliability, durability, and innovation.",
      image: "/Image/optimized/tooling_fabrication.webp",
      link: "/services/toolingFabrication",
    },
    {
      title: "Warehouse and Logistics",
      description:
        "Our comprehensive warehousing and logistics services ensure efficient inventory management, seamless operations, and timely deliveries, tailored to your business needs.",
      image: "/Image/optimized/warehouse.webp",
      link: "/services/warehouse",
    },
  ];

  return (
    <main className="w-full bg-[#F2F2F2] font-sans">
      {/* Page Intro Section */}
      <section className="pt-12 pb-8 px-4 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
          Services
        </h1>
        <p className="text-[#6C6C6C] mt-4 max-w-2xl mx-auto">
          Explore our range of specialized services designed to deliver
          exceptional quality, innovation, and reliability. Each offering is
          tailored to ensure that your business thrives with the support of our
          dedicated expertise.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 xl:px-60 pb-16">
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
            Ready to bring your project to life with our expertise? Let’s
            collaborate to create outstanding solutions that meet your exact
            needs. Our team is dedicated to ensuring every requirement is met
            with precision, quality, and personalized care.
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
