'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for navigation

export default function Timeline() {
  const milestones = [
  { year: '2021', title: 'Started College', description: 'Began my Computer Science degree at California State University.' },
  { year: '2022', title: 'Started Learning AI', description: 'Dived into artificial intelligence through online courses, tutorials, and early experiments.' },
  { year: '2023', title: 'Built Full-Stack Projects', description: 'Developed several web and AI-based projects to strengthen my full-stack development skills.' },
  { year: '2024', title: 'Software Engineering Intern', description: 'Interned at the California Department of Public Health, contributing to software development projects.' },
  { year: '2025', title: 'Joined SecureAIs', description: 'Worked as an AI Engineer focused on AI security, compliance, and automation solutions.' }
    // Add more milestones here...
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">My AI Journey</h2>
      <div className="flex flex-col items-center">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="w-full max-w-lg p-6 mb-6 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-bold">{milestone.year}</div>
              <div className="text-lg font-semibold">{milestone.title}</div>
            </div>
            <p className="text-sm">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Back to Landing Page Button */}
      <div className="flex justify-center mt-12">
        <Link href="/">
            <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white text-lg shadow-md hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all"
            >
            ← Back to Home
            </motion.button>
        </Link>
    </div>

    </div>
  );
}
