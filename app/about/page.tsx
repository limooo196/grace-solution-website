"use client";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import {
  FaMedal,
  FaGlobe,
  FaUsers,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const items = [
    {
      title: "2005",
      cardTitle: "Start of the journey",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2010",
      cardTitle: "Expanded to fabrication for jig and fixture tooling.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2012",
      cardTitle:
        "Expanded to 3 factories and prepared for ISO 9001-2008 certification.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2013",
      cardTitle: "Attained ISO 9001:2008 and expanded internationally.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2015",
      cardTitle:
        "Expanded one building for Wire Assembly at Batamindo Industrial Park.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2018",
      cardTitle:
        "Expanded four buildings, achieved ISO 9001:2015, and grew to 8000m².",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "2023",
      cardTitle: "300 skilled employees and continuous growth.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
    {
      title: "Present",
      cardTitle: "Continuing to grow and innovate.",
      media: { source: { url: "./Image/green-cable.jpg" } },
    },
  ];

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
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            PT. Grace Solution: Your Trusted Partner in Cable & Wire Harness
            Manufacturing.
          </p>
        </div>
      </motion.div>

      {/* About Company */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Industry Leader in Wire Harness Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              Established in 2005, PT. Grace Solution specializes in wire
              harness and cable assemblies for various sectors including
              off-road equipment, emergency services, heavy-duty trucks,
              communications, specialty electronics, and industrial
              applications. With a commitment to quality and innovation, we have
              expanded to over 8000m² and employ a skilled workforce dedicated
              to excellence.
            </p>
          </div>
          <Image
            src="./Image/green-cable.jpg"
            alt="Industry Leader"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Our Achievements
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <FaMedal className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">ISO Certified</h3>
              <p>
                We proudly hold ISO 9001:2015 and UL817 certifications, ensuring
                our dedication to quality and safety.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <FaGlobe className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
              <p>
                Serving international markets with a state-of-the-art factory
                space of 8000m² and growing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <FaUsers className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Skilled Workforce</h3>
              <p>
                Employing 300 skilled individuals committed to quality, cost,
                delivery, and service excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Promise */}
      <section className="bg-blue-500 text-white py-12">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaBullseye className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>
                To deliver innovative and reliable wire harness solutions for a
                sustainable future.
              </p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaLightbulb className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p>
                To lead the industry with cutting-edge technology and unmatched
                customer focus.
              </p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaHandshake className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Promise</h3>
              <p>
                To ensure seamless connections and superior quality in every
                solution we provide.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Our Journey
        </h2>
        <motion.div
          className="w-full overflow-x-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Chrono
            items={items}
            mode="VERTICAL"
            theme={{
              primary: "blue",
              secondary: "gray",
              cardBgColor: "white",
              cardForeColor: "black",
            }}
          />
        </motion.div>
      </section>
    </main>
  );
}
