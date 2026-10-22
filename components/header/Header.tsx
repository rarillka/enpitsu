"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/app/icon1.png";

import "./styles.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "О НАС", href: "/about-us" },
    { name: "НОВОСТИ", href: "/news" },
    { name: "ДЕМО", href: "/demo" },
  ];
  return (
    // <header className="mx-auto bg-[url('/img/bg-images/header-1-mobile-bg.png')] bg-cover bg-no-repeat drop-shadow-[0px_4px_10px_rgba(47,32,25,0.75)] sm:bg-[url('/img/bg-images/header-1-bg.png')] w-full 2xl:w-[1920px] h-[200px] sm:h-[140px] bg-[center_top_-50px] sm:bg-top">
    //   test2
    // </header>

    <div>
      <header className="font-sjz mx-auto bg-[url('/img/bg-images/header-1-mobile-bg.png')] bg-cover bg-no-repeat drop-shadow-[0px_4px_10px_rgba(47,32,25,0.75)] sm:bg-[url('/img/bg-images/header-1-bg.png')] w-full 3xl:w-[1920px] h-[150px] sm:h-[140px] bg-[center_top_-50px] sm:bg-top">
        <nav className=" sm:mx-[240px]">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="md:hidden">
              <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={toggleMobileMenu}
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden z-50`}
            >
              <div className="flex flex-row items-center border-b pb-4">
                <Link
                  href="/"
                  className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
                >
                  NEXTNEWS
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col h-full gap-4 p-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center p-1 text-lg gap-x-2 hover:text-red-500"
                  >
                    <Link
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      href={item.href}
                      className="flex items-center"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">
                    Login
                  </button>
                </li>
              </ul>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between w-full mt-[20px]">
              <ul className="flex gap-20">
                <li>
                  <Link href="/" className="">
                    <Image src={Logo} width={50} height={50} alt={""} />
                  </Link>
                </li>
                {navItems.map((item, index) => (
                  <li key={index} className="header-link">
                    <Link href={item.href} className="header-link-text ">
                      {item.name}
                    </Link>
                    <Image
                      width={180}
                      height={180}
                      src="/img/bg-images/lg-scribble-1.png"
                      className="scribble scribble-1"
                      alt=""
                    />
                    <Image
                      width={180}
                      height={180}
                      src="/img/bg-images/lg-scribble-2.png"
                      className="scribble scribble-2"
                      alt=""
                    />
                  </li>
                ))}
              </ul>
              <div>
                <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md">
                  МЕРЧ
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
