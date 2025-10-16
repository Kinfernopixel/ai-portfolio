'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for navigation

export default function Skills() {
  const skills = [
    { name: 'Python', description: 'Advanced Python programming for AI and machine learning projects.' },
    { name: 'TensorFlow', description: 'Deep learning framework used for neural network development.' },
    { name: 'JavaScript', description: 'Experience in frontend and backend JavaScript development, including Node.js.' },
    { name: 'React', description: 'Developed dynamic, interactive UIs with React for web applications.' },
    // Add more skills here...
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Knowledge Matrix</h2>
      <div className="grid grid-cols-3 gap-6 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg cursor-pointer transform hover:scale-110"
          >
            <div className="text-center">
              <div className="text-xl font-bold">{skill.name}</div>
              <div className="mt-2 text-sm">{skill.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back to Landing Page Button */}
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg text-white text-lg"
        >
          Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
