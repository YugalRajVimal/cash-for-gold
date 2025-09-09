import React from "react";
import { ShieldCheck, Hourglass, ClipboardCheck } from "lucide-react";

export default function HowToSellYourOldJewellery() {
  const steps = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-gray-700" />,
      title: "Your Gold Value is Evaluated",
      description:
        "Your gold is weighed on our authenticated scales and value measured from industry best German XRF (X-Ray Fluorescence Technology) machines to ensure you get the full value of your old gold.",
    },
    {
      icon: <Hourglass className="w-10 h-10 text-gray-700" />,
      title: "Transparency and Trust",
      description:
        "All Cash For Gold ‘Purity Verification Centres’ ensure you get transparent service by melting your gold in front of you after weighing and testing the quality of your gold.",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-gray-700" />,
      title: "Get Full Value of your Gold",
      description:
        "The store would have informed you about our gold buyback rate and service charge before melting your gold. You receive full value of your gold via same day bank transfer.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:py-16 ">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          How to Sell your Old Gold Jewellery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There must be numerous traditional, second-hand gold jewelry buyers
          near you. It’s important to verify the authenticity of these buyers
          before you hand over your asset.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-sm text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-4 rounded-full">{step.icon}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
