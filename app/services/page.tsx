"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="lg:pt-12 xl:pb-0 w-full">
      {/* Page Header */}
      <div className="mx-auto text-4xl font-semibold underline flex items-center justify-center mb-8">
        Services
      </div>

      {/* Service Sections */}
      <div className="container mx-auto px-4 xl:px-60">
        {[
          {
            title: "Wire Harness",
            description:
              "Our wire harness is crafted with precision and using top-quality materials. Rigorous testing and innovative design set us apart, making our harness the best choice for seamless and efficient electrical connectivity in any application.",
            image: "/Image/optimized/wire_harness_2.webp",
            link: "/services/wireHarness",
          },
          {
            title: "Insert Molding",
            description:
              "Our insert molding stands out for its precision engineering, seamless integration of components, and superior material quality. Meticulous attention to detail ensures optimal performance, making our insert molding the industry's top choice for reliability and durability.",
            image: "/Image/optimized/insert_molding.webp",
            link: "/services/insertMolding",
          },
          {
            title: "Tooling Fabrication",
            description:
              "Our tooling fabrication excels with cutting-edge technology, precision craftsmanship, and a commitment to quality. We deliver top-notch tooling solutions that set industry benchmarks for reliability, durability, and innovation.",
            image: "/Image/optimized/tooling_fabrication.webp",
            link: "/services/toolingFabrication",
          },
          {
            title: "Warehouse and Logistics",
            description:
              "We offer comprehensive warehousing and logistics solutions, ensuring efficient inventory management, seamless operations, and timely deliveries tailored to your business needs.",
            image: "/Image/optimized/warehouse.webp",
            link: "/services/warehouse",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center bg-gray-300 rounded-lg shadow-lg mb-8 xl:h-80 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="lg:w-4/12 flex justify-center items-center p-6">
              <Image
                className="rounded-lg"
                src={service.image}
                alt={`${service.title} Service`}
                layout="responsive"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} // Prioritize the first image
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-8/12 p-6">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700 text-md leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href={service.link}>
                <button
                  type="button"
                  className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition focus:ring-4 focus:ring-blue-300"
                >
                  Find More Information
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-700 text-white text-center py-10 mt-12 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Work with Us</h3>
        <p className="text-md mb-6">
          Ready to bring your project to life with our expertise? Let’s work
          together to create outstanding solutions.
        </p>
        <Link href="/contact">
          <button
            type="button"
            className="bg-white text-blue-700 py-2 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </main>
  );
}
