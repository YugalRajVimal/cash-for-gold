export default function AboutUs() {
  return (
    <section className="bg-[#fff9f5] py-16">
      <div className=" mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-12 w-full">
          <img src="aboutUsImg.jpeg" className="w-full" />
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/goldCoinBag.svg"
              alt="Gold Products"
              className="rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#b54d4d] mb-4">About Us</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cash For Gold is India’s most trusted digital platform for gold
              and silver where you can buy, sell and store online at live market
              rates. The minimum amount of purchase starts from just Rs 1. We
              also offer No locking period SIP in Gold with just starting Rs.
              500 through periodic installments.
            </p>
            <p className="text-gray-700 mb-6">
              We assure you of the quality by serving 24 Karat Pure Gold of
              99.9% purity with certifications.
            </p>
            <a
              href="/about-us"
              className="px-6 py-3 border border-[#b54d4d] text-[#b54d4d] rounded-full hover:bg-[#b54d4d] hover:text-white transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
