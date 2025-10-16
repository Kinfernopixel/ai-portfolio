'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { name: 'AI Chatbot', description: 'A conversational AI chatbot built with GPT-3.' },
    { name: 'Neural Network Visualizer', description: 'A web app that visualizes neural networks.' },
    { name: 'Recommendation Engine', description: 'A personalized recommendation system using machine learning.' },
    // Add more projects here...
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-16">
      <h2 className="text-3xl font-semibold mb-8">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-40 h-40 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xl font-bold text-center">
              <div className="mb-2">{project.name}</div>
              <p className="text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
