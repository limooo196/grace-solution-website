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

const styles = {
  navLinks:
    "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6b519] text-xl",
};

function Footer() {
  return (
    <footer className=" xl:pt-[30px] mt-6 pt-[20px] bg-sky-200 lg:rounded-t-[100px] ">
      <div className="container mx-auto pb-4 ">
        <div className="flex flex-col xl:flex-row justify-center items-center mx-auto ">
          <div className=" items-center mx-auto">
            <div className="flex justify-center items-center lg:justify-start">
              <Link href="/">
                <Image
                  src="./Image/Logo/GraceSolutionLogo.png"
                  width={120}
                  height={80}
                  alt={"Grace Solution Logo"}
                  className="cursor-pointer"
                />
              </Link>
              <br />
            </div>
            <div className="flex justify-center items-center  lg:justify-start lg:items-start">
              <h3 className="text-md lg:text-2xl font-medium mt-3 text-center">
                WIRE HARNESS AND CABLE ASSEMBLY SOLUTIONS
              </h3>
            </div>

            {/* location, email, phone */}
            <div className="flex  flex-col gap-y-1 lg:gap-y-3 mb-3 mt-2 mx-auto text-l tracking-wide  justify-center items-center lg:justify-start lg:items-start">
              <div className="flex items-center gap-x-[6px]">
                <BsWhatsapp className="lg:text-2xl  text-green-500" />
                <div className="text-md lg:text-lg">
                  &nbsp; (+62) 81261007619
                </div>
              </div>

              <div className="flex items-center gap-x-[6px]">
                <BsWhatsapp className="lg:text-2xl text-green-500" />
                <div className="text-md lg:text-lg">
                  {" "}
                  &nbsp; (+62) 82390305100
                </div>
              </div>

              <div className="flex items-center gap-x-[6px]">
                <AiOutlineMail className="text-xl lg:text-2xl " />
                <div>&nbsp; sales@grace-solution.com</div>
              </div>
            </div>
            <div className="mx-auto text-center px-4 lg:px-0">
              <div className="flex items-start gap-x-[6px] justify-start   ">
                <BsFillPinMapFill className="text-2xl lg:text-2xl" />
                <div className="text-sm lg:text-md">
                  Jl. Kenanga No.240, Muka Kuning, Kec. Sei Beduk, Kota Batam,
                  Kepulauan Riau 29433
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
