'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for navigation

export default function Timeline() {
  const milestones = [
    { year: '2021', title: 'Started Learning AI', description: 'Began my journey into machine learning with online courses and projects.' },
    { year: '2022', title: 'Built AI Chatbot', description: 'Created a conversational chatbot using GPT-3 and integrated it with a website.' },
    { year: '2023', title: 'Worked at SecureAIs', description: 'Joined SecureAIs as an AI Engineer, focused on security and compliance for AI solutions.' },
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
