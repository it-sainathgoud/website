import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";
import PricingTable from "@/components/pricing-table";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import AllServices from "@/components/services-overview";

export default function HeroServices() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20 text-center">
          {/* Section header */}
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
          Agile services with reliable results
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-4 text-xl text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
            From digital transformation to strategic growth, we deliver the tools, tech, talent and expertise your business needs to thrive.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="/contact"
              >
                <span className="relative inline-flex items-center">
                  Schedule a Call Today
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay={600}>
              <a
                className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 sm:ml-4 sm:w-auto"
                href="/careers"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <AllServices />
      </div>
    </section>
  );
}
