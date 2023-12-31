import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <section className="mt-24">
      <span className="block text-[blue] text-center my-4">PROMOTIONS</span>
      <h2 className="text-[32px] text-center tracking-wide leading-[40px] font-[700] my-4 mb-8">
        Our Promotions Events
      </h2>
      {/* promo container  */}
      <div className="flex flex-wrap gap-6">
        {/* item1  */}
        <div className="flex flex-wrap flex-grow-[20]">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center flex-wrap bg-[#d6d6d8] ">
              <div className="pl-8 pt-8 sm:pt-0">
                <h3 className="font-[700] text-[1.75rem] leading-[35px] tracking-wider">
                  GET UPTO{" "}
                  <span className="font-[800] text-[2.25rem]">60%</span>
                </h3>
                <p className="text-[#212121]">For the summer season</p>
              </div>
              <div className="flex justify-center w-full sm:w-auto">
                <Image
                  src={require("../../../src/asset/promo/event1.webp")}
                  alt=""
                  className="block"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white bg-[#212121] h-full py-[2rem]">
              <h3 className="font-[800] text-[2.25rem] leading-[45px] tracking-wide mb-4">
                GET 30% Off
              </h3>
              <p className="leading-[18px] py-2">USE PROMO CODE</p>
              <button className="bg-[#474747] p-2 px-10 rounded-sm tracking-[0.25rem] font-[700]">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
        {/* item2  */}
        <div className="flex flex-grow-[1]">
          <div className="flex w-full gap-4 flex-wrap sm:flex-nowrap ">
            <div className="flex flex-col = bg-[#efe1c7] sm:basis-1/2 basis-full">
              <p>Flex Sweatshirt</p>
              <div className="flex">
                <span className="block line-through"> $100.00</span>
                <span className="pl-2 block">$75.00</span>
              </div>
              <div className="flex justify-center">
                <Image
                  src={require("../../../src/asset/promo/event2.webp")}
                  alt=""
                  className="block mt-8"
                />
              </div>
            </div>
            <div className="flex flex-col bg-[#d6d6d8] sm:basis-1/2 basis-full">
              <p>Flex Push Button Bomber</p>
              <span className="block">$225.00</span>
              <span>$190.00</span>
              <div className="flex justify-center">
                <Image
                  src={require("../../../src/asset/promo/event3.webp")}
                  alt=""
                  className="block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
