"use client";
import React, { useState } from "react";
import { Input } from "../../ui/input";
import { ShoppingCart, AlignRight, X } from "lucide-react";
import Image from "next/image";

type NavbarProps = {
  name: string;
};

const Navbar: React.FC<NavbarProps> = ({ name }): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center flex-grow-[1]">
      {/* logo  */}
      <div className="">
        <Image
          src={require("../../../src/asset/Logo.webp")}
          alt="logo"
          className="w-[140px]"
        />
      </div>
      {/* routes  */}
      <div className="hidden lg:flex lg:justify-center  flex-grow-[2]">
        <ul className="flex">
          <li className="pr-12">Female</li>
          <li className="pr-12">Male</li>
          <li className="pr-12">Kids</li>
          <li className="">All Products</li>
        </ul>
      </div>
      {/* search  */}
      <div className="hidden lg:flex flex-grow-[2] lg:justify-start ">
        <Input
          type="email"
          placeholder="What you looking for "
          className="w-[60%]"
          custom="navbarSearch"
        />
      </div>
      {/* if  */}
      {/* cart on larg screen */}
      <div className="bg-gray-100 rounded-[50%] w-12 h-12 relative hidden lg:flex justify-center items-center cursor-pointer transition ease-out delay-150 hover:scale-[1.1] duration-500">
        <div className="absolute px-[4px] right-2 top-1 rounded-[50%] bg-red-500 text-[10px] text-white">
          0
        </div>
        <ShoppingCart size={20} />
      </div>
      {/* else  */}
      {/* expand menu button on medium sreen  */}
      <div className="flex lg:hidden" onClick={(e) => setOpenMenu(true)}>
        <AlignRight size={30} />
      </div>

      {/* fixed navbar on small screen (detached part of this layout) */}
      <div
        className={` ${
          openMenu ? "block" : "hidden"
        } lg:hidden fixed top-0 left-0 right-0 bottom-0 border bg-white`}
      >
        <div className="flex justify-between px-8 pt-8">
          {/* logo  */}
          <Image
            src={require("../../../src/asset/Logo.webp")}
            alt="logo"
            className="w-[140px] block"
          />
          <X onClick={(e) => setOpenMenu(false)} />
        </div>
        <div className="h-[80%] flex flex-col justify-center">
          <div className="flex flex-col gap-2 items-center">
            {/* cart  */}
            <div className="bg-gray-100 rounded-[50%] w-12 h-12 relative flex justify-center items-center cursor-pointer transition ease-out delay-150 hover:scale-[1.1] duration-500">
              <div className="absolute px-[4px] right-2 top-1 rounded-[50%] bg-red-500 text-[10px] text-white">
                0
              </div>
              <ShoppingCart size={20} />
            </div>
            <span className="block">Female</span>
            <span className="block">Male</span>
            <span className="block">Kids</span>
            <span className="block">All Products</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
