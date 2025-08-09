import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";
import PricingTable from "@/components/pricing-table";

export default function HeroTalentHub() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20 text-center">
          {/* Section header */}
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Scalable hiring for growing teams
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-4 text-xl text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Our scalable recruitment with predictable monthly
              pricing, helps you hire top global talent quickly and cost
              effectively.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Get Started Free
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay={600}>
              <a
                className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 sm:ml-4 sm:w-auto"
                href="/contact"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Pricing + Charities CTA */}
        <div className="relative py-16 md:py-24">
          {/* Background Illustration */}
          <div
            className="pointer-events-none absolute bottom-28 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <Image
              className="md:max-w-none"
              src={SecondaryIllustration}
              width={1165}
              height={1012}
              alt="Secondary illustration"
            />
          </div>

          {/* Pricing Table */}
          {/* <PricingTable /> */}

          {/* Charities CTA */}
          {/* <div className="mt-8 max-w-2xl xl:max-w-none">
            <a
              className="group flex items-center justify-between gap-3 rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 px-4 py-4 backdrop-blur-xs transition-all duration-300 hover:bg-[length:400%_100%]"
              href="/contact"
            >
              <span className="text-indigo-200/65">
                <span className="font-medium text-gray-200">
                  Are you a charity or non-profit organization?
                </span>{" "}
                Let’s chat about how Mindtris helps non-profits find great
                talent at no cost.
              </span>
              <span
                className="flex shrink-0 items-center gap-3"
                aria-hidden="true"
              >
                <span className="-ml-0.5 flex -space-x-3">
                  <Image
                    className="rounded-full border-2 border-gray-900"
                    src={AvatarImg01}
                    width={24}
                    height={24}
                    alt="Avatar 01"
                  />
                  <Image
                    className="rounded-full border-2 border-gray-900"
                    src={AvatarImg02}
                    width={24}
                    height={24}
                    alt="Avatar 02"
                  />
                  <Image
                    className="rounded-full border-2 border-gray-900"
                    src={AvatarImg03}
                    width={24}
                    height={24}
                    alt="Avatar 03"
                  />
                  <Image
                    className="rounded-full border-2 border-gray-900"
                    src={AvatarImg04}
                    width={24}
                    height={24}
                    alt="Avatar 04"
                  />
                </span>
                <span className="text-indigo-500 group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
