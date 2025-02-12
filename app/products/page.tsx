"use client";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <main className="lg:pt-12 xl:pb-0 w-full lg:-my-4 ">
      <motion.div
        className="bg-[#0B132B] text-white py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold font-sans">Product</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            labore eos porro aspernatur maxime velit numquam. Quam perferendis
            nesciunt ullam consequuntur nobis ab, dicta ut, magnam, soluta
            eveniet rem asperiores!
          </p>
        </div>
      </motion.div>

      <section className="container mx-auto px-4 xl:px-60 pb-16 py-12"></section>
    </main>
  );
}
