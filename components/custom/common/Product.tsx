import Image from "next/image";
import React from "react";

interface Props {
  product: {
    title: string;
    price: number;
    image: string;
  };
  index: number;
}

const Product = ({ product, index }: Props) => {
  const isOdd = (num: number) => {
    if (num % 2 !== 0) return true;
    else false;
  };
  return (
    <div
      className={`hover:scale-105 transition duration-300 hover:cursor-pointer sm:my-0 my-4 ${
        isOdd(index) && "lg:block md:hidden sm:hidden block"
      }`}
    >
      {/* image  */}
      <Image src={product.image} alt="" className="w-full" />
      {/* title, price container*/}
      <div>
        <p>{product.title}</p>
        <span className="block">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
