"use client";
import Image from "next/image";
import Link from "next/link";
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
  BsBuildingFillGear,
  BsArrowRightCircle,
} from "react-icons/bs";
import { FaShippingFast, FaHelicopter } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaToolbox, FaWarehouse, FaWrench, FaCube } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <main className="">
      <section className="relative w-full h-[920px] lg:h-[960px]">
        {/* Background Image */}
        <Image
          src="./Image/green-cable.jpg"
          width={900}
          height={700}
          alt="Grace Solution showcasing wire harness"
          className="w-full h-full object-cover absolute"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-600 opacity-70"></div>

        {/* Content */}
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between w-full h-full px-4 md:px-8 relative">
          {/* Text Section */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-4xl p-6 lg:p-12 w-full lg:w-1/2 lg:ml-12 my-12 lg:my-24">
            <h1 className="text-2xl lg:text-3xl uppercase font-extrabold text-[#27176A]">
              Your Trusted Partner in Wire Harness and Cable Assembly Solutions
            </h1>
            <h2 className="mt-4 text-lg lg:text-xl font-bold text-gray-800">
              Precision Craftsmanship, Reliable Performance
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              For over two decades, Grace Solutions has redefined precision
              engineering, setting the gold standard in Wire Harness and Cable
              Assembly solutions. Our relentless commitment to quality and
              innovation has forged lasting partnerships, establishing us as a
              trusted leader in the industry. Experience how our expertise can
              drive your projects forward and exceed your highest expectations.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-x-2 bg-[#25D366] text-white font-bold rounded-md px-4 py-2 shadow-lg hover:bg-[#1DAF54] transition w-48 mx-auto lg:mx-0"
              >
                <BsWhatsapp className="text-2xl" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-800">
            <div>
              <div className="text-4xl md:text-[64px] font-semibold text-[#27176A]">
                +300
              </div>
              <div className="mt-2 text-sm md:text-base">Total Employees</div>
            </div>
            <div>
              <div className="text-4xl md:text-[64px] font-semibold text-[#27176A]">
                +150
              </div>
              <div className="mt-2 text-sm md:text-base">
                High Quality Products
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[64px] font-semibold text-[#27176A]">
                +6
              </div>
              <div className="mt-2 text-sm md:text-base">
                Super Satisfied Customers
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[64px] font-semibold text-[#27176A]">
                +18
              </div>
              <div className="mt-2 text-sm md:text-base">
                Years of Experience in The Industry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Desktop*/}
      {/* Product Section */}
      <section className="mx-auto mt-16 sm:mt-32 w-full lg:h-[700px]">
        {/* Product Desktop View */}
        <div className="hidden lg:flex items-center h-full justify-start shadow-lg rounded-lg bg-gray-200">
          <div className="flex flex-col items-center justify-center w-3/12 h-4/5 mx-auto gap-8">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold underline text-center">
              Our Products
            </h1>
            {/* Subtitle */}
            <h3 className="text-lg text-center text-gray-700">
              Here are the list of our products
            </h3>
          </div>
          {/* Carousel */}
          <div className="w-[70vw] h-[50vh] pr-10">
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
                      width={800} // Dynamically adjust width
                      height={500} // Dynamically adjust height
                      sizes="(max-width:950px) 100vw, 800px"
                      className="object-contain h-full w-full max-w-[70vw] max-h-[50vh] mx-auto" // Ensures proportional scaling
                      priority={idx === 0} // Prioritize first image
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
        </div>

        {/* Product Mobile View */}
        <div className="lg:hidden bg-gray-200 shadow-lg rounded-lg w-full mx-auto my-8 py-5">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-2xl font-bold underline">Our Products</h1>
          </div>
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
                      loading="lazy" // Lazy-load all images
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Service */}

      <section className="mx-auto mt-12 lg:mt-32 w-full px-4">
        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold underline">Our Services</h1>
        </div>

        {/* Service Cards */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white flex flex-col items-center">
              <Image
                className="rounded-t-xl"
                src="./Image/fix_size/rsz_wire_harness_3.png"
                sizes="(max-width:300px) 100vw, 300px"
                alt="Wire Harness Service"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mt-4 text-center">
                  Wire Harness
                </h5>
                <p className="text-gray-600 text-sm mt-3 px-4 text-center">
                  We provide precise and reliable wire harness solutions for a
                  variety of industries, ensuring optimal performance and
                  quality.
                </p>
                <div className="mt-6 text-center">
                  <Link href="">
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white flex flex-col items-center">
              <Image
                className="rounded-t-xl"
                src="./Image/fix_size/rsz_insert_molding.jpg"
                sizes="(max-width:300px) 100vw, 300px"
                alt="Insert Molding Service"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mt-4 text-center">
                  Insert Molding
                </h5>
                <p className="text-gray-600 text-sm mt-3 px-4 text-center">
                  Expertly crafted insert molding solutions tailored to meet
                  your specific project requirements and industry standards.
                </p>
                <div className="mt-6 text-center">
                  <Link href="">
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white flex flex-col items-center">
              <Image
                className="rounded-t-xl"
                src="./Image/tooling_pabrication.jpeg"
                sizes="(max-width:300px) 100vw, 300px"
                alt="Tooling Fabrication Service"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mt-4 text-center">
                  Tooling Fabrication
                </h5>
                <p className="text-gray-600 text-sm mt-3 px-4 text-center">
                  High-quality tooling fabrication services to ensure precision
                  and efficiency in manufacturing processes.
                </p>
                <div className="mt-6 text-center">
                  <Link href="">
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden bg-white flex flex-col items-center">
              <Image
                className="rounded-t-xl"
                src="./Image/fix_size/rsz_warehouse.jpg"
                sizes="(max-width:300px) 100vw, 300px"
                alt="Warehouse Service"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mt-4 text-center">
                  Warehouse
                </h5>
                <p className="text-gray-600 text-sm mt-3 px-4 text-center">
                  Comprehensive warehousing solutions to optimize your supply
                  chain and inventory management processes.
                </p>
                <div className="mt-6 text-center">
                  <Link href="">
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Grace Solutions */}

      {/* Testing */}

      <section>
        <div className="flex flex-col items-center justify-center mb-5 mt-10">
          <div className="ml-2/12 lg:mt-3 md:mt-12 xl:px-44 sm:px-10 w-full my-2 mx-auto flex justify-center items-center">
            <div className="bg-gray-200 flex flex-col flex-grow rounded-lg p-5  border-black shadow-3lg ">
              <div className="flex flex-col md:flex-row w-full  ">
                {/* Left Div - Takes 9/12 (75%) on desktop, full width on mobile */}
                <div className="w-full md:w-9/12 bg-gray-200 p-3 ">
                  <h1 className="text-2xl md:text-3xl font-semibold  md:mx-auto text-center xl:text-left ">
                    <span className="underline">GRACE SOLUTIONS:</span> Your
                    Dependable Partner for Success
                  </h1>
                </div>

                {/* Right Div - Takes 3/12 (25%) on desktop, full width on mobile */}
                <div className="w-full md:w-3/12 flex items-center justify-center mt-4 md:mt-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    More About Us
                    <span>
                      <BsArrowRightCircle />
                    </span>
                  </button>
                </div>
              </div>

              <p className="text-sm md:text-md p-3 text-center">
                Delivering Excellence Through Innovation, Service, and Quality.
              </p>

              <div className="bg-gray-100 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <BsBuildingFillGear />
                    </h2>

                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      Advanced Manufacturing Infrastructure
                    </h3>
                    <h2></h2>
                    <p className="text-gray-600 textmd">
                      Located in the prestigious Batamindo Industrial Park, we
                      operate with stable utilities, secure facilities, and
                      world-class infrastructure designed to meet your
                      production needs.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <FaShippingFast />
                    </h2>
                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      24/7 Delivery Service
                    </h3>
                    <p className="text-gray-600">
                      Our commitment to speed ensures your supply chain never
                      misses a beat. With 24-hour delivery options, your
                      deadlines are always met.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <IoIosTimer />
                    </h2>
                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      Just-In-Time Services
                    </h3>
                    <p className="text-gray-600">
                      Optimizing your production schedule is our priority. Our
                      JIT solutions are tailored to minimize waste and maximize
                      efficiency.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <FaHelicopter />
                    </h2>
                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      Air Freight for Urgent Deliveries
                    </h3>
                    <p className="text-gray-600">
                      Need it fast? Our air delivery services cater to your most
                      time-sensitive projects with efficiency and precision.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <MdOutlinePriceCheck />
                    </h2>
                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      Competitive Pricing
                    </h3>
                    <p className="text-gray-600">
                      High-quality manufacturing doesn’t have to break the bank.
                      Our competitive pricing delivers unmatched value without
                      compromising quality.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center grid grid-cols-1">
                    <h2 className=" text-center mx-auto p-1 text-2xl">
                      <TbCertificate />
                    </h2>
                    <h3 className="mb-2 font-semibold text-lg text-gray-800">
                      Certified Excellence
                    </h3>
                    <p className="text-gray-600">
                      With ISO9001:2015 and UL certifications, we uphold the
                      highest standards in every product we deliver.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // */}
      <section className=" xl:my-auto m-auto pt-5 ">
        <div className="container mx-auto">
          <div>
            <div className="flex items-center justify-center my-4">
              {/* Left Line */}
              <div className="flex-grow border-t border-gray-300"></div>

              {/* Text */}
              <span className="mx-4 text-gray-600 font-medium">Trusted By</span>

              {/* Right Line */}
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  xl:flex-row gap-6 justify-center items-center">
            <Image
              className="mx-auto  "
              src="./Image/logo/oriex.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/servo.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/osie.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
            <Image
              className="mx-auto"
              src="./Image/logo/pegatron.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/sumitomo.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/siix.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={200}
              height={200}
            />
          </div>
          <div>
            <div className="flex items-center justify-center my-4">
              {/* Left Line */}
              <div className="flex-grow border-t border-gray-300"></div>

              {/* Text */}

              {/* Right Line */}
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
