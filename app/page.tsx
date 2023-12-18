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

export default function Home() {
  return (
    <main className="">
      {/* Hero */}
      <section className="bg-cover bg-center xl:pt-12 xl:pb-0 w-full h-[920px] lg:h-[960px] lg:-my-4 ">
        <Image
          src="./Image/green-cable.jpg"
          width={900}
          height={700}
          alt={"Grace Solution Logo"}
          className="w-full  object-cover absolute mix-blend-overlay h-full lg:h-[860px] z-[-1]"
        />
        <div className="mx-auto w-full h-full bg-gradient-to-tr object-cover mix-blend overlay relative ">
          {/* Text and images */}

          <div className="flex flex-col xl:flex-row justify-between w-full opacity-200  ">
            {/* text */}
            <div className="border-2 lg:h-[480px] bg-gray-100 bg-opacity-40 z-0 rounded-lg shadow-lg bg-grad max-w-4xl px-8 py-6 lg:py-16 w-full md:mx-auto lg:ml-24 my-24  lg:px-auto">
              <h1 className="lg:text-2xl text-xl uppercase font-extrabold text-[#27176A]  relative ">
                Your Trusted Partner in Wire Harness and Cable Assembly
                Solutions
              </h1>
              <br />
              <h2 className="text-lg font-bold   ">
                Precision Craftsmanship, Reliable Performance
              </h2>
              <br />
              <br className="hidden lg:block" />
              <p className="font-medium ">
                For nearly two decades, Grace Solutions has been at the
                forefront of precision engineering, delivering excellence in
                Wire Harness and Cable Assembly solutions. Our unwavering
                dedication to quality and innovation has earned us the trust of
                our customers, making us a renowned leader in the industry.
                Discover how our expertise can power your projects and elevate
                your expectations.
              </p>
              <br />
              <br />
              <div className="flex justify-center items-center mx-auto gap-x-2 lg:justify-normal hover:bg-blue-300 hover:shadow-xl w-[160px] h-[50px] lg:mx-0 font-bold px-4 border border-white hover:border-transparent rounded-md cursor-pointer bg-white  lg:w-[180px]  sm:w-[180px]">
                <BsWhatsapp className="text-green-400 text-2xl " />
                <div className="flex justify-center items-center mx-auto ">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="stats section sm:-my-20 xl:my-auto">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
            <div className="flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +300
              </div>
              <div>Total Employees</div>
            </div>
            <div className="flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +150
              </div>
              <div>High Quality Products</div>
            </div>
            <div className="flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +6
              </div>
              <div>Super Satisfied Customer</div>
            </div>
            <div className="flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +18
              </div>
              <div>Years of Experience in The Industry</div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Desktop*/}
      <section className="mx-auto  mt-16 sm:mt-32   lg:h-[650px] w-max ">
        <div className="lg:flex hidden items-center  lg:h-[700px] justify-start  border-black shadow-3lg rounded-lg bg-gray-200   ">
          <div className=" flex w-3/12 flex-col grow items-center justify-center mx-auto lg:gap-8  h-4/5 ">
            <div className="self-center	justify-self-center	mx-auto text-center	">
              <h1 className="lg:text-4xl text-xl font-bold underline">
                Our Products
              </h1>
            </div>

            <div className="justify-self-stretch mx-auto	text-center my-6 hidden lg:flex">
              <h3 className="text-xl sm:text-lg ">
                Here are the list of our products
              </h3>
            </div>
          </div>
          {/* carousel */}
          <div className="w-[70vw] h-[50vh] m-auto pr-10">
            <Carousel className=" m-auto my-auto md:-my-6">
              <div className="mx-auto my-auto h-[50vh] w-full m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:950px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={400}
                  height={400}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full  m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full  m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={300}
                  height={300}
                />
              </div>
            </Carousel>
          </div>
        </div>
        {/* Product Phone*/}
        <div className="lg:hidden   border-black shadow-3lg rounded-lg bg-gray-200 w-screen mx-auto h-4/12 my-auto ">
          <div className="  lg:hidden w-8/12 lg:flex-row grow items-center justify-center mx-auto my-auto h-12 ">
            <div className="self-center	justify-self-center	mx-auto text-center my-auto	 pt-5">
              <h1 className="lg:text-4xl text-2xl font-bold underline">
                Our Products
              </h1>
            </div>

            <div className="justify-self-stretch mx-auto	text-center my-6 hidden lg:flex">
              <h3 className="text-xl sm:text-lg ">
                Here are the list of our products
              </h3>
            </div>
          </div>
          {/* carousel */}
          <div className=" m-auto w-11/12 mt-3 lg:mt-8 ">
            <Carousel className=" m-auto  ">
              <div className="mx-auto   w-full  ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:950px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={400}
                  height={400}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full  m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={400}
                  height={400}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full  m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="mx-auto my-auto h-[50vh] w-full m-auto ">
                <Image
                  className="mx-auto image-wrapper"
                  src="./Image/green-cable.jpg"
                  sizes="(max-width:750px) 100vw,700px"
                  alt={"Grace Solution Logo"}
                  width={300}
                  height={300}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Service */}
      <section className="mx-auto mt-12 lg:mt-32 w-11/5   ">
        <div>
          {/* Service Header */}
          <div className="mx-auto">
            <h1 className="mx-auto my-auto text-center text-2xl md:text-2xl font-bold underline ">
              Our Services
            </h1>
          </div>
          {/* Service card display */}
          <div className="flex items-start justify-start  container m-auto my-4 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto xl:gap-24 md:gap-4">
              {/* Card 1 */}
              <div className="rounded-xl shadow-lg card h-full ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl  "
                    src="./Image/fix_size/rsz_wire_harness_3.png"
                    sizes="(max-width:200px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={300}
                    height={150}
                  />

                  <h5 className="text-2xl  font-medium mt-3 mx-auto">
                    Wire Harness
                  </h5>
                  <p className="text-slate-500 text-md lg:text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>

                  <button
                    type="button"
                    className="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <Link href="" className="">
                      Explore more
                    </Link>
                  </button>
                </div>
              </div>
              {/* Card 2 */}

              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl "
                    src="./Image/fix_size/rsz_insert_molding.jpg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={400}
                    height={400}
                  />
                  <h5 className="text-2xl  font-medium mt-3 mx-auto">
                    Insert Molding
                  </h5>
                  <p className="text-slate-500 text-md lg:text-lg  mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <button
                    type="button"
                    className="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <Link href="" className="">
                      Explore more
                    </Link>
                  </button>
                </div>
              </div>
              {/* Card 3 */}

              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl shadow-lg overflow-hidden"
                    src="./Image/tooling_pabrication.jpeg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={400}
                    height={400}
                  />
                  <div className="whitespace-nowrap	  w-24">
                    <h5 className="text-2xl md:text-2xl font-medium mt-3 mx-auto ">
                      Tooling Pabrication
                    </h5>
                  </div>

                  <p className="text-slate-500 text-md lg:text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <button
                    type="button"
                    className="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <Link href="" className="">
                      Explore more
                    </Link>
                  </button>
                </div>
              </div>

              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl shadow-lg overflow-hidden"
                    src="./Image/fix_size/rsz_warehouse.jpg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={300}
                    height={500}
                  />
                  <h5 className="text-2xl md:text-2xl font-medium mt-3 mx-auto">
                    Warehouse
                  </h5>
                  <p className="text-slate-500 text-md lg:text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <button
                    type="button"
                    className="text-white   md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <Link href="" className="">
                      Explore more
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Grace Solutions */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl underline">
            Why We Are One of The Market Leader{" "}
          </h1>
        </div>

        <ul>
          <li>Great Infrastructure</li>
          <li>24 Hours Delivery Service </li>
          <li>Air Delivery Service</li>
          <li>Just In Time Service</li>
          <li>Completely Certified and Comply with International Standards</li>
          <li>Competitive Pricing</li>
        </ul>
      </section>
      <section className=" xl:my-auto m-auto  ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3  xl:flex-row gap-6 justify-center items-center">
            <Image
              className="mx-auto "
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
        </div>
      </section>
    </main>
  );
}
