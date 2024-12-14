"use client";
import Image from "next/image";
import Link from "next/link";
import {
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
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="font-sans bg-white text-[#0B132B]">
      <SpeedInsights />

      {/* Hero Section */}
      <section className="relative w-full h-[700px] md:h-[800px] lg:h-[920px]">
        <Image
          src="./Image/green-cable.jpg"
          width={900}
          height={700}
          alt="Grace Solution showcasing wire harness"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B132B] via-[#4F5D8A] to-[#0B132B] opacity-80"></div>

        {/* Content */}
        <div className="container mx-auto relative h-full flex items-center px-4 md:px-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl max-w-3xl p-6 md:p-10 w-full lg:w-1/2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B] leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-[#0B132B]">Wire Harness</span> and{" "}
              <span className="text-[#0B132B]">Cable Assembly Solutions</span>
            </h1>
            <h2 className="font-serif mt-4 text-xl md:text-2xl text-[#6C6C6C] italic">
              Precision Craftsmanship, Reliable Performance
            </h2>
            <p className="mt-6 text-[#6C6C6C] leading-relaxed text-md md:text-lg">
              For over two decades,{" "}
              <strong className="text-[#0B132B]">Grace Solutions</strong> has
              set the gold standard in Wire Harness and Cable Assembly
              solutions. Our dedication to quality and innovation has made us a
              trusted leader in the industry.
            </p>
            <p className="mt-4 text-[#6C6C6C] leading-relaxed text-md md:text-lg">
              Let our expertise take your projects further and exceed
              expectations.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/"
                className="inline-flex items-center gap-x-2 bg-[#0F8652] hover:bg-[#0D7345] text-white font-semibold rounded-md px-6 py-3 shadow-lg transition-transform hover:scale-105"
              >
                <BsWhatsapp className="text-2xl" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0B132B] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "+300", label: "Total Employees" },
              { value: "+150", label: "High Quality Products" },
              { value: "+6", label: "Super Satisfied Customers" },
              { value: "+18", label: "Years of Experience" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-[64px] font-bold font-serif">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto my-16 px-4">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
            Our Products
          </h1>
          <p className="text-[#6C6C6C] mt-2 max-w-lg mx-auto">
            Explore our range of premium products designed to deliver
            reliability, performance, and value.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-center bg-[#F2F2F2] shadow-lg rounded-lg p-8">
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
              className="h-[50vh] w-[70vw] mx-auto"
            >
              {["green-cable.jpg", "red-cable.jpg", "blue-cable.jpg"].map(
                (image, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-full w-full"
                  >
                    <Image
                      src={`./Image/${image}`}
                      alt={`Product ${idx + 1} - Grace Solutions`}
                      width={800}
                      height={500}
                      sizes="(max-width:950px) 100vw, 800px"
                      className="object-contain h-full w-full max-w-[70vw] max-h-[50vh]"
                      priority={idx === 0}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden bg-[#F2F2F2] shadow-lg rounded-lg w-full mx-auto my-8 py-5">
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
        </div>
      </section>

      {/* Quality Section */}
      <section className="relative bg-[#0B132B] text-white py-16 px-8 font-sans">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-no-repeat bg-center bg-cover opacity-10"
            style={{ backgroundImage: "url(/path-to-your-illustration.svg)" }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The <span className="text-[#0F8652]">Highest Quality</span> at Every
            Stage
          </h2>
          <p className="text-[#F2F2F2] mb-8 max-w-2xl text-md md:text-lg leading-relaxed">
            At PT. Grace Solution, we deliver exceptional quality at every step.
            With cutting-edge facilities, certified processes, and a skilled
            team, we ensure you receive reliable, premium products.
          </p>

          <div className="space-y-4 text-[#F2F2F2] text-md leading-relaxed">
            {[
              "State-of-the-Art Facilities: Secure infrastructure and stable utilities ensure smooth operations.",
              "ISO9001:2015 & UL Certified: Strict international standards guarantee safety and reliability.",
              "Advanced Machinery: Automated crimping, vertical molding, and precise testing equipment.",
              "Expert Testing Tools: Cross-section analyzers and LAN cable testers uphold product integrity.",
              "Skilled Workforce: KAIZEN & 5S principles drive continuous improvement and efficiency.",
            ].map((item, idx) => (
              <div className="flex items-start" key={idx}>
                <span className="w-3 h-3 rounded-full bg-[#0F8652] mr-4 mt-1 flex-shrink-0"></span>
                <p className="flex-1">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#more"
              className="inline-flex items-center gap-2 bg-[#0F8652] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0D7345] transition-transform transform hover:scale-105 shadow-lg"
            >
              Learn More
              <svg
                className="w-5 h-5 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10H3a1 1 0 
            110-2h11.586l-4.293-4.293a1 1 0 
            011.414-1.414l6 6a1 1 0 
            010 1.414l-6 6a1 1 0 
            01-1.414 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
            Our Services
          </h1>
          <p className="text-[#6C6C6C] mt-2 max-w-lg mx-auto">
            Tailored solutions designed to meet the highest industry standards,
            ensuring reliability and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              img: "tooling_pabrication.jpeg",
              desc: "High-quality tooling fabrication services for efficient manufacturing.",
            },
            {
              title: "Warehouse",
              img: "rsz_warehouse.jpg",
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

      {/* Why Grace Solutions Section */}
      <section className="py-16 bg-[#0B132B] font-serif">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F2F2F2]">
              <span className="underline decoration-[#0F8652]">
                GRACE SOLUTIONS:
              </span>{" "}
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
              More About Us
              <BsArrowRightCircle className="inline-block" />
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
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

      {/* Footer (If you have one, apply consistent typography and spacing) */}
      {/* Example placeholder footer */}
      <footer className="bg-[#0B132B] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-sm">
          <div className="mb-4 md:mb-0">
            © 2024 Grace Solutions. All Rights Reserved.
          </div>
          <div className="space-x-4">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
