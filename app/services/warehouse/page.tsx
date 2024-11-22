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
            Experience the journey, achievements, and commitment of Grace
            Solutions.
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
              Leading the Way in Wire Harness Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              Since 2005, PT. Grace Solution has been dedicated to crafting
              innovative wire harness and cable assembly solutions for
              industries including automotive, telecommunications, medical, and
              more. Our state-of-the-art facilities and unwavering focus on
              quality have made us a trusted name worldwide.
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
            Milestones and Achievements
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaMedal className="text-blue-500 text-4xl mb-4" />,
                title: "Certified Excellence",
                description:
                  "ISO 9001:2015 certification ensures our unwavering commitment to quality and innovation.",
              },
              {
                icon: <FaGlobe className="text-blue-500 text-4xl mb-4" />,
                title: "Global Reach",
                description:
                  "Serving international markets with 8000m² of advanced production space.",
              },
              {
                icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
                title: "Skilled Workforce",
                description:
                  "Employing over 300 highly skilled professionals dedicated to excellence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBullseye className="text-yellow-400 text-4xl mb-4" />,
                title: "Mission",
                description:
                  "To deliver superior wire harness solutions that ensure reliable performance across industries.",
              },
              {
                icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4" />,
                title: "Vision",
                description:
                  "To lead the global market with innovative solutions and unmatched service.",
              },
              {
                icon: <FaHandshake className="text-yellow-400 text-4xl mb-4" />,
                title: "Promise",
                description:
                  "To maintain the highest standards of quality and foster long-term partnerships.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Our Growth Story
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
