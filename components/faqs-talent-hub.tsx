import React from "react";

const faqs = [
  {
    question:
      "How Recruitment as a Service works?",
    answer:
      "It’s a monthly hiring service that gives you ongoing access to talent, tools, and support. Instead of paying per hire, you get a flexible and cost-effective way to grow your team faster and smarter.",
  },
  {
    question: "How is TalentHub different from traditional recruitment agencies?",
    answer:
      "TalentHub offers unlimited hiring support under a subscription model, plus access to a curated talent pool and smart tools that streamline your entire recruitment process. No commissions, no surprises—just scalable hiring.",
  },
  {
    question: "Can TalentHub help us hire developers and engineers faster?",
    answer:
      "Absolutely. TalentHub uses AI-powered matching, automated screening, and real-time collaboration tools to reduce time-to-hire and improve candidate quality—especially for technical roles.",
  },
  {
    question: "What is the pricing structure and are there any hidden fees?",
    answer:
      "Our pricing is transparent and subscription-based. You pay a flat monthly fee based on your chosen plan—no hidden costs or surprise charges.",
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
