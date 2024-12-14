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
    <main className="bg-white text-[#0B132B] font-sans">
      {/* Hero Section */}
      <motion.div
        className="bg-[#0B132B] text-white py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold">About Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            PT. Grace Solution: Your Trusted Partner in Cable & Wire Harness
            Manufacturing.
          </p>
        </div>
      </motion.div>

      {/* About Company */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#0B132B] mb-4">
              Industry Leader in Wire Harness Solutions
            </h2>
            <p className="text-md md:text-lg leading-relaxed text-[#6C6C6C]">
              Established in 2005, PT. Grace Solution specializes in wire
              harness and cable assemblies for various sectors including
              off-road equipment, emergency services, heavy-duty trucks,
              communications, specialty electronics, and industrial
              applications. With a commitment to quality and innovation, we have
              expanded to over 8000m² and employ a skilled workforce dedicated
              to excellence.
            </p>
          </div>
          <div>
            <Image
              src="./Image/green-cable.jpg"
              alt="Industry Leader"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="bg-[#F2F2F2] py-12 px-4">
        <div className="container mx-auto lg:px-20">
          <h2 className="font-serif text-3xl font-bold text-center text-[#0B132B] mb-8">
            Our Achievements
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1">
              <FaMedal className="text-[#0F8652] text-4xl mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#0B132B]">
                ISO Certified
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                We proudly hold ISO 9001:2015 and UL817 certifications, ensuring
                our dedication to quality and safety.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1">
              <FaGlobe className="text-[#0F8652] text-4xl mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#0B132B]">
                Global Expansion
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                Serving international markets with a state-of-the-art facility
                spanning 8000m² and growing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1">
              <FaUsers className="text-[#0F8652] text-4xl mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#0B132B]">
                Skilled Workforce
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                Employing 300 skilled individuals committed to quality, cost,
                delivery, and service excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      {/* Values Section */}
      <section className="bg-[#0B132B] text-white py-12 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaBullseye className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To deliver innovative and reliable wire harness solutions for a
                sustainable future.
              </p>
            </div>
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaLightbulb className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To lead the industry with cutting-edge technology and unmatched
                customer focus.
              </p>
            </div>
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaHandshake className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">Our Promise</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To ensure seamless connections and superior quality in every
                solution we provide.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      {/* <section className="container mx-auto py-12 px-6 lg:px-20">
        <h2 className="font-serif text-3xl font-bold text-center text-[#0B132B] mb-8">
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
              primary: "#0F8652",
              secondary: "#6C6C6C",
              cardBgColor: "white",
              cardForeColor: "#0B132B",
            }}
            slideShow
            enableOutline
          />
        </motion.div>
      </section> */}
    </main>
  );
}
