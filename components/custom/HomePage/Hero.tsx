"use-client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <div className="flex justify-between items-center mt-12 gap-4 ">
      {/*-title-content-*/}
      <div className="flex flex-col justify-between gap-8 w-[40rem]">
        <span className="block p-2 bg-[#e1edff] text-[blue] font-bold rounded-sm w-[8rem] text-center">
          Sale 70%
        </span>
        <h1 className="text-[3.5rem] font-[700] tracking-wide leading-[55px]">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-[80%]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="text-bold flex items-center justify-center text-white bg-[#212121] hover:bg-[#212121e7] transition-colors duration-75 delay-75 w-60 p-4 rounded-xs">
          <ShoppingCart />
          <span className="block ml-2">Start Shopping</span>
        </button>
        <div className="flex justify-between pt-10 gap-4">
          <Image
            src={require("../../../src/asset/hero/icons/Featured1.webp")}
            alt=""
          />
          <Image
            src={require("../../../src/asset/hero/icons/Featured2.webp")}
            alt=""
          />
          <Image
            src={require("../../../src/asset/hero/icons/Featured3.webp")}
            alt=""
          />
          <Image
            src={require("../../../src/asset/hero/icons/Featured4.webp")}
            alt=""
          />
        </div>
      </div>
      {/*-hero-image-*/}
      <div className="lg:block hidden ">
        <div
          id="circle"
          className="bg-[#ffece3] h-[40rem] w-[40rem] rounded-[50%] relative"
        >
          <Image
            src={require("../../../src/asset/hero/header.webp")}
            alt=""
            className="absolute top-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
