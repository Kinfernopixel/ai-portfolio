// src/app/page.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        {/* Glowing AI Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="mx-auto w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 glow-effect"
        >
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
            AI Core
          </div>
        </motion.div>

        {/* Welcome Text */}
        <div className="mt-8 text-2xl font-semibold animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the AI Lab
        </div>
        <div className="text-lg mt-4 max-w-lg mx-auto">
          I'm an AI Software Engineer, and this is my interactive portfolio. Explore my work and experience
          through the AI-driven environment below.
        </div>

        {/* Link to Projects Section */}
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg text-white text-lg"
          >
            Explore Projects
          </motion.button>
        </Link>

        {/* Link to Timeline Section */}
        <Link href="/timeline">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg text-white text-lg"
          >
            View My Journey
          </motion.button>
        </Link>

        <Link href="/skills">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg text-white text-lg"
          >
            Knowledge Matrix
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg text-white text-lg"
          >
            Contact Me
          </motion.button>
        </Link>

      </div>
    </div>
  );
}
