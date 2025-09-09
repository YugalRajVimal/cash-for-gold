import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#800000] to-[#bf0000] py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
          Have questions? Need support? We’re here to help you with anything
          related to your Gold & Silver journey at{" "}
          <span className="font-semibold">Cash For Gold</span>.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Reach out to us anytime. Our support team is always available to
            assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
              <p>
                19-20-21, Narayan Chambers,
                <br />
                3rd Floor, Behind Patang Hotel,
                <br />
                Ashram Road, Ahmedabad - 380009.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-yellow-600" />
              <a href="tel:+918062281387" className="hover:underline">
                +91 80 6228 1387
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-yellow-600" />
              <a
                href="mailto:support@cashforgold.com"
                className="hover:underline"
              >
                support@cashforgold.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-br from-[#800000] to-[#bf0000]  text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-16 pb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-sm flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261317990002!2d73.91434437500001!3d18.56209998253009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131b2224d21%3A0x71d5282222222222!2sCashForGold%20Headquarters!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cash For Gold Location"
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-12 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Need Immediate Assistance?
        </h2>
        <p className="text-gray-700 mb-6">
          Call us directly or email our support team — we’re available 24/7.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="tel:+918062281387"
            className="bg-gradient-to-br from-[#800000] to-[#bf0000] text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
          >
            Call Now
          </a>
          <a
            href="mailto:support@Cash For Gold.com"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:opacity-90"
          >
            Email Us
          </a>
        </div>
        <div className="h-10 "></div>
      </section>
    </div>
  );
}
