import AboutUs from "@/Components/AboutUs/AboutUs";
import Gallery from "@/Components/Gallery/Gallery";
import Hero from "@/Components/Hero/Hero";
import Quotes from "@/Components/Quotes/Quotes";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhoFuturoupanishad from "@/Components/WhoFuturoupanishad/WhoFuturoupanishad";
import WhyFuturoupanishad from "@/Components/WhyFuturoupanishad/WhyFuturoupanishad";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyFuturoupanishad />
      <WhoFuturoupanishad />
      <Quotes />
      {/* <Gallery /> */}
      <Testimonials />
    </>
  );
}
