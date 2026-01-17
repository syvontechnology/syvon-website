import HeroSection from "@/components/hero/HeroSection";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Expertise from "@/components/sections/Expertise";
import ProductsHighlight from "@/components/sections/ProductsHighlight";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <Expertise />
      <ProductsHighlight />
    </>
  );
}
