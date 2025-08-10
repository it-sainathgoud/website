import React from "react";

const faqs = [
  {
    question:
      "What is TalentHub?",
    answer:
      "TalentHub is a subscription-based recruitment service that gives you access to unlimited talent without the high fees or limitations. With a flat monthly rate, you can scale your hiring as your business grows, all while getting high-quality, pre-vetted candidates.",
  },
  {
    question: "How does TalentHub work?",
    answer:
      "TalentHub offers a simple, subscription-based model. Once you sign up, you get access to a pool of pre-vetted, qualified candidates. You can hire as many roles as you need, at any time, with no additional costs or limits.",
  },
  {
    question: "How is TalentHub different from traditional recruiting agencies?",
    answer:
      "Unlike traditional agencies, TalentHub charges one low monthly subscription fee rather than high commissions per hire. This model gives you predictable pricing, faster hiring, and more flexibility to grow your team without additional costs per hire.",
  },
  {
    question: "How do I get started with TalentHub?",
    answer:
      "Getting started is simple! Choose a plan that fits your business needs, sign up, and you'll immediately gain access to our talent pool. You can start hiring right away, without any complex processes or hidden fees.",
  },
  {
    question: "How do you keep me informed about the recruitment progress?",
    answer:
      "Your dedicated account manager sends weekly updates with the status of each candidate. If you're on the Enterprise plan, you’ll also receive a custom headhunting strategy tailored to each vacancy or region.",
  },
  {
    question: "How can I cancel the subscription?",
    answer:
      "You can cancel your subscription anytime by giving us a 15-day notice. Once the notice is received, your plan will end after the notice period. Fees for that month will be prorated, and your subscription will officially terminate at the end of the current billing cycle.",
  },
];

export default function FaqsTalentHub() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          {/* FAQs */}
          <ul className="grid gap-8 md:grid-cols-2 lg:gap-y-12 xl:gap-x-16">
            {faqs.map((faq, index) => (
              <li key={index}>
                <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                  {faq.question}
                </h4>
                <p className="text-[1rem] text-indigo-200/65">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
