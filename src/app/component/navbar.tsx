"use client"
import Link from "next/link"
import Logo from "../images/logo.png"
import Image from "next/image"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarContent = [
    { name: "Categories", src: "" },
    { name: "Services", src: "" },
    { name: "Industries", src: "" },
    { name: "Become A Supplier", src: "" },
    { name: "Help Center", src: "" },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between px-5 md:px-10 py-5 bg-white gap-5 md:gap-8 text-[#2C2D5B]">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="w-[40px] h-[40px] md:w-auto md:h-auto" />
          <h1 className="text-[24px] md:text-[30px] font-bold text-[#2C2D5B]">
            Prism<span className="text-[#F67366]">Shop</span>
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {navbarContent.map((item, index) => (
            <div key={index} className="text-[16px] md:text-[20px]">
              <Link href={item.src}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex gap-4 md:gap-8 items-center justify-center pl-12 md:pl-0">
          <button className="w-28 h-10 md:w-32 md:h-12 rounded-md border-2 border-[#2C2D5B] bg-white text-[16px] md:text-[20px] hover:bg-[#2C2D5B] hover:text-white">
            Login
          </button>
          <button className="w-28 h-10 md:w-32 md:h-12 rounded-md border-2 border-[#2C2D5B] bg-[#2C2D5B] text-white text-[16px] md:text-[20px]">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 items-center mt-5 md:hidden">
          {navbarContent.map((item, index) => (
            <div key={index} className="text-[16px]">
              <Link href={item.src}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
