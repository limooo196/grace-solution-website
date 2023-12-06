"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      <div className="mx-auto text-4xl flex items-center justify-center mb-3 lg:mt-5 font-semibold underline">
        Services
      </div>
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12  mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 md:m-5 md:p-8 p-4 ">
            <h2 className="lg:text-2xl text-xl font-bold">WIRE HARNESS</h2>
            <br />
            <br className="hidden lg:block" />

            <p className="xl:mt-2 text-md">
              Our wire harness is crafted with precision and using top-quality
              materials. Rigorous testing and innovative design set us apart,
              making our harness the best choice for seamless and efficient
              electrical connectivity in any application.
            </p>

            <button
              type="button"
              className="text-white md:mt-10 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link href="/services/wireHarness"> Find More Information </Link>
            </button>
          </div>

          <div className="flex flex-col  md:p-10 flex-grow-0 lg:w-3/12 w-4/12 justify-center items-top">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="./Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12 my-2 mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className=" flex flex-col  md:p-10 flex-grow-0 lg:w-3/12 w-4/12 justify-center items-top ">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="./Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={300}
              height={300}
            />
          </div>
          <div className=" w-9/12 md:m-5 md:p-8 p-4">
            <div>
              <h2 className="lg:text-2xl text-xl font-bold">Insert Molding</h2>
            </div>

            <br />
            <br className="hidden lg:block" />

            <div className="lg:mb-1 mb-3">
              <p className="xl:mt-2 text-md">
                Our insert molding stands out for its precision engineering,
                seamless integration of components, and superior material
                quality. Meticulous attention to detail ensures optimal
                performance, making our insert molding the industry top choice
                for reliability and durability.
              </p>
            </div>

            <button
              type="button"
              className="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Find More Information
            </button>
          </div>
        </div>
      </div>
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12  mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 md:m-5 md:p-8 p-4 ">
            <h2 className="lg:text-2xl text-xl font-bold ">
              TOOLING PABRICATION
            </h2>
            <br />
            <br className="hidden lg:block" />

            <p className="xl:mt-2 text-md">
              Our tooling fabrication excels with cutting-edge technology,
              precision craftsmanship, and a commitment to quality. We deliver
              top-notch tooling solutions that set industry benchmarks for
              reliability, durability, and innovation.
            </p>

            <button
              type="button"
              className="text-white md:mt-10 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link href="/services/wireHarness"> Find More Information </Link>
            </button>
          </div>

          <div className="flex flex-col  md:p-10 flex-grow-0 lg:w-3/12 w-4/12 justify-center items-top">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="./Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Work with us */}

      <div></div>
    </main>
  );
}
