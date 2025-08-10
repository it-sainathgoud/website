export const metadata = {
  title: "TalentHub | Mindtris Recruitment as a Subscription Services (RaaS)",
  description:
    "Start your free trial with Mindtris and experience tailored recruitment solutions designed to accelerate your hiring strategy. Share your company details and hiring goals so we can prepare a personalized Discovery Call and help you find top talent across industries and geographies.",
  keywords: [
    "Mindtris",
    "TalentHub",
    "recruitment services",
    "talent acquisition",
    "global hiring",
    "employer of record",
    "discovery call",
    "free trial recruitment",
    "tech hiring",
    "business growth",
  ],
  authors: [{ name: "Mindtris Inc.", url: "https://mindtris.com" }],
  openGraph: {
    title: "Request a Free Trial | Mindtris Recruitment Services",
    description:
      "Start your free trial with Mindtris and experience tailored recruitment solutions designed to accelerate your hiring strategy. Share your company details and hiring goals so we can prepare a personalized Discovery Call and help you find top talent across industries and geographies.",
    url: "https://mindtris.com/free-trial",
    siteName: "Mindtris",
    images: [
      {
        url: "https://mindtris.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mindtris Recruitment & Talent Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Free Trial | Mindtris Recruitment Services",
    description:
      "Start your free trial with Mindtris and experience tailored recruitment solutions designed to accelerate your hiring strategy. Share your company details and hiring goals so we can prepare a personalized Discovery Call and help you find top talent across industries and geographies.",
    images: ["https://mindtris.com/assets/twitter-image.jpg"],
  },
};

import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";

export default function ClientIntake() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Get started for free
              </h1>
              {/* <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  We’re here to help you navigate change with clarity and
                  innovation.
                </p>
              </div> */}
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[640px]">
              <div className="space-y-5">
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="first-name"
                    >
                      First name * 
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="last-name"
                    >
                      Last name *
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="email"
                    >
                      Work email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full"
                      placeholder="Enter your work email address"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="company"
                    >
                      Company *
                    </label>
                    <input
                      id="company"
                      type="company"
                      className="form-input w-full"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="subject"
                  >
                    What is your primary hiring location? *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input w-full"
                    placeholder="e.g. Vancouver, British Columbia, Canada"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="subject"
                  >
                    What roles are you looking to hire? *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input w-full"
                    placeholder="e.g. Software Engineer, DevOps, Marketing Manager, Sales Executive, Pharmacist"
                  />
                </div>
                <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="topic"
                    >
                    Do you require an employer of record (EOR)? *
                    </label>
                    <select
                      id="topic"
                      className="form-select w-full text-gray-200"
                      defaultValue={"default"}
                    >
                      <option value={"default"} disabled hidden>
                        Select a value
                      </option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure yet</option>
                    </select>
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="description"
                  >
                    Message
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    className="form-textarea w-full text-gray-200"
                    placeholder="Feel free to share any additional details or questions"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
                <p className="text-sm text-indigo-200/65">
                  By continuing, you agree to our{" "}
                  <a className="underline hover:no-underline" href="#0">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:no-underline" href="#0">
                    Privacy policy
                  </a>
                </p>
                <div>
                  <button className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                    <span className="relative inline-flex items-center">
                      Send
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
