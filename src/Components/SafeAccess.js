export default function SafeAccess() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left - Shield */}
        <div className="flex justify-center">
          <div className="relative text-center">
            <img
              src="/safeImg.png"
              alt="Reserving Shield"
              className="h-auto sm:h-[300px] md:h-[500px] mx-auto"
            />
            {/* Overlay text inside shield if you don't want an image */}
            {/* 
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold">RESERVING</h2>
                <p className="text-lg">TODAY & TOMORROW</p>
                <span className="mt-4">🏅</span>
              </div>
              */}
          </div>
        </div>

        {/* Right - Text + Features */}
        <div>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Get access to the safest way <br /> of procuring{" "}
            <span className="text-yellow-500">Gold</span> /{" "}
            <span className="text-gray-600">Silver</span>
          </h2>
          <p className="text-gray-700 mb-8">
            We at Cash For Gold want to make your gold journey simple,
            transparent and trustworthy so that you can get the optimum output
            of your savings.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-2xl mb-2">🚚</div>
              <p className="font-medium">Delivery</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-2xl mb-2">🛒</div>
              <p className="font-medium">Sell</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="font-medium">SIP</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-2xl mb-2">🎁</div>
              <p className="font-medium">Gift</p>
            </div>
          </div>

          {/* Activity Ticker */}
          <p className="flex items-center text-sm text-rose-700">
            <span className="mr-2">📈</span>6 people bought 2.2845gm gold in the
            last hour
          </p>
        </div>
      </div>
    </section>
  );
}
