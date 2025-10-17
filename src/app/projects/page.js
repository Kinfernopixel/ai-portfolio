'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      name: 'Car Insurance Predictor',
      description: 'Predict car insurance premiums for new drivers using machine learning and a clean web UI.',
      url: 'https://car-insurance-predictor-ks.streamlit.app',
    },
    {
      name: 'Fake News Detector',
      description: 'Paste a news article and get an instant AI-powered prediction of whether it’s real or fake.',
      url: 'https://fake-news-detector-flax.vercel.app',
    },
    {
      name: 'Stock Price Dashboard',
      description:
        'A real-time stock dashboard built with React, Vite, TypeScript, and Chart.js—fetching live data from Alpha Vantage.',
      url: 'https://stock-dashboard-vite.vercel.app',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-14 text-center"
      >
        My Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.12, rotate: 2 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-56 h-56 flex flex-col items-center justify-center text-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_45px_rgba(20,184,166,0.8)] transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 px-4">{project.name}</h3>
            <p className="text-sm text-gray-100 px-4">{project.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white text-lg font-semibold shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_30px_rgba(236,72,153,0.9)] transition-all"
          >
            ← Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
