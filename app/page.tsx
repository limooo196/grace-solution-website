"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BsCheck,
  BsWhatsapp,
  BsBuildingFillGear,
  BsArrowRightCircle,
} from "react-icons/bs";
import { FaShippingFast, FaHelicopter } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi"; // Feather Icons
import { HiCheck } from "react-icons/hi"; // Hero Icons

export default function Home() {
  return (
    <main className="font-sans bg-white text-[#0B132B]">
      {/* Hero Section */}
      <section className="relative w-full h-[700px] md:h-[800px] lg:h-[920px]">
        <Image
          src="/Image/green-cable.jpg"
          width={900}
          height={700}
          alt="Grace Solution showcasing wire harness"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B132B] via-[#4F5D8A] to-[#0B132B] opacity-80"></div>
        <motion.div
          className="container mx-auto relative h-full flex items-center px-4 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl max-w-3xl p-6 md:p-10 w-full lg:w-1/2">
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-[#0B132B] leading-tight">
              Custom Wire Harness & Cable Assemblies for Automotive & Industrial
              Sectors
            </h1>

            <h2 className="font-sans mt-4 text-xl md:text-2xl text-[#6C6C6C] italic">
              ISO 9001 Certified | High Durability | 25+ Years of Expertise
            </h2>

            <div className="mt-6 space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <HiCheck className="text-[#0F8652] mr-2" />{" "}
                  <span>25+ Years in the Industry</span>
                </li>
                <li className="flex items-center">
                  <HiCheck className="text-[#0F8652] mr-2" />{" "}
                  <span>98% On-Time Delivery Rate</span>
                </li>
              </ul>

              <p className="text-[#6C6C6C] leading-relaxed text-md md:text-lg">
                For over two decades,{" "}
                <strong className="text-[#0B132B]">Grace Solutions</strong> has
                been driving innovation in demanding industries, delivering
                high-performance wire harnesses and cable assemblies.
              </p>

              <p className="text-[#6C6C6C] leading-relaxed text-md md:text-lg">
                Last year, we successfully delivered 14,200+ assemblies with
                zero critical defects. Let us improve your supply chain with
                solutions that outperform durability standards by 40%.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/6281261007619"
                className="inline-flex items-center gap-x-2 bg-[#0F8652] hover:bg-[#0D7345] text-white font-semibold rounded-md px-8 py-4 shadow-lg transition-transform hover:scale-105 text-lg"
              >
                <BsWhatsapp className="text-2xl" />
                <span>Get in Touch with Our Team →</span>
              </a>
              <p className="text-sm text-[#6C6C6C] italic">
                Fast Response • 24/7 Availability
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Animation */}
      <section className="bg-[#0B132B] py-12 overflow-hidden ">
        <div className="container mx-auto overflow-hidden">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[
              { value: "+300", label: "Total Employees" },
              { value: "+150", label: "High Quality Products" },
              { value: "+6", label: "Super Satisfied Customers" },
              { value: "+18", label: "Years of Experience" },
            ].map((stat, idx) => (
              <div key={idx}>
                <motion.div
                  className="text-3xl md:text-5xl font-bold "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: idx * 0.2,
                    duration: 3,
                    ease: "easeOut",
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm md:text-base overflow-hidden">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] py-20 px-6 sm:px-8 lg:px-12 font-serif">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8 text-gray-800">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
                Leading the Industry in Precision Engineering
              </h2>
              <h1 className="text-5xl sm:text-6xl font-bold text-emerald-600">
                Your Trusted Partner for Custom Engineering Solutions
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 20 years, <strong>PT. Grace Solution</strong> has been
                a leader in providing high-performance wire harnesses and cable
                assemblies. We specialize in delivering custom, high-performance
                engineered solutions for a range of industries, designed to meet
                your requirements.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <HiCheck className="text-emerald-600 mr-2" />
                  <span>ISO 9001 Certified Manufacturing Process</span>
                </li>
                <li className="flex items-center">
                  <HiCheck className="text-emerald-600 mr-2" />
                  <span>
                    State-of-the-Art Facilities at Batamindo Industrial Park
                  </span>
                </li>
                <li className="flex items-center">
                  <HiCheck className="text-emerald-600 mr-2" />
                  <span>
                    Custom Solutions for Automotive and Industrial Applications
                  </span>
                </li>
              </ul>

              <div className="mt-6 text-center">
                <Link href="/about">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-emerald-600/20">
                    Learn More About Our Company →
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="./Image/optimized/female_worker.jpeg"
                alt="PT. Grace Solution Facility"
                layout="fill"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section with Carousel */}
      <section className="container mx-auto my-16 px-4">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
            Our Products
          </h1>
          <p className="text-[#6C6C6C] mt-2 max-w-lg mx-auto">
            Browse our products, built to ensure reliability, performance, and
            value you can trust.
          </p>
        </div>

        {/* Carousel for Featured Products */}
        <motion.div
          className="hidden lg:flex items-center justify-center bg-[#F2F2F2] shadow-lg rounded-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1 pr-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold underline decoration-[#0F8652] text-[#0B132B] mb-4">
              Featured Products
            </h2>
            <p className="text-[#6C6C6C] text-md mb-8">
              A curated selection of our most sought-after cable and harness
              solutions.
            </p>
          </div>
          <div className="w-[70vw] h-[50vh]">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows
              interval={3000}
              className="h-[50vh] w-[60vw] mx-auto  border-2"
            >
              {[
                "product_image_4.jpeg",
                "product_image_2.jpeg",
                "product_image_3.jpeg",
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-full w-full"
                >
                  <Image
                    src={`./Image/optimized/${image}`}
                    alt={`Product ${idx + 1} - Grace Solutions`}
                    width={800}
                    height={500}
                    sizes="(max-width:950px) 100vw, 800px"
                    className="object-contain h-full w-full max-w-[70vw] max-h-[50vh]"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>

        {/* Mobile View */}
        <motion.div
          className="lg:hidden bg-[#F2F2F2] shadow-lg rounded-lg w-full mx-auto my-8 py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-11/12 mx-auto mt-4">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows
              interval={3000}
              className="h-full"
            >
              {["green-cable.jpg", "red-cable.jpg", "blue-cable.jpg"].map(
                (image, idx) => (
                  <div
                    key={idx}
                    className="h-full flex items-center justify-center"
                  >
                    <Image
                      src={`./Image/${image}`}
                      alt={`Product ${idx + 1} - Grace Solutions`}
                      width={400}
                      height={400}
                      sizes="(max-width:950px) 100vw, 700px"
                      className="mx-auto"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
        </motion.div>
      </section>
      <section className="py-16 bg-[#0B132B] font-serif">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F2F2F2]">
              <span className="underline decoration-[#0F8652]">
                GRACE SOLUTIONS :
              </span>
              Your Dependable Partner for Success
            </h1>
            <p className="text-[#F2F2F2]/80 italic mt-2 text-sm md:text-base max-w-2xl mx-auto">
              Delivering Excellence Through Innovation, Service, and Quality.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BsBuildingFillGear className="h-8 w-8" />,
                title: "Advanced Manufacturing",
                text: "Prestigious infrastructure designed to meet your production needs.",
              },
              {
                icon: <FaShippingFast className="h-8 w-8" />,
                title: "24/7 Delivery",
                text: "Round-the-clock logistics to keep your supply chain moving.",
              },
              {
                icon: <IoIosTimer className="h-8 w-8" />,
                title: "Just-In-Time Services",
                text: "Tailored scheduling to optimize efficiency at every stage.",
              },
              {
                icon: <FaHelicopter className="h-8 w-8" />,
                title: "Air Freight",
                text: "Urgent deliveries fulfilled swiftly, meeting tight timelines.",
              },
              {
                icon: <MdOutlinePriceCheck className="h-8 w-8" />,
                title: "Competitive Pricing",
                text: "Premium quality at accessible rates—unmatched value.",
              },
              {
                icon: <TbCertificate className="h-8 w-8" />,
                title: "Certified Excellence",
                text: "ISO9001:2015 and UL certified for the highest standards.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 text-center hover:shadow-xl hover:scale-105 transform transition"
              >
                <div className="text-[#F2F2F2] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F2F2F2]/80 text-sm leading-relaxed font-sans">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="flex items-center gap-2 bg-[#0F8652] text-white font-semibold rounded-md px-6 py-3 hover:bg-[#0D7345] transition-transform transform hover:scale-105 shadow-lg">
              <Link href="/about" className="" aria-label="Learn More">
                More About Us
              </Link>
              <BsArrowRightCircle className="inline-block" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
          Our Services
        </h2>
        <p className="text-[#6C6C6C] mt-2 max-w-lg mx-auto">
          Tailored solutions designed to meet the highest industry standards,
          ensuring reliability and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
          {[
            {
              title: "Wire Harness",
              img: "rsz_wire_harness_3.png",
              desc: "We provide precise and reliable wire harness solutions for a variety of industries.",
            },
            {
              title: "Insert Molding",
              img: "rsz_insert_molding.jpg",
              desc: "Expertly crafted insert molding solutions tailored to your project requirements.",
            },
            {
              title: "Tooling Fabrication",
              img: "tooling_fabrication_1.jpg",
              desc: "High-quality tooling fabrication services for efficient manufacturing.",
            },
            {
              title: "Warehouse",
              img: "warehouse_1.jpg",
              desc: "Comprehensive warehousing solutions to optimize your supply chain.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white flex flex-col items-center"
            >
              <Image
                className="rounded-t-xl"
                src={`./Image/fix_size/${service.img}`}
                sizes="(max-width:300px) 100vw, 300px"
                alt={`${service.title} Service`}
                width={300}
                height={200}
              />
              <div className="p-6">
                <h5 className="font-serif text-xl font-semibold mt-4 text-center text-[#0B132B]">
                  {service.title}
                </h5>
                <p className="text-[#6C6C6C] text-sm mt-3 px-4 text-center">
                  {service.desc}
                </p>
                <div className="mt-6 text-center">
                  <Link href="">
                    <button
                      type="button"
                      className="bg-[#0F8652] text-white py-2 px-6 rounded-md hover:bg-[#0D7345] transition font-semibold"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto py-10 px-4">
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-[#6C6C6C] font-medium">Trusted By</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center mt-8">
          {[
            "oriex.png",
            "servo.jpg",
            "osie.png",
            "pegatron.png",
            "sumitomo.png",
            "siix.jpg",
          ].map((logo, idx) => (
            <div key={idx} className="flex justify-center">
              <Image
                src={`./Image/Logo/${logo}`}
                alt="Partner Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Grace Solutions Section */}

      {/* Quality Section */}
    </main>
  );
}
