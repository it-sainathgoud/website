"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";



// export default function ServicesCarousel() {
//   // Mouse tracking for glow effect
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       document.documentElement.style.setProperty("--mouse-x", `${x}px`);
//       document.documentElement.style.setProperty("--mouse-y", `${y}px`);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const services = [
//     {
//       title: "Digital Transformation",
//       description:
//         "Modernization and agility for a thriving business future in an ever-evolving landscape.",
//       image: WorflowImg01,
//     },
//     {
//       title: "Technology Excellence",
//       description:
//         "Innovate with cloud services and AI for operational excellence and digital transformation.",
//       image: WorflowImg02,
//     },
//     {
//       title: "Business Growth Solutions",
//       description:
//         "Efficient operations management that fosters sustainable growth and ensures lasting business success.",
//       image: WorflowImg03,
//     },
//     {
//       title: "Talent Mobilization",
//       description:
//         "Empower your workforce with flexible, scalable solutions that adapt to evolving business needs.",
//       image: WorflowImg01,
//     },
//   ];

//   return (
//     <section>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="pb-12 md:pb-20">
//           {/* Section Header */}
//           <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
//             <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
//               <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                 Our Services
//               </span>
//             </div>
//             <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//               Smarter business outcomes
//             </h2>
//             <p className="text-lg text-indigo-200/65">
//               We drive transformation at the intersection of deep domain expertise and emerging technology innovation.
//             </p>
//           </div>

//           {/* Swiper Carousel */}
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={24}
//             grabCursor={true}
//             loop={false}
//             centeredSlides={false}
//             initialSlide={0}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             navigation={{
//               nextEl: ".carousel-next",
//               prevEl: ".carousel-prev",
//             }}
//             className="services-carousel"
//           >
//             {services.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <a
//                   href="#0"
//                   aria-label={`Learn more about ${card.title}`}
//                   className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
//                 >
//                   <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                     {/* Arrow */}
//                     <div
//                       className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                       aria-hidden="true"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
//                         <path
//                           fill="#F4F4F5"
//                           d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                         />
//                       </svg>
//                     </div>

//                     {/* Image */}
//                     <Image
//                       className="inline-flex"
//                       src={card.image}
//                       width={350}
//                       height={288}
//                       alt={card.title}
//                       loading="lazy"
//                     />

//                     {/* Content */}
//                     <div className="p-6">
//                       <div className="mb-3">
//                         <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
//                           <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                             {card.title}
//                           </span>
//                         </span>
//                       </div>
//                       <p className="text-indigo-200/65">{card.description}</p>
//                     </div>
//                   </div>
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Arrows */}
//           <div className="flex mt-8 justify-end gap-4">
//             <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
//               <span className="sr-only">Previous</span>
//               <svg
//                 className="w-4 h-4 fill-slate-500 group-hover:fill-indigo-500 transition duration-150 ease-in-out"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
//               </svg>
//             </button>
//             <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
//               <span className="sr-only">Next</span>
//               <svg
//                 className="w-4 h-4 fill-slate-500 group-hover:fill-indigo-500 transition duration-150 ease-in-out"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }