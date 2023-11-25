"use client";
import { Chrono } from "react-chrono";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

export default function About() {
  const items = [
    {
      title: "2005",
      cardTitle: "Start of the journey",
      media: {
        type: "IMAGE",
        source: {
          name: "dunkirk beach",
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: "2010",
      cardTitle: "Expand business fabrication  for jig and ficture tooling.",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },

    {
      title: " 2012",
      cardTitle:
        "Moved to Lytech Industrial Park and Expand to 3 lots Factories and praparing for ISO 9001-2008  certification.",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: " 2013",
      cardTitle: "Attained ISO 9001:2008 and expanding to international market",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: " 2015",
      cardTitle:
        "Expanded one building for Wire Assembly at Batamindo Industrial Park ",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: " 2018",
      cardTitle:
        "Expanded four building for Wire Assembly at Batamindo Industrial Park and attained ISO 9001:2015 Certificate ",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: " 2018",
      cardTitle:
        "Expanded factory area to 8000_m2 and reached sales revenue USD 5.0 Millions/Year.",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: " 2023",
      cardTitle:
        "We employed of 300 skilled individuals, each proficient in their respective roles, ensuring the assurance of product quality. Our objective is to evolve into a company that excels in delivering top-notch cable solutions through the meticulous management of QCDS (Quality, Cost, Delivery, and Services).",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
    {
      title: "Present",
      cardTitle: "We are stil growing and expanding",
      media: {
        type: "IMAGE",
        source: {
          url: "/Image/green-cable.jpg",
        },
      },
    },
  ];
  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      <div className="mx-auto text-4xl flex items-center justify-center mt-5 font-semibold underline">
        About Us
      </div>
      <div className=" w-8/12 flex flex-col justify-center mx-auto">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-2xl font-montserrat text-blue-400">
            Industry Leader
          </h1>
          <div className="flex flex-col justify-center items-center mx-auto p-10">
            <p className=" ">
              Established in 2005, PT Grace Solutions is a privately held
              company based in Batam, Indonesia. Our primary focus lies in the
              custom cable harness industry, along with cable and control panel
              assemblies catering to various sectors such as off-road equipment,
              emergency services, heavy-duty trucks, communications, specialty
              electronics, and industrial applications.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-8/12 flex flex-col justify-center mx-auto">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-2xl font-montserrat text-blue-400">
            Recognized Experts in Electrical Harnesses and Cables
          </h1>
          <div className="flex flex-col justify-center items-center mx-auto p-10">
            <p className=" ">
              Our dedication to ongoing enhancement alongside our customers has
              facilitated our continuous growth, establishing us as a valued
              supply partner. Grace Solution consistently stands out as the top
              Cable Harness solution in the industry. The accolades underscore
              our commitment to teamwork and unwavering customer focus,
              positioning these values as our key strategies for success in
              serving our customers.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-8/12 flex flex-col justify-center mx-auto">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-2xl font-montserrat text-blue-400">
            Comply with International Industry Standard
          </h1>
          <div className="flex flex-col justify-center items-center mx-auto p-10">
            <p className=" ">
              The acquisition of both ISO 9001:2015 and UL817 certifications in
              the cable industry underscores our unwavering dedication to
              upholding the highest standards of quality and safety. Our ISO
              9001:2015 certification reflects our commitment to robust quality
              management systems, ensuring our products consistently surpass
              global benchmarks. Concurrently, the UL817 certification,
              governing cord sets and power supply cords, showcases our
              dedication to product safety and compliance with industry
              regulations. At Grace Solution, these certifications signify more
              than just accolades; they embody our profound commitment to
              delivering cable solutions prioritizing quality, reliability, and
              safety. Proudly affirming our industry leadership, we take immense
              pride in providing customers with innovative cable products
              adhering to the utmost quality and safety standards.
            </p>
          </div>
        </div>
      </div>
      {/* vision mission, https://powr2.com/about/ */}
      <div className="flex flex-col bg-blue-400 w-8/12 mx-auto h-5/12 items-center justify-center p-8 m-auto">
        <div className="flex flex-row mx-auto p-3 mb-8 my-auto">
          <div className="w-6/12">
            <h1 className="text-xl font-bold">Grace Solutions</h1>
            <h2 className="text-xl font-bold text-yellow-200 my-2 underline">
              Wire Excellence, Seamless Connections.
            </h2>
            <p className="text-m font-semibold my-4">
              Pioneering excellence in the wire harness industry, our company is
              synonymous with precision and reliability. With a commitment to
              innovation, we craft cutting-edge wire harness solutions, setting
              industry benchmarks for quality and performance.
            </p>
          </div>
          <div className="w-4/12 flex flex-col items-center justify-center ml-10">
            <Image
              className="mx-auto  shadow-lg overflow-hidden rounded-l"
              src="/Image/green-cable.jpg"
              sizes="(max-width:950px) 100vw,700px"
              alt={"Grace Solution Logo"}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-row mx-auto h-5/12 items-center justify-around">
          <div className="flex flex-col h-3/12 w-3/12 bg-white items-center justify-around p-3 rounded-xl">
            <h2 className="font-bold">Our Mission</h2>
            <p>
              To provide emission-free portable power solutions that enable
              companies to meet their sustainability goals.
            </p>
          </div>
          <div className="flex flex-col h-3/12 w-3/12 bg-white items-center justify-around p-3 rounded-xl ">
            <h2 className="font-bold">Our Vision</h2>
            <p>
              To provide emission-free portable power solutions that enable
              companies to meet their sustainability goals.
            </p>
          </div>
          <div className="flex flex-col h-3/12 w-3/12 bg-white items-center justify-around p-3 rounded-xl">
            <h2 className="font-bold">Our Promise</h2>
            <p>
              To provide emission-free portable power solutions that enable
              companies to meet their sustainability goals.
            </p>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="mx-auto flex flex-col justify-center items-center">
        <div style={{ height: "700px", width: "700px" }}>
          <Chrono
            items={items}
            mode="VERTICAL"
            showAllCardsHorizontal
            cardWidth={450}
            cardHeight={300}
            allowDynamicUpdate={{ allowDynamicUpdate: true }}
          />
        </div>
      </div>
    </main>
  );
}
