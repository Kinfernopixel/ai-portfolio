'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for navigation

export default function Contact() {
  const [message, setMessage] = useState('');
  const [emailDraft, setEmailDraft] = useState('');

  const handleSendMessage = () => {
    if (message.includes('collaborate')) {
      setEmailDraft(`Subject: Collaboration Request\n\nHello, I would love to collaborate with you on a project!`);
    } else {
      setEmailDraft('Subject: Inquiry\n\nHello, I have a question regarding your work.');
    }
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Message the System</h2>

      {/* Chat Input */}
      <div className="flex flex-col items-center mb-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          placeholder="Type your message here..."
          className="w-80 p-4 mb-4 text-black rounded-lg"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg text-white"
          onClick={handleSendMessage}
        >
          Send Message
        </motion.button>
      </div>

      {/* Generated Email */}
      {emailDraft && (
        <div className="text-center bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold">Generated Email Draft:</h3>
          <pre className="mt-4 whitespace-pre-wrap">{emailDraft}</pre>
        </div>
      )}

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
