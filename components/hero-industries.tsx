import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import Spotlight from "@/components/spotlight";
import IndustriesImg01 from "@/public/images/hero-image-01.jpg";

export default function HeroIndustries() {
  const industries = [
    {
      img: IndustriesImg01,
      alt: "Banking and Financial Services",
      title: "Banking and Financial Services",
      description:
        "Transform patient care with digital health solutions, AI diagnostics, and secure data platforms.",
      link: "/industries/finance",
    },
    {
      img: IndustriesImg01,
      alt: "Energy and Utilities",
      title: "Energy and Utilities",
      description:
        "Drive innovation in banking and fintech with cloud-native infrastructure and predictive analytics.",
      link: "/industries/utilities",
    },
    {
      img: IndustriesImg01,
      alt: "Healthcare and Life Sciences",
      title: "Healthcare and Life Sciences",
      description:
        "Enhance customer experience and streamline operations with omnichannel strategies and smart logistics.",
      link: "/industries/healthcare",
    },
    {
      img: IndustriesImg01,
      alt: "Public Sector",
      title: "Public Sector",
      description:
        "Enhance customer experience and streamline operations with omnichannel strategies and smart logistics.",
      link: "/industries/public-sector",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20 text-center">
          {/* Section header */}
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Driving growth in industries
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-4 text-xl text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              We help industries transform and grow by delivering customized
              digital solutions backed by the right tools, technology, and
              expertise.{" "}
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

        {/* Add Industries section here..  */}
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.link}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>

                {/* Image */}
                <div className="relative">
                  <Image
                    className="aspect-101/64 w-full object-cover opacity-80 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
                    src={industry.img}
                    width={350}
                    height={288}
                    alt={industry.alt}
                    layout="responsive"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-gray-950/80 via-gray-900/40 to-transparent">
                    {/* Title at the Top */}
                    <div>
                      <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-xl font-semibold text-transparent md:text-4xl">
                        {industry.title}
                      </h3>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <div className="mb-2">
                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                          {/* Optional Tag or Label */}
                        </span>
                      </div>
                      {/* Optional Description */}
                      {/* <p className="text-indigo-200/65 text-sm leading-relaxed">
                {industry.description}
              </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
