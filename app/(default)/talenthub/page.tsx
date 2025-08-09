export const metadata = {
  title:
    "Mindtris TalentHub | IT Talent Acquisition & Scalable Hiring Solutions",
  description:
    "Mindtris offers enterprise-grade IT recruitment services through a subscription-based hiring model. Reduce recruitment costs, accelerate time-to-hire, and access pre-vetted global tech talent. Our scalable hiring solutions support digital transformation, workforce expansion, and strategic talent acquisition for high-growth organizations.",
  keywords: [
    "IT recruitment services",
    "enterprise talent acquisition",
    "scalable hiring solutions",
    "tech staffing agency",
    "subscription-based recruitment",
    "global IT talent sourcing",
    "low-cost hiring model",
    "digital transformation hiring",
    "monthly recruitment plans",
    "outsourced recruitment services",
    "IT headhunting firm",
    "fast tech hiring",
    "Mindtris recruitment",
    "remote tech talent",
    "contract and full-time IT staffing",
    "non-IT recruitment",
    "healthcare staffing",
  ],
  authors: [{ name: "Mindtris Inc.", url: "https://mindtris.com" }],
  openGraph: {
    title:
      "Mindtris Recruitment Services | IT Talent Acquisition & Scalable Hiring Solutions",
    description:
      "Discover Mindtris recruitment services—subscription-based hiring for enterprise IT and healthcare, engineering and sales roles. Reduce costs, hire faster, and scale your workforce with global talent.",
    url: "https://mindtris.com/recruitment",
    siteName: "Mindtris",
    images: [
      {
        url: "https://mindtris.com/assets/mindtris-recruitment-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mindtris IT Recruitment & Hiring Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mindtris Recruitment Services | IT Talent Acquisition & Scalable Hiring Solutions",
    description:
      "Mindtris delivers scalable, cost-effective IT recruitment services for enterprises. Hire top global tech talent with our subscription-based model.",
    images: ["https://mindtris.com/assets/mindtris-recruitment-twitter.jpg"],
  },
};

import PageIllustration from "@/components/page-illustration";
import HeroTalentHub from "@/components/hero-talent-hub";
import FeaturesTalentHub from "@/components/features-talent-hub";
import FaqsTalentHub from "@/components/faqs-talent-hub";
import TestimonialsTalentHub from "@/components/testimonials-talent-hub";
import CtaTalentHub from "@/components/cta-talent-hub";

/***
 * HeroTalentHub
 * Features & Benefits
 * Pricing 
 * FAQ's
 * Testimonials
 */
export default function TalentHub() {
  return (
    <>
      <PageIllustration />
      <HeroTalentHub />      
      {/* <FeaturesTalentHub/>
      <FaqsTalentHub />
      <TestimonialsTalentHub />
      <CtaTalentHub /> */}
    </>
  );
}
