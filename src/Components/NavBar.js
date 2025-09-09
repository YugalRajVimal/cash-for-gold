export default function Navbar() {
  return (
    <nav className="w-full bg-[#d9d9d9] shadow-sm h-[10vh]">
      <div className="max-w-7xl mx-auto flex items-center h-full justify-between px-6 ">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full">
          <img src="/logo.jpeg" alt="CashForGold" className="h-full" />
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-yellow-600">
              Buy Gold
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              Buy Silver
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              Sell
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              SIP
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              Coins & Bars
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              Gift
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600">
              Partner with us
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <button className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2 rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
}
