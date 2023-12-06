"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  BsList,
  BsX,
  BsWhatsapp,
  BsFillPinMapFill,
  BsTelephoneFill,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const styles = {
  navLinks:
    "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6b519] text-xl",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [mobileNavBar, setMovbileNavBar] = useState(false);
  const toggleMobileNavBar = () => setMovbileNavBar(!mobileNavBar);

  return (
    // <header>
    //   <nav className="w-full h-24 shadow-xl bg-black">
    //     {/* Desktop Menu */}
    //     <div className="text-white flex items-center justify-between h-full px-4">
    //       <Link href="/">
    //         <Image
    //           src="/Image/Logo/GraceSolutionLogo.png"
    //           width={100}
    //           height={75}
    //           alt={"Grace Solution Logo"}
    //           className="cursor-pointer"
    //         />
    //       </Link>
    //       <div className="text-white hidden sm:flex">
    //         <ul className="hidden sm:flex">
    //           <li className={styles.navLinks}>
    //             <Link href="/about"> Product</Link>
    //           </li>
    //           <li className={styles.navLinks}>
    //             <Link href="/about"> Services</Link>
    //           </li>
    //           <li className={styles.navLinks}>
    //             <Link href="/about">About</Link>
    //           </li>
    //           <li className={styles.navLinks}>
    //             <Link href="/about"> Contact</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
    //         <BsList className="h-8 w-8 text-[#F5B519]" />
    //       </div>
    //     </div>

    //     {/* Mobile Menu */}
    //     <div
    //       className={
    //         menuOpen
    //           ? "fixed top-0 left-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
    //           : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
    //       }
    //     >
    //       <div className="flex w-full items-center justify-end">
    //         <div onClick={toggleMenu} className="cursor-pointer">
    //           <BsX className="h-8 w-8 text-[#F6B519]" />
    //         </div>
    //       </div>
    //       <div className="flex-col py-4">
    //         <ul>
    //           <li
    //             onClick={() => setMenuOpen(false)}
    //             className="py-4 hover:underline hover:decoration-[#F6B519]"
    //           >
    //             <Link href="/about"> Product</Link>
    //           </li>
    //           <li
    //             onClick={() => setMenuOpen(false)}
    //             className="py-4 hover:underline hover:decoration-[#F6B519]"
    //           >
    //             {" "}
    //             <Link href="/about"> Product</Link>
    //           </li>
    //           <li
    //             onClick={() => setMenuOpen(false)}
    //             className="py-4 hover:underline hover:decoration-[#F6B519]"
    //           >
    //             {" "}
    //             <Link href="/about"> Product</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex flex-row justify-around pt-10 items-center">
    //         <Link href="youtube.com">
    //           <BsWhatsapp
    //             className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-100"
    //             size={30}
    //           />
    //         </Link>
    //       </div>
    //       <Image
    //         src="/Image/Logo/GraceSolutionLogo.png"
    //         width={100}
    //         height={75}
    //         alt={"Grace Solution Logo"}
    //         className="cursor-pointer"
    //       />
    //     </div>
    //     {/* social media */}
    //   </nav>
    // </header>
    <header className="py-8 lg:pt-6 lg:pb-14 ">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className=" flex justify-center lg:justify-normal">
          {/* Logo */}
          <Link href="/">
            <Image
              src="./Image/Logo/GraceSolutionLogo.png"
              width={100}
              height={100}
              alt={"Grace Solution Logo"}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <BsFillPinMapFill className="text-2xl text-sky-300" />
            <div>Muka-Kuning 29433, Batam - Indonesia</div>
          </div>
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <BsTelephoneFill className="text-xl text-sky-300" />
            <div>(0770) 611-367</div>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-normal hover:bg-blue-400 w-[220px] h-[50px] lg:w-auto m-auto lg:mx-0 font-bold px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
            <BsWhatsapp className="text-green-400 text-2xl " />
            <div>Contact Us</div>
          </div>
          {/* Mobile Nav */}

          <nav
            className={
              mobileNavBar
                ? "mnav bg-white fixed w-[300px] top-0 h-screen  left-0 shadow-2xl lg:hidden transition-all duration-200 z-20"
                : "mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-200 z-20"
            }
          >
            {/* Nav trigger button */}
            {mobileNavBar ? (
              <div className=" bg-black w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                <BsArrowLeft
                  className="text-xl text-white"
                  onClick={() => setMovbileNavBar(!mobileNavBar)}
                />
              </div>
            ) : (
              <div className=" bg-black w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                <BsArrowRight
                  className="text-xl text-white"
                  onClick={() => setMovbileNavBar(!mobileNavBar)}
                />
              </div>
            )}
            {/* logo list form */}
            <div className="px-12 flex flex-col gap-y-12 h-full">
              {/* Logo */}
              <div>
                {" "}
                <Link href="/">
                  <Image
                    src="./Image/Logo/GraceSolutionLogo.png"
                    width={100}
                    height={75}
                    alt={"Grace Solution Logo"}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              {/* List */}
              <ul>
                <li className="text-secondary hover:text-sky-300 transition-all duration-300">
                  <Link href="/services"> Services </Link>
                </li>
                <li className="text-secondary hover:text-sky-300 transition-all duration-300">
                  <Link href="/products"> Products </Link>
                </li>
                <li className="text-secondary hover:text-sky-300 transition-all duration-300">
                  <Link href="/about"> About </Link>
                </li>
                <li className="text-secondary hover:text-sky-300 transition-all duration-300">
                  <Link href="/contact"> Contact us </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* Desktop nav */}
          <nav className="bg-white hidden md:flex z-10  border-2 absolute w-full left-0 -bottom-[86px] shadow-lg h-16 rounded-[10px]  lg:items-center lg:justify-center lg:mx-[30px] md:invisible sm:invisible lg:visible  ">
            <ul className="flex gap-x-48  ">
              <li className="text-secondary hover:text-sky-300 transition-all duration-300 border-r pr-4 ">
                <Link href="/services"> Services </Link>
              </li>
              <li className="text-secondary hover:text-sky-300 transition-all duration-300  border-r pr-4">
                <Link href="/products"> Products </Link>
              </li>
              <li className="text-secondary hover:text-sky-300 transition-all duration-300  border-r pr-4 ">
                <Link href="/about"> About </Link>
              </li>
              <li className="text-secondary hover:text-sky-300 transition-all duration-300  border-r pr-4 ">
                <Link href="/contact"> Contact us </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
