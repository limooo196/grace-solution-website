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
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      {/* Hero */}
      <div className="">
        <h2 className="text-xl font-bold flex flex-col  items-center justify-center underline">
          Values We Provide in Wire Harness
        </h2>
        <div className="flex flex-col items-start justify-center lg:w-8/12   mx-auto">
          <ul>
            <li>
              <div>
                <h3 className="text-lg font-bold flex items-start p-1 text-blue-500">
                  Custom Wire Harness Design and Engineering
                </h3>
                <p className="w-10/12 mx-auto">
                  Our Custom Wire Harness Design and Engineering excellence
                  stems from our dedication to precision, innovation, and
                  client-centric solutions. With a engineering team with 15+
                  years of experience, we apply cutting-edge methodologies for
                  crafting best wire harnesses. Our careful process ensures
                  optimal performance, seamless integration, and adherence to
                  the highest standards. We prioritize collaboration, we work
                  and communicate closely with clients to understand the
                  specifications, to deliver solutions that fits with the needs
                  of clients.
                </p>
              </div>
              <div>
                <ul className="grid grid-cols-1 lg:grid-cols-3  xl:flex-row gap-6 justify-center items-center">
                  <li className="m-auto rounded-xl shadow-lg overflow-hidden h-30 md:h-48 my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto "
                      src="../Image/wire_harness/wire1.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={200}
                      height={200}
                    />
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-30 md:h-48my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto "
                      src="../Image/wire_harness/wire2.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={200}
                    />
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-30 md:h-48my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/wire_harness/wire3.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-30 md:h-48 my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/wire_harness/wire4.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={200}
                      height={200}
                    />
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden  h-30 md:h-48 my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/wire_harness/wire5.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden  h-30 md:h-48 my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/wire_harness/wire6.png"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div className="">
                <h3 className="text-lg font-bold flex items-start p-1 text-blue-500">
                  Tackle Industry-Specific Solutions
                </h3>
                <div className="w-10/12 mx-auto">
                  <p>
                    We have the ability and experience to address
                    Industry-Specific Solutions in wire harness services is
                    underpinned by a nuanced understanding of diverse sectors.
                  </p>
                  <br />

                  <div className="">
                    <h4>Industries that we closely worked with</h4>
                    <ul className="list-disc ml-3	">
                      <li>Lighting Wire Harnesses</li>
                      <li>Wire harness assemblies for electronics</li>
                      <li>Automotive</li>
                    </ul>
                  </div>
                  <br />
                  <p>
                    The specialized knowledge allows us to tailor wire harness
                    solutions to meet the unique demands various sectors,
                    ensuring optimal performance, compliance, and reliability.
                    Our service stands out for its adaptability, technical
                    expertise, and a proven track record in delivering
                    industry-specific wire harness solutions that surpass
                    expectations.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div>
                <h3 className="text-lg font-bold flex items-start p-1 text-blue-500">
                  Quality Assurance and Testing
                </h3>
                <p className="w-10/12 mx-auto">
                  Our Wire Harness Service sets itself apart through an
                  unwavering commitment to complete Quality Assurance and
                  Testing. At every stage of the manufacturing process, we
                  adhere to stringent quality control measures, ensuring that
                  each wire harness meets and exceeds industry standards.
                  Rigorous testing protocols, including comprehensive electrical
                  testing and inspections, are integral to our operations. This
                  meticulous approach not only guarantees the reliability and
                  durability of our wire harnesses but also provides our clients
                  with the confidence that each product leaving our facilities
                  has undergone thorough scrutiny. Our dedication to complete
                  quality assurance and testing positions our service as a
                  benchmark for excellence and reliability in the wire harness
                  industry.
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-3  xl:flex-row gap-6 justify-center items-center">
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-48 md:h-72 my-auto flex flex-col items-center ">
                    <Image
                      className=" "
                      src="../Image/testing_tool/harness_tester.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />

                    <div className="">
                      <p>Cable Harness Tester</p>
                    </div>
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-48 md:h-72 my-auto flex flex-col items-center ">
                    <Image
                      className=" "
                      src="../Image/testing_tool/terminal_cross_section_analyzer.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={200}
                    />
                    <div>
                      <p>Cross Section Analyzer</p>
                    </div>
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden  h-48 md:h-72 my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/testing_tool/withstanding_voltage_test.jpg "
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <div className="flex flex-col items-center justify-center mx-auto p-2">
                      <p className="flex flex-row items-center justify-center mx-auto">
                        Voltage and Insulation Resistance Tester
                      </p>
                    </div>
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden h-48 md:h-72  my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/testing_tool/caliper.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <div>
                      <p>Caliper</p>
                    </div>
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden  h-48 md:h-72  my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/testing_tool/micrometer.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <div>
                      <p>Micrometer</p>
                    </div>
                  </li>
                  <li className="mx-auto rounded-xl shadow-lg overflow-hidden  h-48 md:h-72  my-auto flex flex-col items-center ">
                    <Image
                      className="m-auto"
                      src="../Image/testing_tool/push_pull_scale.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <div>
                      <p>Push Pull Scale</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div>
                <h3 className="text-lg font-bold flex items-start p-1 text-blue-500">
                  Prototyping and Consultation
                </h3>
                <p className="w-10/12 mx-auto">
                  Our Wire Harness Service goes beyond traditional offerings by
                  providing Prototyping and Consultation services that exemplify
                  our commitment to client satisfaction. We understand the
                  importance of validating designs before full-scale production,
                  and our Prototyping service allows clients to test and refine
                  wire harness solutions, ensuring they align perfectly with
                  project requirements. Moreover, our Consultation service
                  stands as a cornerstone of our client-centric approach. Our
                  experienced team collaborates closely with clients, offering
                  expert advice, understanding unique project needs, and
                  providing tailored solutions. This personalized consultation
                  ensures that each wire harness is not just a product but a
                  strategic component designed to meet specific challenges and
                  expectations.
                </p>
              </div>
            </li>

            <li>
              <div>
                <h3 className="text-lg font-bold flex items-start p-1 text-blue-500">
                  Certifications and Standards
                </h3>
                <p className="w-10/12 mx-auto">
                  Our Wire Harness service places a paramount emphasis on
                  adhering to international quality standards, underscoring our
                  commitment to excellence. Every aspect of our wire harness
                  manufacturing process is meticulously aligned with globally
                  recognized benchmarks, ensuring the highest levels of quality
                  and reliability. Additionally, our dedication to meeting
                  industry standards is reinforced by a range of certifications
                  attesting to the quality of our products. These certifications
                  not only validate our compliance with international standards
                  but also serve as a testament to our unwavering commitment to
                  delivering wire harness solutions of the highest caliber.
                </p>
                <br />
                <h2 className="w-10/12 mx-auto font-bold">
                  Our Proudest Certifications
                </h2>
                <div className="flex flex-row justify-center items-center mx-auto">
                  <div className="mx-auto">
                    <Image
                      className=" "
                      src="../Image/certificates/cert1.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <h3 className="font-semibold mx-auto">
                      Certificate ISO 9001:2015 by TUV Rheinland
                    </h3>
                  </div>

                  <div className="mx-auto">
                    <Image
                      className=" "
                      src="../Image/certificates/cert2.jpg"
                      sizes="(max-width:950px) 100vw,700px"
                      alt={"Grace Solution Logo"}
                      width={250}
                      height={250}
                    />
                    <h3 className="font-semibold">
                      Certificate of Wire Harness Component by UL
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
