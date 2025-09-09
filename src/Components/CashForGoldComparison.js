import React from "react"; // Import React
import { Check, X } from "lucide-react";

export default function CashForGoldComparison() {
  const features = [
    {
      title: "Gold Validation",
      cashForGold: "State-of-the-art XRF machine testing, 100% accurate",
      traditional: "2-3% loss using touchstone methods",
    },
    {
      title: "Process View",
      cashForGold: "Complete transparency – every step is visible to you",
      traditional: "Behind the desk, hidden from customer",
    },
    {
      title: "Certification",
      cashForGold: "Purity certificate provided on the spot",
      traditional: "No certification provided",
    },
    {
      title: "Tax & Invoices",
      cashForGold: "Detailed purchase invoice is shared instantly",
      traditional: "No proper receipts shared",
    },
    {
      title: "Gold Rates",
      cashForGold: "Real-time live market gold rate applied",
      traditional: "Lowest rate of the day used",
    },
    {
      title: "Payments",
      cashForGold: "Instant cash or bank transfer with zero hidden charges",
      traditional: "3% hidden deductions for stones, dirt, bank transfer, etc.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:pt-16 md:pb-40">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          The Cash for Gold Advantage
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how CashForGold stands out from traditional gold buyers with our transparent and fair process.
        </p>
      </div>

      <div className="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden bg-white">
        <div className="grid grid-cols-3 text-sm md:text-base">
          {/* Header Row */}
          <div className="bg-gray-50 p-4 font-semibold text-gray-700 text-left">Features</div>
          <div className="bg-gray-50 p-4 font-semibold text-center text-gray-700 border-l border-gray-200">Cash for Gold</div>
          <div className="bg-gray-50 p-4 font-semibold text-center text-gray-700 border-l border-gray-200">Traditional Players</div>

          {/* Feature Rows */}
          {features.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="p-4 border-t border-gray-200 font-medium text-gray-800">{item.title}</div>
              <div className="p-4 border-t border-gray-200 border-l border-gray-200 flex items-start gap-2 text-green-600">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item.cashForGold}</span>
              </div>
              <div className="p-4 border-t border-gray-200 border-l border-gray-200 flex items-start gap-2 text-red-600">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item.traditional}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
