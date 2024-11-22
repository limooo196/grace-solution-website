"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        className="bg-blue-500 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Get in touch with PT. Grace Solution for your wire harness and
            tooling needs. We’re here to help!
          </p>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
          Reach Out to Us
        </h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Phone */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaPhoneAlt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-600">(0770) 611-367</p>
            <p className="text-gray-600">Monday - Friday, 9:00 AM - 5:00 PM</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaEnvelope className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">info@gracesolution.com</p>
            <p className="text-gray-600">
              We’ll get back to you within 24 hours.
            </p>
          </div>

          {/* Location */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-600">
              Batamindo Industrial Park, Muka Kuning
            </p>
            <p className="text-gray-600">Batam 29433, Indonesia</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Send Us a Message
          </h2>
          <form className="bg-white shadow-lg rounded-lg p-6 lg:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-600 font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="Enter the subject"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-600 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Our Location
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.7380433633!2d103.91412474293786!3d1.1095002292245467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6e3a7c7a0f09%3A0xb87b8df28571de2d!2sBatamindo%20Industrial%20Park!5e0!3m2!1sen!2sid!4v1692092528041!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
