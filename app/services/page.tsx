"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      <div className="mx-auto text-4xl flex items-center justify-center mt-5 font-semibold underline">
        Services
      </div>
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12  mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   h-96 xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 m-5 p-8 ">
            <h2 className="text-2xl font-bold">WIRE HARNESS</h2>
            <br />
            <br />

            <p className="xl:mt-2">
              Our wire harness is crafted with precision and using top-quality
              materials. Rigorous testing and innovative design set us apart,
              making our harness the best choice for seamless and efficient
              electrical connectivity in any application.
            </p>

            <button
              type="button"
              class="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link href="/services/wireHarness"> Find More Information </Link>
            </button>
          </div>

          <div className="flex flex-col  p-10 flex-grow-0 w-3/12 sm:w-6/12 justify-center items-top">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="/Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="mr-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12 mx-auto flex justify-center items-center ">
        <div className="bg-gray-300 xl:w-9/12   h-96 xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className="flex flex-col  p-10 flex-grow-0 w-3/12 sm:w-6/12 justify-center items-top">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="/Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={300}
              height={300}
            />
          </div>
          <div className=" w-9/12 m-5 p-8 justify-start items-end  flex flex-col ">
            <div>
              <h2 className="text-2xl font-semibold">Insert Molding</h2>
            </div>

            <br />

            <div>
              <p>
                Our insert molding stands out for its precision engineering,
                seamless integration of components, and superior material
                quality. Meticulous attention to detail ensures optimal
                performance, making our insert molding the industry top choice
                for reliability and durability.
              </p>
            </div>

            <button
              type="button"
              class="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Find More Information
            </button>
          </div>
        </div>
      </div>
      {/* left */}
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 xl:w-10/12  mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   h-96 xl:h-80 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 m-5 p-8 ">
            <h2 className="text-2xl font-bold">TOOLING PABRICATION</h2>
            <br />
            <br />

            <p className="xl:mt-2">
              Our tooling fabrication excels with cutting-edge technology,
              precision craftsmanship, and a commitment to quality. We deliver
              top-notch tooling solutions that set industry benchmarks for
              reliability, durability, and innovation.
            </p>

            <button
              type="button"
              class="text-white md:mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Find More Information
            </button>
          </div>

          <div className="flex flex-col  p-10 flex-grow-0 w-3/12 sm:w-6/12 justify-center items-top">
            <Image
              className="mx-auto rounded-xl shadow-lg overflow-hidden "
              src="/Image/green-cable.jpg"
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
