import React from "react";
import {
  Truck,
  ShoppingCart,
  DollarSign,
  Gift,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-yellow-600" />,
      title: "Buy Gold & Silver",
      description:
        "Purchase gold and silver at live market rates starting from as low as ₹1. Get the best deals with complete transparency.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-yellow-600" />,
      title: "Sell Gold Instantly",
      description:
        "Sell your gold and silver with instant payments through same-day bank transfer at real-time market rates.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-yellow-600" />,
      title: "Gold & Silver SIP",
      description:
        "Invest systematically with our No Lock-in Period SIP starting at just ₹500. Grow your savings securely.",
    },
    {
      icon: <Gift className="w-10 h-10 text-yellow-600" />,
      title: "Gift Gold & Silver",
      description:
        "Send digital gold and silver gifts to your loved ones anytime, anywhere. A timeless gift for every occasion.",
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-600" />,
      title: "Home Delivery",
      description:
        "Get doorstep delivery of your gold and silver in tamper-proof packaging, insured and secured by our trusted partners.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-600" />,
      title: "Secure Vault Storage",
      description:
        "Keep your gold safe with our BIS-approved vault keepers, offering world-class security and insurance.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#800000] to-[#bf0000] py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg  text-white">
          At <span className="font-semibold">Cash For Gold</span>, we provide a
          wide range of services to make your gold and silver journey{" "}
          <strong>Simple, Transparent, and Digital</strong>.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-5 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-12 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-8">
          Start Your Gold & Silver Journey Today
        </h2>
        <a
          href="/contact-us"
          className="px-6 py-3 border border-[#b54d4d] text-[#b54d4d] rounded-full hover:bg-red-500 hover:text-white transition"
        >
          Start your Journey
        </a>
        <div className="h-10"></div>
      </section>
    </div>
  );
}
