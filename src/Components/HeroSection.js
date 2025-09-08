import { useState } from "react";

export default function Hero() {
  // Prices (example rates, you can fetch live API here)
  const goldRate = 11055.7;
  const silverRate = 132.5;

  const [metal, setMetal] = useState("gold");
  const [grams, setGrams] = useState(10);
  const [amount, setAmount] = useState(goldRate * 10);

  // Current rate based on selected metal
  const rate = metal === "gold" ? goldRate : silverRate;

  // Handlers
  const handleGramsChange = (e) => {
    const value = Number(e.target.value);
    setGrams(value);
    setAmount(value * rate);
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value.replace(/[₹,]/g, "")); // strip ₹
    setAmount(value);
    setGrams(value / rate);
  };

  const handleTabChange = (type) => {
    setMetal(type);
    setAmount(grams * (type === "gold" ? goldRate : silverRate));
  };

  return (
    <section className="bg-[#b54d4d] text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            India’s Most Trusted <br /> Digital Platform for Gold & Silver
          </h1>
          <p className="text-lg mb-6">
            We at DIGIGOLD want to make your Gold & Silver journey Simple,
            Transparent, and Digital.
          </p>

          <div className="flex space-x-4">
            <a href="#">
              <img src="/googleplay.png" alt="Google Play" className="h-12" />
            </a>
            <a href="#">
              <img src="/appstore.png" alt="App Store" className="h-12" />
            </a>
          </div>
        </div>

        {/* Right Side (Card) */}
        <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6">
          {/* Tabs */}
          <div className="flex space-x-8 border-b mb-4">
            <button
              onClick={() => handleTabChange("gold")}
              className={`pb-2 font-semibold ${
                metal === "gold"
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "text-gray-500 hover:text-yellow-600"
              }`}
            >
              GOLD
            </button>
            <button
              onClick={() => handleTabChange("silver")}
              className={`pb-2 font-semibold ${
                metal === "silver"
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "text-gray-500 hover:text-yellow-600"
              }`}
            >
              SILVER
            </button>
          </div>

          {/* Price Info */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">BUYING PRICE</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">
                ₹{rate.toLocaleString()}/gm
              </span>
              <span className="text-green-600 text-sm">
                ▲ 0.29% since yesterday
              </span>
            </div>
            <span className="text-red-600 text-xs">LIVE RATE</span>
          </div>

          {/* Input Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Grams</label>
              <input
                type="number"
                value={grams}
                onChange={handleGramsChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Amount</label>
              <input
                type="text"
                value={`₹${amount.toFixed(2)}`}
                onChange={handleAmountChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <button className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
