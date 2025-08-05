import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-40 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Empowering Your Health Journey
        </motion.h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Track, manage, and improve your family’s health with AI-powered insights and real-time monitoring.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-xl text-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-25 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">
          Features Tailored for Families
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard title="AI Health Agent" description="Personalized assistant to monitor vitals and medications." />
          <FeatureCard title="OCR Prescription Upload" description="Easily scan and convert prescriptions into schedules." />
          <FeatureCard title="Family Health Tracker" description="Manage health records of all family members in one place." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg- text-white text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Health, Simplified.</h3>
        <p className="text-lg max-w-xl mx-auto">
          Join thousands of families using our dashboard to take control of their well-being.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition">
          Create Your Profile
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HealthDashboard. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="bg-gray-800 rounded-xl shadow p-6 hover:shadow-md transition border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;
