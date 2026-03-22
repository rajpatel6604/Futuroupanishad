import AboutCEO from "@/Components/AboutCEO/AboutCEO";
import AboutUs from "@/Components/AboutUs/AboutUs";
import FAQ from "@/Components/FAQ/FAQ";
// import Gallery from "@/Components/Gallery/Gallery";
import Hero from "@/Components/Hero/Hero";
import Marquee from "@/Components/Marquee/Marquee";
import Quotes from "@/Components/Quotes/Quotes";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhoFuturoupanishad from "@/Components/WhoFuturoupanishad/WhoFuturoupanishad";
import WhyFuturoupanishad from "@/Components/WhyFuturoupanishad/WhyFuturoupanishad";
import YTVideo from "@/Components/YTVideo/YTVideo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutCEO />
      <AboutUs />
      <YTVideo />
      <WhoFuturoupanishad />
      <Marquee />
      <WhyFuturoupanishad />
      <Quotes />
      <FAQ />
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
    </>
  );
}
