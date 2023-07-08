import React from "react";
import Product from "../common/Product";
import Image from "next/image";
import { Button } from "../../ui/button";

const products = [
  {
    title: "Brusded Raglan Sweatshirt",
    price: 195,
    image: require("../../../src/asset/feature_products/feature_product1.png"),
  },
  {
    title: "Cameryn Sash Tie Dress",
    price: 545,
    image: require("../../../src/asset/feature_products/feature_product2.png"),
  },
  {
    title: "Flex Sweatshirt",
    price: 175,
    image: require("../../../src/asset/feature_products/feature_product3.png"),
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mt-24 mb-4">
      <span className="block text-[blue] text-center my-4">PRODUCTS</span>
      <h2 className="text-[32px] text-center tracking-wide leading-[40px] font-[700] my-4 mb-10">
        Check What We Have
      </h2>
      {/* products_container  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-full justify-around lg:gap-28 md:gap-20 sm:gap-10">
        {products.map((product, idx) => (
          <Product key={product.title} index={idx} product={product} />
        ))}
      </div>
      <div className="flex md:justify-end sm:justify-center mt-10 mb-4">
        <h1 className="md:w-[45%] sm:w-[80%] text-[2.7rem] font-bold my-4">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-center">
        <div className="grid grid-cols-2 gap-4 relative z-[2]">
          <div className="absolute z-[1] opacity-5 font-extrabold leading-[110px] text-[6.8rem] text-[#212121]">
          Different from others
          </div>
          <div className="lg:w-48 md:w-auto my-[25px]">
            <h3 className="font-semibold text-lg mb-4 tracking-wide leading-5">Using Good Quality Materials</h3>
            <p className="text-[#212121] opacity-[0.8]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-48 md:w-auto my-[25px]">
            <h3 className="font-semibold text-lg mb-4 tracking-wide leading-5">100% Handmade Products</h3>
            <p className="text-[#212121] opacity-[0.8]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-48 md:w-auto my-[25px]">
            <h3 className="font-semibold text-lg mb-4 tracking-wide leading-5">Modern Fashion Design</h3>
            <p className="text-[#212121] opacity-[0.8]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-48 md:w-auto my-[25px]">
            <h3 className="font-semibold text-lg mb-4 tracking-wide leading-5">Discount for Bulk Orders</h3>
            <p className="text-[#212121] opacity-[0.8]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="flex gap-10 md:flex-row flex-col items-center basis-1/2">
          
          <Image
            src={require("../../../src/asset/feature_products/feature.webp")}
            alt=""
            className="w-72 block m-auto"
          />
          <div>
            <p className="pb-10 font-light text-[1rem] leading-[26px] text-[#212121] text-justify">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className=" text-white bg-[#212121] hover:bg-[#212121e7] transition-colors duration-75 delay-75 p-4 rounded-xs">See All Product</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
