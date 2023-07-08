import Image from "next/image";
import Hero from "../../components/custom/common/Hero";
import Promotions from "../../components/custom/HomePage/Promotions";
import FeaturedProducts from "../../components/custom/HomePage/FeaturedProducts";

export default function Home() {
  console.log("test changes");
  return (
    <div>
      {/* hero  */}
      <Hero />
      {/* Promotions  */}
      <Promotions />
      <FeaturedProducts />
    </div>
  );
}
