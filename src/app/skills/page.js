'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      name: 'Programming',
      items: [
        { name: 'Python', description: 'Advanced scripting and automation for AI and data workflows.' },
        { name: 'JavaScript', description: 'Frontend and backend (Node.js) development with ES6+.' },
        { name: 'Java', description: 'Spring Boot applications for scalable backend systems.' },
        { name: 'SQL', description: 'Database querying, schema design, and optimization.' },
        { name: 'Bash', description: 'Scripting for automation and DevOps pipelines.' },
      ],
    },
    {
      name: 'Data & Machine Learning',
      items: [
        { name: 'TensorFlow', description: 'Deep learning and neural network modeling.' },
        { name: 'Scikit-learn', description: 'Classical ML algorithms for prediction and detection.' },
        { name: 'Pandas & NumPy', description: 'Data cleaning, transformation, and analysis.' },
        { name: 'PySpark', description: 'Large-scale distributed data processing.' },
        { name: 'OpenCV', description: 'Computer vision for image and video analysis.' },
      ],
    },
    {
      name: 'Frameworks',
      items: [
        { name: 'React.js', description: 'Dynamic UI development with reusable components.' },
        { name: 'Next.js', description: 'SSR and routing for modern web apps.' },
        { name: 'Flask', description: 'Lightweight backend API and microservice development.' },
        { name: 'Spring Boot', description: 'Enterprise-grade backend applications in Java.' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { name: 'Azure', description: 'Model deployment and pipeline orchestration in the cloud.' },
        { name: 'Docker', description: 'Containerized environments for reproducible builds.' },
        { name: 'Kubernetes', description: 'Workload orchestration and scaling in production.' },
        { name: 'Git', description: 'Version control and CI/CD pipeline integration.' },
        { name: 'Maven', description: 'Java project management and build automation.' },
      ],
    },
    {
      name: 'Security & Monitoring',
      items: [
        { name: 'OAuth2', description: 'Secure authentication and authorization in APIs.' },
        { name: 'Log Analysis', description: 'Analyzing enterprise logs for compliance and anomalies.' },
        { name: 'Data Privacy Compliance', description: 'Secure handling of user and system data.' },
      ],
    },
    {
      name: 'Practices & Methodologies',
      items: [
        { name: 'Integration Testing', description: 'Automated system validation for reliable releases.' },
        { name: 'API Development', description: 'Designing clean, efficient, secure interfaces.' },
        { name: 'Agile / Scrum', description: 'Collaborative sprint cycles for iterative delivery.' },
        { name: 'Root Cause Analysis', description: 'Diagnosing and resolving complex production issues.' },
        { name: 'Quantitative Data Evaluation', description: 'Statistical model validation and performance checks.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Knowledge Matrix</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {categories.map((category, index) => {
          const isOpen = openCategory === index;
          return (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.5, ease: 'easeInOut' } }}
              className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 shadow-lg cursor-pointer overflow-hidden ${
                isOpen ? 'row-span-2' : ''
              }`}
              onClick={() => setOpenCategory(isOpen ? null : index)}
            >
              <motion.div layout="position" className="text-xl font-bold text-center">
                {category.name}
              </motion.div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 space-y-3"
                  >
                    {category.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        layout
                        className="bg-black/30 p-3 rounded-lg border border-white/20 hover:bg-black/40"
                      >
                        <div className="font-semibold">{skill.name}</div>
                        <div className="text-sm text-gray-200">{skill.description}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-16">
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
