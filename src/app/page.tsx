import Image from "next/image";
import Hero from "../../components/custom/HomePage/Hero";
import Promotions from "../../components/custom/HomePage/Promotions";
import FeaturedProducts from "../../components/custom/HomePage/FeaturedProducts";
import NewsLetterForm from "../../components/custom/HomePage/NewsLetterForm";

export default function Home() {
  return (
    <div>
      {/* hero  */}
      <Hero />
      {/* Promotions  */}
      <Promotions />
      {/* featured products  */}
      <FeaturedProducts />
      {/* News Letter  */}
      <NewsLetterForm />
    </div>
  );
}
