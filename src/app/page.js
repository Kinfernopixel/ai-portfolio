// src/app/page.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        
        {/* Glowing AI Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="mx-auto w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.8)] flex items-center justify-center"
        >
          <div className="text-4xl font-bold">AI Core</div>
        </motion.div>

        {/* Welcome Text */}
        <div className="mt-10 text-2xl font-semibold">
          Welcome to the Kanan's AI Lab
        </div>
        <div className="text-lg mt-4 max-w-lg mx-auto text-gray-300">
            Hello! My name is Kanan Shah.
          I'm an AI Software Engineer, and this is my interactive portfolio. Explore my work and experience
          through the AI-driven environment below.
        </div>

        {/* Button Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(79,70,229,0.8)] transition-all"
            >
              Explore Projects
            </motion.button>
          </Link>

          <Link href="/timeline">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all"
            >
              View My Journey
            </motion.button>
          </Link>

          <Link href="/skills">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all"
            >
              Knowledge Matrix
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all"
            >
              Contact Me
            </motion.button>
          </Link>

          <Link href="/KananShah_Resume_SDE.pdf" target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all"
            >
              View My Resume
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
