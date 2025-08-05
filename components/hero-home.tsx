"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { useState, useEffect } from "react";

// Home page various services page content ..
const slides = [
  {
    h1: "Boost digital transformation",
    p: "Drive innovation, agility, and growth with tailored digital transformation strategies built to scale, adapt, and deliver measurable impact across your business.",
    buttons: [
      { label: "Explore Services", href: "/services" },
      { label: "Schedule a Call", href: "/contact" },
    ],
  },
  {
    h1: "Take your hiring to new heights",
    p: "Hire top IT, cloud, and AI talent fast with no placement fees, no delays. Scalable, subscription-based recruiting built for growth.",
    buttons: [
      { label: "Start Free Trial", href: "/start-trial" },
      { label: "Get Demo", href: "/contact" },
    ],
  },
  {
    h1: "Managed services for maximum value",
    p: "Scalable managed services that reduce costs, enhance efficiency, and empower your team to focus on strategic growth.",
    buttons: [
      { label: "Explore Services", href: "/services" },
      { label: "Schedule a Call", href: "/contact" },
    ],
  },
  {
    h1: "Transform workflows with generative AI",
    p: "Enhance decision-making and streamline tasks with generative AI built for scale and adaptability.",
    buttons: [
      { label: "Explore Services", href: "/services" },
      { label: "Schedule a Call", href: "/contact" },
    ],
  },
  {
    h1: "Elevate customer experience",
    p: "Improve satisfaction, increase retention, and deliver consistent value at every customer touchpoint.",
    buttons: [
      { label: "Explore Services", href: "/services" },
      { label: "Schedule a Call", href: "/contact" },
    ],
  },
];

export default function HeroHome() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            {/* <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Accelerate digital transformation
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Empower your digital transformation journey with us, ensuring
                you stay ahead in the digital era and achieve sustainable
                growth.
              </p> */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl transition-opacity duration-1000 ease-in-out"
              data-aos="fade-up"
              key={currentSlide.h1}
            >
              {currentSlide.h1}
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65 transition-opacity duration-1000 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={200}
                key={currentSlide.p}
              >
                {currentSlide.p}
              </p>

              {/*  */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                {currentSlide.buttons.map((btn, i) => (
                  <div
                    key={btn.label}
                    data-aos="fade-up"
                    data-aos-delay={400 + i * 200}
                  >
                    <a
                      className={`btn group mb-4 w-full ${
                        i === 0
                          ? "bg-gradient-to-t from-indigo-600 to-indigo-500 text-white"
                          : "bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300"
                      } hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto sm:ml-4`}
                      href={btn.href}
                    >
                      <span className="relative inline-flex items-center">
                        {btn.label}
                        {i === 0 && (
                          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                            -&gt;
                          </span>
                        )}
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Services
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/contact"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
