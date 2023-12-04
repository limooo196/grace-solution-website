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
      <section className="bg-cover bg-center xl:pt-12 xl:pb-0 w-full h-[960px] lg:-my-4 ">
        <Image
          src="./Image/green-cable.jpg"
          width={900}
          height={700}
          alt={"Grace Solution Logo"}
          className="w-full h-full object-cover absolute mix-blend-overlay sm:h-[800px] z-[-1]"
        />
        <div className="mx-auto w-full h-full bg-gradient-to-tr object-cover mix-blend overlay relative ">
          {/* Text and images */}

          <div className="flex flex-col xl:flex-row justify-between w-full opacity-200 mt-5">
            {/* text */}
            <div className="border-2 h-[480px] bg-gray-100 bg-opacity-40 z-0 rounded-lg shadow-lg bg-grad max-w-4xl px-8 py-16 w-full md:mx-auto lg:ml-24 lg: my-24 lg:px-auto">
              <h1 className="text-2xl uppercase font-extrabold text-[#27176A]  relative ">
                Your Trusted Partner in Wire Harness and Cable Assembly
                Solutions
              </h1>
              <br />
              <h2 className="text-xl font-bold   ">
                Precision Craftsmanship, Reliable Performance
              </h2>
              <br />
              <br />
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
              <div className="flex justify-center items-center gap-x-2 lg:justify-normal hover:bg-blue-400 hover:shadow-xl w-[220px] h-[50px] lg:mx-0 font-bold px-4 border border-white hover:border-transparent rounded-md cursor-pointer bg-white  lg:w-[200px]  sm:w-[180px]">
                <BsWhatsapp className="text-green-400 text-2xl " />
                <div>Reach us Now</div>
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
      {/* Product */}
      <section className="mx-auto  mt-16 sm:mt-32 w-3/5 sm:w-11/12  lg:h-[650px] ">
        <div className="flex items-center  h-[700px] justify-start  border-black shadow-3lg rounded-lg bg-gray-200   ">
          <div className=" flex w-3/12 flex-col grow items-center justify-center mx-auto lg:gap-8  h-4/5 ">
            <div className="self-center	justify-self-center	mx-auto text-center	">
              <h1 className="text-6xl md:text-2xl font-bold underline">
                Our Products
              </h1>
            </div>

            <div className="justify-self-stretch mx-auto	text-center my-6">
              <h3 className="text-xl sm:text-lg ">
                here are the list of our products
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
      </section>
      {/* Service */}
      <section className="mx-auto sm:mt-32 w-3/5 sm:w-4/5   ">
        <div>
          {/* Service Header */}
          <div className="mx-auto">
            <h1 className="mx-auto my-auto text-center text-6xl md:text-2xl font-bold underline ">
              Our Services
            </h1>
          </div>
          {/* Service card display */}
          <div className="flex items-center justify-center  container m-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto xl:gap-36 md:gap-4">
              {/* Card 1 */}
              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl shadow-lg overflow-hidden"
                    src="./Image/green-cable.jpg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={400}
                    height={400}
                  />
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 mx-auto">
                    hehe
                  </h5>
                  <p className="text-slate-500 text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <Link
                    href=""
                    className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus-scale-95 transition-all duration-200 ease-out"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
              {/* Card 2 */}

              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl shadow-lg overflow-hidden"
                    src="./Image/green-cable.jpg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={400}
                    height={400}
                  />
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 mx-auto">
                    hehe
                  </h5>
                  <p className="text-slate-500 text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <Link
                    href=""
                    className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus-scale-95 transition-all duration-200 ease-out"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
              {/* Card 3 */}

              <div className="rounded-xl shadow-lg card ">
                <div className="p-5 flex flex-col">
                  <Image
                    className="mx-auto rounded-xl shadow-lg overflow-hidden"
                    src="./Image/green-cable.jpg"
                    sizes="(max-width:950px) 100vw,700px"
                    alt={"Grace Solution Logo"}
                    width={400}
                    height={400}
                  />
                  <h5 className="text-2xl md:text-3xl font-medium mt-3 mx-auto">
                    hehe
                  </h5>
                  <p className="text-slate-500 text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia sequi ea, amet aperiam harum laudantium earum placeat
                    ullam rerum unde neque modi laboriosam error magni?
                    Repellendus similique cupiditate vel quaerat.
                  </p>
                  <Link
                    href=""
                    className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus-scale-95 transition-all duration-200 ease-out"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" xl:my-auto xl:w-[2080px] m-auto  ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-6 justify-center items-center">
            <Image
              className="mx-auto "
              src="./Image/logo/oriex.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/servo.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
            <Image
              className="mx-auto "
              src=".Image/logo/osie.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
            <Image
              className="mx-auto"
              src="./Image/logo/pegatron.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/sumitomo.png"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
            <Image
              className="mx-auto "
              src="./Image/logo/siix.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* Why Grace Solutions */}
      <section></section>
    </main>
  );
}
