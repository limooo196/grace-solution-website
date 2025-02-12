"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <main className="bg-white text-[#0B132B] font-sans">
      {/* Hero Section */}
      <motion.div
        className="py-16 px-4 bg-[#0B132B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold font-serif">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Get in touch with PT. Grace Solution for your wire harness and
            tooling needs. Our team is ready to assist you with innovative,
            reliable, and quality-driven solutions.
          </p>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <h2 className="font-serif text-3xl font-bold text-[#0B132B] mb-8 text-center">
          Reach Out to Us
        </h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Phone */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition hover:-translate-y-1">
            <FaPhoneAlt className="text-[#0F8652] text-4xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-4">Call Us</h3>
            <p className="text-[#6C6C6C]">(0770) 611-367</p>
            <p className="text-[#6C6C6C]">Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition hover:-translate-y-1">
            <FaEnvelope className="text-[#0F8652] text-4xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-4">Email Us</h3>
            <p className="text-[#6C6C6C]">
              <a
                href="mailto:info@gracesolution.com"
                className="underline hover:text-[#0F8652]"
              >
                info@gracesolution.com
              </a>
            </p>
            <p className="text-[#6C6C6C]">We’ll reply within 24 hours.</p>
          </div>

          {/* Location */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition hover:-translate-y-1">
            <FaMapMarkerAlt className="text-[#0F8652] text-4xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-4">Visit Us</h3>
            <p className="text-[#6C6C6C]">Batamindo Industrial Park</p>
            <p className="text-[#6C6C6C]">
              Muka Kuning, Batam 29433, Indonesia
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Location Map */}
      <section className="py-12 px-4">
        <div className="container mx-auto lg:px-20">
          <h2 className="font-serif text-3xl font-bold text-center text-[#0B132B] mb-8">
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
              title="Batamindo Industrial Park Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
