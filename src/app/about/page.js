import Head from "next/head";
import AboutUs from "@/Components/AboutUs/AboutUs";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Vision from "@/Components/Vision/Vision";
import WhyFuturoupanishad from "@/Components/WhyFuturoupanishad/WhyFuturoupanishad";
import WhoFuturoupanishad from "@/Components/WhoFuturoupanishad/WhoFuturoupanishad";

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <>
      <Head>
        <title>About Us | SJB Hospital</title>
        <meta
          name="description"
          content="SJB Hospital is committed to providing compassionate, affordable, and world-class healthcare. Learn more about our mission, values, and medical excellence."
        />
        <link rel="canonical" href="http://sjbhospital.org/about" />
        <meta property="og:title" content="About Us | SJB Hospital" />
        <meta
          property="og:description"
          content="Discover SJB Hospital's mission, vision, and our commitment to excellence in patient care."
        />
        <meta
          property="og:image"
          content="http://sjbhospital.org/images/banner/banner.jpg"
        />
        <meta property="og:url" content="http://sjbhospital.org/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | SJB Hospital" />
        <meta
          name="twitter:description"
          content="Learn about SJB Hospital’s mission and commitment to quality healthcare."
        />
        <meta
          name="twitter:image"
          content="http://sjbhospital.org/images/banner/banner.jpg"
        />
      </Head>

      <Breadcrumb
        items={breadcrumbItems}
        title="About Us"
        bgImage="/images/banner/banner.jpg"
      />
      <AboutUs />
      <Testimonials />
      <WhyFuturoupanishad />
      <WhoFuturoupanishad />
      <Vision />
    </>
  );
}
