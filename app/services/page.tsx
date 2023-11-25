"use client";
import Image from "next/image";
export default function Services() {
  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      <div className="mx-auto text-4xl flex items-center justify-center mt-5 font-semibold underline">
        Services
      </div>
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   h-96 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 m-5 p-8">
            <h2 className="text-2xl font-semibold">Custom wire</h2>
            <br />

            <p>lorem</p>
            <p>lorem</p>

            <p>lorem</p>
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
      <div className="mr-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 mx-auto flex justify-center items-center ">
        <div className="bg-gray-300 xl:w-9/12   h-96 flex flex-row flex-grow rounded-lg ">
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
              <h2 className="text-2xl font-semibold">Custom wire</h2>
            </div>

            <br />

            <div>
              <p>loremsdfkljnhasdjklfnasdlkjfhkajlsdfuijkdashfljkadshfkjldas</p>
              <p>lorem</p>

              <p>lorem</p>
            </div>
          </div>
        </div>
      </div>
      {/* left */}
      <div className="ml-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10  mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   h-96 flex flex-row flex-grow rounded-lg ">
          <div className=" w-9/12 m-5 p-8">
            <h2 className="text-2xl font-semibold">Custom wire</h2>
            <br />

            <p>lorem</p>
            <p>lorem</p>

            <p>lorem</p>
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
      <div className="mr-3/12 lg:mt-3 md:mt-12 xl:px-60 sm:px-10 mx-auto flex justify-center items-center">
        <div className="bg-gray-300 xl:w-9/12   h-96 flex flex-row flex-grow rounded-lg ">
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
              <h2 className="text-2xl font-semibold">Custom wire</h2>
            </div>

            <br />

            <div>
              <p>loremsdfkljnhasdjklfnasdlkjfhkajlsdfuijkdashfljkadshfkjldas</p>
              <p>lorem</p>

              <p>lorem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work with us */}

      <div></div>
    </main>
  );
}
