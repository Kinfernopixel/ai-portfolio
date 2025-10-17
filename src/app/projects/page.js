'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    { name: 'AI Chatbot', description: 'A conversational AI chatbot built with GPT-3.' },
    { name: 'Neural Network Visualizer', description: 'A web app that visualizes neural networks.' },
    { name: 'Recommendation Engine', description: 'A personalized recommendation system using machine learning.' },
    // Add more projects here...
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

      {/* Project Circles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.15 }}
            className="relative w-48 h-48 flex flex-col items-center justify-center text-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_45px_rgba(20,184,166,0.8)] transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-100 px-3">{project.description}</p>
          </motion.div>
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
