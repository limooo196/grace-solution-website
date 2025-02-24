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
import {
  FaFilter,
  FaTools,
  FaBroom,
  FaClipboardCheck,
  FaRecycle,
} from "react-icons/fa";

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
              alt="wire harness manufacturing process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Kaizen 5S Philosophy */}
      <section className="bg-[#0B132B] text-white py-12 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl font-bold mb-8">
            Our Kaizen 5S Philosophy: A Commitment to Excellence
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#F2F2F2]">
            At PT. Grace Solution, our Kaizen 5S philosophy drives continuous
            improvement, boosting productivity, reducing waste, and ensuring
            high-quality products. Here is how we apply these principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            {/* Kaizen Cards */}
            {[
              {
                icon: FaFilter,
                title: "Sort",
                description:
                  "Removing unnecessary items from the workspace to increase efficiency and focus.",
              },
              {
                icon: FaTools,
                title: "Set in Order",
                description:
                  "Organizing tools and materials in a systematic way for easy access.",
              },
              {
                icon: FaBroom,
                title: "Shine",
                description:
                  "Maintaining clean work environments that foster quality and safety.",
              },
              {
                icon: FaClipboardCheck,
                title: "Standardize",
                description:
                  "Implementing uniform processes and practices for consistent results.",
              },
              {
                icon: FaRecycle,
                title: "Sustain",
                description:
                  "Fostering a culture of continuous improvement to ensure long-term success.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <Icon className="text-white text-4xl mb-4" />
                <h3 className="font-serif text-xl font-bold mb-4">{title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="bg-[#F2F2F2] py-12 px-4">
        <div className="container mx-auto lg:px-20">
          <h2 className="font-serif text-3xl font-bold text-center text-[#0B132B] mb-8">
            Our Milestones & Recognitions: A Journey of Success
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
                ISO Certified: Achieving Excellence
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                Achieving ISO 9001:2015 certification is a testament to our
                commitment to maintaining the highest quality standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1">
              <FaGlobe className="text-[#0F8652] text-4xl mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#0B132B]">
                Global Expansion: Reaching New Heights
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                From a small start to a global presence, our 8000m² facility now
                serves markets worldwide, strengthening our industry leadership.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1">
              <FaUsers className="text-[#0F8652] text-4xl mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#0B132B]">
                Skilled Workforce: The Backbone of Our Success
              </h3>
              <p className="text-[#6C6C6C] text-sm leading-relaxed">
                With 300 dedicated professionals, we continue to grow, innovate,
                and exceed customer expectations with every project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#0B132B] text-white py-12 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl font-bold mb-8">
            Our Core Values: Guiding Our Success
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#F2F2F2] mb-12">
            Our core values are more than just words on paper. They shape our
            culture, guide our decisions, and drive our success. Here is what we
            stand for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaBullseye className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We are committed to exceeding customer expectations, delivering
                high-quality products and services that drive success.
              </p>
            </div>
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaLightbulb className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">Innovation</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We strive to stay ahead of the curve, embracing new technologies
                and ideas to keep our products and services at the cutting edge.
              </p>
            </div>
            <div className="bg-[#4F5D8A] p-6 rounded-lg shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <FaHandshake className="text-white text-4xl mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">Integrity</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We operate with honesty and transparency, ensuring that our
                relationships with customers and partners are built on trust and
                respect.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F9F9F9] py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-[#0B132B] text-center mb-12">
            Our Journey So Far
          </h2>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "#0B132B",
              secondary: "#F2F2F2",
              cardBgColor: "#ffffff",
            }}
          />
        </div>
      </section>
    </main>
  );
}
