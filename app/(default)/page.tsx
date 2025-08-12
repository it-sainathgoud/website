export const metadata = {
  title: "Mindtris | Mindtris is a global tech consulting firm that helps businesses grow through cloud, AI, analytics, and automation. We improve operations, drive innovation, and deliver better customer experiences.",
  description:
    "Mindtris is a global tech consulting firm that helps businesses grow through cloud, AI, analytics, and automation. We improve operations, drive innovation, and deliver better customer experiences.",
  keywords: [
    "Mindtris",
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
    title: "Mindtris | Mindtris is a global tech consulting firm that helps businesses grow through cloud, AI, analytics, and automation. We improve operations, drive innovation, and deliver better customer experiences.",
    description: "Mindtris is a global tech consulting firm that helps businesses grow through cloud, AI, analytics, and automation. We improve operations, drive innovation, and deliver better customer experiences.",
    url: "https://mindtris.com",
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
    description: "Mindtris is a global technology consulting and digital solutions firm that partners with organizations across industries to reimagine business models, accelerate innovation, and drive sustainable growth through digital transformation. Serving both public and private sector clients, we bring deep domain expertise and cutting-edge technology capabilities to deliver differentiated customer experiences and impactful business outcomes in an increasingly connected world.",
    images: ["https://mindtris.com/assets/twitter-image.jpg"],
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Cta from "@/components/cta";
import Newsletter from "@/components/newsletter";
import FeatureBlogs from "@/components/feature-blogs";
// import ServicesCarousel from "@/components/services-carousel";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      {/* <ServicesCarousel /> */}
      {/* <Features /> */}
      {/* <SplitCarousel /> */}
      {/* <Pricing /> */}
      <FeatureBlogs />
      <Cta />
    </>
  );
}
