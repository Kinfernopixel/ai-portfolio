"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Message the System
      </motion.h1>

      {/* Glowing Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto text-white"
      >
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter your message..."
            className="p-4 rounded-lg bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(255,200,0,0.5)] transition-all duration-300"
          >
            Send
          </motion.button>
        </form>
      </motion.div>

      {/* Back to Home Button */}
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg text-white text-lg shadow-lg hover:shadow-[0_0_15px_rgba(255,150,0,0.4)] transition-all duration-300"
        >
           ← Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
