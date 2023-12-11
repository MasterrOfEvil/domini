"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/aboutus",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between items-center w-full h-[15vh] px-3 mx-auto ">
      <Link href="/" className="pl-16">
        <Image src="/transparent_logo.png" alt="logo" width={250} height={70} />
      </Link>
      <div className=" mx-0 lg:flex lg:flex-row  justify-around item-center hidden">
        {links.map((link) => (
          <Link
            className="mr-[5vw] font-bold flex items-center text-[13px]"
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
        <button
          className="bg-primary mr-[60px] ml-[-10px] rounded-md font-bold text-[13px] text-white px-[15px] py-[7px]"
          onClick={() => {
            console.log("logged out");
          }}
        >
          Get in Touch
        </button>
      </div>

      <div className="lg:hidden ">
        {toggle ? (
          <IoMdClose size={30} className="mr-10" onClick={handleToggle} />
        ) : (
          <GiHamburgerMenu size={30} className="mr-10" onClick={handleToggle} />
        )}
        {toggle && (
          <div className="absolute w-[83vw] ml-[6vw] z-10 bg-white left-0 h-[85vh]">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  className="mt-[25px] font-bold text-[24px]"
                  key={link.id}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))}
              <button
                className="bg-primary  mt-[25px] text-[24px] text-white px-[15px] py-[7px]"
                onClick={() => {
                  console.log("logged out");
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
