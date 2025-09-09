import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Lock,
  Globe,
  RefreshCw,
} from "lucide-react";

export default function AboutUsPage() {
  const whyUs = [
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-600" />,
      title: "Affordability",
      description:
        "CashForGold offers the best price for all products compared to live market rates.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-yellow-600" />,
      title: "Systematic Growth",
      description:
        "With our no lock-in period SIP in Gold, you can achieve systematic growth of your investment.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-600" />,
      title: "Guaranteed Purity",
      description:
        "We assure you the purest 24 Karat Gold with 99.9% purity and BIS Hallmark certification.",
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-600" />,
      title: "Security",
      description:
        "We provide the safest vault keeper services for secure transactions and storage.",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: "Accessibility",
      description:
        "CashForGold offers services to customers 24x7 globally, anytime, anywhere.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />,
      title: "High Liquidity",
      description:
        "Buy, sell, gift, or store your gold online with instant cash or bank transfers.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          India’s Most Trusted Digital Platform for Gold & Silver
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We at <span className="font-semibold">CashForGold</span> want to make
          your Gold & Silver journey{" "}
          <strong>Simple, Transparent, and Digital</strong>.
        </p>
      </section>

      {/* About Us Content */}
      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          CashForGold is India’s most trusted digital platform for gold and
          silver where you can buy, sell, and store online at live market rates.
          The minimum purchase starts from just ₹1. We also offer{" "}
          <strong>No Lock-in Period SIP in Gold</strong> starting at just ₹500
          with periodic installments.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We assure you of the quality by serving{" "}
          <strong>24 Karat Pure Gold of 99.9% purity</strong> with BIS hallmark
          and certifications.
        </p>
      </section>

      {/* Why CashForGold */}
      <section className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose CashForGold
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-200 to-yellow-100 py-12 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Join Thousands Who Trust CashForGold
        </h2>
        <p className="text-gray-700 mb-6">
          Download our app and start your gold & silver journey today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
            Google Play
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
            App Store
          </button>
        </div>
      </section>
      <div className="h-20 bg-gradient-to-r from-yellow-200 to-yellow-100"></div>
    </div>
  );
}
