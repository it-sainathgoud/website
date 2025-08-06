export const metadata = {
  title: "Mindtris | Accelerate Business Transformation",
  description:
    "Mindtris is a global technology consulting and digital solutions firm that partners with organizations across industries to reimagine business models, accelerate innovation, and drive sustainable growth through digital transformation. Serving both public and private sector clients, we bring deep domain expertise and cutting-edge technology capabilities to deliver differentiated customer experiences and impactful business outcomes in an increasingly connected world.",
  keywords: [
    "Mindtris",
    "industries",
    "Banking & Financial Services",
    "Energy & Utilities",
    "Healthcare & Life Sciences",
    "Public Sector",
    "Retail & Consumer Goods",
    "Security & Defense",
    "Telecommunications",
    "Travel, Transportation & Hospitality",
    "digital transformation",
    "technology excellence",
    "talent mobilization",
    "customer experiences",
    "healthcare transformation",
    "business growth solutions",
    "engineering",
    "security & surveillance",
  ],
  authors: [{ name: "Mindtris Inc.", url: "https://mindtris.com" }],
  openGraph: {
    title: "Mindtris | Accelerate Business Transformation",
    description:
      "Mindtris is a global technology consulting and digital solutions firm that partners with organizations across industries to reimagine business models, accelerate innovation, and drive sustainable growth through digital transformation. Serving both public and private sector clients, we bring deep domain expertise and cutting-edge technology capabilities to deliver differentiated customer experiences and impactful business outcomes in an increasingly connected world.",
    url: "https://mindtris.com/industries",
    siteName: "Mindtris",
    images: [
      {
        url: "https://mindtris.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mindtris IT Consulting & IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindtris | Accelerate Business Transformation",
    description:
      "Mindtris is a global technology consulting and digital solutions firm that partners with organizations across industries to reimagine business models, accelerate innovation, and drive sustainable growth through digital transformation. Serving both public and private sector clients, we bring deep domain expertise and cutting-edge technology capabilities to deliver differentiated customer experiences and impactful business outcomes in an increasingly connected world.",
    images: ["https://mindtris.com/assets/twitter-image.jpg"],
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Industries() {
  return (
    <>
      <PageIllustration />
      {/* <Hero /> */}
      {/* <Faqs />
      <Testimonials />
      <Cta /> */}
    </>
  );
}