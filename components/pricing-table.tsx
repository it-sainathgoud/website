"use client";

import { useState } from "react";

export default function PricingTable() {
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <div>
      {/* Pricing toggle */}
      <label className="mb-4 flex cursor-pointer items-center justify-center gap-4 text-indigo-200/65">
        {/* <span className="flex-1 text-right" aria-hidden="true">
          Billed Annually
        </span>
        <span className="sr-only">Billed Annually</span>
        <input
          role="switch"
          type="checkbox"
          className="peer sr-only"
          checked={annual}
          onChange={() => setAnnual(!annual)}
        />
        <div
          className="peer relative h-6 w-11 rounded-full bg-gray-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gray-200 after:transition-all peer-checked:bg-indigo-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-indigo-200"
          aria-hidden="true"
        />
        <span className="flex-1 text-left" aria-hidden="true">
          Billed Monthly
        </span> */}
      </label>
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-3 xl:gap-10">
        {/* Pricing table 1 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="mb-2 font-nacelle text-[1rem] text-gray-200">
              Growth
            </div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-indigo-200/65">$&nbsp;</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">
                {annual ? "1299" : "9"}
                <span className="text-2xl font-medium text-indigo-200/65">&nbsp;/month</span>
              </span>
            </div>
            <div className="mb-4 grow text-xs text-indigo-200/65">
              1 vacancy, up to 1 hire.
            </div>
            <a
              className="btn-sm relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              href="/contact"
            >
              Get started now
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">
            Growht plan includes:
          </p>
          <ul className="grow space-y-2 text-sm text-indigo-200/65">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Email, Live Chat, WhatsApp</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited dashboards</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Custom integrations</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 2 */}
        {/* <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="mb-2 font-nacelle text-[1rem] text-gray-200">
              Standard
            </div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-indigo-200/65">$</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">
                {annual ? " 2499" : "29"}
              </span>
            </div>
            <div className="mb-4 grow text-xs text-indigo-200/65">
              10 vacancy, up to 1 hire.
            </div>
            <a
              className="btn-sm relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              href="/contact"
            >
              Get started now
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">
            Everything in Freelancer, plus:
          </p>
          <ul className="grow space-y-2 text-sm text-indigo-200/65">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>No seat limits</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Real-time space syncing</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Automatic data enrichment</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Custom billing</span>
            </li>
          </ul>
        </div> */}
        {/* Pricing table 3 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,--theme(--color-indigo-500/.5),--theme(--color-indigo-500),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="absolute right-0 top-0 inline-flex items-center rounded-full bg-indigo-500/[.15] px-2 py-0.5 text-xs font-medium text-indigo-500 shadow-xs">
              Popular
            </div>
            <div className="mb-2 font-nacelle text-[1rem] text-gray-200">
              Scale
            </div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-indigo-200/65">$ &nbsp;</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">
                {annual ? " 3499" : "49"}
                <span className="text-2xl font-medium text-indigo-200/65">&nbsp;/month</span>
              </span>
            </div>
            <div className="mb-4 grow text-xs text-indigo-200/65">
              3 vacancy, up to 1 hire.
            </div>
            <a
              className="btn-sm w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              href="/contact"
            >
              Get started now
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">
            Everything in Growth, plus:
          </p>
          <ul className="grow space-y-2 text-sm text-indigo-200/65">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Adjustable permissions</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited reporting</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Bulk email sending</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Priority support</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 4 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <div className="mb-2 font-nacelle text-[1rem] text-gray-200">
              Enterprise
            </div>
            <div className="mb-1.5 flex items-baseline font-nacelle">
              <span className="text-2xl text-indigo-200/65">&nbsp;</span>
              <span className="text-4xl font-semibold tabular-nums text-gray-200">
                {annual ? "Custom" : "89"}
              </span>
              {/* <span className="text-2xl text-indigo-200/65">/month</span> */}
            </div>
            <div className="mb-4 grow text-xs text-indigo-200/65">
              5 vacancy, up to 1 hire.
            </div>
            <a
              className="btn-sm relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              href="/contact"
            >
              Get started now
            </a>
          </div>
          <p className="mb-4 text-sm italic text-gray-200">
            Everything in Scale, plus:
          </p>
          <ul className="grow space-y-2 text-sm text-indigo-200/65">
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>First calendar interaction</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Volume based recruiting</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Time comparisons</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
