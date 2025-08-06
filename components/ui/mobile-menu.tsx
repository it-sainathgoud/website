"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Adding menu/sub-menu for mobile view
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center text-center text-gray-200 transition ${
          mobileNavOpen && "active"
        }`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none fill-current"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 mt-2 w-full rounded-xl bg-gray-900/90 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >
          <ul className="p-2 text-sm transition-all duration-300 ease-in-out overflow-hidden">
            {/* <li>
              <Link
                href="/about"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                About Us
              </Link>
            </li> */}
            {/* new code start */}
            {/* Services */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:text-indigo-500"
                onClick={() => setShowServices(!showServices)}
              >
                <span>Services</span>
                <span className="text-indigo-400 text-xl font-semibold leading-none">
                  {showServices ? "−" : "+"}
                </span>
              </button>
              {showServices && (
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  {[
                    "Digital Transformation",
                    "Technology Excellence",
                    "Customer Experiences",
                    "Talent Mobilization",
                    "Healthcare Transformation",
                    "Business Growth Solutions",
                    "Engineering",
                    "Security & Surveillance",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/services/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-2 py-1 hover:text-indigo-400"
                        onClick={() => {
                          setMobileNavOpen(false);
                          setShowServices(false);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Industries */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:text-indigo-500"
                onClick={() => setShowIndustries(!showIndustries)}
              >
                <span>Industries</span>
                <span className="text-indigo-400 text-xl font-semibold leading-none">
                  {showIndustries ? "−" : "+"}
                </span>
              </button>
              {showIndustries && (
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  {[
                    "Banking & Financial Services",
                    "Energy & Utilities",
                    "Healthcare & Life Sciences",
                    "Public Sector",
                    "Retail & Consumer Goods",
                    "Security & Defense",
                    "Telecommunications",
                    "Travel, Transportation & Hospitality",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/industries/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/&/g, "and")}`}
                        className="block px-2 py-1 hover:text-indigo-400"
                        onClick={() => {
                          setMobileNavOpen(false);
                          setShowIndustries(false);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Products */}
            <li>
              <Link
                href="/#0"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                TalentHub
              </Link>
            </li>

            {/* Resources */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:text-indigo-500"
                onClick={() => setShowResources(!showResources)}
              >
                <span>Resources</span>
                <span className="text-indigo-400 text-xl font-semibold leading-none">
                  {showResources ? "−" : "+"}
                </span>
              </button>
              {showResources && (
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  {[
                    "Blogs",
                    "Success Stories",
                    "Client Testimonials",
                    "White Papers",
                    "Trailblazers",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/resources/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-2 py-1 hover:text-indigo-400"
                        onClick={() => {
                          setMobileNavOpen(false);
                          setShowResources(false);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:text-indigo-500"
                onClick={() => setShowAbout(!showAbout)}
              >
                <span>About</span>
                <span className="text-indigo-400 text-xl font-semibold leading-none">
                  {showAbout ? "−" : "+"}
                </span>
              </button>
              {showAbout && (
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  {[
                    "About Us",
                    "Careers",
                    "Partners",
                    "Sustainability",
                    "Diversity & Inclusion",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/about/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-2 py-1 hover:text-indigo-400"
                        onClick={() => {
                          setMobileNavOpen(false);
                          setShowAbout(false);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* new code end */}
            {/* <li>
              <Link
                href="/blog"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/help/frequently-asked-questions"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                Help Centre
              </Link>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/404"
                className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                404
              </Link>
            </li> */}
          </ul>
        </Transition>
      </div>
    </div>
  );
}
