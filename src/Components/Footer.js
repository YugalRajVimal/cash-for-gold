import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#400000]  text-white">
      {/* Top Section */}
      <div className="bg-gradient-to-br from-[#800000] to-[#bf0000] -translate-y-1/2 mx-10 p-6 rounded-t-2xl text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold w-full text-center">
            India’s Most Trusted Digital Platform for Gold & Silver.
          </h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 pb-4 md:py-12 relative">
        {/* Brand Info */}
        <div>
          <img
            src="/logo.jpeg"
            alt="Cash For Gold"
            className="h-32 mb-4 rounded-md"
          />
          <p className="text-sm mb-4">
            We at Cash For Gold want to make your Gold & Silver journey Simple,
            Transparent, and Digital.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Contact us</li>
            <li>Contact Vault Keeper</li>
            <li>Buy Back</li>
            <li>Delete Account</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Blog</li>
            <li>FAQ</li>
            <li>Terms Of Use</li>
            <li>Loan terms & POA</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            19-20-21, Narayan Chambers,
            <br />
            3rd Floor, Behind Patang Hotel,
            <br />
            Ashram Road, Ahmedabad -380009.
          </p>
          <p className="text-sm mt-4 font-bold">+91 80 6228 1387</p>
          <p className="text-sm mt-2">support@cashforgold.com</p>
        </div>

        {/* Social Icons */}
        {/* <div className="absolute w-full md:w-auto -top-10 md:right-6 md:top-1/2 transform -translate-y-1/2 flex md:flex-col items-start justify-center  gap-4 space-y-3">
          <a href="#" className="">
            <Facebook size={20} className="text-rose-700" />
          </a>
          <a href="#">
            <Instagram size={20} className="text-rose-700" />
          </a>
          <a href="#">
            <Twitter size={20} className="text-rose-700" />
          </a>
          <a href="#">
            <Linkedin size={20} className="text-rose-700" />
          </a>
          <a href="#">
            <Youtube size={20} className="text-rose-700" />
          </a>
          <a href="#">
            <MessageCircle size={20} className="text-rose-700" />
          </a>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-yellow-400 py-4 text-center text-sm text-gray-600">
        <p>Copyright © 2020 CashForGold.com All Rights Reserved</p>
        <p className="mt-1">
          Website Managed by{" "}
          <a
            href="https://gowappily.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-yellow-600"
          >
            GoWappily.com
          </a>
        </p>
      </div>
    </footer>
  );
}
