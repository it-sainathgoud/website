import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-4 md:py-6">
            {/* Section header */}
            <div className="pb-6 text-right">
              <div className="mb-3 inline-flex">
                {/* <div className="relative flex items-center gap-2 rounded-full bg-gray-900/90 p-1 pr-3 text-sm text-indigo-200/65 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
                  <div className="-ml-0.5 flex -space-x-2">
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg01}
                      width={20}
                      height={20}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg02}
                      width={20}
                      height={20}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg03}
                      width={20}
                      height={20}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg04}
                      width={20}
                      height={20}
                      alt="Avatar 04"
                    />
                  </div>
                  <span>
                    <strong className="font-normal text-gray-200">20K</strong>{" "}
                    have already subscribed.
                  </span>
                </div> */}
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-4xl font-semibold text-transparent md:text-3xl">
                Join our newsletter
              </h1>
              <div className="max-w-2xl ml-auto ">
                <p className=" text-indigo-200/65 text-right ">
                  Join our newsletter for early updates on services, expert
                  guidance, and offers crafted to support your business
                  evolution!
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form className="max-w-[440px] ml-auto text-right">
              <div className="flex gap-3 justify-end">
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email address"
                  aria-label="Email"
                />
                <button className="btn group w-full flex-1 bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                  <span className="relative inline-flex items-center">
                    Subscribe
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
            {/* <p className="mt-5 text-center text-sm text-gray-600">
              No spam, only helpful content.
            </p> */}
          </div>
        </div>
      </section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block 
          Digital Transformation
          Technology Excellence
          Talent Mobilization
          Customer Experiences
          Healthcare Transformation
          Business Growth Solutions
          Engineering
          Security & Surveillance
          */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Digital Transformation
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Technology Excellence
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Customer Experiences
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Talent Mobilization
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Healthcare Transformation
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Business Growth Solutions
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Security & Surveillance
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block 
          Industries
          Banking & Financial Services
          Energy & Utilities
          Retail & Consumer Goods
          Healthcare & Life Sciences
          Public Sector
          Telecommunications
          Energy & Utilities
          Security & Defense
          Travel, Transportation & Hospitality
          */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Banking &amp; Financial Services
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Energy &amp; Utilities
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Healthcare &amp; Life Sciences
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Public Sector
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Retail &amp; Consumer Goods
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Security &amp; Defense
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Telecommunications
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Travel, Transportation &amp; Hospitality
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block 
          Resources
          Blogs
          Success Stories
          Client Testimonials
          White Papers
          */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Client Testimonials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  White Papers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Trailblazers
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block 
          About 
          About Us
          Careers
          Partners
          Sustainability
          Diversity & Inclusion
          
          */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Diversity & Inclusion
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Mindtris.com
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Terms
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Medium"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Land acknowledgment */}
        <div className="mt-4 text-sm text-indigo-200/65 max-w-6xl text-left whitespace-normal">
          <p>
            <strong className="text-indigo-200/65 transition hover:text-indigo-500">
              Mindtris&nbsp;
            </strong>
            is a global technology consulting and digital solutions firm that
            partners with organizations across industries to reimagine business
            models, accelerate innovation, and drive sustainable growth through
            digital transformation. Serving both public and private sector
            clients, we bring deep domain expertise and cutting-edge technology
            capabilities to deliver differentiated customer experiences and
            impactful business outcomes in an increasingly connected world.
          </p>
          <p className="mt-4">
            We respectfully acknowledge that Mindtris operates on the unceded
            territories of the&nbsp;
            <span className="italic">xʷməθkʷəy̓əm (Musqueam)</span>,&nbsp;
            <span className="italic">
              Sḵwx̱wú7mesh Úxwumixw (Squamish Nation)
            </span>
            , and{" "}
            <span className="italic">səl̓ílwətaʔ (Tsleil-Waututh Nation)</span>.
            We recognize that colonialism has obscured their histories and
            enduring relationships with the land. As a company, we are committed
            to learning, listening, and building meaningful relationships with
            the Indigenous communities whose lands we are privileged to work on.
          </p>
          <br />
          <br />
        </div>
      </div>
    </footer>
  );
}
