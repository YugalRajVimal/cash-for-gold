import {
  IndianRupee,
  BarChart3,
  Award,
  Shield,
  Clock,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: <IndianRupee size={40} strokeWidth={1.5} />,
    title: "Affordability",
    desc: "Cash For Gold offers the best price for all products compare to live market rates.",
  },
  {
    icon: <BarChart3 size={40} strokeWidth={1.5} />,
    title: "Systematic growth",
    desc: "With our no lock-in period SIP in Gold, You can achieve systematic growth of your investment.",
  },
  {
    icon: <Award size={40} strokeWidth={1.5} />,
    title: "Guaranteed Purity",
    desc: "We assure to serve you the purest 24 karat Products with 99.9% purity and BIS Hallmark.",
  },
  {
    icon: <Shield size={40} strokeWidth={1.5} />,
    title: "Security",
    desc: "We serve our customers with the best & trusted vault keeper that provides security for transactions and storage.",
  },
  {
    icon: <Clock size={40} strokeWidth={1.5} />,
    title: "Accessibility",
    desc: "Cash For Gold provides all services for its customers 24x7 Globally.",
  },
  {
    icon: <Wallet size={40} strokeWidth={1.5} />,
    title: "High Liquidity",
    desc: "With Cash For Gold you can buy, sell, gift, and store anywhere, anytime - online.",
  },
];

export default function WhyDigiGold() {
  return (
    <section className="bg-gradient-to-br from-[#800000] to-[#bf0000] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif">
          Why Cash For Gold
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="text-yellow-400">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
