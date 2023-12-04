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
    <footer className=" xl:pt-[30px] md:pt-[30px] bg-sky-200 rounded-t-[100px]">
      <div className="container mx-auto pb-12 xl:pb-[50px] ">
        <div className="flex flex-col xl:flex-row justify-center items-center mx-auto ">
          <div className=" items-center mx-auto">
            <div className="">
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
            <div className="mx-auto">
              <h3 className="text-2xl font-medium ">
                WIRE HARNESS AND CABLE ASSEMBLY SOLUTIONS
              </h3>
            </div>
            <br />
            {/* location, email, phone */}
            <div className="flex  flex-col gap-y-3 mb-10 mx-auto text-l tracking-wide">
              <div className="flex items-center gap-x-[6px]">
                <BsWhatsapp className="text-2xl text-green-500" />
                <div>&nbsp; 081261007619</div>
              </div>

              <div className="flex items-center gap-x-[6px]">
                <BsWhatsapp className="text-2xl text-green-500" />
                <div> &nbsp; 082390305100</div>
              </div>

              <div className="flex items-center gap-x-[6px]">
                <AiOutlineMail className="text-2xl " />
                <div>&nbsp; sales@grace-solution.com</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-[6px] ">
                <BsFillPinMapFill className="text-2xl " />
                <div>
                  &nbsp; Jl. Kenanga No.240, Muka Kuning, Kec. Sei Beduk, Kota
                  Batam, Kepulauan Riau 29433
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
