export const metadata = {
  title: "Careers - Mindtris",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import HeroCareers from "@/components/hero-careers";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Benefits from "@/components/benefits";
import Career from "@/components/career";
import Clients from "@/components/clients";
import Cta from "@/components/cta";

export default function Careers() {
  return (
    <>
      <PageIllustration multiple />
      <HeroCareers />
      {/* <Timeline />
      <Team />
      <Benefits />
      <Career />
      <Clients />
      <Cta /> */}
    </>
  );
}
